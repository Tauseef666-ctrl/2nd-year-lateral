import type { ChapterNote } from '../../types';

export const REN_NOTES: ChapterNote[] = [
  {
    moduleId: 'ren-m1',
    title: 'Module 1 · Introduction to Renewable Energy',
    sections: [
      {
        h: '1.1 World Energy Use & Environmental Aspects',
        items: [
          '**Conventional** sources: coal, oil, natural gas (**fossil fuels**) + nuclear — non-renewable, finite.',
          '**Fossil fuel share** of global primary energy remains ~80%; energy demand rises with population & development; India among top importers of oil/coal.',
          '**Environmental impacts**: CO₂ and GHG emissions → **climate change** (IPCC reports), air pollution (SOx, NOx, particulates), acid rain, oil spills, habitat loss.',
          '**Global energy transitions**: from biomass → coal → oil/gas → mix + renewables; 2015 Paris Agreement — keep warming well below 2°C, target renewables + efficiency.',
          '**Units**: energy (J, kWh, Mtoe), power (W, kW, MW, GW); secondary vs primary energy carriers.',
        ],
      },
      {
        h: '1.2 Renewable Energy Scenario in India & the World',
        items: [
          '**Renewables** = sources that replenish naturally: solar, wind, hydro, biomass, geothermal, ocean (tidal/wave/OTEC).',
          '**World scenario**: China, USA, EU lead installed capacity; solar PV and wind dominate new installations (IRENA reports).',
          '**India scenario**: target 500 GW non-fossil by 2030; **MNRE** is the nodal ministry; strong growth in solar parks and wind; **IREDA** & **SECI** finance wind/solar.',
          '**India\u2019s strengths**: high solar insolation (~4-7 kWh/m²/day), long coastline for wind, biomass availability; **JNNSM** and PM-KUSUM promote.',
          '**Key schemes**: RPO (renewable purchase obligation), green hydrogen mission, PM-Surya Ghar (rooftop), offshore wind policy.',
        ],
      },
      {
        h: '1.3 Potentials, Applications & Economics',
        items: [
          '**Potential vs installed**: India\u2019s estimated solar/wind potential (solar ~748 GW, wind ~300+ GW at 120m, biomass ~18 GW, small hydro ~20 GW).',
          '**Applications**: grid electricity, distributed/decentralised systems (rural), water pumping, heating/cooling, transport fuels (biofuels, EVs), telecom towers, green hydrogen.',
          '**Economics**: cost of generation (LCOE) — solar/wind now cheaper than new coal in many regions; capital-intensive but low O&M and fuel-free.',
          '**Barriers**: intermittency, storage need, grid integration, land, financing, policy uncertainty.',
          '**Lifecycle analysis**: energy payback time; environmental trade-offs (land, minerals, recycling).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Classify conventional vs renewable energy sources.',
          'Explain the environmental consequences of fossil fuels.',
          'Assess India\u2019s renewable energy potential and targets.',
          'What factors determine the economics of a renewable project (LCOE)?',
          'Why are renewables called "clean" yet imperfect energy?',
        ],
      },
    ],
  },
  {
    moduleId: 'ren-m2',
    title: 'Module 2 · Solar Energy',
    sections: [
      {
        h: '2.1 Solar Radiation & Its Measurement',
        items: [
          '**Solar constant** ≈ 1367 W/m² outside atmosphere; at Earth\u2019s surface depends on latitude, season, time, clouds, dust (insolation).',
          '**Spectrum**: direct (beam) vs **diffuse radiation**; total **global radiation** = direct + diffuse; **extraterrestrial vs terrestrial irradiance**.',
          '**Measurement instruments**: **pyranometer** (global/diffuse, measures total irradiance), **pyrheliometer** (direct beam, tracking), sunshine recorder (bright sunshine hours), radiometers.',
          '**Solar geometry**: declination, hour angle, latitude, solar altitude/azimuth; solar day ~24 h; solar cells tilted at latitude for maximum capture.',
          'Air-mass ratio (AM1.5 standard conditions for PV testing).',
        ],
      },
      {
        h: '2.2 Collectors & Solar Thermal Power Generation',
        items: [
          '**Flat-plate collector (FPC)**: absorber plate + glazing + insulation — low/medium temp (water heating).',
          '**Concentrating collectors**: parabolic trough, parabolic dish, central receiver (power tower), linear Fresnel — concentrate sunlight to high temperature.',
          '**Applications**: **solar water heaters** (domestic/industrial), solar cooker (box/dish), drying, desalination, space heating.',
          '**Concentrated Solar Power (CSP)**: mirrors → heat → steam → turbine (Rankine cycle); **storage**: molten salt thermal storage extends generation into night.',
          'Comparison FPC vs CSP: temperature range, efficiency, cost, use cases.',
        ],
      },
      {
        h: '2.3 Photovoltaics: Solar Cells & PV Power Generation',
        items: [
          '**Solar cell (PV)**: p-n junction semiconductor that converts light to DC electricity (**photovoltaic effect**); materials — mono/multi-crystalline silicon, thin film (a-Si, CdTe, CIGS), perovskite (R&D).',
          '**Parameters & I-V curve**: open-circuit voltage (Voc), short-circuit current (Isc), maximum power point (MPP), fill factor (FF), efficiency (η).',
          '**Module/array**: cells in series/parallel → module → panels → arrays; inverters (string/central/micro), **balance of system (BoS)**; tracking systems increase yield.',
          '**PV system types**: standalone (off-grid, with battery), grid-connected/on-grid, hybrid, rooftop vs utility-scale; net metering.',
          '**Performance factors**: irradiance, temperature (efficiency drops ~0.4%/°C), shading, soiling; degradation ~0.5%/year; **LCOE** & payback; recycling concerns at end-of-life.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain direct, diffuse and global radiation; define solar constant.',
          'Describe flat-plate vs concentrating collectors with uses.',
          'Draw the I–V curve and explain Voc, Isc, MPP, Fill Factor.',
          'Compare off-grid and grid-connected PV systems.',
          'Why do solar cells perform worse on hot days?',
        ],
      },
    ],
  },
  {
    moduleId: 'ren-m3',
    title: 'Module 3 · Wind Energy',
    sections: [
      {
        h: '3.1 Wind Data, Energy Estimation & Site Selection',
        items: [
          '**Wind power** ∝ air density × swept area × **cube of wind speed** (P = ½ ρ A v³); doubling speed → 8× power.',
          '**Wind resource assessment**: wind velocity/speed, direction (wind rose), **Weibull distribution**, measuring with anemometers/wind masts, long-term data collection.',
          '**Site selection criteria**: mean annual wind speed ≥ 5–6 m/s at hub height (India: ≥ 7 at good sites), open terrain / ridgetops / coastal sites, grid availability, land, no obstacles.',
          '**Energy estimation**: capacity factor = (annual energy output)/(rated power × 8760); typical CF 25–40% depending on site.',
          'India\u2019s wind atlas & states (Tamil Nadu, Gujarat, Karnataka, Rajasthan); offshore potential.',
        ],
      },
      {
        h: '3.2 Types of Wind Energy Systems & Performance',
        items: [
          '**HAWT (horizontal axis)** — mainstream, upwind/downwind, 2–3 blades, high efficiency.',
          '**VAWT (vertical axis)** — Darrieus (lift) & Savonius (drag); omnidirectional, simple, low noise — less efficient, niche use.',
          '**Power curve**: cut-in ≈ 3–4 m/s, rated speed, cut-out ≈ 25 m/s; control by **pitch/stall** and yaw systems.',
          '**Betz limit**: maximum extractable power = 59.3% (16/27) of wind power; actual turbines reach ~35–50% (power coefficient Cp).',
          '**Performance monitoring**: power curve verification, availability (≥95%), wakes and array losses (park efficiency).',
        ],
      },
      {
        h: '3.3 Wind Turbine Generator, Safety & Environment',
        items: [
          '**Components**: blades → hub → nacelle (gearbox/DRIVES, generator, controller, yaw/pitch) → tower (tubular steel/lattice) → foundation.',
          '**Generators**: **DFIG** (doubly-fed induction, partial converter), **PMSG** (permanent magnet synchronous, direct drive, gearless), squirrel-cage induction with full converter.',
          '**Grid integration**: pitch control, reactive power control, power electronics, LVRT (fault ride-through), forecasting.',
          '**Safety**: lightning protection, blade ice shedding, rotational limits, tower maintenance, emergency brakes.',
          '**Environmental**: visual impact, noise (mechanical/broadband), bird/bat mortality, land use, decommissioning/recycling — addressed via siting and mitigation.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Derive/explain P = ½ ρ A v³ and why speed matters.',
          'How is wind site selection and resource assessment done?',
          'Compare HAWT vs VAWT.',
          'State Betz limit and explain the power curve with cut-in/out speeds.',
          'Draw a horizontal-axis wind turbine and label its components.',
        ],
      },
    ],
  },
  {
    moduleId: 'ren-m4',
    title: 'Module 4 · Bio-Energy',
    sections: [
      {
        h: '4.1 Biomass Combustion, Gasifiers & Biogas Plants',
        items: [
          '**Biomass** = organic matter (agricultural residue, wood, animal dung, municipal organic waste) — store of solar energy via photosynthesis.',
          '**Combustion**: direct burning to produce heat/electricity (stoves, boilers, co-firing with coal).',
          '**Gasification**: partial oxidation to **producer gas** (CO + H₂ + CH₄ + CO₂); **gasifier types**: updraft, downdraft, fluidised bed; applications — engines, thermal.',
          '**Biogas**: anaerobic digestion produces **biogas** (55–70% CH₄ + CO₂) from dung/organics; **bio-slurry** as fertiliser.',
          '**Biogas plants (India)**: floating-drum (KVIC/KVIC-Sahajivana models) vs fixed-dome (Deenbandhu/Janata); community and family-size units; pipelines and govt subsidy (NBMMP).',
        ],
      },
      {
        h: '4.2 Digesters, Ethanol, Biodiesel & Cogeneration',
        items: [
          '**Digester design**: fixed dome (brick/masonry; KVIC and Deenbandhu) vs floating gas-holder; operating parameters: C:N ratio (~25-30), temperature (mesophilic 30-40°C), retention time, pH.',
          '**Ethanol** (biofuel): fermentation of sugars/starch (molasses, grains, lignocellulosic) — blended with petrol (E20 target in India).',
          '**Biodiesel**: transesterification of vegetable oils/used cooking oil + alcohol with catalyst → biodiesel + glycerine; **B5–B20 blends**; Jatropha promotion.',
          '**Cogeneration (CHP)**: simultaneous production of heat and power — bagasse cogeneration in sugar mills feeds captive + grid power.',
          '**Bio-methanation & briquettes/pellets** as upgrading/processing routes; sustainable biomass sourcing and residue pricing.',
        ],
      },
      {
        h: '4.3 Biomass Applications',
        items: [
          '**Applications**: cooking (traditional to improved cookstoves + biogas), heating, electricity generation (direct/co-firing, gasifier-engine, biogas engines), transport fuels (bioethanol, biodiesel, compressed biogas/CBG replacing CNG).',
          '**Rural energy security**: decentralized gasifier power for villages, biomass supply chains.',
          '**Biomass power in India**: ~10 GW+ installed (bagasse cogeneration + agro-residue + oxidation); MNRE biomass programmes.',
          '**Economics & sustainability**: cost of feedstock, residue availability, logistics (density/transport), environmental benefits (carbon neutral if sustainably renewed, less smoke than wood), but land/water competition with food crops must be managed.',
          '**Emerging**: CBG (SATAT scheme), torrefied pellets for coal co-firing, algal biofuels (R&D).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare combustion, gasification and anaerobic digestion.',
          'Describe the fixed-dome and floating-drum biogas plants.',
          'What is transesterification and how is biodiesel produced?',
          'Explain cogeneration with the sugar-mill bagasse example.',
          'List biomass applications and their environmental/social trade-offs.',
        ],
      },
    ],
  },
  {
    moduleId: 'ren-m5',
    title: 'Module 5 · Other Renewable Energy Sources',
    sections: [
      {
        h: '5.1 Tidal & Wave Energy',
        items: [
          '**Tidal energy**: kinetic/potential of tides due to moon–sun gravity; **tidal barrage** (dams with sluices & turbines, ebb/flood generation), **tidal stream** (in-stream turbines exploiting tidal currents).',
          '**Tidal range/amplitude** matters (higher range → more power); ebb+flood generation cycles.',
          '**Wave energy**: energy of ocean surface waves from wind transfer: oscillating water column (OWC), point absorbers/buoys, attenuators; typically ~2–3 kW/m coastline resources.',
          '**India**: Gulf of Khambhat, Gulf of Kutch, Sundarbans possess tidal potential; wave energy pilot projects; **OTEC & sea-based technologies** at research stage.',
          '**Barriers**: high capital cost, marine environment (corrosion, biofouling), intermittent/periodic availability, environmental impact on estuaries.',
        ],
      },
      {
        h: '5.2 OTEC, Small Hydro & Geothermal',
        items: [
          '**OTEC (Ocean Thermal Energy Conversion)**: uses temperature gradient (20°C+ between warm surface and cold deep water); **closed-cycle** (ammonia working fluid) vs open-cycle; very low efficiency ~2-4%, large volumes.',
          '**Small/micro hydro**: run-of-river, no dam or small pondage; civil works + turbines (Pelton, Francis, Kaplan for low head); decentralized power for hills; India small-hydro potential ~20 GW.',
          '**Geothermal energy**: heat from earth\u2019s interior — **dry steam, flash steam, binary cycle**; used for power and direct heat (greenhouses, spas); India\u2019s potential sites in Himalayan belt & Puga (Ladakh) and Tattapani — high capital; hot dry rock EGS research.',
          'Comparison: baseline/availability (geo & tidal predictable), capacity factor, site-specific nature.',
        ],
      },
      {
        h: '5.3 Hydrogen Storage, Fuel Cells & Hybrid Systems',
        items: [
          '**Green hydrogen**: produced by electrolysis using renewable electricity — zero-carbon fuel; India\u2019s National Green Hydrogen Mission (500 MMT target by 2030, SIGHT incentives).',
          '**Hydrogen storage**: compressed gas (350-700 bar), liquid (cryogenic), metal hydrides/chemical carriers (ammonia) — density/safety/cost challenges.',
          '**Fuel cell**: converts H₂ + O₂ → electricity + water (reverse of electrolysis); PEMFC (transport), SOFC (stationary); efficiency ~50-60%, clean, quiet — output DC, demand management.',
          '**Hybrid energy systems**: combine two+ sources (solar-wind-battery-diesel) to derisk intermittency; **microgrids** and **power optimisation (HOMER)**; India islands (Andaman, Lakshadweep) and remote villages deploy such systems.',
          '**Role in 2030 target**: hybrids + storage + green hydrogen cover the gaps of variable renewables.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain tidal barrages vs tidal stream turbines.',
          'How does OTEC produce power and what are its limits?',
          'Compare small hydro and geothermal energy with Indian potential.',
          'Describe fuel cell working and applications.',
          'Why are hybrid renewable systems attractive — give examples from India.',
        ],
      },
    ],
  },
];