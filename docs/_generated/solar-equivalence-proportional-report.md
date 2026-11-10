```
solar-equivalence-proportional: derivation in solar-eccentric-epicyclic, level conclusive (5/5)
  ✓ well-formed
  ✓ grounded
  ✓ true
  ✓ justified
  ✓ conclusive
  given     h1: equal(Epi.r, Epi.R' * Ecc.e / Ecc.R)
  ✓ d1: equal(angle(O, Ecc.E, Ecc.S), angle(Epi.S', Epi.C, O)) from def Ecc.E, def Ecc.S, def Epi.C, def Epi.S' by construction — read off the construction
  ✓ d2: equal(distance(O, Ecc.E), Ecc.e) from def Ecc.E by construction — read off the construction
  ✓ d3: equal(distance(Ecc.E, Ecc.S), Ecc.R) from def Ecc.S by construction — read off the construction
  ✓ d4: equal(distance(Epi.C, Epi.S'), Epi.r) from def Epi.S' by construction — read off the construction
  ✓ d5: equal(distance(O, Epi.C), Epi.R') from def Epi.C by construction — read off the construction
  ✓ d6: equal(distance(Ecc.E, O) / distance(Ecc.E, Ecc.S), distance(Epi.C, Epi.S') / distance(Epi.C, O)) from d2, d3, d4, d5, h1 by algebra — by calculation
  ✓ d7: equal(angle(Ecc.E, O, Ecc.S), angle(Epi.C, Epi.S', O)) from d1, d6 by Elements VI.6 — justified (configuration conditions fail there: noncollinear(Ecc.E, O, Ecc.S), noncollinear(Epi.C, Epi.S', O))
      degenerate at kappa_bar = 0°, kappa_bar = 180°
  ✓ d8: parallel(line(Epi.C, Epi.S'), line(O, Ecc.E)) from def Epi.S', def Ecc.E by construction — read off the construction
  ✓ d9: equal(angle(Epi.C, Epi.S', O), angle(Epi.S', O, Ecc.E)) from d8 by Elements I.29 — justified (configuration conditions fail there: opposite_side(Epi.C, Ecc.E, Epi.S', O))
      degenerate at kappa_bar = 0°, kappa_bar = 180°
  ✓ d10: equal(angle(Ecc.E, O, Ecc.S), angle(Ecc.E, O, Epi.S')) from d7, d9 by common notion 1 — justified
  ✓ d11: equal(direction(O, Ecc.S), direction(O, Epi.S')) from d10 by lemma same angle — justified (configuration conditions fail there: same_side(Ecc.S, Epi.S', O, Ecc.E))
      degenerate at kappa_bar = 0°, kappa_bar = 180°
  ✓ conclusion: equal(direction(O, Ecc.S), direction(O, Epi.S')) from d11 — justified (it is d11)
  note: degenerate states, in which a step's rule does not apply, a term is undefined or an inequality becomes an equality: kappa_bar = 0°; kappa_bar = 180°. The derivation does not cover them; the conclusion is true there as well (numerically)
```
