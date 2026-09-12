import type { ChapterNote } from '../../types';

export const PM_NOTES: ChapterNote[] = [
  {
    moduleId: 'pm-m1',
    title: 'Module 1 · Concept of a Project',
    sections: [
      {
        h: '1.1 Nature of Projects',
        items: [
          '**Project** = a temporary endeavour with a defined objective, constrained by time, cost and scope.',
          '**Iron triangle**: scope ↔ time ↔ cost (a change in one forces a change in others).',
          '**Project vs routine operations**: unique, one-time, has start/end, defined budget & team.',
          '**Program & portfolio**: a program groups related projects; a portfolio manages programs/projects strategically.',
        ],
      },
      {
        h: '1.2 Project Life Cycle',
        items: [
          'Phases: **initiation → planning → execution → monitoring & control → closing (handover)**.',
          'Each phase ends with a milestone/deliverable and a go/kill decision.',
          '**Stakeholders** — sponsor, customer, team, vendors; stakeholder analysis (power/interest).',
          '**Project management (PMI definition)** — application of knowledge, skills, tools to meet project requirements.',
        ],
      },
      {
        h: '1.3 Project Manager & Types',
        items: [
          '**Roles**: planning, organising, leading, controlling; hard (technical) vs soft (leadership) skills.',
          'Classification: small/medium/large; manufacturing vs construction vs software vs R&D — each with distinct risk profiles.',
          'Project organisation structures: functional, projectised, matrix.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define project and distinguish it from operations/example (constructing a bridge vs running a plant).',
          'Explain the project life cycle with key activities per phase.',
          'Draw and explain the iron triangle.',
          'Short note on project manager’s responsibilities and stakeholder analysis.',
        ],
      },
    ],
  },
  {
    moduleId: 'pm-m2',
    title: 'Module 2 · Capital Budgeting Process',
    sections: [
      {
        h: '2.1 Investment Appraisal',
        items: [
          '**Capital budgeting** — planning long-term investments in fixed assets that yield returns over several years.',
          '**Steps**: identify opportunity → estimate cash outflows/inflows → evaluate using techniques → selection & approval → implementation → review.',
          'Importance: long-term, irreversible, large funds – errors are costly.',
          '**Time value of money**: a rupee today is worth more than a rupee tomorrow; future value `FV=PV(1+r)ⁿ`; discounting = present value.',
        ],
      },
      {
        h: '2.2 Sources of Funds',
        items: [
          '**Equity** — owners’ capital; **debt** — loans/bonds (interest is tax-deductible); **retained earnings**; **leasing**.',
          '**Cost of capital (WACC)** — weighted average of equity & debt costs; used as discount rate.',
          'Risk & return trade-off; gearing (leverage) effects.',
        ],
      },
      {
        h: '2.3 Cash Flow Basics',
        items: [
          '**Initial outlay**, **annual net cash inflows** (profit after tax + depreciation), **terminal value** (salvage + working capital recovery).',
          'Incremental vs sunk costs; taxes; working capital changes.',
          'Inflation effect on cash flows and discount rate choice.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain the capital budgeting process in 6 steps.',
          'What is time value of money? Compute PV of ₹1,00,000 received in 3 years at 10%.',
          'Distinguish equity vs debt financing with cost implications.',
          'List and define the components of cash outflow/inflow of a project.',
        ],
      },
    ],
  },
  {
    moduleId: 'pm-m3',
    title: 'Module 3 · Financial Estimates and Projections',
    sections: [
      {
        h: '3.1 Reports & Projections',
        items: [
          '**Project report (DPR)** — technical, financial and economic viability of a project.',
          '**Cost of project**: land & site, building, plant & machinery, installation, preliminary expenses, working capital margin.',
          '**Means of finance**: equity, term loans, unsecured loans — matching funding mix.',
          '**Depreciation** — methods: straight line vs written-down value; effects on tax and cash flow.',
        ],
      },
      {
        h: '3.2 Projected Statements',
        items: [
          '**Profit & Loss projection** — revenue, COGS, gross profit, expenses, net profit across years.',
          '**Cash flow statement** — operating/investing/financing flows; reveals liquidity, not just profit.',
          '**Projected balance sheet** — assets = liabilities + owners’ equity at year-end.',
          '**Break-even** — fixed vs variable costs; `BEP(units) = Fixed Cost / (Selling Price − Variable Cost)`.',
        ],
      },
      {
        h: '3.3 Cost Controls & Estimation',
        items: [
          'Direct/indirect costs; overhead allocation; contingency & escalation allowances.',
          'Estimating accuracy vs stage; re-estimation with better data.',
          'Cost monitoring: variance analysis (actual vs budget).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Enumerate the cost items of a project and means of finance.',
          'Prepare a simple 3-year P&L projection from given data.',
          'Compute break-even point and margin of safety from given figures.',
          'Straight-line vs WDV depreciation with a numerical example.',
        ],
      },
    ],
  },
  {
    moduleId: 'pm-m4',
    title: 'Module 4 · Basic Techniques in Capital Budgeting',
    sections: [
      {
        h: '4.1 Non-Discounted Techniques',
        items: [
          '**Payback period** — years to recover initial investment; simple, but ignores time value & post-payback cash flows.',
          '**Accounting rate of return (ARR)** — average annual profit ÷ average investment; uses accounting profit.',
        ],
      },
      {
        h: '4.2 Discounted Techniques',
        items: [
          '**Net present value (NPV)** — PV of inflows − initial outlay; **accept if NPV ≥ 0**; ranks projects; most reliable.',
          '**Internal rate of return (IRR)** — discount rate making NPV = 0; compare with cost of capital; accept if IRR ≥ WACC.',
          '**Profitability index (PI)** — PV inflows ÷ outlay; ≥ 1 accepted; used for rationing capital.',
          '**NPV vs IRR** — scale/timing conflicts; NPV preferred under mutually exclusive projects.',
        ],
      },
      {
        h: '4.3 Worked Numericals',
        items: [
          '₹1,00,000 outlay; inflows 40k,30k,30k,20k — compute payback (3.5 yrs), NPV at 10%, IRR (≈14%), PI.',
          'Annuity factors: `AF = [1 − (1+r)⁻ⁿ]/r` for uniform inflows.',
          'Decision matrices: accept/reject under each technique; ranking of competing projects.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define NPV and state its decision rule with a numerical.',
          'Compute payback period and ARR for a given cash flow series.',
          'Compare NPV vs IRR and explain when they conflict.',
          'What is the profitability index and how is it used in capital rationing?',
        ],
      },
    ],
  },
  {
    moduleId: 'pm-m5',
    title: 'Module 5 · Project Administration & Control',
    sections: [
      {
        h: '5.1 Organising & Scheduling',
        items: [
          '**Work breakdown structure (WBS)** — decompose deliverables into tasks; basis for estimates and responsibility.',
          '**Gantt chart** — bar schedule of tasks vs time; simple progress view.',
          '**PERT/CPM** — network of activities & dependencies; **critical path** = longest path = minimum project duration.',
          'PERT uses optimistic/most-likely/pessimistic times and probability of completion; CPM uses one-time estimates & crashing. Note `E=(o+4m+p)/6`.',
        ],
      },
      {
        h: '5.2 Monitoring & Control',
        items: [
          '**Earned value analysis**: EV = %complete × BAC; **SV = EV−PV**, **CV = EV−AC**, **SPI/CPI** ratios; forecasts EAC/ETC.',
          'Variance analysis & corrective action (resources, scope, schedule).',
          '**Quality control**: inspection, reviews, acceptance criteria; **risk control**: register and responses.',
        ],
      },
      {
        h: '5.3 Team & Reporting',
        items: [
          'RACI matrix (who is responsible/accountable/consulted/informed).',
          'Progress reporting: daily/weekly status, milestone slips, escalation.',
          '**Closure**: deliverables handover, lessons learned, project audit.',
          'Ethics in project management (transparent reporting, no scope creep without approval).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Build a PERT/CPM network from activities, find the critical path and duration.',
          'Compute EV/CV/SV from given PV, EV, AC — interpret the project state.',
          'Define WBS and its uses; draw a Gantt chart concept.',
          'Difference between PERT and CPM; what is crashing?',
        ],
      },
    ],
  },
];