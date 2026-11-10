```
kepler-equant-unequal-motion: derivation in kepler-equant, level conclusive (5/5)
  ✓ well-formed
  ✓ grounded
  ✓ true
  ✓ justified
  ✓ conclusive
  given     h1: equal(q, e)
  ✓ lag: less(angle(D, B, E), angle(D, C, E)) from k4 — justified (it is k4)
    ✓ k1: equal(angle(E, C, D), angle(C, E, B) + angle(E, B, C)) by Elements I.32 — justified (configuration conditions fail there: noncollinear(E, B, C))
      degenerate at theta = 0°, theta = 180°
    ✓ k2: less(angle(E, B, C), angle(E, C, D)) from k1 by common notion 5 — justified
    ✓ k3: equal(angle(E, B, C), angle(D, B, E)) from def C, def D, def E by construction — read off the construction
    ✓ k4: less(angle(D, B, E), angle(D, C, E)) from k2, k3 by common notion 1 — justified
  ✓ k5: equal(angle(D, B, E) + angle(E, B, F), 180°) by Elements I.13 — justified
  ✓ k6: equal(angle(D, C, E) + angle(E, C, F), 180°) by Elements I.13 — justified
  ✓ lead: less(angle(E, C, F), angle(E, B, F)) from k7 — justified (it is k7)
    ✓ k7: less(angle(E, C, F), angle(E, B, F)) from lag, k5, k6 by algebra — by calculation
  · quadrant: right_angle(D, C, E) — supposed
  ✓ unequal: less(angle(D, B, E), angle(E, B, F)) from k9 — justified (it is k9)
    ✓ k8: equal(angle(D, C, E), angle(E, C, F)) from quadrant, k6 by algebra — by calculation
    ✓ k9: less(angle(D, B, E), angle(E, B, F)) from lag, lead, k8 by algebra — by calculation
  ✓ conclusion: less(angle(D, B, E), angle(E, B, F)) from unequal — justified (it is unequal)
  note: given h1 (equal(q, e)) is not needed for the conclusion
  note: degenerate states, in which a step's rule does not apply, a term is undefined or an inequality becomes an equality: theta = 0°; theta = 180°. The derivation does not cover them; the conclusion is true there as well (numerically)
```
