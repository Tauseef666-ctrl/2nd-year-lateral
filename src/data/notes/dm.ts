import type { ChapterNote } from '../../types';

export const DM_NOTES: ChapterNote[] = [
  {
    moduleId: 'dm-m1',
    title: 'Module 1 · Understanding Disaster',
    sections: [
      {
        h: '1.1 Disaster, Hazard, Vulnerability, Risk, Capacity',
        items: [
          '**Hazard** = a potentially damaging physical event/phenomenon (earthquake, flood, cyclone, industrial accident) that has the potential to cause harm.',
          '**Disaster** = a serious disruption of the functioning of a community/society involving widespread human, material, economic or environmental losses exceeding local capacity to cope (UNISDR).',
          '**Vulnerability** = conditions (physical, social, economic, environmental) that increase susceptibility to hazard impact.',
          '**Risk** = probability × consequences of a hazard event: Risk = Hazard × Vulnerability / Capacity (classic formulation).',
          '**Capacity** = strengths/resources that help reduce risk or cope with disaster (skills, insurance, organisation, technology).',
        ],
      },
      {
        h: '1.2 Disaster & Development, Disaster Management',
        items: [
          '**Disaster ⇄ Development linkage**: development reduces or creates risk (unsafe construction, deforestation, urban sprawl in flood plains); disasters set back development (schools/hospitals destroyed).',
          '**Disaster management** = the organized application of policies, plans and practices to prepare for, respond to, recover from and mitigate disaster impact.',
          '**Key concepts**: prevention, mitigation, preparedness, response, recovery, rehabilitation and reconstruction; **community-based disaster management (CBDM)**.',
          '**Disaster risk reduction (DRR)** framework: reduce hazard exposure, reduce vulnerability, increase capacity/resilience — Sendai Framework 2015-2030.',
          'Resilience = ability of a system/community to absorb, adapt and recover; mainstreaming DRR into development planning.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define hazard, disaster, vulnerability, risk and capacity with examples.',
          'Explain the relation between disaster and development.',
          'Write the formula of risk and discuss each factor.',
          'What is disaster management and its core phases/concepts?',
          'Explain Sendai Framework objectives briefly.',
        ],
      },
    ],
  },
  {
    moduleId: 'dm-m2',
    title: 'Module 2 · Types, Causes & Consequences of Disasters',
    sections: [
      {
        h: '2.1 Geological & Hydro-Meteorological Disasters',
        items: [
          '**Geological**: earthquake, tsunami, volcanic eruption, landslides, avalanches; causes: tectonic plate movements, seismic waves (P/S/surface), seismic zones in India.',
          '**Hydro-meteorological**: floods (river/urban/flash/coastal), cyclones, drought, heat/cold waves, hailstorms, cloudbursts, glacial lake outburst floods (GLOF).',
          '**Earthquakes in India**: Himalayan collision zone (zones II–V zone mapping); 2001 Bhuj, 2004 Indian Ocean tsunami, 2015 Nepal.',
          '**Cyclones**: Bay of Bengal vs Arabian Sea; Saffir–Simpson scale or IMD categories; storm surge component.',
        ],
      },
      {
        h: '2.2 Biological & Technological Disasters',
        items: [
          '**Biological**: epidemics/pandemics (COVID-19, dengue, malaria, avian flu, Nipah), food poisoning; vectors and public-health response.',
          '**Technological (industrial/accidental)**: chemical/industrial accidents (Bhopal gas tragedy 1984), nuclear (Chernobyl, Fukushima), dam failures, urban mine fires, transport accidents (air/rail/road), building collapse.',
          '**Ay and environmental**: fires, pollution episodes, deforestation-induced landslides.',
          'Key response pillars for biological: surveillance, quarantine, vaccines, risk communication; for technological: safety audits, hazmat protocols, EIA.',
        ],
      },
      {
        h: '2.3 Man-made Disasters & Global Trends',
        items: [
          '**Man-made disasters**: conflicts, terrorism, civil unrest, stampedes, fires from negligence, illegal mining, chemical leaks; often "complex emergencies".',
          '**Consequences** (common): loss of life & displacement, injuries/trauma, damage to infrastructure, economic losses, environmental degradation, epidemics, livelihood loss, psychological impact.',
          '**Global trend**: rising frequency of hydrometeorological events with climate change; better early warning but growing exposure in urban areas.',
          '**IDNDR → Hyogo → Sendai**: evolution of global cooperation on DRR; Sustainable Development Goals (SDG 11, 13) integration.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Classify disasters with at least 3 examples per class.',
          'Write causes and effects of earthquakes and cyclones.',
          'Discuss the Bhopal gas tragedy and its management lessons.',
          'Why are man-made disasters on the rise — with examples.',
          'Compare geological and hydro-meteorological disasters.',
        ],
      },
    ],
  },
  {
    moduleId: 'dm-m3',
    title: 'Module 3 · Disaster Management Cycle & Framework',
    sections: [
      {
        h: '3.1 DM Cycle, Paradigm Shift & Pre-disaster Measures',
        items: [
          '**Cycle**: Mitigation → Preparedness → Response → Recovery → (mitigation again); prevention sits with mitigation.',
          '**Paradigm shift**: from **relief-centric** (post-disaster) to **risk-reduction/prevention-centric** management — early warning, planning, community preparedness.',
          '**Mitigation** (structural: dams, embankments, retrofitting; non-structural: zonation, building codes, insurance, awareness) reduces impact before events.',
          '**Preparedness**: warning systems, evacuation plans, mock drills, stockpiling, emergency communication, plan of action for each hazard.',
          '**Vulnerability & risk mapping**: hazard maps, micro-zonation; land-use planning as preparedness.',
        ],
      },
      {
        h: '3.2 During Disaster: Evacuation, Communication, Search & Rescue',
        items: [
          '**Response phase**: activation of emergency plan, warning dissemination, **evacuation** to safe shelters, emergency operations centre (EOC), command & control.',
          '**Communication**: redundant systems, satellite phones, ham radio (amateur), emergency broadcasting; impact of damaged telecom on response.',
          '**Search and Rescue (SAR)**: trained teams (NDRF, SDRF), fire & rescue, army; triage and first aid; crowd safety.',
          '**Relief operations**: temporary shelter (camps), food, water, medicines; coordinating with NGOs/Civil Defence; maintaining dignity & protection of vulnerable groups (children, women, elderly, disabled).',
          '**Role of media** in dissemination and rumour control.',
        ],
      },
      {
        h: '3.3 Post-disaster & International Frameworks',
        items: [
          '**Recovery**: rehabilitation (restore community) and **reconstruction** (rebuild better — "Build Back Better").',
          '**Damage & Needs Assessment (DNA)**; economic revival; livelihood restoration; psycho-social counselling.',
          '**International frameworks**: **Sendai Framework for DRR 2015–2030** – 4 priorities (understanding risk, governance, investing in resilience, Build Back Better), 7 global targets; preceded by Hyogo Framework 2005–2015.',
          '**UN agencies role**: UNDRR, OCHA, UNHCR, WHO; international humanitarian law basics; cluster approach.',
          'Documentation & lessons learned feed back into mitigation (learning loop).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Draw and explain the disaster management cycle.',
          'Discuss the paradigm shift in disaster management from relief to prevention.',
          'Describe evacuation, communication and SAR during response.',
          'Explain Sendai Framework priorities and targets.',
          'Differentiate mitigation, preparedness, response and recovery.',
        ],
      },
    ],
  },
  {
    moduleId: 'dm-m4',
    title: 'Module 4 · Disaster Management in India',
    sections: [
      {
        h: '4.1 Disaster Profile of India & Mega Disasters',
        items: [
          '**India\u2019s profile**: 58.6% earthquake-prone, ~12% flood-prone, ~5700 km coastline cyclone-prone, drought-prone regions; multi-hazard country.',
          '**Mega disasters**: Bengal famine (1943), Andhra cyclone (1977), Bihar–UP floods, 1993 Latur earthquake, 1999 Odisha super-cyclone, 2001 Bhuj earthquake, 2004 tsunami, 2013 Uttarakhand flash floods, 2018 Kerala floods.',
          'Each mega event influenced policy: super-cyclone → Orissa state disaster preparedness; 2004 tsunami → National DM Act 2005; Kerala → mainstreaming climate-resilience.',
          '**FYPs**: earlier drought/famine relief orientation → planning commissions → DM integrated into Five-Year Plans.',
        ],
      },
      {
        h: '4.2 Disaster Management Act 2005 & Institutional Mechanism',
        items: [
          '**Disaster Management Act, 2005** (in force 2006): establishes the three-tier institutional mechanism.',
          '**NDMA** — apex body chaired by PM; lays down policies, plans and guidelines; **SDMA** (Chief Minister-led, state acts & plans); **DDMA** (district-level, headed by DM/Collector).',
          '**NDRF** — National Disaster Response Force: 12+ disciplined battalions under NDRF DG for response & relief; **SDRF** at states; **NIDM** — training & capacity building (education); **NDM** responsibilities.',
          '**NCCR/NDMA guidelines** for earthquakes, cyclones, chemical disasters etc.; national, state and district **DM Plans** preparation cycle.',
          '**Finance**: **NDRF** for relief and response, **SDRF** at state level, **Disaster Risk Management Fund** for mitigation; item lists and norms revised (e.g., 2015 enhancement) for expenditure eligibility.',
        ],
      },
      {
        h: '4.3 National Policy, Plans & Roles of Agencies',
        items: [
          '**National Policy on Disaster Management (2009)** — disaster as development issue; priorities: awareness, mitigation & preparedness, response, recovery DB (build back better), capacity, climate adaptation.',
          '**National DM Plan (2018)** aligned with Sendai; SDMA/SDDMA + line ministries each prepare plans.',
          '**Agency roles**: IMD (weather forecasts/warnings), CWC (flood forecasting), GSI (landslides/EQs), INCOIS (tsunami early warning), NDMA/SDMA/DDMA, NDRF/SDRF, Fire & Civil Defence, Home & district administration, PWD rebuild.',
          '**Community & volunteer roles**: Aapda Mitra scheme, NCC/NSS/BSG volunteers in relief.',
          '**Challenges**: gaps in last-mile warning, urban governance, funding absorption, climate adaptation integration.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write the disaster profile of India with hazard-specific statistics.',
          'Explain the institutional mechanism under the DM Act 2005 (NDMA-SDMA-DDMA).',
          'Role and organisation of NDRF.',
          'Salient features of the National Disaster Management Policy 2009.',
          'Discuss two mega disasters and their policy impact.',
        ],
      },
    ],
  },
  {
    moduleId: 'dm-m5',
    title: 'Module 5 · Science & Technology for Disaster Management',
    sections: [
      {
        h: '5.1 Geo-informatics: Remote Sensing, GIS, GPS',
        items: [
          '**Remote Sensing** — acquiring info about the earth via satellites/sensors (optical, thermal, SAR) without physical contact; used for flood mapping, cyclone tracking, damage assessment.',
          '**GIS** — geographic information system to store, analyse, overlay spatial data (layers: hazard, population, infrastructure) for risk zonation & planning.',
          '**GPS/GNSS** — satellite positioning (NAVIC, UPTIME-like) for locating events, navigation during relief, geotagging assets; coordinates for response.',
          '**Risk mapping workflow**: hazard layer + exposure + vulnerability → composite risk map → used in land-use and evacuation planning.',
        ],
      },
      {
        h: '5.2 Disaster Communication & Early Warning',
        items: [
          '**Early warning system (EWS)**: risk knowledge → monitoring & prediction → dissemination → response capability ("last mile").',
          '**India\u2019s EWS**: **INCOIS tsunami early warning** (seismic + sea-level buoys), **IMD cyclone warnings** (track/surge), **CWC flood forecasts**, GSI landslide advisories; mobile alerts (SACHET), sirens, TV/radio.',
          '**Communication infra**: VSAT-based emergency network, satellite phones, GAGAN info to aircrafts, ham radio; Data over cellular for alerts; ensuring redundancy.',
          '**Success story**: cyclone Phailin (2013) — massive evacuation via early warning saved thousands of lives.',
          '**Challenges**: reaching remote populations, indigenous languages, false-alarm fatigue, CW (community warning) maintenance.',
        ],
      },
      {
        h: '5.3 Land-use Planning, Safe Designs & S&T Institutions',
        items: [
          '**Land-use planning**: restrict haphazard settlement in hazard-prone areas, buffer zones, flood plain zoning, building by-laws with seismic/cyclone codes (IS 1893 seismic design; IS 875 wind).',
          '**Safe designs**: earthquake-resistant construction (shear walls, ductile detailing, retrofitting), cyclone-resistant roofs, elevated housing in flood zones.',
          '**S&T institutions**: **NDMA**, **NIDM** (training), **NRSC/ISRO**, **IMD**, **CWC**, **GSI**, **INCOIS**, **CBRI** (building research), **NEERI** — research, data and application.',
          '**DRR technology**: hazard simulators, real-time dashboards (NDMA\u2019s Dashboards), drones for damage assessment, AI/ML for forecasting.',
          'Integrating S&T outputs into local plans via DDMA/DDMA literacy at district level.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain the role of remote sensing, GIS and GPS in disaster management.',
          'Write the components of an early warning system with India\u2019s examples.',
          'Describe tsunami and cyclone early warnings (INCOIS/IMD).',
          'How does land-use planning & safe design reduce vulnerability?',
          'List Indian S&T institutions working in disaster domain and their roles.',
        ],
      },
    ],
  },
];