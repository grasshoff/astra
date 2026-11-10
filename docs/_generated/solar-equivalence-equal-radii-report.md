```
solar-equivalence-equal-radii: derivation in solar-eccentric-epicyclic, level conclusive (5/5)
  ✓ well-formed
  ✓ grounded
  ✓ true
  ✓ justified
  ✓ conclusive
  given     h1: equal(Epi.R', Ecc.R)
  given     h2: equal(Epi.r, Ecc.e)
  ✓ same: coincident(Ecc.S, Epi.S') by cases — justified by cases
    ✓ d3: equal(distance(Ecc.E, Ecc.S), Ecc.R) from def Ecc.S by construction — read off the construction
    ✓ d4: equal(distance(O, Epi.C), Epi.R') from def Epi.C by construction — read off the construction
    ✓ d8: equal(distance(O, Ecc.E), Ecc.e) from def Ecc.E by construction — read off the construction
    ✓ d9: equal(distance(Epi.C, Epi.S'), Epi.r) from def Epi.S' by construction — read off the construction
    ✓ generic: coincident(Ecc.S, Epi.S') from d12 — justified (it is d12)
      ✓ sides: parallel(line(Ecc.E, Ecc.S), line(O, Epi.C)) from d2 — justified (it is d2)
        ✓ d1: equal(angle(Ecc.A, Ecc.E, Ecc.S), angle(Epi.A', O, Epi.C)) from def Ecc.A, def Ecc.S, def Epi.A', def Epi.C by construction — read off the construction
        ✓ d2: parallel(line(Ecc.E, Ecc.S), line(O, Epi.C)) from d1 by Elements I.28 — justified
      ✓ d5: equal(distance(Ecc.E, Ecc.S), distance(O, Epi.C)) from d3, d4, h1 by common notion 1 — justified
      ✓ joins: parallel(line(O, Ecc.E), line(Epi.C, Ecc.S)) from d6 — justified (it is d6)
        ✓ d6: parallel(line(O, Ecc.E), line(Epi.C, Ecc.S)) from sides, d5 by Elements I.33 — justified
      ✓ d7: equal(distance(O, Ecc.E), distance(Epi.C, Ecc.S)) from sides, d5 by Elements I.33 — justified
      ✓ d10: equal(distance(Epi.C, Ecc.S), distance(Epi.C, Epi.S')) from d7, d8, h2, d9 by common notion 1 — justified
      ✓ d11: parallel(line(Epi.C, Epi.S'), line(O, Ecc.E)) from def Epi.S', def Ecc.E by construction — read off the construction
      ✓ d12: coincident(Ecc.S, Epi.S') from joins, d11, d10 by lemma same ray — justified
    ✓ apogee: coincident(Ecc.S, Epi.S') from a7 — justified (it is a7)
      ✓ a1: equal(distance(O, Ecc.S), distance(O, Ecc.E) + distance(Ecc.E, Ecc.S)) by lemma segment addition — justified
      ✓ a2: equal(distance(O, Epi.S'), distance(O, Epi.C) + distance(Epi.C, Epi.S')) by lemma segment addition — justified
      ✓ a3: equal(distance(O, Ecc.S), distance(O, Epi.S')) from a1, a2, d3, d4, d8, d9, h1, h2 by algebra — by calculation
      ✓ a4: parallel(line(O, Ecc.S), line(O, Ecc.E)) from apogee by lemma one line — justified
      ✓ a5: collinear(O, Ecc.E, Epi.S') from def Epi.C, def Epi.S', def Ecc.E by construction — read off the construction
      ✓ a6: parallel(line(O, Epi.S'), line(O, Ecc.E)) from a5 by lemma one line — justified
      ✓ a7: coincident(Ecc.S, Epi.S') from a4, a6, a3 by lemma same ray — justified
    ✓ perigee: coincident(Ecc.S, Epi.S') from p7 — justified (it is p7)
      ✓ p1: equal(distance(Ecc.E, Ecc.S), distance(Ecc.E, O) + distance(O, Ecc.S)) by lemma segment addition — justified
      ✓ p2: equal(distance(Epi.C, O), distance(Epi.C, Epi.S') + distance(Epi.S', O)) by lemma segment addition — justified
      ✓ p3: equal(distance(O, Ecc.S), distance(O, Epi.S')) from p1, p2, d3, d4, d8, d9, h1, h2 by algebra — by calculation
      ✓ p4: parallel(line(O, Ecc.S), line(O, Ecc.E)) from perigee by lemma one line — justified
      ✓ p5: collinear(O, Ecc.E, Epi.S') from def Epi.C, def Epi.S', def Ecc.E by construction — read off the construction
      ✓ p6: parallel(line(O, Epi.S'), line(O, Ecc.E)) from p5 by lemma one line — justified
      ✓ p7: coincident(Ecc.S, Epi.S') from p4, p6, p3 by lemma same ray — justified
  ✓ conclusion: coincident(Ecc.S, Epi.S') from same — justified (it is same)
```
