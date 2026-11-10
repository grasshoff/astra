```
# The equivalence of the two forms when the radii are equal: the reasoning that Swerdlow's Fig. 1.2 exhibits.
# The page (p. 19, scan page 49, paragraph 3): "To construct the epicyclic model, complete parallelogram OESC and
# let C be the center of an epicycle of radius r = e moving uniformly through κ̄ on a concentric circle about O of
# radius R' = R while the sun S moves in the opposite direction through κ̄ about C from OC extended to the apogee
# of the epicycle, so that r is always parallel to the apsidal line AB."
# The page names the parallelogram. The steps, the propositions that license them, and the two positions in
# which there is no parallelogram — the sun at the apogee and at the perigee — are set out here.
derivation solar-equivalence-equal-radii in solar-eccentric-epicyclic "The two forms place the sun at the same point when R' = R and r = e"
witness fr:kepler-sec/Swerdlow2026/0049/p04 "the parallelogram OESC, p. 19"
witness fr:kepler-sec/Swerdlow2026/0050/fig01 "Fig. 1.2"
author "Gerd Graßhoff"

given h1: equal(Epi.R', Ecc.R) "the deferent has the radius of the eccentric"
given h2: equal(Epi.r, Ecc.e)  "the epicycle has the eccentricity as its radius"

show same: coincident(Ecc.S, Epi.S') "the sun of the eccentric form and the sun of the epicyclic form are one point"

  # what the two constructions give in every position
  derive d3: equal(distance(Ecc.E, Ecc.S), Ecc.R)   from def Ecc.S by construction  "S lies on the eccentric"
  derive d4: equal(distance(O, Epi.C), Epi.R')      from def Epi.C by construction  "C lies on the deferent"
  derive d8: equal(distance(O, Ecc.E), Ecc.e)       from def Ecc.E by construction  "OE is the eccentricity"
  derive d9: equal(distance(Epi.C, Epi.S'), Epi.r)  from def Epi.S' by construction "S' lies on the epicycle"

  cases "by the position of the sun: off the apsidal line, at the apogee, at the perigee"

  case generic: when noncollinear(O, Ecc.E, Ecc.S) "off the apsidal line, OESC is a parallelogram"

    show sides: parallel(line(Ecc.E, Ecc.S), line(O, Epi.C)) "ES and OC are parallel"
      derive d1: equal(angle(Ecc.A, Ecc.E, Ecc.S), angle(Epi.A', O, Epi.C)) from def Ecc.A, def Ecc.S, def Epi.A', def Epi.C by construction "both angles are the mean anomaly κ̄, counted from the apsidal line"
      derive d2: parallel(line(Ecc.E, Ecc.S), line(O, Epi.C)) from d1 by Elements I.28 "the apsidal line falls on ES and OC and makes equal angles with them on the same side"
    qed from d2

    derive d5: equal(distance(Ecc.E, Ecc.S), distance(O, Epi.C)) from d3, d4, h1 by common notion 1 "ES = R = R' = OC"

    show joins: parallel(line(O, Ecc.E), line(Epi.C, Ecc.S)) "OE and CS are parallel: OESC is a parallelogram"
      derive d6: parallel(line(O, Ecc.E), line(Epi.C, Ecc.S)) from sides, d5 by Elements I.33 "the lines joining the ends of the equal and parallel ES and OC"
    qed from d6
    derive d7: equal(distance(O, Ecc.E), distance(Epi.C, Ecc.S)) from sides, d5 by Elements I.33 "and they are equal"

    derive d10: equal(distance(Epi.C, Ecc.S), distance(Epi.C, Epi.S')) from d7, d8, h2, d9 by common notion 1 "CS = OE = e = r = CS'"
    derive d11: parallel(line(Epi.C, Epi.S'), line(O, Ecc.E)) from def Epi.S', def Ecc.E by construction "the radius of the epicycle keeps the direction of the apsidal line"
    derive d12: coincident(Ecc.S, Epi.S') from joins, d11, d10 by lemma same ray "S and S' lie from C along the parallel to OE, the same way, at the same distance"
  qed from d12

  case apogee: when collinear(O, Ecc.E, Ecc.S), between(Ecc.E, O, Ecc.S) "at the apogee the four points lie on the apsidal line, E between O and S"
    derive a1: equal(distance(O, Ecc.S), distance(O, Ecc.E) + distance(Ecc.E, Ecc.S)) by lemma segment addition "OS = OE + ES"
    derive a2: equal(distance(O, Epi.S'), distance(O, Epi.C) + distance(Epi.C, Epi.S')) by lemma segment addition "OS' = OC + CS'"
    derive a3: equal(distance(O, Ecc.S), distance(O, Epi.S')) from a1, a2, d3, d4, d8, d9, h1, h2 by algebra "e + R = R' + r"
    derive a4: parallel(line(O, Ecc.S), line(O, Ecc.E)) from apogee by lemma one line "S lies on the apsidal line"
    derive a5: collinear(O, Ecc.E, Epi.S') from def Epi.C, def Epi.S', def Ecc.E by construction "and so does S'"
    derive a6: parallel(line(O, Epi.S'), line(O, Ecc.E)) from a5 by lemma one line
    derive a7: coincident(Ecc.S, Epi.S') from a4, a6, a3 by lemma same ray "S and S' lie from O along the apsidal line, the same way, at the same distance"
  qed from a7

  case perigee: when collinear(O, Ecc.E, Ecc.S), between(O, Ecc.E, Ecc.S) "at the perigee the four points lie on the apsidal line, O between E and S"
    derive p1: equal(distance(Ecc.E, Ecc.S), distance(Ecc.E, O) + distance(O, Ecc.S)) by lemma segment addition "ES = EO + OS"
    derive p2: equal(distance(Epi.C, O), distance(Epi.C, Epi.S') + distance(Epi.S', O)) by lemma segment addition "CO = CS' + S'O"
    derive p3: equal(distance(O, Ecc.S), distance(O, Epi.S')) from p1, p2, d3, d4, d8, d9, h1, h2 by algebra "R − e = R' − r"
    derive p4: parallel(line(O, Ecc.S), line(O, Ecc.E)) from perigee by lemma one line "S lies on the apsidal line"
    derive p5: collinear(O, Ecc.E, Epi.S') from def Epi.C, def Epi.S', def Ecc.E by construction "and so does S'"
    derive p6: parallel(line(O, Epi.S'), line(O, Ecc.E)) from p5 by lemma one line
    derive p7: coincident(Ecc.S, Epi.S') from p4, p6, p3 by lemma same ray "S and S' lie from O along the apsidal line, the same way, at the same distance"
  qed from p7

qed by cases

conclude equivalent(Ecc, Epi, position) from same "in every state the two forms have the sun at one point"
```
