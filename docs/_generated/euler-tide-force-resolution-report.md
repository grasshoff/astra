```
euler-tide-force-resolution: derivation in euler-tide-force, level conclusive (5/5)
  ✓ well-formed
  ✓ grounded
  ✓ true
  ✓ justified
  ✓ conclusive
  ✓ setting: equal(dist * dist, (a - x) * (a - x) + y * y) from s6 — justified (it is s6)
    ✓ s1: perpendicular(line(M, P), line(S, C)) from def P by construction — read off the construction
      undefined at phi = 0°, phi = 180°
    ✓ s2: equal(distance(M, S) * distance(M, S), distance(M, P) * distance(M, P) + distance(S, P) * distance(S, P)) from s1 by Elements I.47 — justified (configuration conditions fail there: distinct(M, P))
      degenerate at phi = 0°, phi = 180°
    ✓ s3: equal(distance(S, P), a - x) from def S, def P, def x by construction — read off the construction
    ✓ s4: equal(distance(M, P), abs(y)) from def M, def P, def y by construction — read off the construction
    ✓ s5: equal(dist, distance(M, S)) from def dist by construction — read off the construction
    ✓ s6: equal(dist * dist, (a - x) * (a - x) + y * y) from s2, s3, s4, s5 by algebra — by calculation
  ✓ exact_MC: equal(tMC, Sf * x / (a * a * rho) - Sf * (a * x - x * x - y * y) / (dist * dist * dist * rho)) from m1 — justified (it is m1)
    ✓ m1: equal(tMC, Sf * x / (a * a * rho) - Sf * (a * x - x * x - y * y) / (dist * dist * dist * rho)) from def tMC, def fM, def fC, def dist, def x, def y, def M, def S by construction — read off the construction
  ✓ exact_MR: equal(tMR, Sf * a * y / (dist * dist * dist * rho) - Sf * y / (a * a * rho)) from r1 — justified (it is r1)
    ✓ r1: equal(tMR, Sf * a * y / (dist * dist * dist * rho) - Sf * y / (a * a * rho)) from def tMR, def fM, def fC, def dist, def x, def y, def M, def S by construction — read off the construction
  ✓ second_MC: approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho) + 3 * Sf * x * (3 * y * y - 2 * x * x) / (2 * a * a * a * a * rho)) to order 2 in rho / a from n1 — justified (it is n1)
    ✓ n1: approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho) + 3 * Sf * x * (3 * y * y - 2 * x * x) / (2 * a * a * a * a * rho)) to order 2 in rho / a from exact_MC, setting by expansion — by expansion (relative difference 2.0e-04 at ratio 0.01, 2.0e-06 at ratio 0.001, 2.0e-08 at ratio 0.0001)
  ✓ second_MR: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x - y * y) / (2 * a * a * a * a * rho)) to order 2 in rho / a from n2 — justified (it is n2)
    ✓ n2: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x - y * y) / (2 * a * a * a * a * rho)) to order 2 in rho / a from exact_MR, setting by expansion — by expansion (relative difference 1.8e-04 at ratio 0.01, 1.8e-06 at ratio 0.001, 1.8e-08 at ratio 0.0001)
  ✓ first_MC: approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho)) to order 1 in rho / a from f1 — justified (it is f1)
    ✓ f1: approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho)) to order 1 in rho / a from second_MC by expansion — by expansion (relative difference 1.5e-02 at ratio 0.01, 1.5e-03 at ratio 0.001, 1.5e-04 at ratio 0.0001)
  ✓ first_MR: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho)) to order 1 in rho / a from f2 — justified (it is f2)
    ✓ f2: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho)) to order 1 in rho / a from second_MR by expansion — by expansion (relative difference 1.4e-02 at ratio 0.01, 1.4e-03 at ratio 0.001, 1.4e-04 at ratio 0.0001)
  ✓ vertical: equal(Sf * (y * y - 2 * x * x) / (a * a * a * rho), Sf * rho / (a * a * a) * (1 - 3 * cos(phi) * cos(phi))) from v3 — justified (it is v3)
    ✓ v1: equal(x, rho * cos(phi)) from def x by construction — read off the construction
    ✓ v2: equal(y, rho * sin(phi)) from def y by construction — read off the construction
    ✓ v3: equal(Sf * (y * y - 2 * x * x) / (a * a * a * rho), Sf * rho / (a * a * a) * (1 - 3 * cos(phi) * cos(phi))) from v1, v2 by algebra — by calculation
  ✓ horizontal: equal(3 * Sf * x * y / (a * a * a * rho), 3 * Sf * rho / (2 * a * a * a) * sin(2 * phi)) from w3 — justified (it is w3)
    ✓ w1: equal(x, rho * cos(phi)) from def x by construction — read off the construction
    ✓ w2: equal(y, rho * sin(phi)) from def y by construction — read off the construction
    ✓ w3: equal(3 * Sf * x * y / (a * a * a * rho), 3 * Sf * rho / (2 * a * a * a) * sin(2 * phi)) from w1, w2 by algebra — by calculation
  ✓ conclusion2: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho)) to order 1 in rho / a from first_MR by expansion — by expansion (relative difference 1.4e-02 at ratio 0.01, 1.4e-03 at ratio 0.001, 1.4e-04 at ratio 0.0001)
  ✓ conclusion: approximately(tMC, Sf * (y * y - 2 * x * x) / (a * a * a * rho)) from first_MC — justified (it is first_MC)
  note: step v1 is not used on the way to the conclusion
  note: step v2 is not used on the way to the conclusion
  note: step v3 is not used on the way to the conclusion
  note: step vertical is not used on the way to the conclusion
  note: step w1 is not used on the way to the conclusion
  note: step w2 is not used on the way to the conclusion
  note: step w3 is not used on the way to the conclusion
  note: step horizontal is not used on the way to the conclusion
  note: degenerate states, in which a step's rule does not apply, a term is undefined or an inequality becomes an equality: phi = 0°; phi = 180°. The derivation does not cover them; the conclusion is true there as well (numerically)
```
