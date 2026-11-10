```
# The equation of centre of the eccentric form as a function of the mean anomaly.
# The page (p. 22, scan page 52, paragraph 2) prints the result, tan c = e sin κ̄ / (R + e cos κ̄), and the maximum
# and its sine form, and the maximum (paragraph 4), c_m = sin⁻¹ e/R = 2;23°. It gives no derivation; the one below is supplied by the author of this
# text: the perpendicular from O on ES, two right triangles, and the exterior angle of the triangle OES.
derivation solar-equation-of-centre in solar-eccentric "The equation of centre is the angle at the sun, with tan c = e sin κ̄ / (R + e cos κ̄)"
witness fr:kepler-sec/Swerdlow2026/0052/p03 "the formula, p. 22"
witness fr:kepler-sec/Swerdlow2026/0052/p05 "the maximum, p. 22"
author "Gerd Graßhoff"

construct F = foot(O, line(E, S)) "foot of the perpendicular from the earth on ES"

# the equation is the angle OSE
derive d1: equal(angle(S, E, A), angle(E, S, O) + angle(S, O, E)) from def A by Elements I.32 "OE produced to the apogee: the exterior angle at E of the triangle OES"
derive d2: equal(abs(norm180(c)), angle(O, S, E)) from d1, prop p1, prop p2 by algebra "the exterior angle is κ̄ and the angle at O is κ, so the angle at S is κ̄ − κ = c"

# the two right triangles on the perpendicular OF
derive d3: perpendicular(line(O, F), line(E, S)) from def F by construction
derive d4: equal(distance(O, F), distance(O, E) * sin(angle(O, E, F))) from d3 by trigonometry sine
derive d5: equal(distance(O, E), e) from def E by construction
derive d6: equal(sin(angle(O, E, F)), abs(sin(kappa_bar))) from def E, def S, def F by construction "the angle OEF is κ̄ or its supplement, according to the side of E on which F falls"
derive d7: equal(distance(O, F), e * abs(sin(kappa_bar))) from d4, d5, d6 by algebra
derive d8: equal(distance(S, F), R + e * cos(kappa_bar)) from def E, def S, def F by construction "F lies on SE produced beyond E for κ̄ within 90° of the apogee, between S and E otherwise: SF = SE ± EF"
derive d9: equal(tan(angle(O, S, F)), distance(O, F) / distance(S, F)) from d3 by trigonometry tangent
derive d10: equal(angle(O, S, F), angle(O, S, E)) from def F, def E, def S by construction "F and E lie from S on one ray"

# for the sine form: OS from the right triangle OFS
derive d11: equal(distance(O, F), distance(O, S) * sin(angle(O, S, F))) from d3 by trigonometry sine
derive d12: equal(distance(O, S) * distance(O, S), distance(O, F) * distance(O, F) + distance(S, F) * distance(S, F)) from d3 by Elements I.47
conclude equal(tan(abs(norm180(c))), e * abs(sin(kappa_bar)) / (R + e * cos(kappa_bar))) from d2, d9, d10, d7, d8 by algebra "tan c = e sin κ̄ / (R + e cos κ̄), in absolute value"
conclude equal(sin(abs(norm180(c))), e * abs(sin(kappa_bar)) / sqrt(R * R + e * e + 2 * R * e * cos(kappa_bar))) from d2, d10, d11, d12, d7, d8 by algebra "sin c = e sin κ̄ / (R² + e² + 2Re cos κ̄)^½, in absolute value"

compute c_max = max(angle(O, S, E)) with solar-eccentric.ptolemy reported 2;23° source fr:kepler-sec/Swerdlow2026/0052/p05 "Ptolemy's maximum equation"
compute c_max_battani = max(angle(O, S, E)) with solar-eccentric.battani reported 1;59,10° source fr:kepler-sec/Swerdlow2026/0052/p06 "al-Battānī's maximum equation"
```
