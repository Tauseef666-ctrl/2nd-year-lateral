import type { ChapterNote } from '../../types';

export const EE_NOTES: ChapterNote[] = [
  {
    moduleId: 'ee-m1',
    title: 'Module 1 · Cost Concepts & Analysis',
    sections: [
      {
        h: '1.1 Cost Concepts',
        items: [
          '**Cost** = sacrifice of resources (money) to produce goods/services; used for decisions, pricing, control.',
          '**Cost types**: fixed vs variable; direct (materials, labour) vs indirect (overheads); sunk vs opportunity cost.',
          '**Total/unit costs**: total cost = fixed + variable; average cost = TC/units; marginal cost = extra cost of one more unit.',
          '**Overheads** — manufacturing, administrative, selling & distribution; allocation/apportionment.',
        ],
      },
      {
        h: '1.2 Cost Classifications & Estimation',
        items: [
          '**Element of cost**: material, labour, other expenses; prime cost, factory cost, cost of production, total cost ladder.',
          '**Cost sheet** — statement showing elements of cost for a period; prepare from given data.',
          '**Methods**: job costing, batch costing, process costing; techniques: standard costing (variance analysis), marginal costing.',
          '**Break-even analysis** — contribution = SP − VC; BEP units = FC/contribution per unit; margin of safety; break-even chart.',
        ],
      },
      {
        h: '1.3 Depreciation & Value Concepts',
        items: [
          '**Depreciation** — allocation of asset cost over life; straight-line vs WDV method (worked examples).',
          '**Present worth / time value**: discounting future costs & benefits for comparisons.',
          'Cost control vs cost reduction; product vs period costs (inventory treatment).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Classify costs: fixed vs variable, direct vs indirect with examples.',
          'Prepare a cost sheet from raw data and find prime/factory/total cost.',
          'Compute break-even units, contribution and margin of safety numerically.',
          'Straight-line vs WDV depreciation with a solved example.',
        ],
      },
    ],
  },
];