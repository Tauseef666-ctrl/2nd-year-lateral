import type { ChapterNote } from '../../types';

export const ICON_NOTES: ChapterNote[] = [
  {
    moduleId: 'icon-m1',
    title: 'Module 1 · The Constitution: Introduction',
    sections: [
      {
        h: '1.1 Making of the Constitution',
        items: [
          '**Constituent Assembly** (1946): first meeting 9 Dec 1946; **Dr. B.R. Ambedkar** chaired the Drafting Committee; Constitution **adopted 26 Nov 1949**, **came into force 26 Jan 1950** (Republic Day); took ~2 yrs 11 months.',
          'Modeled on **Government of India Act 1935** + borrowings: UK (parliamentary system, rule of law), USA (fundamental rights, judicial review), Ireland (DPSP), Canada (federation), USSR (duties), Germany/South Africa (amendment).',
          'The Preamble was amended once by the **42nd Amendment (1976)** — added **"Socialist, Secular, Integrity"**.',
        ],
      },
      {
        h: '1.2 Preamble & Fundamental Rights',
        items: [
          '**Preamble** declares India a **Sovereign, Socialist, Secular, Democratic Republic**; secures **Justice (social, economic, political), Liberty (thought, expression, belief, faith, worship), Equality (status and opportunity), Fraternity (dignity + unity & integrity of nation)**.',
          '**Fundamental Rights (Part III, Arts 12–35)**: Art 14 equality before law, Art 15-16 no discrimination/equal opportunity, Art 19 six freedoms, Art 21 life & personal liberty (and 21A education), Art 22 protection against arrest, Art 23-24 exploitation & child labour, Art 25-28 religion freedom, Art 29-30 cultural & educational rights, Art 32 constitutional remedies (heart and soul — Ambedkar).',
          'Rights are enforceable in courts; **reasonable restrictions** allowed; writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto.',
          '**Fundamental Duties (Art 51A, 42nd Amendment 1976)**: respect national flag/constitution, cherish freedom struggle ideals, protect sovereignty, harmony, dignity of women, protect environment, develop scientific temper, safeguard public property, strive for excellence; **duty of parents to educate children (86th Amendment)**.',
          '**Directive Principles (Part IV, Arts 36–51)**: non-justiciable social/economic goals (Gandhian, socialist, liberal-intellectual streams) — widest application in governance.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain the key words of the Preamble.',
          'List Fundamental Rights under Part III with articles.',
          'Differentiate Fundamental Rights vs Directive Principles.',
          'What are the writs and when is each issued?',
          'Enumerate Fundamental Duties; which amendment added them?',
        ],
      },
    ],
  },
  {
    moduleId: 'icon-m2',
    title: 'Module 2 · Union Government',
    sections: [
      {
        h: '2.1 President & Vice-President',
        items: [
          '**President** — head of state; elected by an electoral college (elected MPs of both houses + elected MLAs) through **single transferable vote** and proportional representation; term 5 years; removable by **impeachment** for violation of the Constitution (special majority in Parliament).',
          '**Qualifications**: citizen of India, 35+, qualified to be a Lok Sabha member, must not hold a government post of profit.',
          '**Powers**: executive (appoints PM/Council ministers, governors, judges, CAG, EC), legislative (summon, dissolve Lok Sabha, assent to bills — won’t return money bills), judicial (pardon/reprieve), emergency (National 352, State 356, Financial 360), commander-in-chief, diplomatic (treaties).',
          'All executive action in the name of the President — real power lies with the Council of Ministers (Art 74).',
          '**Vice-President** — ex-officio Chairman of Rajya Sabha; acts as President during vacancy; elected by both houses (separate electoral college).',
        ],
      },
      {
        h: '2.2 Prime Minister & Parliament',
        items: [
          '**Prime Minister** — leader of ruling party / majority in Lok Sabha; head of Council of Ministers; real executive authority (Art 74-75); allocates portfolios and chairs cabinet.',
          '**Council of Ministers**: Cabinet (policy formulation) — Ministers of State, Deputy Ministers; collective responsibility to Lok Sabha (Art 75).',
          '**Parliament** = President + Rajya Sabha (Council of States, ~250, 12 nominated, 6-year staggered terms, 1/3 retire every 2 years) + Lok Sabha (House of the People, max 550, 5-year term).',
          '**Legislative process**: bill introduced → standing committee → reading stages → passed by both houses → assent; **money bills** only in Lok Sabha; joint sitting resolves deadlock; types of bills (ordinary, money, financial, constitutional amendment).',
          'Parliamentary control: question hour, zero hour, motions, no-confidence, committees (CAG, PAC).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain the election and powers of the President.',
          'Write the composition of Rajya Sabha and Lok Sabha.',
          'Describe the legislative procedure of an ordinary bill.',
          'What is the relationship between President and Council of Ministers?',
          'Define collective responsibility and emergency powers of the President.',
        ],
      },
    ],
  },
  {
    moduleId: 'icon-m3',
    title: 'Module 3 · State Government',
    sections: [
      {
        h: '3.1 Governor & Chief Minister',
        items: [
          '**Governor** — nominal head of state (Art 153-162); appointed by the President; serves during pleasure of President (usually 5 years); qualifications like President but no election; **executive, legislative, financial, judicial and discretionary powers** (reserve bills for President, report to President, rule under 356).',
          '**Chief Minister** — real executive head of the state; appointed by Governor; heads Council of Ministers with collective responsibility to the state legislature (Vidhan Sabha).',
          '**State Council of Ministers** — advises Governor; allocation of portfolios; must be members of state legislature.',
          '**State Legislature**: Legislative Assembly (Vidhan Sabha — direct election, up to 500) and optional Legislative Council (Vidhan Parishad — like RS, 1/6 size, members via indirect/local elections); most states are unicameral.',
          '**Ordinary vs money bills** in states; assent/withholding; Governor’s role in President’s rule (356).',
        ],
      },
      {
        h: '3.2 State Secretariat & Administration',
        items: [
          '**State Secretariat** = aid/advice to ministers (department heads — Secretaries); chief secretary coordinates; the highest authority for planning/policy.',
          '**Cabinet Secretary of the state**, chief secretary deals with all secretaries; secretariat means the top civil services wing of the state.',
          '**Governor’s duties during ordinances** and dissolving the assembly (with CM/council advice).',
          'Relations between Centre–State: legislative, administrative, financial (Art 245-263); role of NITI Aayog/Finance Commission.',
          '**Article 356** (President’s Rule) — suspension of state government on failure of constitutional machinery; requires parliamentary approval (usually 6 months, extendable).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare President vs Governor (mode of appointment and powers).',
          'Explain functions of the Chief Minister and Council of Ministers at state level.',
          'What is the State Secretariat and who heads it?',
          'Explain Article 356 and its safeguards.',
          'Describe composition of Vidhan Sabha vs Vidhan Parishad.',
        ],
      },
    ],
  },
  {
    moduleId: 'icon-m4',
    title: 'Module 4 · Local Administration',
    sections: [
      {
        h: '4.1 District Administration',
        items: [
          '**District Collector/DM** (Deputy Commissioner) — pivotal district officer; dual role: district magistrate (law & order, land records) and collector (revenue & development); coordinates line departments.',
          'Subdivisions → Tehsil/Taluk → Village; revenue hierarchy: Tehsildar, Naib Tehsildar, Patwari/Lehkrapal (land records).',
          '**Police hierarchy**: Superintendent of Police (SP) at district, in-charge under DM for order.',
          '**District magistrate powers**: curfew, licensing of arms, controls, disaster response, coordination with RTO/health.',
        ],
      },
      {
        h: '4.2 Municipal Corporation & Panchayat',
        items: [
          '**73rd Amendment (1992)** — constitutional status to **Panchayati Raj**: Gram Panchayat (village), Panchayat Samiti/Block, Zilla Parishad (district); direct elections, reservations (SC/ST/women), **Gram Sabha** = village assembly.',
          '**74th Amendment (1992)** — **Urban Local Bodies**: Municipal Corporation (big cities), Municipality/Municipal Council (towns), Nagar Panchayat (transitional); committees for planning and wards.',
          '**Urban governance functions**: sanitation, water supply, roads, street lights, building regulations, birth/death registration, property taxes; mayor/councilor + commissioner (executive).',
          '**State Finance Commission / Election Commission** (state-level) support local bodies; 11th & 12th Schedules list local functions.',
          '**Sources of revenue**: local taxes (property, profession), grants-in-aid, scheme funds (SWM), user charges.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Describe the three-tier structure of Panchayati Raj.',
          'How did the 73rd and 74th Amendments strengthen local self-government?',
          'Roles and functions of District Collector.',
          'Explain composition and functions of a Municipal Corporation.',
          'Write short notes on Gram Sabha and Zilla Parishad.',
        ],
      },
    ],
  },
  {
    moduleId: 'icon-m5',
    title: 'Module 5 · Election Commission',
    sections: [
      {
        h: '5.1 Role & Functioning of the EC',
        items: [
          '**Election Commission of India (ECI)** — independent constitutional body (Art 324) supervising parliamentary, state and local elections; now multi-member (CEC + 2 Election Commissioners since 1993).',
          '**Appointments**: appointed by President; security of tenure; removal only like a Supreme Court judge (quasi-judicial independence); staff deputed from governments.',
          '**Functions**: delimitation/constituency boundaries, electoral rolls & EPIC (voter ID), registration/recognition of parties, symbols, Model Code of Conduct (MCC), conduct/liquidation of elections, declaring results, regulating campaign finance & expenditure.',
          '**Election process**: notification → nominations/scrutiny → symbolic code → campaigning → polling (EVMs + VVPAT) → counting → results & formalities; **model code** operative from announcement to result.',
          '**Breaches**: booth capturing, bribery, impersonation — electoral offences; offences punishable under R. P. Act 1950/1951; constitutional courts resolve disputes; issuance of Identity cards sense: epics.',
          'Recent: VVPAT (voter-verifiable paper audit trail), remote/absentee voting, Voter Helpline app; role of state/UT chief electoral officers.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain the composition, appointment and independence of the Election Commission.',
          'Describe the functions of EC during an election cycle.',
          'What is the Model Code of Conduct?',
          'Role of EVM and VVPAT in free and fair elections.',
          'How is a Chief Election Commissioner removed?',
        ],
      },
    ],
  },
];