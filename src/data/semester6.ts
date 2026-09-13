import type { Subject } from '../types';
import { r } from './yt';

export const SEMESTER_6_SUBJECTS: Subject[] = [
  {
    id: 'ai',
    code: '6.1(a)',
    name: 'Artificial Intelligence',
    shortName: 'AI',
    semester: 6,
    category: 'elective',
    credits: 4,
    periods: '4L',
    description:
      'A first course in Artificial Intelligence — history, agents, heuristic and randomized search, optimal path finding, game playing, planning, constraint satisfaction and logic-based inference.',
    whyMatters:
      'AI powers search, recommendation engines, games and automation. The searching and logic techniques here also reinforce your DSA and web knowledge for the in-house project.',
    difficulty: 'intermediate',
    examImportance: 'critical',
    learningOrder: [
      'Module 1 — Introduction & Agents',
      'Module 2 — Heuristic & Randomized Search',
      'Module 3 — Optimal Paths, Decomposition & Game Playing',
      'Module 4 — Planning & Constraint Satisfaction',
      'Module 5 — Logic & Inference',
    ],
    totalPeriods: 42,
    objectives: [
      'Identify problems where artificial intelligence techniques are applicable.',
      'Apply basic AI techniques and judge the applicability of more advanced ones.',
      'Participate in the design of systems that act intelligently and learn from experience.',
    ],
    outcomes: [
      'Understand the basic concepts of Artificial Intelligence.',
      'Describe different AI searching algorithms.',
      'Apply various optimization techniques to real-world problems.',
      'Implement autonomous planning under constraints in simulated or real environments.',
      'Apply different AI logics to solve various problems.',
    ],
    modules: [
      {
        id: 'ai-m1',
        title: 'Module 1 · Introduction & Agents',
        topics: [
          {
            id: 'ai-1-1',
            title: 'Overview & Historical Perspective',
            description:
              'What AI means, its history from the 1950s to modern machine learning, and the major branches that make up the field.',
            subtopics: [
              'Definition and goals of AI',
              'History: Turing, Dartmouth workshop, AI winters and summers',
              'Branches: symbolic AI, ML, NLP, robotics, vision',
            ],
            periods: 3,
            marks: 8,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'playlist',
                title: 'Artificial Intelligence Full Course',
                channel: 'Gate Smashers',
                query: 'artificial intelligence full course in hindi Gate Smashers playlist',
                why: 'Chapter playlist for Introduction to AI',
                language: 'hindi',
              }),
              r({
                kind: 'deep',
                title: 'What is Artificial Intelligence? History and branches',
                query: 'introduction to artificial intelligence history in hindi',
                fallback: 'ai kya hai full introduction in hindi',
                why: 'History and perspective of AI explained in Hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Why did AI research go through "winters"?', hint: 'Think funding, over-promising and computing limits.' },
              { question: 'State three real-life applications of AI.', hint: 'Search engines, voice assistants, recommendation systems.' },
            ],
          },
          {
            id: 'ai-1-2',
            title: 'Turing Test & Physical Symbol Systems',
            description:
              'The Turing test as a behavioural measure of intelligence, and the Physical Symbol System hypothesis that underlies symbolic AI.',
            subtopics: [
              'Turing test: imitation game, capabilities tested',
              'Limitations and critiques of the Turing test',
              'Physical Symbol Systems and the Chinese room argument',
            ],
            periods: 2,
            marks: 6,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Turing test explained',
                query: 'turing test in artificial intelligence hindi',
                fallback: 'turing test kya hai',
                why: 'Core concept for the exam',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'Turing test quick revision',
                query: 'turing test short notes revision ai',
                why: 'One-shot revision before the exam',
              }),
            ],
            practice: [
              { question: 'What capabilities does a machine need to pass the Turing test?', hint: 'Natural language, knowledge, reasoning, learning.' },
              { question: 'What is the Chinese room argument against the Turing test?', hint: 'Syntax vs semantics — simulated understanding.' },
            ],
          },
          {
            id: 'ai-1-3',
            title: 'Scope of Symbolic AI & Intelligent Agents',
            description:
              'What symbolic AI can and cannot do, rational agents, agent architectures and the PEAS framework.',
            subtopics: [
              'Symbolic vs sub-symbolic AI',
              'Agent definition and rationality',
              'Agent types: reactive, model-based, goal-based, utility-based, learning',
              'PEAS — Performance, Environment, Actuators, Sensors',
            ],
            periods: 3,
            marks: 6,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Intelligent agents and PEAS',
                query: 'intelligent agents in artificial intelligence PEAS hindi',
                fallback: 'agents in ai in hindi',
                why: 'Agents is a repeated exam topic',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'Types of agents in 5 minutes',
                query: 'types of agents in ai in hindi',
                why: 'Quick memorisation of agent types',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Define a rational agent.', hint: 'Acts to maximise the performance measure given its percept history.' },
              { question: 'Describe PEAS for a self-driving car.', hint: 'Performance = safe travel; Environment = roads; Actuators = steering; Sensors = cameras.' },
            ],
          },
        ],
      },
      {
        id: 'ai-m2',
        title: 'Module 2 · Heuristic & Randomized Search',
        topics: [
          {
            id: 'ai-2-1',
            title: 'Heuristic Search: Best-First, Hill Climbing, Beam, Tabu',
            description:
              'Search that uses heuristic estimates to guide exploration — greedy best-first, local hill climbing with its variants, beam search and tabu search.',
            subtopics: [
              'Heuristic and evaluation function',
              'Greedy Best-First Search',
              'Hill climbing: simple, steepest-ascent, stochastic; plateau, ridge and shoulder problems',
              'Beam search with beam width, and Tabu search with a tabu list',
            ],
            periods: 4,
            marks: 10,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'Heuristic Search Algorithms',
                channel: 'Gate Smashers',
                query: 'heuristic search best first search hill climbing in hindi Gate Smashers',
                why: 'Step-by-step heuristic search coverage',
                language: 'hindi',
              }),
              r({
                kind: 'deep',
                title: 'Hill climbing and beam search with examples',
                query: 'hill climbing algorithm beam search tabu search hindi',
                fallback: 'hill climbing local search problem ai',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Why does hill climbing fail on a plateau?', hint: 'All moves give equal or no improvement, so the search gets stuck.' },
              { question: 'What does the tabu list prevent in Tabu search?', hint: 'Revisiting recently explored solutions so the search does not cycle.' },
            ],
          },
          {
            id: 'ai-2-2',
            title: 'Randomized Search: Simulated Annealing, Genetic, Ant Colony',
            description:
              'Metaheuristics that escape local optima by adding randomness — simulated annealing, genetic algorithms and ant colony optimization.',
            subtopics: [
              'Simulated annealing: temperature, acceptance probability',
              'Genetic algorithms: selection, crossover, mutation',
              'Ant Colony Optimization: pheromone trails and stigmergy',
            ],
            periods: 4,
            marks: 10,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'Simulated annealing and genetic algorithm explained',
                query: 'simulated annealing genetic algorithm in ai hindi',
                fallback: 'genetic algorithm in ai with example',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'Ant colony optimization quick overview',
                query: 'ant colony optimization algorithm explained hindi',
                why: 'Easy marks if asked as a short question',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'How does temperature affect acceptance in simulated annealing?', hint: 'High temperature accepts more bad moves; it cools over time.' },
              { question: 'List the three genetic operators in order.', hint: 'Selection, crossover, mutation.' },
            ],
          },
        ],
      },
      {
        id: 'ai-m3',
        title: 'Module 3 · Optimal Paths, Decomposition & Game Playing',
        topics: [
          {
            id: 'ai-3-1',
            title: 'Optimal Path Finding: Branch & Bound, A*, IDA*',
            description:
              'Algorithms that guarantee the cheapest solution — uniform-cost style branch and bound, the famous A* search and iterative-deepening A*.',
            subtopics: [
              'Branch and bound with cost function',
              'A*: f(n) = g(n) + h(n), admissibility and optimality',
              'Iterative Deepening A* (IDA*) and divide-and-conquer approaches',
              'Beam Stack Search overview',
            ],
            periods: 4,
            marks: 8,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'A* algorithm explained with example',
                channel: 'Gate Smashers',
                query: 'a star algorithm in artificial intelligence hindi example Gate Smashers',
                why: 'A* is the most asked search algorithm',
                language: 'hindi',
              }),
              r({
                kind: 'deep',
                title: 'Branch and bound and IDA*',
                query: 'branch and bound in ai ida star algorithm hindi',
                fallback: 'branch and bound algorithm ai example',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'When is A* guaranteed to find the optimal path?', hint: 'When the heuristic is admissible (never overestimates).' },
              { question: 'What does the g and h in f(n) = g(n) + h(n) represent?', hint: 'g = real cost so far, h = estimated cost to target.' },
            ],
          },
          {
            id: 'ai-3-2',
            title: 'Problem Decomposition: Goal Trees, AO*, Rule-Based Systems, Rete Net',
            description:
              'Solving problems by breaking them into subproblems — AND/OR goal trees, AO* search, rule-based systems and the Rete matching net.',
            subtopics: [
              'AND/OR graphs and goal trees',
              'AO* algorithm for decomposable problems',
              'Production systems and rule-based reasoning',
              'Rete net: fast pattern matching for rules',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'AO* algorithm with example',
                query: 'AO star algorithm in artificial intelligence with example hindi',
                fallback: 'and or graph ao star algorithm',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'Rule based systems and Rete algorithm',
                query: 'rule based system in ai rete algorithm hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Difference between A* and AO*?', hint: 'A* works on OR graphs; AO* works on AND/OR graphs.' },
              { question: 'Why use the Rete net?', hint: 'It avoids re-checking unchanged facts across rule cycles.' },
            ],
          },
          {
            id: 'ai-3-3',
            title: 'Game Playing: Minimax, Alpha-Beta, SSS*',
            description:
              'Two-player adversarial search — the minimax procedure, alpha-beta pruning for efficiency and the SSS* algorithm.',
            subtopics: [
              'Game trees and two-player zero-sum games',
              'Minimax algorithm with example',
              'Alpha-beta pruning, ordering and its effect',
              'SSS* and its relation to alpha-beta',
            ],
            periods: 3,
            marks: 5,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'Minimax and alpha-beta pruning with example',
                channel: 'Gate Smashers',
                query: 'minimax algorithm alpha beta pruning in hindi example Gate Smashers',
                why: 'Standard exam problem',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'Minimax algorithm 10 minute revision',
                query: 'minimax algorithm game tree example tic tac toe hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What is the value of the minimax tree node if it is a max node?', hint: 'Maximum of its children values.' },
              { question: 'What pruning happens if beta nod is violated?', hint: 'Beta cut-off in MAX nodes; alpha cut-off in MIN nodes.' },
            ],
          },
        ],
      },
      {
        id: 'ai-m4',
        title: 'Module 4 · Planning & Constraint Satisfaction',
        topics: [
          {
            id: 'ai-4-1',
            title: 'Planning: Domains, Forward & Backward Search, Goal Stack',
            description:
              'Automated planning to achieve goals — planning domains, forward and backward (regression) search and classic goal stack planning.',
            subtopics: [
              'Planning problem: states, actions, goals, STRIPS',
              'Forward state-space search',
              'Backward (regressive) search',
              'Goal stack planning with the blocks-world example',
            ],
            periods: 4,
            marks: 10,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'AI planning and goal stack planning',
                query: 'goal stack planning in artificial intelligence blocks world hindi',
                fallback: 'ai planning forward backward search',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'STRIPS and planning domains',
                query: 'strips representation in ai planning hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What is the goal stack in goal stack planning?', hint: 'A stack holding goals and actions used to achieve them, executed in LIFO order.' },
              { question: 'When does backward search start?', hint: 'From the goal state backward to the initial state.' },
            ],
          },
          {
            id: 'ai-4-2',
            title: 'Plan Space Planning & Graphplan',
            description:
              'Partial-order planning in plan space and the planning-graph based Graphplan algorithm.',
            subtopics: [
              'Partial-order planning and plan space',
              'Causal links and threats',
              'Graphplan: proposition and action layers, mutual exclusions',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'Plan space planning and Graphplan',
                query: 'plan space planning graphplan algorithm artificial intelligence',
                fallback: 'partial order planning in ai',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What is a causal link in plan space planning?', hint: 'A relation saying an action achieves a precondition of another action.' },
              { question: 'What do mutex relations mark in Graphplan?', hint: 'Actions or propositions that cannot both hold at the same level.' },
            ],
          },
          {
            id: 'ai-4-3',
            title: 'Constraint Satisfaction & Constraint Propagation',
            description:
              'CSP formulation and solving — variables, domains, constraints, propagation, backtracking and arc consistency.',
            subtopics: [
              'CSP: variables, domains, constraints',
              'Backtracking search for CSP',
              'Forward checking and constraint propagation (AC-3)',
              'Applications: map colouring, scheduling, Sudoku',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'Constraint satisfaction problems explained',
                query: 'constraint satisfaction problems in ai with example hindi',
                fallback: 'csp in ai backtracking forward checking',
                language: 'hindi',
              }),
              r({
                kind: 'practical',
                title: 'Map colouring as a CSP',
                query: 'map coloring csp backtracking example',
                why: 'Walk through a classic CSP example',
              }),
            ],
            practice: [
              { question: 'What is arc consistency?', hint: 'Every value of a variable has a consistent value in the neighbour variable domain.' },
              { question: 'How does forward checking differ from backtracking?', hint: 'Forward checking prunes neighbour domains as soon as a value is assigned.' },
            ],
          },
        ],
      },
      {
        id: 'ai-m5',
        title: 'Module 5 · Logic & Inference',
        topics: [
          {
            id: 'ai-5-1',
            title: 'Propositional & First-Order Logic',
            description:
              'Formal languages for representing knowledge — propositional logic syntax and semantics, and first-order logic with quantifiers and predicates.',
            subtopics: [
              'Propositional logic: connectives, truth tables',
              'Deduction, entailment and inference rules',
              'First-order logic: predicates, functions, quantifiers',
              'Converting FOL sentences to clause form',
            ],
            periods: 4,
            marks: 10,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'Propositional and first order logic in AI',
                channel: 'Gate Smashers',
                query: 'propositional logic first order logic in ai hindi Gate Smashers',
                why: 'Logic topics carry good marks',
                language: 'hindi',
              }),
              r({
                kind: 'deep',
                title: 'FOL syntax and quantifiers',
                query: 'first order logic predicates quantifiers with example',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Write "all students love AI" in FOL.', hint: 'Use a universal quantifier and an implication.' },
              { question: 'When is a wff satisfiable?', hint: 'When at least one valuation makes it true.' },
            ],
          },
          {
            id: 'ai-5-2',
            title: 'Soundness, Completeness & Chaining',
            description:
              'Why inference works — sound and complete reasoning, and forward/backward chaining in rule-based knowledge bases.',
            subtopics: [
              'Soundness and completeness of inference',
              'Forward chaining: data-driven reasoning',
              'Backward chaining: goal-driven reasoning',
              'Resolution and unification overview',
            ],
            periods: 4,
            marks: 10,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'Forward and backward chaining explained',
                channel: 'Gate Smashers',
                query: 'forward chaining backward chaining in ai hindi Gate Smashers',
                why: 'Frequent long-answer question',
                language: 'hindi',
              }),
              r({
                kind: 'one-shot',
                title: 'Inference concepts in one video',
                query: 'soundness completeness resolution in artificial intelligence',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Distinguish forward and backward chaining.', hint: 'Forward = data-driven with deduce; backward = goal-driven with search.' },
              { question: 'What does completeness guarantee?', hint: 'Every entailed sentence is provable with the inference procedure.' },
            ],
          },
        ],
      },
    ],
    references: [
      'Deepak Khemani — A First Course in Artificial Intelligence, McGraw Hill',
      'Stuart Russell & Peter Norvig — Artificial Intelligence: A Modern Approach, Prentice Hall',
      'Elaine Rich & Kevin Knight — Artificial Intelligence, Tata McGraw Hill',
      'M. C. Trivedi — A Classical Approach to Artificial Intelligence, Khanna Publishing',
      'Stefan Edelkamp & Stefan Schroedl — Heuristic Search, Morgan Kaufmann',
      'Official NPTEL course on AI — https://nptel.ac.in/courses/106106126/',
    ],
    playlists: [
      r({
        kind: 'playlist',
        title: 'Artificial Intelligence (Gate Smashers)',
        channel: 'Gate Smashers',
        query: 'artificial intelligence playlist Gate Smashers hindi',
        language: 'hindi',
        rec: 1,
      }),
      r({
        kind: 'playlist',
        title: 'Artificial Intelligence (Neso Academy)',
        channel: 'Neso Academy',
        query: 'artificial intelligence playlist neso academy',
        language: 'english',
      }),
      r({
        kind: 'playlist',
        title: 'AI Full Course in Hindi',
        query: 'artificial intelligence full course hindi playlist',
        language: 'hindi',
      }),
    ],
  },
  {
    id: 'dsml',
    code: '6.1(b)',
    name: 'Data Science and Machine Learning',
    shortName: 'DS & ML',
    semester: 6,
    category: 'elective',
    credits: 4,
    periods: '4L',
    description:
      'The complete data science pipeline — data mining fundamentals, preprocessing, statistical exploration, supervised and unsupervised machine learning algorithms, and mining social graphs.',
    whyMatters:
      'Data science is everywhere, and the algorithms here (decision trees, k-NN, SVM, k-means) map directly to modern analytics jobs and the final-year project.',
    difficulty: 'intermediate',
    examImportance: 'high',
    learningOrder: [
      'Module 1 — Foundations of Data Science & ML',
      'Module 2 — Data Preprocessing, Analysis & Visualization',
      'Module 3 — Statistical Inference & EDA',
      'Module 4 — Machine Learning Algorithms',
      'Module 5 — Social-Network Mining & Ethics',
    ],
    totalPeriods: 42,
    objectives: [
      'Introduce the concepts of data warehousing and data mining.',
      'Explain the principles, architectures, applications, design and implementation of data mining and data warehousing.',
    ],
    outcomes: [
      'Understand the basics of Data Science.',
      'Visualize and analyze data.',
      'Understand the concept of Exploratory Data Analysis.',
      'Understand and develop Machine Learning algorithms.',
      'Implement the mining process on a social network graph.',
    ],
    modules: [
      {
        id: 'dsml-m1',
        title: 'Module 1 · Foundations of Data Science & ML',
        topics: [
          {
            id: 'dsml-1-1',
            title: 'Fundamentals of AI, Data Science & Data Mining',
            description:
              'The relationship between AI, data science and data mining, why data science is needed, and what data mining actually involves.',
            subtopics: [
              'AI vs Data Science vs Data Mining',
              'Applications and need of Data Science',
              'Data mining process: CRISP-DM overview',
            ],
            periods: 4,
            marks: 9,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'playlist',
                title: 'Data Science Full Course',
                query: 'data science full course in hindi playlist',
                why: 'Chapter playlist for foundations',
                language: 'hindi',
              }),
              r({
                kind: 'deep',
                title: 'What is data science and data mining',
                query: 'what is data science data mining in hindi',
                fallback: 'data science kya hai introduction',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'How do data mining and data science differ?', hint: 'Data mining finds patterns; data science covers the whole pipeline.' },
              { question: 'Name four application areas of data mining.', hint: 'Retail, healthcare, finance, social media.' },
            ],
          },
          {
            id: 'dsml-1-2',
            title: 'Data Preparation',
            description:
              'Turning raw data into a usable dataset — cleaning, integration, transformation and reduction before any modelling.',
            subtopics: [
              'Data cleaning: missing values, noise, outliers',
              'Data integration and transformation',
              'Data reduction: aggregation, sampling, dimensionality',
            ],
            periods: 3,
            marks: 6,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Data preparation steps for machine learning',
                query: 'data preparation cleaning transformation in data mining',
                fallback: 'data preprocessing steps in data science',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Why handle missing values before modelling?', hint: 'Most algorithms cannot process null entries.' },
              { question: 'Name two ways to deal with outliers.', hint: 'Clipping or removal, robust scaling.' },
            ],
          },
          {
            id: 'dsml-1-3',
            title: 'Machine Learning: Types & Applications',
            description:
              'Defining machine learning categories — supervised, unsupervised, reinforcement — and where each is applied.',
            subtopics: [
              'Supervised: classification and regression',
              'Unsupervised: clustering and association',
              'Reinforcement learning basics',
              'Real-world ML applications',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'deep',
                title: 'Machine learning types explained',
                channel: 'Krish Naik',
                query: 'types of machine learning supervised unsupervised reinforcement hindi',
                fallback: 'machine learning kya hai types in hindi',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'ML types in one shot',
                query: 'supervised unsupervised reinforcement learning one shot hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Is email spam filtering supervised or unsupervised? Why?', hint: 'Supervised — we train on labelled spam/ham examples.' },
              { question: 'Give one application of reinforcement learning.', hint: 'Game playing, robotics, recommendation.' },
            ],
          },
        ],
      },
      {
        id: 'dsml-m2',
        title: 'Module 2 · Data Preprocessing, Analysis & Visualization',
        topics: [
          {
            id: 'dsml-2-1',
            title: 'Preprocessing Techniques',
            description:
              'Scikit-learn style preprocessing — mean removal, scaling, normalization, binarization, one-hot and label encoding, so models see clean numeric features.',
            subtopics: [
              'Mean removal and standard scaling',
              'Normalization and binarization',
              'One-hot encoding vs label encoding',
            ],
            periods: 3,
            marks: 8,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Feature scaling one hot encoding label encoding',
                query: 'scaling normalization one hot encoding label encoding machine learning in hindi',
                fallback: 'feature encoding techniques explained',
                language: 'hindi',
              }),
              r({
                kind: 'practical',
                title: 'Implement preprocessing in Python',
                query: 'sklearn standardscaler onehotencoder tutorial python',
                why: 'Hands-on with the library you will use in the project',
                language: 'english',
              }),
            ],
            practice: [
              { question: 'When is one-hot encoding better than label encoding?', hint: 'For nominal (unordered) categories.' },
              { question: 'Why scale features for k-NN and SVM?', hint: 'Distance measures otherwise get dominated by large-magnitude features.' },
            ],
          },
          {
            id: 'dsml-2-2',
            title: 'Data Analysis, Visualization & Performance Measures',
            description:
              'Loading and summarizing datasets, univariate and multivariate plots, splitting train/test data and measuring model performance.',
            subtopics: [
              'Loading and summarizing a dataset (describe, info)',
              'Univariate vs multivariate plots; correlations',
              'Train/test split and the danger of leakage',
              'Confusion matrix, accuracy, precision, recall, F1',
            ],
            periods: 3,
            marks: 8,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Exploratory visualization and performance metrics',
                query: 'train test split confusion matrix accuracy precision recall in hindi',
                fallback: 'performance measures classification in machine learning',
                language: 'hindi',
              }),
              r({
                kind: 'practical',
                title: 'Data visualization with pandas and matplotlib',
                query: 'matplotlib pandas data visualization tutorial python',
                language: 'english',
              }),
            ],
            practice: [
              { question: 'What is the train/test split for?', hint: 'Evaluate how well the model generalizes to unseen data.' },
              { question: 'When is accuracy a misleading metric?', hint: 'Imbalanced classes — precision and recall matter more.' },
            ],
          },
        ],
      },
      {
        id: 'dsml-m3',
        title: 'Module 3 · Statistical Inference & EDA',
        topics: [
          {
            id: 'dsml-3-1',
            title: 'Populations, Samples & Statistical Modelling',
            description:
              'Core statistics for data science — populations vs samples, statistical modelling approaches and the types of probability distributions.',
            subtopics: [
              'Population, sample, sampling methods',
              'Descriptive vs inferential statistics',
              'Common distributions: Gaussian, Bernoulli, binomial, Poisson',
            ],
            periods: 4,
            marks: 9,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Statistics for data science',
                query: 'statistics for data science population sample distributions hindi',
                fallback: 'probability distributions explained in hindi',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'Probability distributions one-shot',
                query: 'gaussian binomial poisson distribution in one shot hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Why do we use samples instead of whole populations?', hint: 'Cost and feasibility — sample statistics estimate population parameters.' },
              { question: 'Which distribution fits a count of rare events?', hint: 'Poisson distribution.' },
            ],
          },
          {
            id: 'dsml-3-2',
            title: 'Parametric vs Non-Parametric Methods, Distance Metrics',
            description:
              'Choosing between parametric and non-parametric models, and the distance functions ML algorithms rely on.',
            subtopics: [
              'Parametric models: fixed parameters, faster training',
              'Non-parametric models: flexible, data-driven',
              'Euclidean, Manhattan, Minkowski, cosine distance',
            ],
            periods: 3,
            marks: 6,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Parametric vs non parametric and distance metrics',
                query: 'parametric nonparametric models distance metrics euclidean manhattan machine learning',
                fallback: 'euclidean manhattan distance machine learning',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Is k-NN parametric or non-parametric?', hint: 'Non-parametric — no fixed set of learned coefficients.' },
              { question: 'Write the Euclidean distance formula for 2D points.', hint: 'Square root of sum of squared coordinate differences.' },
            ],
          },
          {
            id: 'dsml-3-3',
            title: 'EDA Tools, Philosophy & the Data Science Process',
            description:
              'Tukey style exploratory data analysis — using plots and summary statistics to interrogate data, and the overall data science process.',
            subtopics: [
              'Basic EDA tools: histograms, box plots, scatter plots, summary stats',
              'Philosophy of EDA: let the data talk before modelling',
              'The data science process: define, collect, prepare, model, evaluate, deploy',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'playlist',
                title: 'EDA tutorials in Python',
                query: 'exploratory data analysis eda python playlist',
                language: 'hindi',
              }),
              r({
                kind: 'deep',
                title: 'The data science process explained',
                query: 'data science process lifecycle steps explained hindi',
                fallback: 'data science lifecycle in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What can a box plot reveal that a histogram cannot?', hint: 'Quartiles, IQR and outliers directly.' },
              { question: 'Order the six steps of the data science process.', hint: 'Define, collect, prepare, model, evaluate, deploy.' },
            ],
          },
        ],
      },
      {
        id: 'dsml-m4',
        title: 'Module 4 · Machine Learning Algorithms',
        topics: [
          {
            id: 'dsml-4-1',
            title: 'Supervised Learning: Decision Tree, Linear Regression, k-NN, SVM',
            description:
              'The big four supervised algorithms — how they learn, their working principles and when to use each.',
            subtopics: [
              'Decision tree: splitting criteria, Gini and entropy',
              'Linear regression: least squares, loss',
              'k-Nearest Neighbours: distance voting, choosing k',
              'Support Vector Machines: hyperplane, margin, kernels',
            ],
            periods: 4,
            marks: 10,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'playlist',
                title: 'Machine Learning Algorithms (Gate Smashers)',
                channel: 'Gate Smashers',
                query: 'machine learning algorithms playlist in hindi Gate Smashers',
                why: 'Chapter playlist for supervised learning',
                language: 'hindi',
              }),
              r({
                kind: 'deep',
                title: 'SVM and decision tree with examples',
                query: 'svm support vector machine decision tree in hindi example',
                fallback: 'knn svm decision tree explained in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'How does the decision tree choose its root feature?', hint: 'The feature giving the largest information gain or lowest Gini.' },
              { question: 'What role does citation of kernel play in SVM?', hint: 'It maps data to higher dimensions to make it linearly separable.' },
            ],
          },
          {
            id: 'dsml-4-2',
            title: 'Unsupervised Learning: K-means, Mean Shift, Dimensionality Reduction',
            description:
              'Finding structure without labels — clustering with k-means and mean shift, plus PCA for dimensionality reduction.',
            subtopics: [
              'K-means: centroid placement, initialization, convergence',
              'Mean shift algorithm',
              'PCA and dimensionality reduction intuition',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'K-means clustering and PCA explained',
                query: 'k means clustering algorithm in hindi example pca dimensionality reduction',
                fallback: 'k means algorithm step by step',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Why may k-means give different results each run?', hint: 'Random centroid initialization; local optima.' },
              { question: 'What does PCA do to the feature space?', hint: 'Projects data onto fewer orthogonal directions of maximum variance.' },
            ],
          },
          {
            id: 'dsml-4-3',
            title: 'Introduction to Neural Networks',
            description:
              'The perceptron and multi-layer networks — weights, activation, forward pass, loss and back-propagation.', 
            subtopics: [
              'Perceptron and activation functions',
              'Multi-layer networks and forward pass',
              'Loss function, gradient descent, back-propagation',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'Neural networks explained',
                query: 'neural network explained in hindi forward pass backpropagation',
                fallback: 'artificial neural networks introduction in hindi',
                language: 'hindi',
              }),
              r({
                kind: 'one-shot',
                title: 'Back-propagation in 10 minutes',
                query: 'backpropagation algorithm explained simple',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What does an activation function add to a neuron?', hint: 'Non-linearity, so the network can learn complex functions.' },
              { question: 'What is the role of back-propagation?', hint: 'It computes gradients to update weights via gradient descent.' },
            ],
          },
        ],
      },
      {
        id: 'dsml-m5',
        title: 'Module 5 · Social-Network Mining & Ethics',
        topics: [
          {
            id: 'dsml-5-1',
            title: 'Social Networks as Graphs & Clustering',
            description:
              'Representing social media as graphs, and graph-clustering concepts from the data mining perspective.',
            subtopics: [
              'Graph representation of social networks',
              'Degree, neighborhoods, hubs and bridges',
              'Clustering of graphs',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Mining social networks graphs',
                query: 'mining social network graphs data mining explained',
                fallback: 'social network graphs in data mining',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What does the degree of a node represent?', hint: 'Number of edges, i.e., direct connections.' },
              { question: 'Why do social graphs tend to be sparse?', hint: 'Most nodes connect to only a few neighbours among millions.' },
            ],
          },
          {
            id: 'dsml-5-2',
            title: 'Community Discovery & Graph Partitioning',
            description:
              'Finding like-minded groups — direct community discovery and partitioning algorithms on the graph.',
            subtopics: [
              'Community detection intuition',
              'Direct discovery of communities in graphs',
              'Graph partitioning and neighbourhood properties',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Community detection and graph partitioning',
                query: 'community detection social networks graph partitioning algorithms',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What is a community in a social graph?', hint: 'A dense cluster of nodes with sparse connections to the rest.' },
              { question: 'Give one way to find communities.', hint: 'Girvan-Newman style edge betweenness, or label propagation.' },
            ],
          },
          {
            id: 'dsml-5-3',
            title: 'Privacy, Security, Ethics & the Future of Data Science',
            description:
              'The cost of data — privacy, security and ethical issues in data science, and where the field is heading.',
            subtopics: [
              'Privacy, security and ethics discussions',
              'Bias and fairness in ML models',
              'A look back at data science and next-generation data scientists',
            ],
            periods: 2,
            marks: 6,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'deep',
                title: 'Data science ethics and privacy',
                query: 'data science ethics privacy bias in machine learning',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Why do ML models inherit bias?', hint: 'Biased training data leads to biased predictions.' },
              { question: 'What are two privacy safeguards in data science?', hint: 'Anonymization and differential privacy.' },
            ],
          },
        ],
      },
    ],
    references: [
      'Jiawei Han, Micheline Kamber & Jian Pei — Data Mining: Concepts and Techniques, Elsevier',
      'Margaret H. Dunham — Data Mining: Introductory and Advanced Topics, Pearson',
      'Amitesh Sinha — Data Warehousing, Thomson Learning',
      'Xingdong Wu & Vipin Kumar — The Top Ten Algorithms in Data Mining, CRC Press',
    ],
    playlists: [
      r({
        kind: 'playlist',
        title: 'Machine Learning Full Course',
        channel: 'Krish Naik',
        query: 'machine learning full course playlist in hindi',
        language: 'hindi',
        rec: 1,
      }),
      r({
        kind: 'playlist',
        title: 'Data Science Tutorials (Gate Smashers)',
        channel: 'Gate Smashers',
        query: 'data science playlist Gate Smashers hindi',
        language: 'hindi',
      }),
    ],
  },
  {
    id: 'ent',
    code: '6.2',
    name: 'Entrepreneurship and Start-ups',
    shortName: 'Entrepreneurship',
    semester: 6,
    category: 'theory',
    credits: 2,
    periods: '2L',
    description:
      'The mindset and mechanics of starting a venture — entrepreneurial traits, idea to start-up, business plans, management, financing and intellectual property protection.',
    whyMatters:
      'Beyond the exam, this subject teaches you how ideas become businesses — perfect for the in-house project showcase and future start-ups.',
    difficulty: 'beginner',
    examImportance: 'high',
    learningOrder: [
      'Module 1 — Introduction & Business Structures',
      'Module 2 — Business Ideas & Implementation',
      'Module 3 — Ideas to Start-up',
      'Module 4 — Management',
      'Module 5 — Financing & Protection of Ideas',
      'Module 6 — Succession, Dissolution & Harvesting',
    ],
    totalPeriods: 28,
    objectives: [
      'Explore the objectives of entrepreneurship, including innovation, wealth creation and societal impact.',
      'Understand how entrepreneurs foster economic growth and drive the economy.',
    ],
    outcomes: [
      'Understand the basics of entrepreneurship and business structures.',
      'Plan and implement business ideas.',
      'Understand strategic market analysis.',
      'Manage organizational roles.',
      'Understand various financial schemes.',
    ],
    modules: [
      {
        id: 'ent-m1',
        title: 'Module 1 · Introduction & Business Structures',
        topics: [
          {
            id: 'ent-1-1',
            title: 'Definitions, Classification & Traits of an Entrepreneur',
            description:
              'Who an entrepreneur is, how entrepreneurs are classified, and the personality traits that distinguish successful founders.',
            subtopics: [
              'Definition of entrepreneur and entrepreneurship',
              'Classification: by type of business, technology, ownership and gender',
              'Traits: risk-taking, innovation, leadership, perseverance',
            ],
            periods: 1,
            marks: 8,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'playlist',
                title: 'Entrepreneurship Lectures',
                query: 'entrepreneurship development full course in hindi playlist',
                why: 'Chapter playlist for entrepreneurship',
                language: 'hindi',
              }),
              r({
                kind: 'deep',
                title: 'Who is an entrepreneur? Types and traits',
                query: 'entrepreneur definition types traits in hindi',
                fallback: 'entrepreneurship kya hai in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'List four traits of a successful entrepreneur.', hint: 'Risk-taker, innovator, leader, self-motivated.' },
              { question: 'How is an entrepreneur classified by ownership?', hint: 'Sole proprietorship, partnership, company.' },
            ],
          },
          {
            id: 'ent-1-2',
            title: 'Intrapreneurship, Motivation & Business Structures',
            description:
              'Entrepreneurs vs intrapreneurs, what motivates founders, and the types of business structures by size and ownership.',
            subtopics: [
              'Intrapreneurship: entrepreneurship inside a firm',
              'Motivation: push vs pull factors, achievement motive',
              'Business structures by size and by ownership',
              'Entrepreneurs vs managers: similarities and differences',
            ],
            periods: 1,
            marks: 9,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'deep',
                title: 'Entrepreneur vs intrapreneur vs manager',
                query: 'entrepreneur intrapreneur manager difference in hindi',
                fallback: 'types of business ownership structures in hindi',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'Business structures one-shot',
                query: 'sole proprietorship partnership company difference in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Differentiate entrepreneur and intrapreneur.', hint: 'Intrapreneur innovates within an existing company.' },
              { question: 'Name two differences between an entrepreneur and a manager.', hint: 'Risk ownership and compensation type.' },
            ],
          },
        ],
      },
      {
        id: 'ent-m2',
        title: 'Module 2 · Business Ideas & Implementation',
        topics: [
          {
            id: 'ent-2-1',
            title: 'Discovering & Visualizing the Business',
            description:
              'Where business ideas come from — market gaps, pain points, trends — and how to visualize the business before building it.',
            subtopics: [
              'Idea sources: problems, hobbies, industry experience',
              'Opportunity recognition and validation',
              'Visualizing the business: value proposition and customers',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'deep',
                title: 'How to find business ideas',
                query: 'how to find business ideas validate in hindi',
                fallback: 'business idea generation techniques',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Name three sources of business ideas.', hint: 'Customer problems, market trends, personal skills.' },
              { question: 'What is a value proposition?', hint: 'The unique benefit a product promises to customers.' },
            ],
          },
          {
            id: 'ent-2-2',
            title: 'Activity Map & Business Plan (Case Study)',
            description:
              'Mapping the chain of activities a business performs, and structuring a complete business plan — the classic case-study topic.',
            subtopics: [
              'Activity map: core and support activities',
              'Business plan structure: vision, market, operations, finances',
              'Business plan case studies (start-up examples)',
            ],
            periods: 4,
            marks: 9,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'How to write a business plan',
                query: 'how to write a business plan in hindi structure',
                fallback: 'business plan components in hindi',
                language: 'hindi',
              }),
              r({
                kind: 'one-shot',
                title: 'Business plan case study walkthrough',
                query: 'business plan example case study startup hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'List five sections of a business plan.', hint: 'Executive summary, market, operations, team, finances.' },
              { question: 'What is an activity map used for?', hint: 'To show how the firm competes through a linked set of activities.' },
            ],
          },
        ],
      },
      {
        id: 'ent-m3',
        title: 'Module 3 · Ideas to Start-up',
        topics: [
          {
            id: 'ent-3-1',
            title: 'Marketing, Accounting & Market Analysis (STP)',
            description:
              'Building the go-to-market pieces — marketing and accounting basics, and market analysis through segmentation, targeting and positioning.',
            subtopics: [
              'Marketing: definition and importance',
              'Accounting: definition and importance',
              'Market analysis STP: segmentation, targeting, positioning',
            ],
            periods: 2,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'STP segmentation targeting positioning',
                query: 'segmentation targeting positioning STP in hindi',
                fallback: 'marketing basics for startup in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Explain STP with one example.', hint: 'Segment by age, target students, position as affordable.' },
              { question: 'Why does accounting matter for a start-up?', hint: 'Track cash flow, costs and profitability to stay alive.' },
            ],
          },
          {
            id: 'ent-3-2',
            title: 'Competition Evaluation & Strategy Development',
            description:
              'Understanding competitors and setting strategy — vision, mission, goals and objectives for the venture.',
            subtopics: [
              'Competition evaluation: identifying and analyzing rivals',
              'Strategy development: vision, mission, goals, objectives',
              'Competitive advantage and differentiation',
            ],
            periods: 2,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Vision mission goals objectives for startup',
                query: 'vision mission goal objective difference in hindi',
                fallback: 'competitive strategy for startups',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'State the difference between vision and mission.', hint: 'Vision is the long-term aspiration; mission is the present purpose.' },
              { question: 'How do you analyse a competitor?', hint: 'Compare product, price, distribution and promotion.' },
            ],
          },
          {
            id: 'ent-3-3',
            title: 'Risk Analysis — SWOT Analysis',
            description:
              'Assessing internal and external factors with the classic SWOT framework before launching.',
            subtopics: [
              'SWOT: strengths, weaknesses, opportunities, threats',
              'Applying SWOT to a start-up idea',
              'From SWOT to risk mitigation',
            ],
            periods: 2,
            marks: 6,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'deep',
                title: 'SWOT analysis explained',
                query: 'swot analysis in hindi with example',
                fallback: 'swot analysis kya hai',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Give one strength and one threat for a food-delivery start-up.', hint: 'Strength: own kitchen network; threat: competitor pricing war.' },
              { question: 'Which SWOT elements are internal?', hint: 'Strengths and weaknesses.' },
            ],
          },
        ],
      },
      {
        id: 'ent-m4',
        title: 'Module 4 · Management',
        topics: [
          {
            id: 'ent-4-1',
            title: 'Functions of Management & Organizational Structure',
            description:
              'The classic management functions and how companies organize into structures with defined hierarchies.',
            subtopics: [
              'Management: definition, concept and functions (POSDCORB)',
              'Organizational structure: concept and classification',
              'Line, functional and matrix structures',
            ],
            periods: 2,
            marks: 9,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'deep',
                title: 'Functions of management explained',
                query: 'functions of management planning organizing directing controlling in hindi',
                fallback: 'management kya hai functions in hindi',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'Organizational structure types',
                query: 'types of organizational structure functional matrix in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Name the five classical functions of management.', hint: 'Plan, organize, staff, direct, control.' },
              { question: 'What is a matrix structure?', hint: 'Employees report to both functional and project managers.' },
            ],
          },
          {
            id: 'ent-4-2',
            title: 'Recruitment, Selection, Training & Development',
            description:
              'How teams get built and developed — attracting candidates, selecting them, and training them to grow.',
            subtopics: [
              'Recruitment: definition and sources',
              'Selection process: screening, interviews, tests',
              'Training and development: importance and methods',
            ],
            periods: 2,
            marks: 8,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'deep',
                title: 'Recruitment selection training development',
                query: 'recruitment and selection process in hindi training development',
                fallback: 'hr recruitment selection in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Difference between recruitment and selection?', hint: 'Recruitment is attracting candidates; selection is choosing among them.' },
              { question: 'Why invest in training employees?', hint: 'Improves skill, retention and productivity.' },
            ],
          },
        ],
      },
      {
        id: 'ent-m5',
        title: 'Module 5 · Financing & Protection of Ideas',
        topics: [
          {
            id: 'ent-5-1',
            title: 'Financing Options for Start-ups in India',
            description:
              'Where Indian founders get money — government schemes, banks, NBFCs, self-help groups and micro-financing.',
            subtopics: [
              'Government schemes for start-ups (PMEGP, Start-up India, MUDRA)',
              'Banking and NBFC loans',
              'Self Help Groups (SHG) and micro-financing',
            ],
            periods: 3,
            marks: 11,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Startup funding options in India',
                query: 'startup funding options in india government schemes mudra in hindi',
                fallback: 'pmegp mudra loan yojana in hindi',
                language: 'hindi',
              }),
              r({
                kind: 'one-shot',
                title: 'Where to raise startup capital',
                query: 'raise startup capital sources equity debt crowdfunding in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Name two government schemes that fund start-ups.', hint: 'MUDRA and PMEGP.' },
              { question: 'What is micro-financing?', hint: 'Small loans, often via SHGs, for low-income entrepreneurs.' },
            ],
          },
          {
            id: 'ent-5-2',
            title: 'Intellectual Property Rights Overview',
            description:
              'Legal protection of ideas — copyright, trademarks, geographical indications, patents and licences.',
            subtopics: [
              'Copyright: protection of creative work',
              'Trademark and Geographical Indication (GI)',
              'Patenting and licensing basics',
            ],
            periods: 2,
            marks: 6,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Intellectual property rights explained',
                query: 'intellectual property rights copyright trademark patent in hindi',
                fallback: 'ipr kya hai copyright patent in hindi',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'IPR types one-shot',
                query: 'copyright trademark patent difference in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What does a patent protect?', hint: 'An invention and its use, for a limited period.' },
              { question: 'Give a famous Indian GI tag example.', hint: 'Darjeeling tea, Banarasi saree.' },
            ],
          },
          {
            id: 'ent-5-3',
            title: 'Investor Pitch & Communication',
            description:
              'Communicating the idea to potential investors — structuring a compelling investor pitch.',
            subtopics: [
              'What investors look for',
              'Investor pitch structure: problem, solution, market, traction, ask',
              'Pitch delivery tips',
            ],
            periods: 1,
            marks: 4,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'one-shot',
                title: 'How to pitch to investors',
                query: 'how to pitch startup to investors in hindi',
                fallback: 'investor pitch structure tips',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'List the core slides of an investor pitch.', hint: 'Problem, solution, market, traction, team, ask.' },
              { question: 'What is a "traction" slide about?', hint: 'Evidence of growth — users, revenue, partnerships.' },
            ],
          },
        ],
      },
      {
        id: 'ent-m6',
        title: 'Module 6 · Succession, Dissolution & Harvesting',
        topics: [
          {
            id: 'ent-6-1',
            title: 'Ways of Succession',
            description:
              'Planning who takes over the business — family succession, internal promotion and external sale of the firm.',
            subtopics: [
              'Succession planning basics',
              'Family vs professional succession',
              'Succession as part of business strategy',
            ],
            periods: 2,
            marks: 6,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Business succession planning',
                query: 'business succession planning in hindi entrepreneurship',
                fallback: 'succession planning in family business',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Why plan succession early?', hint: 'Avoid disputes and ensure continuity of the business.' },
              { question: 'Name two succession routes.', hint: 'Family successor and external hire/sale.' },
            ],
          },
          {
            id: 'ent-6-2',
            title: 'Types of Dissolution & Harvesting Strategy',
            description:
              'How ventures end — the types of dissolution and harvesting strategies to extract value from the business.',
            subtopics: [
              'Types of dissolution: voluntary, statutory, compulsory',
              'Harvesting strategies: sale, merger, IPO, buyback',
              'Exit planning for founders',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'one-shot',
                title: 'Exit and harvesting strategies for startups',
                query: 'startup exit strategies harvesting sale ipo in hindi',
                fallback: 'business dissolution types',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What is an IPO as a harvesting strategy?', hint: 'Selling shares to the public to raise capital and exit.' },
              { question: 'Difference between voluntary and compulsory dissolution?', hint: 'Voluntary is by owners decision; compulsory is by law.' },
            ],
          },
        ],
      },
    ],
    references: [
      'Steve Blank & Bob Dorf — The Startup Owner\'s Manual, K&S Ranch',
      'Vasant Desai — Entrepreneurship Development (A New Venture Creation), Himalaya Publishing',
      'S. S. Khanka — Entrepreneurship Development, S. Chand & Company',
      'Eric Ries — The Lean Startup, Penguin',
      'Clayton M. Christensen — The Innovator\'s Dilemma, Harvard Business Press',
    ],
    playlists: [
      r({
        kind: 'playlist',
        title: 'Entrepreneurship Development Full Course',
        query: 'entrepreneurship development full course in hindi playlist',
        language: 'hindi',
        rec: 1,
      }),
      r({
        kind: 'playlist',
        title: 'Start-up India scheme lectures',
        query: 'startup india scheme entrepreneurship hindi playlist',
        language: 'hindi',
      }),
    ],
  },
  {
    id: 'dm',
    code: 'OE-3',
    name: 'Disaster Management',
    shortName: 'Disaster Management',
    semester: 6,
    category: 'elective',
    credits: 2,
    periods: '2L',
    description:
      'Understanding disasters — from hazards and vulnerability to the disaster management cycle, India-specific legislation and the science and technology that saves lives.',
    whyMatters:
      'A valuable life-skill subject: it trains you to think in terms of risk, preparedness and recovery, and carries easy theory marks.',
    difficulty: 'beginner',
    examImportance: 'medium',
    learningOrder: [
      'Module 1 — Understanding Disaster',
      'Module 2 — Types, Causes & Consequences of Disasters',
      'Module 3 — Disaster Management Cycle & Framework',
      'Module 4 — Disaster Management in India',
      'Module 5 — Science & Technology for Disaster Management',
    ],
    totalPeriods: 42,
    objectives: [
      'Reduce or avoid the potential losses from hazards.',
      'Assure prompt and appropriate assistance to disaster victims.',
      'Achieve rapid and effective recovery.',
    ],
    outcomes: [
      'Understand disaster and hazards.',
      'Understand the types, consequences and control of disasters.',
      'Understand the Disaster Management Cycle.',
      'Understand Disaster Management Acts in India.',
      'Understand the application of technology for managing disasters.',
    ],
    modules: [
      {
        id: 'dm-m1',
        title: 'Module 1 · Understanding Disaster',
        topics: [
          {
            id: 'dm-1-1',
            title: 'Disaster, Hazard, Vulnerability, Risk, Capacity',
            description:
              'Core definitions that frame the whole subject — the differences between a hazard and a disaster, and how vulnerability converts hazard into risk.',
            subtopics: [
              'Disaster and its key characteristics',
              'Hazard vs disaster',
              'Vulnerability, risk and capacity',
              'Risk = Hazard × Vulnerability ÷ Capacity',
            ],
            periods: 3,
            marks: 9,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'playlist',
                title: 'Disaster Management Full Course',
                query: 'disaster management full course in hindi playlist',
                why: 'Chapter playlist for disaster management',
                language: 'hindi',
              }),
              r({
                kind: 'deep',
                title: 'Hazard, vulnerability, risk and capacity explained',
                query: 'disaster hazard vulnerability risk capacity difference in hindi',
                fallback: 'disaster management basics in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Why is an earthquake a hazard but not always a disaster?', hint: 'No disaster if no vulnerable people or assets are affected.' },
              { question: 'Define capacity in disaster management.', hint: 'Resources and strengths that reduce disaster impact.' },
            ],
          },
          {
            id: 'dm-1-2',
            title: 'Disaster & Development, Disaster Management',
            description:
              'How development shapes disaster risk, and the scope of disaster management as a continuous discipline.',
            subtopics: [
              'Disaster and development link',
              'Development can reduce or create risk',
              'Scope and goals of disaster management',
            ],
            periods: 3,
            marks: 8,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'deep',
                title: 'Disaster and development relationship',
                query: 'relationship between disaster and development in hindi',
                fallback: 'disaster management introduction in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Give an example of development increasing disaster risk.', hint: 'Unplanned urban construction in flood plains.' },
              { question: 'What is the ultimate goal of disaster management?', hint: 'Reducing risk and building resilience.' },
            ],
          },
        ],
      },
      {
        id: 'dm-m2',
        title: 'Module 2 · Types, Causes & Consequences of Disasters',
        topics: [
          {
            id: 'dm-2-1',
            title: 'Geological & Hydro-Meteorological Disasters',
            description:
              'Earth-driven and weather-driven disasters — their triggers, characteristics and impacts.',
            subtopics: [
              'Geological: earthquakes, landslides, tsunami, mining',
              'Hydro-meteorological: floods, cyclones, lightning, thunder-storms, hail storms',
              'Avalanches, droughts, cold and heat waves',
            ],
            periods: 4,
            marks: 9,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Types of natural disasters',
                query: 'geological hydro meteorological disasters earthquake flood cyclone in hindi',
                fallback: 'types of disasters natural in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Categorize floods, cyclones and droughts.', hint: 'Hydro-meteorological disasters.' },
              { question: 'Why do tsunamis follow sub-sea earthquakes?', hint: 'Sudden seabed displacement displaces the water column.' },
            ],
          },
          {
            id: 'dm-2-2',
            title: 'Biological & Technological Disasters',
            description:
              'Epidemics and pest attacks on one side, chemical, industrial, radiological and nuclear failures on the other.',
            subtopics: [
              'Biological: epidemics, pest attacks, forest fire',
              'Technological: chemical, industrial, radiological, nuclear',
              'Modern examples and their control',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Biological and technological disasters',
                query: 'biological disasters epidemics technological chemical disasters in hindi',
                fallback: 'man made technological disasters examples',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Give two examples of technological disasters.', hint: 'Bhopal gas tragedy, Fukushima nuclear accident.' },
              { question: 'Why is a forest fire called a biological disaster?', hint: 'It involves biological systems (flora and fauna).' },
            ],
          },
          {
            id: 'dm-2-3',
            title: 'Man-made Disasters & Global Disaster Trends',
            description:
              'Disasters of human action — building collapse, fires, transport accidents — plus emerging risks such as climate change.',
            subtopics: [
              'Man-made disasters: building collapse, urban/rural fire, road and rail accidents',
              'Global disaster trends',
              'Emerging risks: climate change and urban disasters',
            ],
            periods: 3,
            marks: 6,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'one-shot',
                title: 'Man made disasters and emerging risks',
                query: 'man made disasters examples climate change urban disaster risk',
                fallback: 'disaster trends climate change in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Name two man-made disasters.', hint: 'Building collapse, railway accidents.' },
              { question: 'Why does climate change increase disaster frequency?', hint: 'More extreme weather events and sea-level rise.' },
            ],
          },
        ],
      },
      {
        id: 'dm-m3',
        title: 'Module 3 · Disaster Management Cycle & Framework',
        topics: [
          {
            id: 'dm-3-1',
            title: 'DM Cycle, Paradigm Shift & Pre-disaster Measures',
            description:
              'The disaster management cycle, the shift from reactive relief to proactive risk reduction, and pre-disaster preparations.',
            subtopics: [
              'The Disaster Management Cycle phases',
              'Paradigm shift: relief-centred to mitigation-centred',
              'Risk assessment, risk mapping, zonation and micro-zonation',
              'Prevention, mitigation, early warning, preparedness, capacity development, awareness',
            ],
            periods: 4,
            marks: 9,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'playlist',
                title: 'Disaster Management Cycle lectures',
                query: 'disaster management cycle explained hindi playlist',
                language: 'hindi',
              }),
              r({
                kind: 'deep',
                title: 'Disaster management cycle phases',
                query: 'disaster management cycle mitigation preparedness response recovery in hindi',
                fallback: 'disaster management cycle in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Name the phases of the disaster management cycle.', hint: 'Mitigation, preparedness, response, recovery.' },
              { question: 'What is micro-zonation?', hint: 'Detailed hazard risk mapping at a local scale.' },
            ],
          },
          {
            id: 'dm-3-2',
            title: 'During Disaster: Evacuation, Communication, Search & Rescue',
            description:
              'The response phase — moving people to safety, coordinating communication and running search-and-rescue and relief operations.',
            subtopics: [
              'Evacuation and shelter management',
              'Disaster communication systems',
              'Search and rescue operations',
              'Emergency Operation Centre and Incident Command System',
              'Relief and rehabilitation',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Response phase evacuation and search rescue',
                query: 'evacuation incident command system emergency operation centre in hindi',
                fallback: 'disaster response search and rescue in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What role does an Emergency Operation Centre play?', hint: 'Single coordination point for response agencies.' },
              { question: 'What is the Incident Command System used for?', hint: 'A standard on-scene organizational structure.' },
            ],
          },
          {
            id: 'dm-3-3',
            title: 'Post-disaster & International Frameworks',
            description:
              'Recovery, reconstruction and the global agreements — IDNDR, the Yokohama Strategy and the Hyogo Framework of Action.',
            subtopics: [
              'Damage and needs assessment',
              'Restoration of critical infrastructure, early recovery',
              'Reconstruction and redevelopment',
              'IDNDR, Yokohama Strategy, Hyogo Framework of Action',
            ],
            periods: 3,
            marks: 6,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'one-shot',
                title: 'International disaster frameworks',
                query: 'yokohama strategy hyogo framework sendai framework explained',
                fallback: 'disaster management international frameworks in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What did the Hyogo Framework (2005-2015) aim to achieve?', hint: 'Substantial reduction in disaster losses.' },
              { question: 'What is a damage and needs assessment?', hint: 'Post-disaster evaluation of losses and recovery requirements.' },
            ],
          },
        ],
      },
      {
        id: 'dm-m4',
        title: 'Module 4 · Disaster Management in India',
        topics: [
          {
            id: 'dm-4-1',
            title: 'Disaster Profile of India & Mega Disasters',
            description:
              'India\'s disaster landscape and the mega-disasters whose lessons shaped modern policy.',
            subtopics: [
              'India\'s disaster-prone profile across regions',
              'Mega disasters: Bhuj earthquake, tsunami 2004, Uttarakhand floods',
              'Lessons learnt from mega disasters',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Disaster profile of India',
                query: 'disaster profile of india mega disasters bhuj tsunami in hindi',
                fallback: 'india disaster prone zones in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Which Indian regions are most earthquake-prone?', hint: 'Himalayan belt and the North-East.' },
              { question: 'What lesson came from the Bhuj earthquake?', hint: 'Building codes and retrofitting matter.' },
            ],
          },
          {
            id: 'dm-4-2',
            title: 'Disaster Management Act 2005 & Institutional Mechanism',
            description:
              'The legal backbone of disaster management in India, and the institutions it created — NDMA, SDMA, DDMA and NDRF.',
            subtopics: [
              'Disaster Management Act 2005 key provisions',
              'Institutional framework: NDMA, NIDM, SDMAs, DDMAs',
              'NDRF and SDRF',
              'Financial mechanism: National Disaster Response and Mitigation Funds',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Disaster Management Act 2005 explained',
                query: 'disaster management act 2005 ndma sdma ndrf in hindi',
                fallback: 'ndma ndrf in hindi disaster management',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'NDMA SDMA DDMA differences',
                query: 'ndma sdma ddma difference in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Who heads the NDMA?', hint: 'The Prime Minister of India.' },
              { question: 'What is the primary role of NDRF?', hint: 'Specialized response to disasters — search and rescue.' },
            ],
          },
          {
            id: 'dm-4-3',
            title: 'National Policy, Plans & Roles of Agencies',
            description:
              'The National Policy on Disaster Management, national guidelines and plans, and the roles of government and non-government agencies.',
            subtopics: [
              'National Policy on Disaster Management (2009)',
              'National guidelines and plans on disaster management',
              'Roles of local, state and national government',
              'Roles of Non-Government and Inter-Government agencies',
            ],
            periods: 4,
            marks: 8,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'National policy on disaster management',
                query: 'national policy disaster management 2009 india in hindi',
                fallback: 'disaster management policy plans india',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Name the body that helps in disaster management at the state level.', hint: 'State Disaster Management Authority (SDMA).' },
              { question: 'Give one role of NGOs in disasters.', hint: 'Campaigning, relief delivery and capacity building.' },
            ],
          },
        ],
      },
      {
        id: 'dm-m5',
        title: 'Module 5 · Science & Technology for Disaster Management',
        topics: [
          {
            id: 'dm-5-1',
            title: 'Geo-informatics: Remote Sensing, GIS, GPS',
            description:
              'How satellites and spatial technology map hazards and support disaster decisions.',
            subtopics: [
              'Remote sensing for disaster observation',
              'GIS for mapping and analysis',
              'GPS for positioning and navigation in response',
            ],
            periods: 2,
            marks: 6,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Remote sensing GIS GPS in disaster management',
                query: 'remote sensing gis gps disaster management in hindi',
                fallback: 'geo informatics disaster management',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What does remote sensing provide during floods?', hint: 'Satellite imagery of inundated areas for damage mapping.' },
              { question: 'How is GIS used in preparedness?', hint: 'Hazard mapping, evacuation route planning.' },
            ],
          },
          {
            id: 'dm-5-2',
            title: 'Disaster Communication & Early Warning',
            description:
              'Systems that detect hazards early and broadcast warnings that reach communities in time.',
            subtopics: [
              'Early warning systems and their dissemination',
              'Disaster communication systems',
              'Last-mile connectivity for warnings',
            ],
            periods: 2,
            marks: 6,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'one-shot',
                title: 'Early warning systems explained',
                query: 'early warning system disaster management in hindi',
                fallback: 'disaster communication system in india',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Name the four elements of an early warning system.', hint: 'Risk knowledge, monitoring, dissemination, response capability.' },
              { question: 'Why is last-mile connectivity important?', hint: 'Warnings must reach every person, not just cities.' },
            ],
          },
          {
            id: 'dm-5-3',
            title: 'Land-use Planning, Safe Designs & S&T Institutions',
            description:
              'Reducing risk through better planning, disaster-safe construction and India\'s science-and-technology institutions.',
            subtopics: [
              'Land use planning and development regulations',
              'Disaster-safe designs and construction',
              'Structural and non-structural mitigation',
              'S&T institutions for disaster management in India (NDMA, IMD, ISRO applications)',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Land use planning and safe construction',
                query: 'disaster safe construction land use planning mitigation in hindi',
                fallback: 'structural non structural mitigation in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Give one structural and one non-structural mitigation measure.', hint: 'Retrofitting vs awareness campaigns.' },
              { question: 'Why restrict construction in flood plains?', hint: 'Land use planning reduces exposure to flooding.' },
            ],
          },
        ],
      },
    ],
    references: [
      'Publications of NDMA on templates and guidelines for disaster management',
      'R. K. Bhandani — An Overview on Natural & Man-made Disasters and Their Reduction, CSIR',
      'H. N. Srivastava & G. D. Gupta — Management of Natural Disasters in Developing Countries, Daya Publishers',
      'David Alexander — Natural Disasters, Kluwer Academic',
      'G. K. Ghosh — Disaster Management, A P H Publishing',
      'D. B. N. Murthy — Disaster Management: Text & Case Studies, Deep & Deep',
    ],
    playlists: [
      r({
        kind: 'playlist',
        title: 'Disaster Management (OpenLearn / NPTEL style)',
        query: 'disaster management lectures in hindi playlist full course',
        language: 'hindi',
        rec: 1,
      }),
      r({
        kind: 'playlist',
        title: 'Disaster Management in India',
        query: 'disaster management india ndma playlist',
        language: 'hindi',
      }),
    ],
  },
  {
    id: 'ren',
    code: 'OE-3',
    name: 'Renewable Energy Technologies',
    shortName: 'Renewable Energy',
    semester: 6,
    category: 'elective',
    credits: 2,
    periods: '2L',
    description:
      'Clean energy fundamentals — the world energy picture, solar and wind systems, bio-energy, and other renewable sources like tidal, hydro, geothermal and fuel cells.',
    whyMatters:
      'Renewable energy is the fastest-growing engineering sector. The core physical principles here make a great capstone for your diploma and a smart career direction.',
    difficulty: 'beginner',
    examImportance: 'medium',
    learningOrder: [
      'Module 1 — Introduction to Renewable Energy',
      'Module 2 — Solar Energy',
      'Module 3 — Wind Energy',
      'Module 4 — Bio-Energy',
      'Module 5 — Other Renewable Energy Sources',
    ],
    totalPeriods: 40,
    objectives: [
      'Understand world energy use and the environmental aspects of energy utilisation.',
      'Explain the renewable energy scenario in India and around the world.',
      'Describe solar, wind, bio-energy and other renewable technologies.',
    ],
    outcomes: [
      'Understand the basics of Renewable Energy.',
      'Understand Solar Energy systems and applications.',
      'Understand Wind Energy systems.',
      'Understand Bio-Energy technologies.',
      'Understand Tidal, Wave, Hydro, Geothermal and other renewable sources.',
    ],
    modules: [
      {
        id: 'ren-m1',
        title: 'Module 1 · Introduction to Renewable Energy',
        topics: [
          {
            id: 'ren-1-1',
            title: 'World Energy Use & Environmental Aspects',
            description:
              'The global energy picture — how energy is consumed, how reserves are distributed, and the environmental cost of fossil fuels.',
            subtopics: [
              'World energy use and energy mix',
              'Reserves of conventional energy resources',
              'Environmental aspects of energy utilisation',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'playlist',
                title: 'Renewable Energy Full Course',
                query: 'renewable energy sources full course in hindi playlist',
                why: 'Chapter playlist for renewable energy',
                language: 'hindi',
              }),
              r({
                kind: 'deep',
                title: 'World energy scenario and environmental impact',
                query: 'world energy consumption fossil fuels environmental impact in hindi',
                fallback: 'energy resources and environment in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Why is the world energy mix shifting to renewables?', hint: 'Depleting reserves, emissions and climate change.' },
              { question: 'Name one environmental effect of coal-based power.', hint: 'CO2, SOx, NOx and fly ash pollution.' },
            ],
          },
          {
            id: 'ren-1-2',
            title: 'Renewable Energy Scenario in India & the World',
            description:
              'How much renewable capacity India and the world have installed, and the policies pushing the transition.',
            subtopics: [
              'Renewable energy scenario in India',
              'Global renewable energy scenario',
              'Renewable energy targets and policy drivers',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'deep',
                title: 'Renewable energy scenario in India',
                query: 'renewable energy scenario in india current status in hindi',
                fallback: 'india renewable energy potential solar wind',
                language: 'hindi',
              }),
              r({
                kind: 'one-shot',
                title: 'India renewable energy targets',
                query: 'india 2030 renewable energy target solar mission in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What is India\'s major renewable energy source by installed capacity?', hint: 'Solar and wind lead the installed capacity.' },
              { question: 'State one national renewable energy programme.', hint: 'National Solar Mission.' },
            ],
          },
          {
            id: 'ren-1-3',
            title: 'Potentials, Applications & Economics',
            description:
              'Renewable resource potential, where these technologies get applied, and the economics of renewable systems.',
            subtopics: [
              'Renewable energy potential in India',
              'Applications: grid, off-grid, distributed power',
              'Economics of renewable energy systems',
            ],
            periods: 2,
            marks: 6,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'one-shot',
                title: 'Economics of renewable energy',
                query: 'economics of renewable energy cost of solar wind hindi',
                fallback: 'renewable energy applications advantages disadvantages',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What is levelized cost of energy (LCOE)?', hint: 'Average cost per unit of electricity over the plant life.' },
              { question: 'Give two off-grid renewable applications.', hint: 'Solar home systems and village micro-grids.' },
            ],
          },
        ],
      },
      {
        id: 'ren-m2',
        title: 'Module 2 · Solar Energy',
        topics: [
          {
            id: 'ren-2-1',
            title: 'Solar Radiation & Its Measurement',
            description:
              'The sun as an energy source — solar radiation basics and the instruments used to measure it.',
            subtopics: [
              'Solar radiation: spectrum, beam and diffuse components',
              'Factors affecting insolation',
              'Measurement: pyranometer, pyrheliometer, sunshine recorder',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Solar radiation and its measurement',
                query: 'solar radiation measurement pyranometer pyrheliometer in hindi',
                fallback: 'solar radiation basics in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What does a pyranometer measure?', hint: 'Total (global) solar radiation on a surface.' },
              { question: 'What are the two components of solar radiation?', hint: 'Beam (direct) and diffuse radiation.' },
            ],
          },
          {
            id: 'ren-2-2',
            title: 'Collectors & Solar Thermal Power Generation',
            description:
              'Capturing solar heat — flat plate and concentrating collectors, direct thermal applications and solar thermal power plants.',
            subtopics: [
              'Flat plate collector: construction and working',
              'Concentrating collectors: parabolic trough, dish, tower',
              'Solar direct thermal applications',
              'Solar thermal power generation',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Flat plate and concentrating collectors',
                query: 'flat plate collector concentrating collector solar thermal in hindi',
                fallback: 'solar thermal power plant working in hindi',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'Solar thermal applications overview',
                query: 'solar water heater solar cooker concentrating collector hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Why use concentrating collectors?', hint: 'Higher temperatures by focusing sunlight on a small area.' },
              { question: 'Name a direct solar thermal application.', hint: 'Solar water heating, solar cooking, drying.' },
            ],
          },
          {
            id: 'ren-2-3',
            title: 'Photovoltaics: Solar Cells & PV Power Generation',
            description:
              'Turning light directly into electricity — the photovoltaic effect, solar cell construction and PV system deployment.',
            subtopics: [
              'Photovoltaic conversion principle',
              'Solar cell construction and materials (silicon)',
              'Solar PV module, array and balance of system',
              'Solar PV power generation and applications',
            ],
            periods: 3,
            marks: 8,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Solar cell and PV power generation',
                query: 'solar cell working photovoltaic effect pn junction in hindi',
                fallback: 'solar pv system explained in hindi',
                language: 'hindi',
              }),
              r({
                kind: 'one-shot',
                title: 'Solar PV system components',
                query: 'solar panel inverter battery charge controller working hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What is the photovoltaic effect?', hint: 'Generation of voltage/current when light strikes certain semiconductors.' },
              { question: 'Name the main components of a rooftop PV system.', hint: 'Panel, inverter, battery, charge controller, load.' },
            ],
          },
        ],
      },
      {
        id: 'ren-m3',
        title: 'Module 3 · Wind Energy',
        topics: [
          {
            id: 'ren-3-1',
            title: 'Wind Data, Energy Estimation & Site Selection',
            description:
              'Measuring the wind resource and choosing where a wind farm can actually be viable.',
            subtopics: [
              'Wind data collection and wind speed distribution',
              'Wind energy estimation: Betz limit',
              'Site selection factors for wind farms',
            ],
            periods: 3,
            marks: 8,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Wind energy estimation and Betz limit',
                query: 'wind energy estimation betz limit site selection in hindi',
                fallback: 'wind resource assessment in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What does the Betz limit state?', hint: 'A wind turbine cannot capture more than about 59% of wind power.' },
              { question: 'Name two site selection factors.', hint: 'Wind speed and consistency, grid connectivity.' },
            ],
          },
          {
            id: 'ren-3-2',
            title: 'Types of Wind Energy Systems & Performance',
            description:
              'Horizontal and vertical axis machines, their configuration and performance characteristics.',
            subtopics: [
              'Horizontal axis wind turbines (HAWT)',
              'Vertical axis wind turbines (VAWT): Darrieus, Savonius',
              'Turbine performance: power coefficient and efficiency',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Types of wind turbines',
                query: 'horizontal axis vertical axis wind turbine difference in hindi',
                fallback: 'wind turbine types explained hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Difference between HAWT and VAWT?', hint: 'Axis of rotation; HAWT common, VAWT omnidirectional.' },
              { question: 'What is a Savonius rotor?', hint: 'A drag-based vertical axis wind rotor.' },
            ],
          },
          {
            id: 'ren-3-3',
            title: 'Wind Turbine Generator, Safety & Environment',
            description:
              'Inside the nacelle — the generator and drive train — plus the safety, noise and environmental aspects of wind farms.',
            subtopics: [
              'Wind turbine generator components',
              'Safety and environmental aspects',
              'Bird impact, noise and land use concerns',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'one-shot',
                title: 'How a wind turbine works',
                query: 'how wind turbine works blades gearbox generator in hindi',
                fallback: 'wind turbine safety environmental impact',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What converts rotation into electricity inside a turbine?', hint: 'The generator, often driven through a gearbox.' },
              { question: 'Name two environmental concerns of wind farms.', hint: 'Bird/bat collision and noise.' },
            ],
          },
        ],
      },
      {
        id: 'ren-m4',
        title: 'Module 4 · Bio-Energy',
        topics: [
          {
            id: 'ren-4-1',
            title: 'Biomass Combustion, Gasifiers & Biogas Plants',
            description:
              'Converting organic matter into energy — direct combustion, biomass gasification and anaerobic digestion in biogas plants.',
            subtopics: [
              'Biomass direct combustion',
              'Biomass gasifiers and producer gas',
              'Biogas plants and anaerobic digestion',
            ],
            periods: 3,
            marks: 8,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Biomass gasification and biogas plant',
                query: 'biomass gasifier biogas plant anaerobic digestion in hindi',
                fallback: 'biogas plant working in hindi',
                language: 'hindi',
              }),
              r({
                kind: 'revision',
                title: 'Biogas plant types',
                query: 'deen bandhu janata biogas plant kachra plant working hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What gas is mainly produced in a biogas plant?', hint: 'Methane (CH4), with CO2 alongside.' },
              { question: 'What is producer gas?', hint: 'Combustible gas from biomass gasification — CO, H2, CH4, N2.' },
            ],
          },
          {
            id: 'ren-4-2',
            title: 'Digesters, Ethanol, Biodiesel & Cogeneration',
            description:
              'Digester designs, liquid biofuels — ethanol and biodiesel — and generating heat and power together.',
            subtopics: [
              'Digester types: floating-drum, fixed-dome',
              'Ethanol production from biomass',
              'Biodiesel from oils',
              'Cogeneration (combined heat and power)',
            ],
            periods: 3,
            marks: 7,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Ethanol biodiesel production',
                query: 'ethanol production biodiesel process in hindi',
                fallback: 'cogeneration combined heat power explained hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What feedstock is used for biodiesel?', hint: 'Vegetable oils, used cooking oil, animal fats.' },
              { question: 'What is cogeneration?', hint: 'Producing electricity and useful heat from the same fuel.' },
            ],
          },
          {
            id: 'ren-4-3',
            title: 'Biomass Applications',
            description:
              'Practical end uses of biomass energy — cooking, heating, power and rural energy supply.',
            subtopics: [
              'Biomass for cooking and heating',
              'Biomass power plants',
              'Rural and industrial biomass applications',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'beginner',
            resources: [
              r({
                kind: 'one-shot',
                title: 'Biomass energy applications',
                query: 'biomass energy applications power generation in hindi',
                fallback: 'biomass kya hai application hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Give two applications of biomass energy.', hint: 'Biogas cooking and biomass power plants.' },
              { question: 'Why is biomass considered carbon-neutral?', hint: 'CO2 released on combustion equals CO2 absorbed during growth.' },
            ],
          },
        ],
      },
      {
        id: 'ren-m5',
        title: 'Module 5 · Other Renewable Energy Sources',
        topics: [
          {
            id: 'ren-5-1',
            title: 'Tidal & Wave Energy',
            description:
              'Harnessing the oceans — tidal range and tidal current schemes, and wave energy converters.',
            subtopics: [
              'Tidal energy: ebb and flood generation',
              'Tidal barrage and tidal stream turbines',
              'Wave energy principles and converters',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'deep',
                title: 'Tidal and wave energy explained',
                query: 'tidal energy wave energy in hindi working principle',
                fallback: 'tidal power plant working in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What drives tidal energy generation?', hint: 'The rise and fall of sea level due to gravitational forces.' },
              { question: 'Where does wave energy come from?', hint: 'Energy transferred from wind to the ocean surface.' },
            ],
          },
          {
            id: 'ren-5-2',
            title: 'OTEC, Small Hydro & Geothermal',
            description:
              'Fish from ocean temperature differences, small-scale hydropower and the earth\'s internal heat.',
            subtopics: [
              'Open and closed OTEC cycles',
              'Small hydro and micro hydro',
              'Geothermal energy: dry steam, flash, binary plants',
            ],
            periods: 2,
            marks: 5,
            difficulty: 'intermediate',
            resources: [
              r({
                kind: 'one-shot',
                title: 'OTEC small hydro geothermal energy',
                query: 'otec open closed cycle small hydro geothermal energy in hindi',
                fallback: 'geothermal power plant working in hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'What does OTEC use as the energy source?', hint: 'The temperature difference between warm surface and cold deep sea water.' },
              { question: 'What is micro-hydro capacity limit?', hint: 'Typically below 100 kW to a few MW.' },
            ],
          },
          {
            id: 'ren-5-3',
            title: 'Hydrogen Storage, Fuel Cells & Hybrid Systems',
            description:
              'The future-facing sources — green hydrogen, fuel cell power, and systems that mix renewable sources.',
            subtopics: [
              'Hydrogen production and storage',
              'Fuel cell systems: PEM, SOFC and working',
              'Hybrid renewable energy systems',
            ],
            periods: 4,
            marks: 10,
            difficulty: 'advanced',
            resources: [
              r({
                kind: 'deep',
                title: 'Hydrogen energy and fuel cells',
                query: 'hydrogen fuel cell working in hindi pem sofc',
                fallback: 'fuel cell kya hai working hindi',
                language: 'hindi',
              }),
              r({
                kind: 'one-shot',
                title: 'Hybrid renewable energy systems',
                query: 'hybrid renewable energy system solar wind storage explained hindi',
                language: 'hindi',
              }),
            ],
            practice: [
              { question: 'Why is green hydrogen important?', hint: 'It stores renewable electricity as a storable, clean fuel.' },
              { question: 'What is a hybrid renewable system?', hint: 'Two or more sources combined, e.g., solar plus wind plus battery.' },
            ],
          },
        ],
      },
    ],
    references: [
      'O. P. Gupta — Energy Technology, Khanna Publishing (ed. 2018)',
      'J. W. Twidell & A. D. Weir — Renewable Energy Sources, EFN Spon',
      'S. P. Sukhatme — Solar Energy, Tata McGraw Hill',
      'Godfrey Boyle — Renewable Energy: Power for a Sustainable Future, Oxford University Press',
      'GN Tiwari & MK Ghoshal — Fundamentals of Renewable Energy Sources, Narosa',
    ],
    playlists: [
      r({
        kind: 'playlist',
        title: 'Renewable Energy Sources Lectures',
        query: 'renewable energy sources lectures in hindi playlist',
        language: 'hindi',
        rec: 1,
      }),
      r({
        kind: 'playlist',
        title: 'Solar and Wind Energy Course',
        query: 'solar energy wind energy course in hindi playlist',
        language: 'hindi',
      }),
    ],
  },
];