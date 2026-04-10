# Dexlab

**Dexlab** is a modular AI-powered design framework created by a Brazilian Designer [@leo]([https://url-completa.com](https://www.linkedin.com/in/leonardoferreiradesign/)) that covers the full product design lifecycle: from research and strategy through delivery and systems. Every skill in Dexlab is opinionated, grounded in real design practice, and built to reject generic output. Design is decision-making. Every decision here is traceable.

---

## Modules

| Module | Description | Skills | Commands |
|--------|-------------|--------|----------|
| [Design Operation](./design-operation) | Streamline operations: critique frameworks, handoff specs, sprint planning, and team workflows. | 5 | 4 |
| [Design Audit](./design-audit) | Validate designs: prototyping strategies, usability testing, heuristic evaluation, and A/B experiments. | 6 | 4 |
| [Product Thinking](./product-thinking) | Define product strategy, frame problems, construct PRDs, and align teams on what matters. | 6 | 3 |
| [UX Research](./ux-research) | User research: synthetic personas, empathy maps, journey maps, interviews, and JTBD. | 6 | 3 |
| [UX Writing](./ux-writing) | Define experience copy and best practices to convert and connect. | 5 | 3 |
| [Interaction Design](./interaction-design) | Design meaningful interactions: state machines, animations, gestures, errors, and feedback. | 5 | 3 |
| [Design Systems](./design-systems) | Build and maintain design systems: tokens, components, and naming conventions. | 3 | 3 |
| [UI Design](./ui-design) | Craft polished interfaces: color, typography, hierarchy, responsive design, and wireframing. | 7 | 4 |

---

## Skills Reference

### Design Operation
| Skill | Description |
|-------|-------------|
| `ops_design-critique` | Conduzir críticas de design estruturadas, com frameworks de feedback claros e resultados acionáveis. |
| `ops_design-handoff` | Criar especificações de handoff com medidas, comportamentos, assets e casos de borda. |
| `ops_sprint-plan` | Planejar e facilitar design sprints, do enquadramento do desafio até o teste de protótipos. |
| `ops_design-review` | Estabelecer etapas de revisão com critérios, checklists e fluxos de aprovação. |
| `ops_QA` | Criar checklists de QA para verificar fidelidade da implementação ao design. |

### Design Audit
| Skill | Description |
|-------|-------------|
| `audit_prototype-strategy` | Choose the right prototyping fidelity and method for the design question. |
| `audit_usability-test` | Write usability test scenarios with tasks, success criteria, and observation guides. |
| `audit_heuristic-evaluation` | Conduct expert heuristic evaluations using Nielsen's heuristics. |
| `audit_ab-test` | Design rigorous A/B tests with hypotheses, variants, metrics, and sample size calculations. |
| `audit_design-flow` | Create user flow diagrams showing paths, decisions, and branch logic. |
| `audit_accessibility-test` | Create accessibility testing plans covering WCAG 2.2 and assistive technologies. |

### Product Thinking
| Skill | Description |
|-------|-------------|
| `product_benchmark` | Competitive analysis focused on experience patterns, not feature matrices. |
| `product_brief` | Write a design brief with problem statement, constraints, and guiding principles. |
| `product_north-star` | Define a North Star metric and input metric tree that aligns the team. |
| `product_opportunity` | Frame and prioritize design opportunities from research findings. |
| `product_prd` | Write a PRD with testable user stories, acceptance criteria, and measurable outcomes. |
| `product_principles` | Define opinionated design principles that guide decisions and prevent scope creep. |

### UX Research
| Skill | Description |
|-------|-------------|
| `uxr_synthetic_persona` | Create behavioral personas from research data: not demographics. |
| `uxr_empathy-map` | Build a 4-quadrant empathy map (Says, Thinks, Does, Feels) from research evidence. |
| `uxr_journey-map` | Create an end-to-end journey map with stages, emotions, pain points, and opportunities. |
| `uxr_interview-script` | Create a structured user interview script with warm-up, exploration, and wrap-up. |
| `uxr_usability-plan` | Design a usability test plan with tasks, success metrics, and facilitation guide. |
| `uxr_jtbd` | Map user Jobs-to-Be-Done with functional, emotional, and social dimensions. |

### UX Writing
| Skill | Description |
|-------|-------------|
| `uxw_clarify` | Audit and rewrite interface copy for clarity, consistency, and tone. |
| `uxw_microcopy` | Write labels, tooltips, confirmations, and decision-point copy. |
| `uxw_error-copy` | Write error messages that help users recover: specific, empathetic, actionable. |
| `uxw_empty-states` | Design empty states that onboard and motivate, not just acknowledge nothing is there. |
| `uxw_tone-voice` | Define a product's voice and how its tone shifts across different moments. |

### Interaction Design
| Skill | Description |
|-------|-------------|
| `id_interaction-spec` | Specify micro-interactions with trigger, rules, feedback, and loop/mode definitions. |
| `id_animation-principles` | Apply animation principles to UI motion for purposeful, polished interactions. |
| `id_feedback-patterns` | Design system feedback across every interaction type and timing range. |
| `id_gesture-patterns` | Design gesture interactions that feel natural for touch-first surfaces. |
| `id_error-control` | Design comprehensive error handling: every failure mode has a state and recovery path. |

### Design Systems
| Skill | Description |
|-------|-------------|
| `ds_designtokens` | Define and organize design tokens with naming conventions and usage guidance. |
| `ds_component-spec` | Write detailed component specifications including props, states, variants, and accessibility. |
| `ds_naming-convention` | Define naming conventions for components, tokens, and variants. |

### UI Design
| Skill | Description |
|-------|-------------|
| `ui_color-system-creator` | Build a comprehensive color system with OKLCH palette and accessibility compliance. |
| `ui_typeset` | Create a modular typography scale with size, weight, and line-height relationships. |
| `ui_responsive-design` | Design adaptive layouts across all screen sizes and input methods. |
| `ui_visual-hierarchy` | Establish clear visual hierarchy through size, weight, color, spacing, and position. |
| `ui_illustration-style` | Define an illustration style guide with visual language and usage rules. |
| `ui_cloner` | Analyze a reference UI image and replicate its design system for new screens. |
| `ui_wireframer-creator` | Ask targeted questions and produce a structured wireframe with real content. |

---

## Commands Reference

| Command | Module | Description |
|---------|--------|-------------|
| `/run-critique` | Design Operation | Run a structured critique with scoring and prioritized action plan. |
| `/ship-handoff` | Design Operation | Prepare a complete handoff package: specs, assets, and QA checklist. |
| `/plan-sprint` | Design Operation | Plan a design sprint from challenge definition to Day 5 test logistics. |
| `/setup-review` | Design Operation | Set up a structured design review process with criteria and approval flows. |
| `/full-audit` | Design Audit | Run a full audit: heuristics, accessibility, and flow validation in one pass. |
| `/run-experiment` | Design Audit | Design a complete A/B experiment from hypothesis to result interpretation. |
| `/map-flow` | Design Audit | Create a complete user flow with all paths and decide what to prototype. |
| `/usability-test` | Design Audit | Plan and run a usability test from task writing to findings report. |
| `/frame-problem` | Product Thinking | Frame a design problem with JTBD, benchmark, and opportunity definition. |
| `/write-prd` | Product Thinking | Write a complete PRD with user stories, acceptance criteria, and metrics. |
| `/set-north-star` | Product Thinking | Define a North Star metric and input metric tree that aligns the team. |
| `/discover` | UX Research | Run a discovery cycle: persona, empathy map, and JTBD in one pass. |
| `/build-persona` | UX Research | Build a behavioral persona from research data, not demographics. |
| `/map-journey` | UX Research | Create a complete journey map with stages, emotions, and opportunities. |
| `/write-copy` | UX Writing | Write interface copy for a screen or flow with clarity and tone consistency. |
| `/audit-copy` | UX Writing | Audit all copy on a screen against tone and clarity standards. |
| `/define-tone` | UX Writing | Define the product's voice and tone guidelines. |
| `/design-interaction` | Interaction Design | Design a complete interaction with states, feedback, and edge cases. |
| `/map-states` | Interaction Design | Map all states for a component or flow with a finite state machine. |
| `/design-gesture` | Interaction Design | Design gesture interactions that feel natural for touch-first surfaces. |
| `/create-component` | Design Systems | Specify a complete component with variants, states, tokens, and accessibility. |
| `/tokenize` | Design Systems | Define design tokens for color, spacing, and typography. |
| `/audit-system` | Design Systems | Audit a design system for naming inconsistencies and hardcoded values. |
| `/design-screen` | UI Design | Design a complete screen with hierarchy, color, and responsive behavior. |
| `/build-visual-system` | UI Design | Build a visual system: color, type, spacing, and illustration style. |
| `/clone-ui` | UI Design | Analyze a reference UI and replicate its design system for new screens. |
| `/wireframe` | UI Design | Produce a structured wireframe with real content and layout decisions. |

---

## Core

The `core/` directory contains the master `/dexlab` skill: the Context Protocol and design philosophy that all other skills reference. Every skill in every module invokes `/dexlab` before proceeding.

The `core/.claude/skills/dexlab/reference/` directory contains deep reference materials consulted by skills during execution: typography, color system, spatial design, interaction patterns, research methods, and design ops.

---

## Philosophy

**Design is decision-making, not decoration.** Every output in Dexlab is traceable to a user need, a business constraint, or a design principle. Nothing is added because it looks nice.

**Context drives everything.** Generic output is the failure mode of AI-assisted design. Every skill in Dexlab starts by confirming context: who the user is, what they're trying to accomplish, and what the product should feel like. Without context, the skill stops and asks.

**Reject template thinking.** A persona built from demographics is a fiction. A journey map without emotional arcs is a process diagram. A design system without naming conventions is a collection. Every skill in Dexlab enforces the quality bar.

**Quality compounds.** Each phase produces better inputs for the next. Research informs framing. Framing informs design. Design is tested. Testing informs iteration. The framework is designed to be used in sequence: and to be used again.

---

## Author

Built in 🇧🇷 by Leo.
Open to contributions: feel free to explore, improve, and build with DexLab.

---

*Dexlab is a Dexlab project. GNU AFFERO GENERAL PUBLIC LICENSE.*
