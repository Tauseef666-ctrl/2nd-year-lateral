import type { ChapterNote } from '../../types';

export const CHEM1_NOTES: ChapterNote[] = [
  {
    moduleId: 'chem1-m1',
    title: 'Module 1 · Atomic Structure, Chemical Bonding & Solutions',
    sections: [
      {
        h: '1.1 Atomic Structure',
        items: [
          '**Models**: Rutherford (nucleus), Bohr (energy levels), wave mechanical — quantum numbers n, l, m, s.',
          '**Electronic configuration** — Aufbau (1s,2s,2p,3s,3p,4s,3d…), Pauli exclusion, Hund’s rule; subshell filling order & exceptions (Cr, Cu).',
          '**Orbitals**: s, p (shapes); **isotopes & isobars**; atomic number, mass number.',
        ],
      },
      {
        h: '1.2 Chemical Bonding',
        items: [
          '**Ionic bond** — electron transfer (NaCl), properties (high mp, conductivity in melt/solution).',
          '**Covalent bond** — sharing (H₂, O₂, N₂, CH₄); sigma & pi bonds; **coordinate bond** (NH₄⁺).',
          '**Hybridisation**: sp³ (CH₄), sp² (C₂H₄), sp (C₂H₂); **VSEPR** — shape: linear, trigonal, tetrahedral.',
          '**Electronegativity, polarity**; dipole moment; hydrogen bonding (water, HF) — effect on properties.',
        ],
      },
      {
        h: '1.3 Solutions & Concentration',
        items: [
          'Solute/solvent; **concentration terms**: normality (N), molarity (M), molality (m), % solutions, ppm.',
          'M = 10·(d·X%)/molar mass; dilution M₁V₁ = M₂V₂; numerical conversions between terms.',
          '**Solutions of solids in liquids**: solubility, saturated/unsaturated, Henry’s law (overview).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write electron configurations of Na, Cl, Fe (Z = 26) using Aufbau.',
          'Explain ionic vs covalent bonding with properties (table).',
          'Define molarity/normality and prepare 0.1 M NaOH (calculation).',
          'Predict shape of CH₄, NH₃, H₂O by VSEPR with bond angles.',
        ],
      },
    ],
  },
  {
    moduleId: 'chem1-m2',
    title: 'Module 2 · Water',
    sections: [
      {
        h: '2.1 Hardness of Water',
        items: [
          '**Hard water** — contains Ca²⁺, Mg²⁺ salts (bicarbonates, sulphates, chlorides); temporary (bicarbonates, removed by boiling) vs permanent hardness.',
          '**Units**: ppm, mg/L, degree Clark/French/German; total hardness = 2.5×[Ca] + 4.1×[Mg] (ppm as CaCO₃).',
          '**Problems caused**: scale in boilers, poor lathering of soap, corrosion.',
        ],
      },
      {
        h: '2.2 Water Treatment',
        items: [
          '**Soda–lime / lime-soda process**: Ca(OH)₂ + Na₂CO₃ remove permanent hardness; calculations.',
          '**Ion exchange**: cation & anion exchangers — regeneration; advantage zero hardness.',
          '**Boiler water treatment**: internal vs external conditioning, phosphate/calgon method, blow-down control scale & sludge.',
          '**Desalination** overview (reverse osmosis); purification: sedimentation, filtration, chlorination, boiling.',
        ],
      },
      {
        h: '2.3 Analysis',
        items: [
          'Temporary hardness by **simple titration** with HCl; permanent via EDTA (hardness = mL×N×50×1000/sample mL ppm).',
          'Significance of water reports and permissible limits (WHO/BIS).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Calculate temporary & permanent hardness when given calcium/magnesium salt concentrations (classic numerical).',
          'Explain the lime-soda process with reactions.',
          'Describe ion-exchange (zeolite) softening and regeneration.',
          'Differentiate temporary vs permanent hardness.',
        ],
      },
    ],
  },
  {
    moduleId: 'chem1-m3',
    title: 'Module 3 · Engineering Materials',
    sections: [
      {
        h: '3.1 Cement',
        items: [
          '**Composition**: raw lime (CaO ~60–67%), silica, alumina, iron oxide; functions in setting/hardening.',
          '**Manufacture** (wet & dry): mixing → calcination (rotary kiln ~1450 °C) → clinker → cooling → grinding with gypsum.',
          '**Setting & hardening**: hydration of C₃S, C₂S, C₃A; gypsum retards flash set.',
          '**Grades of cement** (33/43/53), soundness, initial/final setting time.',
        ],
      },
      {
        h: '3.2 Glass & Ceramics',
        items: [
          '**Glass** — supercooled liquid; types: soda-lime, borosilicate (Pyrex), lead, coloured; annealing; applications.',
          '**Ceramics** — clay products: brick, tile, porcelain; firing; properties (strength, refractory).',
        ],
      },
      {
        h: '3.3 Polymers & Composites',
        items: [
          '**Addition vs condensation polymers**: PE, PVC, PS, PMMA vs nylon, polyester, bakelite.',
          '**Plastics**: thermoplastics (reversible) vs thermosets (irreversible); applications and environmental concerns.',
          '**Composites**: fibre-reinforced (FRP), sandwich — strength/weight advantage; reinforced concrete as composite.',
          '**Rubber**: natural (latex), vulcanisation (sulphur cross-linking), synthetic (SBR, neoprene).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Describe the manufacturing of Portland cement with a flowsheet.',
          'Explain hydration and setting of cement; role of gypsum.',
          'Classify polymers with examples (addition vs condensation, thermo vs thermoset).',
          'Short notes: vulcanisation of rubber, reinforced concrete.',
        ],
      },
    ],
  },
  {
    moduleId: 'chem1-m4',
    title: 'Module 4 · Chemistry of Fuels & Lubricants',
    sections: [
      {
        h: '4.1 Fuels & Combustion',
        items: [
          '**Fuels** — sources of energy; classification: solid (coal), liquid (petrol/diesel), gaseous (LPG/CNG).',
          '**Calorific value** — gross (HCV) vs net (LCV); bomb calorimeter determination; units kcal/kg.',
          '**Coal**: proximate (moisture, VM, ash, fixed carbon) vs ultimate analysis; ranking (peat→lignite→bituminous→anthracite).',
          '**Combustion calculation**: theoretical air = O₂ required for C, H, S; flue gas components; excess air.',
        ],
      },
      {
        h: '4.2 Petroleum & Refining',
        items: [
          '**Crude composition** and **fractional distillation** of petroleum — fraction ranges (petrol, kerosene, diesel, lubricants).',
          '**Cracking**, reforming, octane number (petrol) and cetane number (diesel).',
          '**Bio-fuels & renewable** options: ethanol, biodiesel — cleaner combustion.',
          '**Gaseous fuels**: natural gas, producer gas, water gas, LPG, CNG — composition & uses.',
        ],
      },
      {
        h: '4.3 Lubricants',
        items: [
          '**Functions of lubrication**: reduce friction/wear, cool, seal, prevent corrosion.',
          '**Mechanisms**: fluid film (hydrodynamic), boundary, extreme pressure lubrication.',
          '**Types**: liquid (mineral oils, additives), semi-solid (greases — soap+oil), solid (graphite, MoS₂).',
          'Lubricant properties: viscosity & **viscosity index**, flash/fire point, cloud/pour point.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Calculate the theoretical air required to burn a fuel of given C/H/S composition.',
          'Define calorific value and describe the bomb calorimeter briefly.',
          'Draw the fractional distillation column fractions table.',
          'Explain fluid-film vs boundary lubrication; define viscosity index.',
        ],
      },
    ],
  },
  {
    moduleId: 'chem1-m5',
    title: 'Module 5 · Electrochemistry',
    sections: [
      {
        h: '5.1 Electrolytes & Cells',
        items: [
          '**Electrolytes vs nonelectrolytes**; strong/weak; degree of dissociation; Arrhenius theory; Ostwald dilution law (weak acids).',
          '**Conductance**: specific (κ) and equivalent (Λ) conductivity; Kohlrausch law; factors affecting conductance.',
          '**Electrochemical (Galvanic) cell** — zinc-copper (Daniell); electrode potential, EMF, standard electrode potentials & Nernst equation.',
        ],
      },
      {
        h: '5.2 Electrolysis & Applications',
        items: [
          '**Faraday’s laws** of electrolysis: m ∝ Q, m = (E·I·t)/96500 (electrochemical equivalent connected).',
          '**Applications**: electroplating (nickel, chromium), electrorefining of copper, electrolytic (anodising) protection.',
          '**Batteries**: primary (dry cell, Leclanché — non-rechargeable) vs secondary (lead-acid, Ni-Cd — rechargeable); fuel cells (H₂–O₂).',
          '**Corrosion**: mechanism of rusting (electrochemical), prevention — coatings, sacrificial anode (cathodic protection), galvanising/tinning.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'State Faraday’s laws and compute mass deposited for given current/time/E.C.E.',
          'Describe the Daniell cell with reactions and cell notation.',
          'Explain electroplating of nickel with conditions.',
          'Short notes: sacrificial anode protection, lead-acid battery, fuel cell.',
        ],
      },
    ],
  },
];