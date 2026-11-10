```
solar-eccentric-epicyclic: superposition, level consistent (4/4)
  ✓ well-formed
  ✓ constructible
  ✓ superposed
  ✓ consistent
  ✓ Ecc.p1: equal(Ecc.lam_bar, lamA + kappa_bar)  max residual 5.7e-14 over 3456 configurations
  ✓ Ecc.p2: equal(Ecc.kappa, kappa_bar - Ecc.c)  max residual 1.1e-13 over 3456 configurations
  ✓ Ecc.p5: equal(Ecc.lam, Ecc.lam_bar - Ecc.c)  max residual 5.7e-14 over 3456 configurations
  ✓ Ecc.p3: collinear(Ecc.A, Ecc.E, Ecc.B)  max residual 1.6e-16 over 3456 configurations
  ✓ Ecc.p4: collinear(Ecc.A, O, Ecc.B)  max residual 1.8e-16 over 3456 configurations
  ✓ Epi.p1: parallel(line(Epi.C, Epi.S'), line(O, Epi.A'))  max residual 3.4e-15 over 3456 configurations
  ✓ Epi.p2: collinear(Epi.A', O, Epi.B')  max residual 0.0e+00 over 3456 configurations
  gap: parameters of one member only (free until a hypothesis or a parametrisation relates them): Ecc.R, Ecc.e, Epi.R', Epi.r
```
