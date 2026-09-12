import type { ChapterNote } from '../../types';

export const SE_NOTES: ChapterNote[] = [
  {
    moduleId: 'se-m1',
    title: 'Module 1 · Introduction to Software Engineering',
    sections: [
      {
        h: '1.1 Software & Software Engineering',
        items: [
          '**Software** = programs + documentation + operating procedures (not just code).',
          '**Software engineering** — systematic, disciplined, quantifiable approach to develop, operate and maintain software.',
          '**Challenges / crisis**: cost overruns, schedule slips, quality issues (“software crisis”), complexity growth.',
          '**Cost**: 60–70% spent on **maintenance**; requirements errors are the most expensive if fixed late.',
          '**Software process** — framework of activities: **communication, planning, modelling (analysis+design), construction (coding+testing), deployment**.',
        ],
      },
      {
        h: '1.2 Process Models Overview',
        items: [
          '**Waterfall** — sequential phases (requirements→design→implementation→testing→maintenance); works for well-understood, stable requirements.',
          '**Incremental / Iterative** — build in increments, deliver part each cycle.',
          '**Evolutionary prototypes** — model requirement by building prototypes.',
          '**Spiral** — risk-driven; combines prototyping + waterfall with risk analysis each loop.',
          '**Agile** — iterative, customer-collaborative, adaptive (Scrum, XP, Kanban).',
          '**Unified Process (RUP)** — use-case driven, iterative framework with 4 phases (inception, elaboration, construction, transition).',
        ],
      },
      {
        h: '1.3 Software Characteristics',
        items: [
          'Properties: maintainability, dependability & security, efficiency, usability.',
          '**Generic vs custom software**; **legacy software** evolution.',
          '**Software quality attributes**: correctness, reliability, usability, efficiency, maintainability, portability.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define software engineering; list reasons for the software crisis.',
          'Draw the waterfall model and list its disadvantages (late feedback, rigid).',
          'Compare waterfall, incremental and agile in a table.',
          'What makes software different from hardware (maturity, failure modes, evolution)?',
        ],
      },
    ],
  },
  {
    moduleId: 'se-m2',
    title: 'Module 2 · Software Life Cycle Models',
    sections: [
      {
        h: '2.1 Life-Cycle Phases',
        items: [
          '**Life cycle** = sequence of phases: feasibility → requirements → design → coding → testing → deployment → maintenance.',
          'Each model decides the ordering and overlap of phases; choice depends on project risk, requirement clarity, team size.',
          '**Linear sequential (waterfall)** — rigid, feedback only via rework loops.',
          '**V-model** — verification on the left, validation on the right; testing planned in parallel with development phases.',
        ],
      },
      {
        h: '2.2 Iterative & Risk-Driven Models',
        items: [
          '**Iterative model** — repeated cycles (requirements→…→build) each delivering a working version.',
          '**Spiral** — 4 quadrants: objective/constraints → alternatives (risk analysis) → engineering → evaluation; radius = cost; used for large high-risk projects.',
          '**Prototyping** — quick mock-ups to refine requirements; pros (early feedback) vs cons (throwaway cost, user impatience).',
          '**Concurrent model** — states (under development, awaiting changes) associated with every component — used in client/server.',
        ],
      },
      {
        h: '2.3 Agile & Modern',
        items: [
          '**Agile principles**: individuals & interactions over processes, working software over documentation, customer collaboration, responding to change.',
          '**Scrum**: sprints (2–4 weeks), product backlog, sprint backlog, daily standup, scrum master, product owner.',
          '**XP**: small releases, pair programming, continuous integration, refactoring, test-first.',
          '**Kanban**: continuous flow, work-in-progress limits.',
          'Choosing: Agile for changing requirements & small teams; waterfall for fixed, regulated, contract projects.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Draw and explain the spiral model (4 quadrants) — classic 8-marker.',
          'Compare waterfall vs spiral vs agile with suitability.',
          'Explain Scrum roles and sprint cycle.',
          'What is the V-model and how does it link testing to design?',
        ],
      },
    ],
  },
  {
    moduleId: 'se-m3',
    title: 'Module 3 · Planning & Requirement Analysis',
    sections: [
      {
        h: '3.1 Requirements Engineering',
        items: [
          '**Requirement** = a statement of what the system must do (functional) or constraints/quality (non-functional).',
          '**Requirement engineering steps**: elicitation → analysis & negotiation → specification → validation → management (change control).',
          '**Sources / techniques**: interviews, surveys, observation, agile user stories, use cases, domain analysis, prototyping.',
          '**SRS (Software Requirements Specification)** — complete, consistent, testable document; IEEE 830 structure.',
          '**Functional vs non-functional**: performance, security, usability, reliability, portability vs “the system shall…”.',
        ],
      },
      {
        h: '3.2 Project Planning',
        items: [
          '**Scope**: features, boundaries; **estimation**: LOC, function points, effort (person-months).',
          '**Effort models**: COCOMO — organic, semidetached, embedded; E = a·(LOC)^b.',
          '**Scheduling**: Gantt charts, PERT/CPM networks, critical path — predecessors and milestones.',
          '**Risk management**: identification, analysis, prioritisation, mitigation, monitoring.',
          '**Team & plan**: WBS (work breakdown structure), milestones, resource allocation.',
        ],
      },
      {
        h: '3.3 Verification of Requirements',
        items: [
          'Are requirements **correct, complete, consistent, unambiguous, verifiable, traceable**?',
          '**Use cases**: actor, goals, main & alternate flows, pre/post-conditions.',
          'Change happens — **traceability matrix** and baseline control.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Distinguish functional and non-functional requirements with 5 examples each.',
          'Explain SRS and its contents; why validation matters.',
          'COCOMO small numerical: effort for given KLOC in a mode.',
          'Draw a Gantt/PERT example and highlight the critical path.',
        ],
      },
    ],
  },
  {
    moduleId: 'se-m4',
    title: 'Module 4 · Software Design & Implementation',
    sections: [
      {
        h: '4.1 Design Concepts',
        items: [
          '**Design** = blueprint that maps requirements to a solution (data, architecture, interfaces, components).',
          '**Abstraction & refinement** — levels of detail; **modularity** — divide into independent modules; **information hiding** (encapsulation).',
          '**Coupling** — interaction between modules (want **low**: data best, control/tramp/stamp moderate, content = worst).',
          '**Cohesion** — relatedness within a module (want **high**: functional best, then sequential/communicational…coincidental = worst).',
          '**Design principles**: SOLID — single responsibility, open/closed, Liskov substitution, interface segregation, dependency inversion.',
        ],
      },
      {
        h: '4.2 Architectural Styles',
        items: [
          '**Data-centered** (repository), **data-flow** (pipe & filter), **layered**, **client–server**, **MVC (Model-View-Controller)**, microservices.',
          '**Object-oriented design**: classes, objects, inheritance, polymorphism, composition; UML diagrams (class, sequence, use-case).',
          '**Design patterns**: creational (Factory, Singleton), structural (Adapter), behavioural (Observer, Strategy).',
        ],
      },
      {
        h: '4.3 Implementation',
        items: [
          'Coding standards, code review, refactoring, continuous integration.',
          'Mapping design → code: class to module, interface to API.',
          'Documentation of code and interfaces for maintainability.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define coupling and cohesion; arrange them from best to worst with examples.',
          'Compare layered vs client–server architecture.',
          'Explain MVC and draw its data flow.',
          'Short notes on information hiding and modularity.',
        ],
      },
    ],
  },
  {
    moduleId: 'se-m5',
    title: 'Module 5 · Software Testing & Maintenance',
    sections: [
      {
        h: '5.1 Testing Fundamentals',
        items: [
          '**Testing** = executing software to find defects; can show presence of bugs, not absence.',
          '**Levels**: unit (module), integration (pair modules), system (whole product), acceptance (user).',
          '**White-box** — tests internal logic (statement, branch/decision, path, condition coverage); **Black-box** — tests behaviour (equivalence partitioning, boundary value, decision table, state transition).',
          '**Test case** = input + expected output; **defect lifecycle**; pass/fail criteria.',
        ],
      },
      {
        h: '5.2 Strategies & Techniques',
        items: [
          '**Top-down vs bottom-up integration**; drivers/stubs; **sandwich (hybrid)**.',
          '**Regression testing** — re-run after changes; **smoke testing** — basic checks.',
          '**Non-functional testing**: performance, load/stress, security, usability.',
          '**Alpha vs beta testing**; UAT (user acceptance).',
          'Coverage metrics: statement, branch, path %.',
        ],
      },
      {
        h: '5.3 Maintenance',
        items: [
          '**Maintenance = evolution**: happens for 60%+ of cost; types: **corrective** (fix bugs), **adaptive** (environment), **perfective** (improve), **preventive** (prevent defects).',
          '**Legacy system**; reverse engineering vs re-engineering; refactoring; regression impact.',
          'Standard IEEE 830 / ISO 9126 quality attributes relate to test targets.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare white-box vs black-box with techniques for each.',
          'Design black-box test cases using equivalence partitioning for a given input domain.',
          'Explain alpha/beta testing and regression testing.',
          'List the four types of maintenance with examples — very common short question.',
        ],
      },
    ],
  },
];