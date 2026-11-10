```
# The equivalence of the two forms when the radii are proportional: Swerdlow's Fig. 1.3.
# The page (p. 20, scan page 50, paragraph 1): "it is not necessary that R' = R and r = e, but only that their
# ratios be equal; that is, R'/r = R/e … in both models the directions OS and OS' are the same … absolute
# distances are arbitrary in models determining direction". The page states the result; the steps are set out here.
derivation solar-equivalence-proportional in solar-eccentric-epicyclic "The two forms show the sun in the same direction when R'/r = R/e"
witness fr:kepler-sec/Swerdlow2026/0050/p02 "the proportional case, p. 20"
witness fr:kepler-sec/Swerdlow2026/0051/fig01 "Fig. 1.3"
author "Gerd Graßhoff"

given h1: equal(Epi.r, Epi.R' * Ecc.e / Ecc.R) "R'/r = R/e"

# the triangles OES and S'CO have an equal angle at E and at C, between proportional sides
derive d1: equal(angle(O, Ecc.E, Ecc.S), angle(Epi.S', Epi.C, O)) from def Ecc.E, def Ecc.S, def Epi.C, def Epi.S' by construction "both are the supplement of κ̄: CS' is parallel to EO, CO to ES"
derive d2: equal(distance(O, Ecc.E), Ecc.e)       from def Ecc.E by construction
derive d3: equal(distance(Ecc.E, Ecc.S), Ecc.R)   from def Ecc.S by construction
derive d4: equal(distance(Epi.C, Epi.S'), Epi.r)  from def Epi.S' by construction
derive d5: equal(distance(O, Epi.C), Epi.R')      from def Epi.C by construction
derive d6: equal(distance(Ecc.E, O) / distance(Ecc.E, Ecc.S), distance(Epi.C, Epi.S') / distance(Epi.C, O)) from d2, d3, d4, d5, h1 by algebra "e/R = r/R'"
derive d7: equal(angle(Ecc.E, O, Ecc.S), angle(Epi.C, Epi.S', O)) from d1, d6 by Elements VI.6 "the triangles are equiangular: the angle at O equals the angle at S'"

# the angle at S' is the alternate angle of S'OE
derive d8: parallel(line(Epi.C, Epi.S'), line(O, Ecc.E)) from def Epi.S', def Ecc.E by construction "the radius of the epicycle keeps the direction of the apsidal line"
derive d9: equal(angle(Epi.C, Epi.S', O), angle(Epi.S', O, Ecc.E)) from d8 by Elements I.29 "S'O falls on the parallels CS' and OE"
derive d10: equal(angle(Ecc.E, O, Ecc.S), angle(Ecc.E, O, Epi.S')) from d7, d9 by common notion 1
derive d11: equal(direction(O, Ecc.S), direction(O, Epi.S')) from d10 by lemma same angle "S and S' make the same angle with OE on the same side"

conclude equivalent(Ecc, Epi, direction) from d11 "in every state the sun is seen from O in the same direction"
```
