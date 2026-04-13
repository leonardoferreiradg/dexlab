#!/usr/bin/env node

'use strict';

const { add } = require('../lib/add');

const args = process.argv.slice(2);

const flags = {
  global: args.includes('--global') || args.includes('-g'),
  help: args.includes('--help') || args.includes('-h'),
};

const positional = args.filter(a => !a.startsWith('-'));
const command = positional[0];
const rest = positional.slice(1);

if (!command || command === 'help' || flags.help) {
  printHelp();
  process.exit(0);
}

if (command === 'add') {
  const repo = rest[0];
  if (!repo) {
    console.error('Error: missing repository argument.\n');
    console.error('Usage: skills add <owner/repo> [--global]');
    process.exit(1);
  }
  add(repo, { global: flags.global }).catch(err => {
    console.error('\nError:', err.message);
    process.exit(1);
  });
} else {
  console.error(`Unknown command: "${command}"\n`);
  printHelp();
  process.exit(1);
}

function printHelp() {
  console.log(`
  Dexlab Skills CLI

  Usage:
    npx dexlab-skills add <owner/repo>           Install skills locally (.claude/skills/)
    npx dexlab-skills add <owner/repo> --global  Install skills globally (~/.claude/skills/)

  Options:
    --global, -g   Install for all projects
    --help,   -h   Show this help message

  Examples:
    npx dexlab-skills add leonardoferreiradg/dexlab
    npx dexlab-skills add leonardoferreiradg/dexlab --global
`);
}
