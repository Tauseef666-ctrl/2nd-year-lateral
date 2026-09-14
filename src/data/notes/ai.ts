import type { ChapterNote } from '../../types';

export const AI_NOTES: ChapterNote[] = [
  {
    moduleId: 'ai-m1',
    title: 'Module 1 · Introduction & Agents',
    sections: [
      {
        h: '1.1 Overview & Historical Perspective',
        items: [
          '**AI** = making machines behave "intelligently": reasoning, learning, perception, language, problem solving.',
          '**Branches**: weak/narrow AI (specific tasks) vs general/strong AI (human-level) vs superintelligence (theoretical).',
          '**History**: Dartmouth 1956 (McCarthy coined term); ELIZA, expert systems (DENDRAL, MYCIN), knowledge revolution 1970-80s; ML boom, deep learning, LLMs today.',
          '**Foundational fields**: search, logic, knowledge representation, planning, learning, natural language, vision, robotics, agents.',
        ],
      },
      {
        h: '1.2 Turing Test & Physical Symbol Systems',
        items: [
          '**Turing Test (1950)**: machine passes if a human interrogator cannot reliably distinguish it from a human in a text conversation; evaluates intelligence behaviourally.',
          'Criticisms: measures imitation not true understanding (Chinese Room — Searle); total vs partial Turing tests; alignment with actual reasoning still debateable.',
          '**Physical Symbol System Hypothesis (Newell & Simon)**: a system of symbols + rules (search space + operators) is **necessary and sufficient** for general intelligent action — the foundation of **symbolic AI**.',
          '**Symbolic AI**: logic/rules/representation; advantages (explainability, composition) vs challenges (knowledge bottleneck, brittleness).',
        ],
      },
      {
        h: '1.3 Scope of Symbolic AI & Intelligent Agents',
        items: [
          '**Agent** = perceives the environment (sensors) and acts upon it (actuators); **agent function** maps percepts to actions, realised as an **agent program**.',
          '**Rational agent**: chooses the action maximising expected performance measure given percepts and knowledge.',
          '**Types by capabilities**: reflex (condition-action), model-based reflex, goal-based, utility-based, and **learning agents** (with performance/learning elements).',
          '**PEAS** description framework: Performance measure, Environment, Actuators, Sensors for a design problem.',
          '**Environments**: fully/partially observable, deterministic/stochastic, episodic/sequential, static/dynamic, discrete/continuous, single/multi-agent.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain the Turing Test and its limitations.',
          'State the Physical Symbol System hypothesis and its role in AI.',
          'Define agent, rational agent and enumerate agent types.',
          'Describe the PEAS framework for a chosen agent (e.g., taxi, robot).',
          'Compare symbolic and sub-symbolic approaches.',
        ],
      },
    ],
  },
  {
    moduleId: 'ai-m2',
    title: 'Module 2 · Heuristic & Randomized Search',
    sections: [
      {
        h: '2.1 Heuristic Search',
        items: [
          '**Search problem**: states, initial, goal test, actions & transition, path cost; tree/graph search.',
          '**Heuristic** h(n) = estimated cost from n to goal — domain knowledge that guides search; admissible = never overestimates.',
          '**Best-first search**: priority-ordered frontier by evaluation function f(n); greedy best-first uses f = h (may be inefficient / incomplete).',
          '**Hill climbing** (steepest ascent): move to best-improving neighbour until a peak — local maxima, plateaus, ridges; remedies: random restarts, sideways moves, simulated annealing.',
          '**Beam search**: keeps k best candidates per level; **Tabu search**: avoids revisiting recent states (tabu list) to escape local optima.',
        ],
      },
      {
        h: '2.2 Randomized Search',
        items: [
          '**Simulated Annealing**: hill climbing with probabilistic downhill moves; temperature schedule controls acceptance (Boltzmann factor); converges to global optimum with slow cooling.',
          '**Genetic Algorithms (GA)**: population, fitness, selection (roulette/tournament), crossover, mutation, elitism; schema/exploration-exploitation trade-off.',
          '**Ant Colony Optimization (ACO)**: agents deposit pheromone on good paths; stigmergy; used for TSP and routing.',
          'Also: particle swarm, firefly — population-based stochastic global optimisers.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain hill climbing and its drawbacks with examples.',
          'Describe simulated annealing and the cooling schedule.',
          'Outline the steps of a genetic algorithm.',
          'What is the role of a heuristic/admissibility in best-first search?',
          'Compare GA and ACO briefly.',
        ],
      },
    ],
  },
  {
    moduleId: 'ai-m3',
    title: 'Module 3 · Optimal Paths, Decomposition & Game Playing',
    sections: [
      {
        h: '3.1 Optimal Path Finding',
        items: [
          '**Branch & Bound**: systematic tree search + pruning of partial paths whose cost already exceeds the best; guarantees optimality.',
          '**A***: f(n) = g(n) + h(n) (path cost + heuristic); with an **admissible + consistent heuristic** A* yields the optimal solution and is optimally efficient.',
          '**IDA*** (iterative-deepening A*): depth-first with increasing f-limit — memory-efficient optimal search for large state spaces.',
          'Compare uniform-cost, greedy and A* by completeness, optimality, time and space.',
        ],
      },
      {
        h: '3.2 Problem Decomposition',
        items: [
          '**Decomposition**: break a problem into independent subproblems solved and combined; **AND–OR graphs** represent decomposable problems (AND edges = subtasks).',
          '**Goal trees** / AO* (AND–OR search): expand best partial solution; AO* handles interleaved subtasks; optimally solves decomposable structures.',
          '**Rule-based systems**: production rules (IF-THEN), working memory + inference (forward/backward chaining), conflict resolution; expert-system shells.',
          '**Rete algorithm**: fast rule matching by maintaining a network of partial matches across cycles — performance for large rule sets.',
        ],
      },
      {
        h: '3.3 Game Playing',
        items: [
          '**Games as search**: two-player, zero-sum, perfect information; game tree with MAX/MIN nodes.',
          '**Minimax**: propagate minimax values from leaves; player picks moves maximising own best result.',
          '**Alpha–beta pruning**: prune branches that cannot affect the root value using α (best MAX) and β (best MIN); with good ordering reduces nodes ~√.',
          '**SSS***: best-first game search combining Alpha–Beta ordering with A* bound analysis; theoretical similarities, no functional boards needed.',
          'Depth-limited minimax + **evaluation functions** for large games (chess); look-ahead and horizon effects.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Find the optimal path using A* with a given heuristic; show open/closed.',
          'Explain AND-OR graphs and the AO* algorithm with an example.',
          'Describe the Rete algorithm and why it speeds rule matching.',
          'Draw a minimax tree and compute root value with alpha–beta pruning.',
          'Compare A* and IDA*; when is IDA* preferred?',
        ],
      },
    ],
  },
  {
    moduleId: 'ai-m4',
    title: 'Module 4 · Planning & Constraint Satisfaction',
    sections: [
      {
        h: '4.1 Representation & Classical Planning',
        items: [
          '**Planning** = generating a course of actions to achieve a goal; **STRIPS** operators (preconditions, add/list delete lists); states as conjunctions of literals.',
          '**Planning domains**: planning problems = initial state, goal, action set (PDDL language — :action, :precondition, :effect).',
          '**Forward (progression) search**: from initial applying applicable actions toward the goal — large branching; **backward (regression) search**: from goal to initial (goal-directed), reverse of action application — typically smaller.',
          '**Goal stack planning**: push goals, pop to act when satisfied — stack-based (STRIPS-style) classic approach.',
        ],
      },
      {
        h: '4.2 Plan Space & Graphplan',
        items: [
          '**Plan-space planning**: search in the space of partial plans; **POP** — adopt goals, minimal commitment, ordering constraints, causal links; sound & complete.',
          '**Graphplan**: build a **planning graph** alternating proposition (state) and action levels with **mutex (mutual exclusion)** links; extract a valid plan backward; layered, polynomial construction.',
          'Represent constraints: causality, threat detection, promotion/demotion of ordering; Sussman anomaly as classic example where linear planning fails.',
        ],
      },
      {
        h: '4.3 Constraint Satisfaction & Propagation',
        items: [
          '**Constraint Satisfaction Problem (CSP)** = variables, domains, constraints; solve by backtracking search (MRV/LCV heuristics).',
          '**Constraint propagation**: **arc consistency (AC-3)** narrows domains by removing values violating binary constraints; node consistency; k-consistency.',
          '**Forward checking**: after assigning a variable, prune neighbours’ domains; backtrack when domains empty.',
          'Examples: map colouring, N-Queens, Sudoku, scheduling, assignment problems; CSP as informed search over assignments.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Represent a planning problem in STRIPS/PDDL.',
          'Explain forward vs backward search with blocks-world example.',
          'Describe the planning-graph mutex idea of Graphplan.',
          'Solve a 4-Queens CSP with backtracking + forward checking.',
          'What does arc consistency ensure and how does AC-3 achieve it?',
        ],
      },
    ],
  },
  {
    moduleId: 'ai-m5',
    title: 'Module 5 · Logic & Inference',
    sections: [
      {
        h: '5.1 Propositional & First-Order Logic',
        items: [
          '**Propositional logic**: atoms = propositions; connectives (¬, ∧, ∨, →, ↔); truth tables, validity, entailment; **syntax + semantics**; determines logical equivalences (De Morgan, implication → disjunction).',
          '**First-Order Logic (FOL)**: adds objects, functions, predicates, **quantifiers** (∀, ∃), variables; richer knowledge representation ("Everyone who studies passes": ∀x Studies(x)→Passes(x)).',
          '**Unification & substitution** make inference practical: unify two literals with a most-general unifier.',
          '**Knowledge base**: sentences; entailment KB ⊨ α iff α true in all models of KB.',
        ],
      },
      {
        h: '5.2 Soundness, Completeness & Chaining',
        items: [
          '**Soundness**: inference rule derives only entailed sentences; **completeness**: every entailed sentence is derivable.',
          '**Resolution** = sound & refutation-complete inference: convert to CNF, resolve complementary literals, derive empty clause (contradiction).',
          '**Forward chaining**: data-driven — fire rules whose premises hold, add conclusions; good for goal monitoring/plan monitoring; may be inefficient.',
          '**Backward chaining**: goal-driven — prove the goal recursively from conclusions to facts; efficient for single goals (Prolog).',
          'FOL with quantifier elimination (Skolemization) + resolution yields a sound & complete procedure for FOL (semidecidable).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Convert FOL sentences to CNF and use resolution to prove a theorem.',
          'Explain forward vs backward chaining with a small rule set.',
          'Define soundness, completeness and refutation completeness.',
          'Translate English statements into FOL (∀/∃, predicates).',
          'Prove the soundness of modus ponens semantically.',
        ],
      },
    ],
  },
];