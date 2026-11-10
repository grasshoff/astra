```
euler-tide-force-emendation: derivation in euler-tide-force, level grounded (2/5)
  ✓ well-formed
  ✓ grounded
  ✗ true
      conclusion: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x + y * y) / (2 * a * a * a * a * rho)) fails (not of order 2: relative difference 2.0e-02 at ratio 0.01, 2.0e-03 at ratio 0.001, 2.0e-04 at ratio 0.0001)
  · justified (not reached)
  ✗ conclusive
      the conclusion does not hold
  ✓ exact: equal(tMR, Sf * a * y / (dist * dist * dist * rho) - Sf * y / (a * a * rho)) from def tMR, def fM, def fC, def dist, def x, def y, def M, def S by construction — read off the construction
  ✗ conclusion: approximately(tMR, 3 * Sf * x * y / (a * a * a * rho) + 3 * Sf * y * (4 * x * x + y * y) / (2 * a * a * a * a * rho)) from exact by expansion — false (not of order 2: relative difference 2.0e-02 at ratio 0.01, 2.0e-03 at ratio 0.001, 2.0e-04 at ratio 0.0001)
```
