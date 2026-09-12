import type { ChapterNote } from '../../types';

export const ROB_NOTES: ChapterNote[] = [
  {
    moduleId: 'rob-m1',
    title: 'Module 1 · Industrial Safety Practices & Robotics I',
    sections: [
      {
        h: '1.1 Industrial Safety Basics',
        items: [
          '**Hazards & safety**: electrical (shock, arc), mechanical (moving parts, pinch), chemical (toxic fumes), thermal, noise.',
          '**Safety hierarchy**: eliminate → substitute → engineering controls → administrative controls → PPE.',
          '**Colour coding**: red=fire/fire-fighting, yellow=caution, green=safe/first-aid, blue=mandatory sign, orange=high risk.',
          '**Machine guarding**, interlocks, emergency stop (E-stop) — purpose and use.',
          '**Housekeeping 5S** (sort, set in order, shine, standardize, sustain) reduces accidents; safe practices around robots.',
        ],
      },
      {
        h: '1.2 Fire & Electrical Safety',
        items: [
          '**Fire triangle**: fuel + oxygen + heat; fire extinguisher types (A solid, B liquid, C electrical, D metal) & use (PASS).',
          'Electrical: earthing/grounding, insulation, isolation before maintenance; lockout–tagout (LOTO).',
          'First aid essentials — burns, electric shock, bleeding, fractures.',
        ],
      },
      {
        h: '1.3 Robotics Fundamentals',
        items: [
          '**Robot** — reprogrammable, multifunctional manipulator designed to move materials/parts/tools; ISO definition.',
          '**Laws of robotics** (Asimov) — basic safety principles (a robot may not harm humans…).',
          '**Types**: industrial (articulated, SCARA, delta, Cartesian) vs mobile vs service robots.',
          '**Applications**: welding, painting, pick-and-place, assembly, packaging, inspection.',
          '**Advantages**: precision, repeatability, work in hostile environments, 24/7 output; limitations: cost, programming effort, job displacement concern.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain any 5 industrial safety rules and the hazard hierarchy.',
          'State the use of each fire extinguisher class.',
          'Define robot; classify industrial robots with one application each.',
          'List safety devices around a robot cell (guards, interlocks, light curtains, E-stop).',
        ],
      },
    ],
  },
  {
    moduleId: 'rob-m2',
    title: 'Module 2 · Jogging of Robot',
    sections: [
      {
        h: '2.1 Robot Anatomy',
        items: [
          '**Components**: manipulator (links & joints), end-effector (gripper/tool), wrist (pitch, yaw, roll), controller, power unit, sensors.',
          '**Degrees of freedom (DOF)** — number of independent motions (6 DOF = full positioning + orientation).',
          '**Work envelope** — space reachable by the wrist; depends on joint ranges; must match application space.',
          '**Coordinate systems (jogging)**: world (base), tool, user/work, joint — each defines motion reference.',
        ],
      },
      {
        h: '2.2 Jog Operations',
        items: [
          '**Jog** = manually moving the robot for setup/teaching at low speed using the teach pendant.',
          'Modes: **joint jog** (move individual axes), **linear jog** (TCP moves in a straight line), **reorient** (rotate TCP in space).',
          '**Incremental vs continuous jogging**; speed control; deadman switch for safety.',
          '**Home/reference position**, accurate zeroing of joints before teaching.',
        ],
      },
      {
        h: '2.3 Safety & Setup During Jogging',
        items: [
          'Run at **reduced speed** when a person is inside the work envelope.',
          'Use teach enable/grip switch, confirm direction, watch for pinch points.',
          'Guidelines: align tool with target, keep TCP calibration (TCP calibration procedure), record positions to change later.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Sketch robot wrist motions and explain world/tool/joint coordinate systems.',
          'What is the work envelope and why does it matter in cell layout?',
          'Explain joint jog vs linear jog with pendant controls.',
          'List 5 safety precautions while jogging a robot.',
        ],
      },
    ],
  },
  {
    moduleId: 'rob-m3',
    title: 'Module 3 · Programming using Teach Pendant',
    sections: [
      {
        h: '3.1 Programming Methods',
        items: [
          '**On-line (teaching)**: teach pendant → point recording + motion commands; fast, works under load, verifies reach.',
          '**Off-line programming**: CAD/simulation software (RoboDK, RobotStudio) — no downtime, visualisation, easy editing; needs model accuracy.',
          '**Lead-through** — manually guide the arm while recording positions (used for painting/spot welding).',
        ],
      },
      {
        h: '3.2 Teach Pendant Programming',
        items: [
          '**Teach pendant parts**: JOG & speed keys, deadman switch, navigation, edit keys, LCD; student practice with pendants (e.g. ABB/FANUC/KUKA).',
          '**Basic flow**: create program → define HOME → move jog to points → record points → insert motions (MOVJ, MOVL, MOVC) → set I/O (gripper open/close) → test at low speed → run automatic.',
          '**Motion instructions**: MOVJ (joint, fastest, path not exact), MOVL (linear, exact straight line), MOVC (circular).',
          '**Common tasks**: palletizing, pick-and-place, dispensing — with loops & branching.',
        ],
      },
      {
        h: '3.3 Structure & Care',
        items: [
          'Program = ordered list of instructions with stored world positions; editing/inserting/deleting points.',
          'Save programs & backups; naming conventions; comments.',
          'Program test: step mode → low speed → full cycle in automatic.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write the step sequence to teach a palletizing/pick-and-place program using a teach pendant.',
          'MOVJ vs MOVL vs MOVC — features and when to use each.',
          'Compare on-line vs off-line programming with pros/cons.',
          'Explain functions of the deadman switch and speed control in teaching.',
        ],
      },
    ],
  },
  {
    moduleId: 'rob-m4',
    title: 'Module 4 · Robot Integration with PLC & HMI',
    sections: [
      {
        h: '4.1 PLC Basics',
        items: [
          '**PLC** — programmable logic controller: CPU, I/O modules, power supply, programming software; scan cycle (read → execute → update).',
          '**Ladder logic**: rungs of contacts (inputs) & coils (outputs); timers, counters, latches.',
          'Interfacing robot to PLC through **digital I/O** — interlocks, handshaking signals.',
        ],
      },
      {
        h: '4.2 Integration Strategy',
        items: [
          '**Robot ↔ PLC communication**: PLC unlocks robot (permissive), robot signals cycle-end/product-present; safely controlled by interlocks.',
          '**Interface wiring**: PLC outputs → robot inputs (START, part-here); robot outputs → PLC inputs (cycle-complete, fault).',
          'Handshake = request + acknowledge before transfer to avoid lost signals.',
          '**HMI (Human-Machine Interface)**: touch screen panels (HMI software: WinCC, FactoryTalk, built-in designer) displaying status, cycle counts, alarms; operator controls (auto/manual, reset).',
          '**Safety function**: safety PLC/relay system, E-stops, light curtains feeding circuit into robot controller per ISO 10218/TS 15066; power & force limiting, safe speed in collaborative cells.',
        ],
      },
      {
        h: '4.3 Commissioning',
        items: [
          'I/O mapping table (signal name, PLC address, robot I/O), testing with simulation mode.',
          'Sequence check: start request → robot cycle → done → next part.',
          'Fault handling: fault codes, alarms on HMI, diagnostics.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Draw the I/O handshake diagram between PLC and robot.',
          'Write a ladder rung for the robot permissive interlock.',
          'Explain how an HMI displays and controls an automated cell.',
          'Which safety devices protect an operator and how do they integrate?',
        ],
      },
    ],
  },
  {
    moduleId: 'rob-m5',
    title: 'Module 5 · Advanced Robot Programming',
    sections: [
      {
        h: '5.1 Advanced Concepts',
        items: [
          '**Motion**: interpolation, blending of paths, TCP speed & acceleration control.',
          '**Frames & transforms**: base, tool, user frames; shift/sync operations; base shift calibration (3-point method).',
          '**Control structures**: loops, subroutines (calls), conditional execution, error recovery routines.',
          '**Sensors in programming**: force control (force/torque), vision guided motion (camera → target offset), conveyor tracking.',
          '**Vision integration**: camera calibration, pick in 2D/3D, adjustments to taught positions.',
        ],
      },
      {
        h: '5.2 Synchronisation & Flexibility',
        items: [
          'Sychronised motion with conveyor (tracking), multi-robot coordination, cell sequencing.',
          '**Payload & TCP redefinition** for tool changes; weight/centre-of-gravity setting for dynamic accuracy.',
          '**Spot welding**: weld schedule, gun servoing; **dispensing**: speed/path consistency.',
        ],
      },
      {
        h: '5.3 Beyond the Pendant',
        items: [
          'Off-line analytics: digital twin, simulation of cycle time, reachability.',
          '**ROS (Robot Operating System)** — open-source framework, RViz, MoveIt for simulation programming.',
          '**Emerging**: cobots (UR3/UR5) — safe, teachable by hand-guidance; safety-rated soft limits; applications in SMEs.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain 3-point base calmibration and why tool frames matter.',
          'How does a vision system refine a robot’s pick position?',
          'Write/describe a program with subroutine for a dual-gripper cycle.',
          'Short note on collaborative robots and their safety philosophy.',
        ],
      },
    ],
  },
];