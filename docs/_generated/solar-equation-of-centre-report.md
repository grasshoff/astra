```
solar-equation-of-centre: derivation in solar-eccentric, level conclusive (5/5)
  ✓ well-formed
  ✓ grounded
  ✓ true
  ✓ justified
  ✓ conclusive
  construct F = foot(O, line(E, S))
  ✓ d1: equal(angle(S, E, A), angle(E, S, O) + angle(S, O, E)) from def A by Elements I.32 — justified (configuration conditions fail there: noncollinear(S, O, E))
      degenerate at kappa_bar = 0°, kappa_bar = 180°
  ✓ d2: equal(abs(norm180(c)), angle(O, S, E)) from d1, prop p1, prop p2 by algebra — by calculation
  ✓ d3: perpendicular(line(O, F), line(E, S)) from def F by construction — read off the construction
      undefined at kappa_bar = 0°, kappa_bar = 180°
  ✓ d4: equal(distance(O, F), distance(O, E) * sin(angle(O, E, F))) from d3 by trigonometry sine — justified (configuration conditions fail there: distinct(E, F), distinct(O, F))
      degenerate at kappa_bar = 0°, kappa_bar = 90°, kappa_bar = 180°, kappa_bar = 270°
      undefined at kappa_bar = 270°, kappa_bar = 90°
  ✓ d5: equal(distance(O, E), e) from def E by construction — read off the construction
  ✓ d6: equal(sin(angle(O, E, F)), abs(sin(kappa_bar))) from def E, def S, def F by construction — read off the construction
      undefined at kappa_bar = 270°, kappa_bar = 90°
  ✓ d7: equal(distance(O, F), e * abs(sin(kappa_bar))) from d4, d5, d6 by algebra — by calculation
  ✓ d8: equal(distance(S, F), R + e * cos(kappa_bar)) from def E, def S, def F by construction — read off the construction
  ✓ d9: equal(tan(angle(O, S, F)), distance(O, F) / distance(S, F)) from d3 by trigonometry tangent — justified (configuration conditions fail there: distinct(O, F))
      degenerate at kappa_bar = 0°, kappa_bar = 180°
  ✓ d10: equal(angle(O, S, F), angle(O, S, E)) from def F, def E, def S by construction — read off the construction
  ✓ d11: equal(distance(O, F), distance(O, S) * sin(angle(O, S, F))) from d3 by trigonometry sine — justified (configuration conditions fail there: distinct(O, F))
      degenerate at kappa_bar = 0°, kappa_bar = 180°
  ✓ d12: equal(distance(O, S) * distance(O, S), distance(O, F) * distance(O, F) + distance(S, F) * distance(S, F)) from d3 by Elements I.47 — justified (configuration conditions fail there: distinct(O, F))
      degenerate at kappa_bar = 0°, kappa_bar = 180°
  ✓ conclusion2: equal(sin(abs(norm180(c))), e * abs(sin(kappa_bar)) / sqrt(R * R + e * e + 2 * R * e * cos(kappa_bar))) from d2, d10, d11, d12, d7, d8 by algebra — by calculation
  ✓ conclusion: equal(tan(abs(norm180(c))), e * abs(sin(kappa_bar)) / (R + e * cos(kappa_bar))) from d2, d9, d10, d7, d8 by algebra — by calculation
  = c_max: 2;23° at κ̄ = 267;37°; reported 2;23°: confirmed
  = c_max_battani: 1;59,9° at κ̄ = 268;1°; reported 1;59,10°: discrepancy, difference −0;0,0,55
  note: d2 rests on the stated proposition p1 (equal(lam_bar, lamA + kappa_bar)), which is checked numerically, not derived
  note: d2 rests on the stated proposition p2 (equal(kappa, kappa_bar - c)), which is checked numerically, not derived
  note: degenerate states, in which a step's rule does not apply, a term is undefined or an inequality becomes an equality: kappa_bar = 0°; kappa_bar = 180°; kappa_bar = 270°; kappa_bar = 90°. The derivation does not cover them; the conclusion is true there as well (numerically)
  note: c_max_battani: computed 1;59,9°, reported 1;59,10° (difference −0;0,0,55)
```
