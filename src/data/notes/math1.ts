import type { ChapterNote } from '../../types';

export const MATH1_NOTES: ChapterNote[] = [
  {
    moduleId: 'math1-m1',
    title: 'Module 1 · Trigonometry',
    sections: [
      {
        h: '1.1 Angles & Identities',
        items: [
          'Radian measure: θ = arc/radius; π rad = 180°; conversions.',
          'Compound angles: sin(A±B), cos(A±B), tan(A±B); double angle: sin2A = 2sinAcosA, cos2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A.',
          'Sum→product and product→sum formulas: sinC + sinD = 2 sin((C+D)/2) cos((C−D)/2), 2sinAcosB = sin(A+B) + sin(A−B).',
        ],
      },
      {
        h: '1.2 Graphs & Ratios',
        items: [
          'Graphs of sinx, cosx, tanx; amplitude, period, phase shift; maxima–minima.',
          'Trigonometric equations: general solutions for sinθ = k, cosθ = k, tanθ = k.',
          'Heights & distances — angle of elevation/depression problems.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Prove tan(A+B) formula and derive double-angle identities.',
          'Solve 2sin²θ − sinθ − 1 = 0 for 0 ≤ θ < 360°.',
          'Sum-to-product: express sin70° + sin10° as a product and evaluate.',
          'Worked height/distance numericals (flagpole, tower).',
        ],
      },
    ],
  },
  {
    moduleId: 'math1-m2',
    title: 'Module 2 · Differential Calculus',
    sections: [
      {
        h: '2.1 Limits & Differentiation',
        items: [
          '**Limits**: definition, standard results `lim (sinx/x)=1`, `lim (1+1/n)ⁿ = e`, `lim (eˣ−1)/x = 1`.',
          'Derivative from first principles: `f′(x) = lim_{h→0} [f(x+h)−f(x)]/h`.',
          'Rules: product, quotient, chain rule; derivatives of xⁿ, eˣ, aˣ, lnx, sinx, cosx, tanx.',
          '**Successive differentiation** — notation yₙ or f⁽ⁿ⁾(x); nth derivatives of common functions.',
          '**Geometric meaning**: slope of tangent; tangent/normal equations.',
        ],
      },
      {
        h: '2.2 Applications',
        items: [
          '**Rate of change** — velocity/acceleration problems.',
          '**Maxima & minima**: f′(x)=0 → classify by f″(x) (positive = min, negative = max).',
          '**Increasing/decreasing** intervals; points of inflection.',
          'Applied max/min: box volume, fence/area optimisation numericals.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Differentiate from first principles sinx (or x²).',
          'Find max/min of f(x)=2x³−3x²−12x+5 with second derivative test.',
          'Equation of tangent & normal to a curve at a point.',
          'Evaluate a limit using standard results (sinx/x, eˣ−1 fits).',
        ],
      },
    ],
  },
  {
    moduleId: 'math1-m3',
    title: 'Module 3 · Determinants and Matrices',
    sections: [
      {
        h: '3.1 Matrices',
        items: [
          'Definitions: order, types (row, column, square, diagonal, scalar, identity, symmetric/skew, transpose).',
          '**Operations**: addition, scalar multiplication, product (with compatibility and non-commutativity); properties of transpose (AB)ᵀ = BᵀAᵀ.',
          '**Rank** of a matrix — number of non-zero rows after row echelon; rank via determinants.',
        ],
      },
      {
        h: '3.2 Determinants',
        items: [
          '2×2 and 3×3 evaluation (Sarrus/expansion along a row), properties (row/column interchange sign, factor out row, two equal rows ⇒ 0).',
          'Minors & cofactors; **inverse** of matrix: A⁻¹ = adj(A)/|A|; singular vs non-singular.',
          '**Cramer’s rule** for solving linear systems (2/3 unknowns).',
          '**Consistency**: solve AX = B; unique (rank=n), infinite (rank equal < n), inconsistent.',
        ],
      },
      {
        h: '3.3 Eigen Basics',
        items: [
          'Characteristic equation |A − λI| = 0; eigenvalues & eigenvectors (2×2 examples); Cayley–Hamilton (statement + verification).',
          'Applications: solving systems, symmetric matrices, model analysis.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compute AB and BA for 2×2/3×3 matrices (order rules).',
          'Find A⁻¹ via cofactors for a 3×3 matrix and verify AA⁻¹ = I.',
          'Solve a 3×3 system using Cramer’s rule.',
          'Find eigenvalues & eigenvectors of a given 2×2 matrix.',
        ],
      },
    ],
  },
  {
    moduleId: 'math1-m4',
    title: 'Module 4 · Partial Fractions & Binomial Theorem',
    sections: [
      {
        h: '4.1 Partial Fractions',
        items: [
          'Decompose a rational function into partial fractions; cases: distinct linear factors, repeated linear factors, irreducible quadratic factor.',
          'Solve for coefficients by equating or by substitution method (x-value trick).',
          'Standard forms: `(px+q)/[(ax+b)(cx+d)] = A/(ax+b) + B/(cx+d)` and repeated/quadratic variants.',
        ],
      },
      {
        h: '4.2 Binomial Theorem',
        items: [
          'For positive integer n: `(a+b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ`; general term T_{r+1} = ⁿCᵣ aⁿ⁻ʳ bʳ; middle & independent terms.',
          'Properties of binomial coefficients: sum 2ⁿ, alternating 0, ⁿCᵣ + ⁿC_{r−1} = ⁿ⁺¹Cᵣ.',
          '**Infinite series**: (1+x)ⁿ = 1 + nx + n(n−1)x²/2! + … for |x|<1 (fractional/negative indices); expansions of (1+x)⁻¹, (1−x)⁻¹, (1+x)⁻² up to 3–4 terms.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Resolve `x/[(x+1)(x+2)]` into partial fractions.',
          'Find the term independent of x in `(2x² − 1/x)⁶`.',
          'Expand `(1+x)` to 4 terms using the infinite binomial series; state validity condition.',
          'Use partial fractions to integrate a rational function (Bridge to Integration).',
        ],
      },
    ],
  },
  {
    moduleId: 'math1-m5',
    title: 'Module 5 · Complex Numbers',
    sections: [
      {
        h: '5.1 Algebra of Complex Numbers',
        items: [
          '**i = √(−1)**, i²=−1, i³=−i, i⁴=1; forms: rectangular z = x + iy; **conjugate** ẑ = x − iy; modulus |z| = √(x²+y²).',
          'Operations: add, subtract, multiply, divide (rationalise with conjugate), powers of i.',
          '**Geometric** meaning: Argand plane, modulus = distance, argument θ = tan⁻¹(y/x); triangle inequalities.',
        ],
      },
      {
        h: '5.2 Polar & Exponential Forms',
        items: [
          'Polar form: z = r(cosθ + i sinθ); **Euler form**: z = re^{iθ}.',
          '**De Moivre’s theorem**: (cosθ + i sinθ)ⁿ = cos nθ + i sin nθ (valid for rational n).',
          'Applications: powers & nth roots of complex numbers, expansions of cos nθ/sin nθ, solving zⁿ = a.',
          'Cube roots of unity: 1, ω, ω² — properties 1+ω+ω²=0, ω³=1.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Simplify `(3+4i)/(1−2i)` into x+iy form.',
          'Find modulus, argument and polar form of a given complex number.',
          'Compute all cube roots of unity and show their properties.',
          'Apply De Moivre’s theorem to find (1+i)⁸ or similar powers.',
        ],
      },
    ],
  },
];