```
# Kepler, Astronomia nova, Part I, ch. 4 (KGW 3, p. 73; kepler-prim/kgw-03, pidx 71, paragraph 4): the argument
# by which the equant model is charged with making the motion of the orb unequal.
# "Eligatur enim E punctum in circulo, quem Planeta corpore peragrat, connectaturque cum CBA : et sit jam DCE
# rectus, ut et ECF. Cum ergo sint anguli hi aequales, constituti nempe aequalibus temporibus, et DCE exterior
# aequet CBE, CEB interiores : ergo parte CEB ablata, residuus CBE vel DBE minor erit quam DCE. itaque FBE
# major quam DCE vel FCE. Sed DE arcus metitur DBE angulum, et EF arcus angulum EBF. minor ergo DE quam EF. et
# transit Planeta per eos aequalibus temporibus."
# Kepler cites no proposition of Euclid. The propositions that license his steps are supplied here.
derivation kepler-equant-unequal-motion in kepler-equant "About the centre of its circle the planet moves unequally: the arc DE is less than the arc EF, and both are passed in equal times"
witness fr:kepler-prim/kgw-03/0071/p05 "Astronomia nova ch. 4"
witness fr:kepler-sec/Kepler1992/0147/p02 "Donahue's translation"
author "Gerd Graßhoff"

given h1: equal(q, e) "the equant point lies as far above the centre as the eye lies below it: BC = BA"

show lag: less(angle(D, B, E), angle(D, C, E)) "the angle DBE at the centre is less than the angle DCE at the equant point"
  derive k1: equal(angle(E, C, D), angle(C, E, B) + angle(E, B, C)) by Elements I.32 "DCE is the exterior angle of the triangle CBE, equal to the interior angles CBE and CEB"
  derive k2: less(angle(E, B, C), angle(E, C, D)) from k1 by common notion 5 "the part CEB taken away, the remainder CBE is less than DCE"
  derive k3: equal(angle(E, B, C), angle(D, B, E)) from def C, def D, def E by construction "CBE or DBE: C and D lie from B on one ray"
  derive k4: less(angle(D, B, E), angle(D, C, E)) from k2, k3 by common notion 1
qed from k4

derive k5: equal(angle(D, B, E) + angle(E, B, F), 180°) by Elements I.13 "BE stands on the apsidal line at B: DBE and EBF make two right angles"
derive k6: equal(angle(D, C, E) + angle(E, C, F), 180°) by Elements I.13 "CE stands on the apsidal line at C: DCE and ECF make two right angles"

show lead: less(angle(E, C, F), angle(E, B, F)) "so the angle FBE is greater than the angle FCE"
  derive k7: less(angle(E, C, F), angle(E, B, F)) from lag, k5, k6 by algebra
qed from k7

suppose quadrant: right_angle(D, C, E) "let DCE be a right angle, and so ECF: two quarters of the period"

show unequal: less(angle(D, B, E), angle(E, B, F)) "the arc DE, which measures the angle DBE, is less than the arc EF, which measures the angle EBF"
  derive k8: equal(angle(D, C, E), angle(E, C, F)) from quadrant, k6 by algebra "the angles at C are equal: they are made in equal times"
  derive k9: less(angle(D, B, E), angle(E, B, F)) from lag, lead, k8 by algebra "DBE < DCE = ECF < EBF"
qed from k9

conclude less(angle(D, B, E), angle(E, B, F)) from unequal "in equal times the planet passes the lesser arc DE and the greater arc EF: the orb is now slow, now fast"
```
