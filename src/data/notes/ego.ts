import type { ChapterNote } from '../../types';

export const EGO_NOTES: ChapterNote[] = [
  {
    moduleId: 'ego-m1',
    title: 'Module 1 · Introduction to E-Governance',
    sections: [
      {
        h: '1.1 What is E-Governance?',
        items: [
          '**E-Governance (electronic governance)** — use of ICT to deliver government services, information and participation to citizens, businesses and government itself.',
          'Differs from **e-government**: governance = decision-making + process reform, broader than just computerising services.',
          '**Objectives**: transparency, accountability, efficiency, citizen-centric services, reduced corruption, inclusion (Digital India).',
          '**Key enablers**: Aadhaar, UPI, Internet penetration, mobile (JAM: Jan Dhan–Aadhaar–Mobile).',
        ],
      },
      {
        h: '1.2 Models of Interaction',
        items: [
          '**G2C** — citizen services (passport, certificates, tax filings).',
          '**G2B** — business services (licences, GST, e-tenders).',
          '**G2G** — inter-government data sharing & workflows.',
          '**G2E** — employee services (payroll, HR); C2G — feedback/participation.',
        ],
      },
      {
        h: '1.3 National Initiatives',
        items: [
          '**Digital India** — three pillars: digital infrastructure, on-demand services, digital empowerment.',
          '**National e-Governance Plan (NeGP)** — the core State/city/mission-mode projects (MMPs).',
          'Portals: india.gov.in (National Portal), DigiLocker, UMANG, GeM, NHA (Digital Locker ecosystem).',
          '**Common Service Centres (CSC)** — rural access points delivering G2C services.',
          '**MeitY** is the nodal ministry; State data centres (SDCs) host e-gov apps.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define e-governance and differentiate from e-government.',
          'Explain G2C/G2B/G2G with one real service each.',
          'Role of Digital India / NeGP in transforming service delivery.',
          'List benefits and challenges (digital divide, cybersecurity, legacy data).',
        ],
      },
    ],
  },
  {
    moduleId: 'ego-m2',
    title: 'Module 2 · Government Process Re-engineering (GPR)',
    sections: [
      {
        h: '2.1 Process View of Government',
        items: [
          'Services depend on **business processes** — licence issuance, benefit disbursement, registrations, redressal.',
          'Current manual processes suffer: delays, multiple visits, paperwork, discretion, inconsistent data.',
          '**GPR (Government Process Re-engineering)** — redesign processes (NOT just digitise) to be simpler, faster, transparent.',
          'Steps: map as-is process → identify bottlenecks/avoidable steps → design to-be process → automate → monitor (SLAs/KPIs).',
        ],
      },
      {
        h: '2.2 Digitising Service Delivery',
        items: [
          '**One service, multiple channels**: web, mobile app, CSC, call centre — all backed by a single process engine.',
          '**Workflow automation**: role-based approvals, e-signature (Aadhaar eSign), e-office for file movement.',
          '**Standards & interoperability**: XML/JSON APIs, data standards (NIC), OGD (open government data) publishing.',
          '**Digital identity & consent**: Aadhaar authentication, consent-based data sharing (DEPA model).',
        ],
      },
      {
        h: '2.3 Front/Back-end Challenges',
        items: [
          'Process ownership, change management, training of officials (e-Governance skill building).',
          'Integration with legacy systems; unique citizen IDs; data quality.',
          'Success factors: political will, process owners, clear KPIs, grievance redressal.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain GPR with an example (e.g. birth certificate) before/after.',
          'Why is re-engineering more than automation?',
          'Role of e-office and workflows in file processing.',
          'List challenges in shifting government services online.',
        ],
      },
    ],
  },
  {
    moduleId: 'ego-m3',
    title: 'Module 3 · Architecture & Models of E-Governance',
    sections: [
      {
        h: '3.1 Architectural Layers',
        items: [
          'Citizen interface layer (portals, apps, kiosks) → service delivery (middleware, workflow) → back-office (databases, registries) → infrastructure (networks, DC, cloud).',
          '**Government Cloud (MeghRaj)** — GI Cloud layers: IaaS/PaaS/SaaS for shared infrastructure.',
          '**SWAN** (State WAN) — network backbone; **NKN** (National Knowledge Network) for research connectivity.',
          'Service bus/interoperability: document exchange platform, e-Sign, digital locker as APIs.',
        ],
      },
      {
        h: '3.2 Service Delivery Models',
        items: [
          '**Centralised** — one portal, common data centre (fast rollout, single control).',
          '**Decentralised** — departments own separate systems (local flexibility, integration issues).',
          '**Hybrid / federated** — federated architecture with shared identity + interoperable services (used in NeGP MMPs).',
          '**BPO model** — outsourcing support/processing to CSC/third parties.',
        ],
      },
      {
        h: '3.3 Middleware & Security',
        items: [
          '**Middleware** connects front office to back office: message queues, service bus, API gateway.',
          'Identity stack: Aadhaar authentication + e-KYC + eSign; consent & data privacy (DPDP Act).',
          'Security controls: SSL/TLS, encryption, auditing logs, firewall, ISO 27001 for data centres.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Draw the four-layer architecture of an e-governance system.',
          'Compare centralised vs decentralised service delivery.',
          'Role of state data centre, SWAN and cloud (MeghRaj) in infrastructure.',
          'Explain identity + consent-based (DEPA-like) data sharing architecture.',
        ],
      },
    ],
  },
  {
    moduleId: 'ego-m4',
    title: 'Module 4 · E-Governance Projects (National & State)',
    sections: [
      {
        h: '4.1 National Mission Mode Projects',
        items: [
          '**MMPs** implemented in central, state and integrated categories (24+).',
          'Central: PASS/Passport Seva, Income Tax e-filing, MCA21 (company filings), e-Courts, UIDAI.',
          'State: e-District, land records (Bhuiyan/Bhulekh), transport (Vahan/Sarathi), e-Prisons.',
          'Integrated: National e-Billing, e-Tourism, e-Biz.',
        ],
      },
      {
        h: '4.2 Flagship Projects',
        items: [
          '**DigiLocker** — verifiable documents in citizens’ cloud wallet.',
          '**UMANG** — unified mobile app for 1000+ government services.',
          '**Jeevan Pramaan** — digital life certificate for pensioners.',
          '**GeM** — Government e-Marketplace for procurement; **CPI/GGP** (Government e-Payment gateway).',
          '**e-Sanjeevani** — national telehealth; **CoWIN/e-Hospital** health services.',
        ],
      },
      {
        h: '4.3 Project Success & Evaluation',
        items: [
          'Success factors: process re-engineering, connectivity, trained staff, user adoption, sustainability.',
          'Evaluation criteria: reach (users served), turnaround time, transactions, cost per service, citizen satisfaction (survey scores).',
          'Case examples: Passport Seva — appointment+barcode+tracking turnaround; MCA21 — paperless company registration.',
          'Failures often stem from no GPR, poor change management, vendor lock-in.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Describe any two national e-governance projects (services, benefits, process).',
          'What makes a project successful? List 5 evaluation criteria — use a scoring plan.',
          'Compare e-District vs Passport Seva models.',
          'Explain DigiLocker/UMANG architecture and benefits.',
        ],
      },
    ],
  },
  {
    moduleId: 'ego-m5',
    title: 'Module 5 · Mini Project in E-Governance',
    sections: [
      {
        h: '5.1 Project Selection & Scope',
        items: [
          'Pick a **real government service** (ration card, birth certificate, licence, grievance portal, e-ticketing) and re-design its online delivery.',
          '**Scope doc**: problem statement, users (citizens, operators, officers), services, non-functional needs (load, security, uptime).',
          '**Process mapping**: as-is steps (documents, approvals, turnaround) vs to-be automated workflow.',
        ],
      },
      {
        h: '5.2 Design, Build & Demo',
        items: [
          '**Tech stack**: front-end forms + backend (e.g. PHP/Node) + database + simple workflow (status tracking, application id).',
          '**Features to implement**: user registration/login, application form with validation, document upload, status tracking, officer dashboard, notifications.',
          '**Database design**: users, applications, documents, status_history tables with proper keys.',
          'Follow security basics: password hashing, input validation, role-based access.',
        ],
      },
      {
        h: '5.3 Documentation & Evaluation',
        items: [
          'Deliverables: SRS-lite (requirements), ER diagram, screen mockups, code, test cases, demo video.',
          'Show **before vs after** turnaround time and number of visits.',
          'Present metrics: transactions, error rate, user feedback (survey).',
          'Future work: integration with DigiLocker, Aadhaar eSign, payment gateway (SBI e-pay/GeM).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Choose a service and write the project proposal (objective, scope, process flow).',
          'List 5 evaluation criteria with a scoring plan for the project.',
          'Draw the ER diagram and one key workflow of your project.',
          'Explain how status tracking and role-based dashboards are implemented.',
        ],
      },
    ],
  },
];