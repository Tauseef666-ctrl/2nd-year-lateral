import type { ChapterNote } from '../../types';

export const PHYSICS1_NOTES: ChapterNote[] = [
  {
    moduleId: 'physics1-m1',
    title: 'Module 1 · Units and Dimensions',
    sections: [
      {
        h: '1.1 Systems & Significant Figures',
        items: [
          'Fundamental vs derived quantities; **SI base units** (metre, kilogram, second, ampere, kelvin, mole, candela); prefixes (nano…giga).',
          'CGS, FPS, MKS systems; conversion of units.',
          '**Significant figures**: rules for counting and rounding; scientific notation for very large/small numbers (light year, astronomical unit, fermi).',
        ],
      },
      {
        h: '1.2 Dimensional Analysis',
        items: [
          '**Dimensions** of physical quantities — [M], [L], [T], [K], [A],…; dimensional formula of velocity, force, work, pressure, etc.',
          '**Uses of dimensional analysis**: check correctness of equations, derive relations, convert units, dimensionally homogeneous.',
          '**Limitations**: cannot determine dimensionless constants, fails for trig/exponential functions.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write dimensions of force, work, power, pressure and energy.',
          'Verify the formula for period of a pendulum / kinetic energy dimensionally.',
          'Convert 1 newton into CGS (dyne) using dimensional method.',
          'Explain the limitations of dimensional analysis.',
        ],
      },
    ],
  },
  {
    moduleId: 'physics1-m2',
    title: 'Module 2 · Force and Motion',
    sections: [
      {
        h: '2.1 Kinematics',
        items: [
          '**Scalars vs vectors**; position, displacement, distance, speed, velocity, acceleration.',
          '**Equations of motion** for uniform acceleration: v = u + at, s = ut + ½at², v² = u² + 2as (with derivations & applications).',
          '**Projectile motion**: components uₓ = u cosθ, uᵧ = u sinθ; max height H = u²sin²θ/2g; range R = u² sin2θ/g (max at 45°); time of flight T = 2u sinθ/g.',
          '**Relative velocity**: motion in still/flowing water, trains, boats.',
        ],
      },
      {
        h: '2.2 Newton’s Laws of Motion',
        items: [
          '**First law** — inertia; **second law** — F = ma (enables F = dp/dt); **third law** — action/reaction.',
          '**Momentum** p = mv; impulse = F·Δt = Δp.',
          '**Friction**: static vs kinetic; μ = F/R; angle of repose; rolling friction < sliding friction; advantages & disadvantages.',
          '**Applications**: lift problems, connected masses (tension), banking of roads.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Solve numericals with equations of motion (braking, free fall).',
          'A ball thrown at 45° with speed u — find range and max height.',
          'State Newton’s laws and verify F = ma with a numerical example.',
          'Distinguish static and kinetic friction; explain banking of curves.',
        ],
      },
    ],
  },
  {
    moduleId: 'physics1-m3',
    title: 'Module 3 · Work, Power and Energy',
    sections: [
      {
        h: '3.1 Work & Power',
        items: [
          '**Work** W = F·s cosθ — zero when θ = 90°; units joule; work done by variable force via area under F–s curve.',
          '**Power** P = W/t = F·v; units watt, HP = 746 W.',
          '**Energy** — capacity to do work; forms: kinetic, potential, mechanical.',
        ],
      },
      {
        h: '3.2 Kinetic & Potential Energy',
        items: [
          '**KE** = ½mv²; work–energy theorem: work done = change in KE.',
          '**PE** = mgh; conservative vs non-conservative forces.',
          '**Law of conservation of mechanical energy**: PE + KE constant in absence of friction (roller coaster, pendulum, free fall numericals).',
          'Conservative forces (gravity, spring) — work independent of path; KE–PE interconversions.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'A 5 kg body raised 2 m — find work and potential energy gained (g = 10).',
          'Work–energy theorem: a car of mass m stops from v applying brakes — distance from work done.',
          'Prove PE + KE is constant for free fall.',
          'Define power and relate it to force and velocity.',
        ],
      },
    ],
  },
  {
    moduleId: 'physics1-m4',
    title: 'Module 4 · Rotational Motion',
    sections: [
      {
        h: '4.1 Angular Kinematics',
        items: [
          '**Angular displacement θ, velocity ω, acceleration α**; relations v = ωr, a = αr.',
          'Equations: ω = ω₀ + αt, θ = ω₀t + ½αt², ω² = ω₀² + 2αθ.',
          '**Centripetal force** = mv²/r; banked curves; applications (cyclist turning, satellite orbit).',
        ],
      },
      {
        h: '4.2 Dynamics of Rotation',
        items: [
          '**Torque** τ = F·r (or I α); moment of inertia I = Σmr² — depends on mass distribution and axis.',
          '**Radius of gyration** k: I = Mk²; **rotational KE** = ½Iω².',
          '**Angular momentum** L = Iω; **conservation of angular momentum** (ice-skater effect, planet orbit speed).',
          'Theorems: parallel & perpendicular axis (statements + use).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'A flywheel accelerates from rest to ω — apply rotational motion equations.',
          'Compare KE = ½mv² and ½Iω²; find I of a ring/disc.',
          'Explain conservation of angular momentum with a real example.',
          'Numerical on centripetal force of a car turning a circular track.',
        ],
      },
    ],
  },
  {
    moduleId: 'physics1-m5',
    title: 'Module 5 · Motion of Planets and Satellites',
    sections: [
      {
        h: '5.1 Gravitation',
        items: [
          '**Newton’s law of gravitation** F = Gm₁m₂/r²; G = 6.67×10⁻¹¹ N m²/kg².',
          '**Variation of g**: with altitude g′=g(1−2h/R), with depth g′=g(1−d/R), at poles vs equator.',
          '**Gravitational potential & PE**; escape velocity vₑ = √(2gR) ≈ 11.2 km/s.',
        ],
      },
      {
        h: '5.2 Satellites & Kepler’s Laws',
        items: [
          '**Kepler’s laws**: elliptical orbits (sun at focus); equal areas in equal times; T² ∝ a³.',
          '**Orbital velocity** v₀ = √(gR) — orbit at surface; geostationary vs polar satellites.',
          '**Energy of an orbiting satellite**: KE = GMm/2r, PE = −GMm/r, total E = −GMm/2r (stable, negative).',
          'Weightlessness in orbiting satellite — free-fall condition; use in GPS, communication.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Derive escape velocity and compute it for Earth.',
          'Show g decreases with height/depth using formula and numerical.',
          'Compute orbital velocity of a satellite at 2R altitude.',
          'State and explain Kepler’s three laws with diagrams.',
        ],
      },
    ],
  },
  {
    moduleId: 'physics1-m6',
    title: 'Module 6 · Properties of Matter',
    sections: [
      {
        h: '6.1 Elasticity',
        items: [
          '**Stress** = F/A; **strain** = change/original; **Hooke’s law** — stress ∝ strain within elastic limit.',
          '**Moduli**: Young’s Y = stress/strain (elongation), bulk B (volume), rigidity η (shape); Poisson’s ratio.',
          '**Stress–strain curve**: proportional limit, elastic limit, yield point, breaking point; elastic potential energy = ½·stress·strain·volume.',
        ],
      },
      {
        h: '6.2 Surface Tension & Viscosity',
        items: [
          '**Surface tension** T = F/L (N/m) — molecular cohesion; drops/soap bubbles, capillary rise h = 2T cosθ/(rρg); applications (wettability, detergents).',
          '**Viscosity** — internal friction of fluids; coefficient η (poise); **Poiseuille’s formula** for laminar flow through a tube; **Stokes’ law** terminal velocity.',
          '**Streamline vs turbulent flow**; Reynolds number concept.',
        ],
      },
      {
        h: '6.3 Fluids & Pressure',
        items: [
          '**Pressure** P = F/A; Pascal’s law (hydraulic lift); buoyancy & Archimedes’ principle; Bernoulli’s theorem + applications (pitot tube, aerofoil, venturi).',
          'Atmospheric pressure, barometer, manometer.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'A wire under load — compute stress, strain and Young’s modulus.',
          'Explain capillary rise with formula and two applications.',
          'State Stokes’ law and use Stokes’ law to obtain terminal velocity formula.',
          'State and apply Bernoulli’s theorem to an aeroplane wing problem.',
        ],
      },
    ],
  },
  {
    moduleId: 'physics1-m7',
    title: 'Module 7 · Heat and Thermodynamics',
    sections: [
      {
        h: '7.1 Heat & Calorimetry',
        items: [
          '**Heat vs temperature**; specific heat c, heat capacity; calorimetry principle, phase change (latent heat), cooling curve.',
          'Heat conduction: **Fourier’s law** Q/t = kA(ΔT/Δx); thermal conductivity; insulation (house, fridge).',
          'Thermal expansion: linear & volume; practical applications/bimetallic strips.',
        ],
      },
      {
        h: '7.2 Laws of Thermodynamics',
        items: [
          '**Zeroth law** — thermal equilibrium & temperature basis.',
          '**First law** ΔQ = ΔU + ΔW; internal energy; specific heats Cp & Cv (Cp > Cv, ratio γ).',
          '**Second law** — heat cannot flow from cold to hot without work; **entropy** and reversible processes.',
          '**Third law** — absolute zero unattainable.',
        ],
      },
      {
        h: '7.3 Thermodynamics Processes & Engines',
        items: [
          'Isochoric, isobaric, isothermal (ΔU = 0), adiabatic (ΔQ = 0) — PV diagrams and work.',
          '**Heat engines**: efficiency η = 1 − Q₂/Q₁; **Carnot engine** η_max = 1 − T₂/T₁; refrigerators COP.',
          'Stirling/steam/petrol cycles overview; second law limits efficiency.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'A system takes 500 J heat and does 200 J work — find ΔU.',
          'Carnot engine between 400 K and 300 K — compute maximum efficiency.',
          'Explain first law and its application to isothermal/adiabatic processes.',
          'Distinguish conduction/convection/radiation with examples.',
        ],
      },
    ],
  },
];