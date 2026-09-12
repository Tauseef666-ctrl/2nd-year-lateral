import type { ChapterNote } from '../../types';

export const PD_NOTES: ChapterNote[] = [
  {
    moduleId: 'pd-m1',
    title: 'Module 1 · Design Thinking & Ideation',
    sections: [
      {
        h: '1.1 Design Thinking',
        items: [
          '**Design thinking** — human-centred, iterative process to solve ill-defined problems; emphasises empathy and experimentation.',
          '**Five phases (Stanford d.school)**: **Empathize → Define → Ideate → Prototype → Test** (iterate as needed).',
          '**Empathize** — understand users through interviews, observation, immersion; build personas & empathy maps.',
          '**Define** — synthesise insights into a problem statement (point of view, “how might we…?”).',
          '**Ideate** — generate many ideas: brainstorming rules (defer judgement, build on others), SCAMPER, mind-mapping.',
        ],
      },
      {
        h: '1.2 Prototyping & Testing',
        items: [
          '**Prototype** — low-fidelity (paper, wireframes, storyboards) → high-fidelity (3D print, clickable UI); purpose: learn quickly, fail cheaply.',
          '**Test** — put prototype before real users; observe, collect feedback, refine; iterate the loop.',
          '**Minimum Viable Product (MVP)** — smallest usable version to validate core value.',
          'Value-driven: desirability (people) × feasibility (tech) × viability (business).',
        ],
      },
      {
        h: '1.3 Product Development Context',
        items: [
          'From idea to launch: research → concept → design → engineering → manufacture → launch → iterate.',
          'Role of **ergonomics, aesthetics, usability** and sustainability (eco-design) in product design.',
          'Tools: sketching, CAD (Fusion 360), rapid prototyping (3D printer), user testing grids.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Describe the five phases of design thinking with an example product.',
          'Define empathic persona; create a simple empathy map.',
          'Explain how low-fidelity prototyping reduces risk.',
          'What is an MVP and how does it support testing assumptions?',
        ],
      },
    ],
  },
];