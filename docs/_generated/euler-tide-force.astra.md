```
# Leonhard Euler, Inquisitio physica in causam fluxus ac refluxus maris (Eneström 57; Paris prize 1740), ch. II,
# §§24–26 with Fig. 3 (Opera omnia II 31; here enestroem/E57, pidx 15–17): the geometry in which Euler finds the
# force by which the sun or the moon tends to displace a particle of the earth relative to its centre.
# C is the centre of the earth, S the luminary at the distance a; M is any particle, at CP = x along CS and
# PM = y off it; the force on M less the force on C is resolved along MC and along MR, normal to MC.
model euler-tide-force "Euler's geometry of the tide-raising force"
attributed "Leonhard Euler"
witness fr:enestroem/E57/0015/fig01 "Fig. 3"
witness fr:enestroem/E57/0016/p02 "§24: the setting"
witness fr:enestroem/E57/0017/p03 "§26: the resolution along MC and MR"
author "Gerd Graßhoff"
tradition newtonian
frame geocentric

param a   : length   "distance CS of the luminary from the centre of the earth"   in (30, 1000)
param rho : length   "distance CM of the particle from the centre of the earth"   in (0.5, 2)
param Sf  : quantity "absolute force of the luminary: its accelerating force at the distance of one semidiameter of the earth"
display Sf "S"
display rho "ρ"

variable phi : angle "the angle ACM between the line to the luminary and the line to the particle"
display phi "φ"

C = observer                       "centre of the earth"
S = C + polar(a, 90°)              "the sun or the moon"
A = C + polar(rho, 90°)            "the point of the sphere through M that has the luminary in its zenith"
B = C - polar(rho, 90°)            "the point that has it in its nadir"
D = C + polar(rho, 180°)           "a point that has it in the horizon"
E = C + polar(rho, 0°)             "the opposite point that has it in the horizon"
shell = circle(C, rho)             "the sphere about C through the particle"
M = C + polar(rho, 90° + phi)      "a particle of the earth"
P = foot(M, line(C, S))            "foot of the perpendicular from M on CS"
body luminary at S

observe dir = direction(C, S)      "direction of the luminary from the centre"
observe x = rho * cos(phi)         "CP, counted towards the luminary"
observe y = rho * sin(phi)         "PM, counted towards D"
observe dist = distance(M, S)      "SM, the distance of the particle from the luminary"
observe fM = Sf / (dist * dist)    "accelerating force on the particle towards S"
observe fC = Sf / (a * a)          "accelerating force on the centre towards S"
observe tMC = fM * cos(direction(M, S) - direction(M, C)) - fC * cos(direction(C, S) - direction(M, C)) "the force on the particle less the force on the centre, along MC, towards the centre"
observe tMR = fM * cos(direction(M, S) - (direction(M, C) + 90°)) - fC * cos(direction(C, S) - (direction(M, C) + 90°)) "the same along MR, normal to MC, towards the side of the luminary"
display dir "CS"

proposition p1: equal(abs(x), distance(C, P)) "x is CP"
proposition p2: equal(abs(y), distance(P, M)) "y is PM"
```
