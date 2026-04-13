'use strict';

const https = require('https');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

/**
 * Install skills from a GitHub repository.
 * Clones the full repo to preserve relative path references (e.g. .design/).
 *
 * @param {string} repoArg  - "owner/repo" string
 * @param {{ global: boolean }} options
 */
async function add(repoArg, options = {}) {
  const parts = repoArg.split('/');
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    throw new Error(`Invalid repository: "${repoArg}". Expected format: owner/repo`);
  }

  const [owner, repo] = parts;
  const label = `${owner}/${repo}`;

  const installBase = options.global
    ? path.join(os.homedir(), '.claude', 'skills')
    : path.join(process.cwd(), '.claude', 'skills');

  const installDir = path.join(installBase, owner, repo);

  console.log(`\nInstalling skills from ${label}...`);

  // Download repo to a temp directory
  const tmpDir = await downloadRepo(owner, repo);

  // Discover skills
  const skills = findSkills(tmpDir);

  if (skills.length === 0) {
    cleanup(tmpDir);
    throw new Error(`No SKILL.md files found in ${label}. Is this a valid skills repository?`);
  }

  // If target already exists, remove it so we get a clean install
  if (fs.existsSync(installDir)) {
    fs.rmSync(installDir, { recursive: true, force: true });
  }

  // Copy full repo structure (preserves .design/ and all relative references)
  copyDir(tmpDir, installDir, ['.git']);
  cleanup(tmpDir);

  const scope = options.global ? 'global' : 'local';
  const count = skills.length;

  console.log(`\n  ${count} skill${count !== 1 ? 's' : ''} installed (${scope})`);
  console.log(`  Location: ${installDir}\n`);
  console.log('  Available skills:');
  skills.forEach(s => console.log(`    /${s.name}`));

  if (!options.global) {
    console.log('\n  Tip: use --global to install for all your Claude projects.');
  }

  console.log('');
}

// ---------------------------------------------------------------------------
// Download helpers
// ---------------------------------------------------------------------------

/**
 * Download repo from GitHub. Tries git clone first; falls back to tarball.
 */
async function downloadRepo(owner, repo, branch = 'main') {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), `${repo}-`));

  // 1. Try git clone (fast, no auth needed for public repos)
  try {
    const url = `https://github.com/${owner}/${repo}.git`;
    execSync(`git clone --depth=1 --quiet "${url}" "${tmpDir}"`, { stdio: 'pipe' });
    return tmpDir;
  } catch {
    // fall through to tarball
  }

  // 2. Fallback: GitHub tarball API
  console.log('  (git not available, downloading tarball...)');
  const tarPath = path.join(os.tmpdir(), `${repo}-${Date.now()}.tar.gz`);
  const tarUrl = `https://api.github.com/repos/${owner}/${repo}/tarball/${branch}`;

  await download(tarUrl, tarPath);

  try {
    execSync(`tar -xzf "${tarPath}" -C "${tmpDir}" --strip-components=1`, { stdio: 'pipe' });
  } finally {
    try { fs.unlinkSync(tarPath); } catch {}
  }

  return tmpDir;
}

/** Follow redirects and write response to a file. */
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'dexlab-skills-cli/1.0',
        'Accept': 'application/vnd.github+json',
      },
    };

    https.get(url, options, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`GitHub returned HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    }).on('error', reject);
  });
}

// ---------------------------------------------------------------------------
// Skill discovery
// ---------------------------------------------------------------------------

/**
 * Walk a directory and return all SKILL.md files with parsed frontmatter.
 * @returns {{ name: string, file: string }[]}
 */
function findSkills(dir) {
  const results = [];
  walk(dir, results, dir);
  return results;
}

function walk(baseDir, results, currentDir) {
  let entries;
  try {
    entries = fs.readdirSync(currentDir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;

    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      walk(baseDir, results, fullPath);
    } else if (entry.name === 'SKILL.md') {
      const name = extractName(fullPath) || path.basename(path.dirname(fullPath));
      results.push({ name, file: path.relative(baseDir, fullPath) });
    }
  }
}

function extractName(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^name:\s+(.+)$/m);
    return match ? match[1].trim() : null;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// File system helpers
// ---------------------------------------------------------------------------

function copyDir(src, dest, exclude = []) {
  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (exclude.includes(entry.name)) continue;

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath, exclude);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function cleanup(dir) {
  try { fs.rmSync(dir, { recursive: true, force: true }); } catch {}
}

module.exports = { add };
