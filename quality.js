// code-quality CodeQL suite triggers (maintainability/reliability)
function compute(a, b) {
  var unusedLocal = 123;                 // js/unused-local-variable
  var x = 1;
  x = 2;                                 // js/useless-assignment-to-local (dead first write)
  if (a === a) { return 0; }            // js/comparison-of-identical-expressions
  if (b && b) { return 1; }            // js/redundant-operation
  if (a) { return 7; } else { return 7; }  // both branches identical
  return 9;
  var dead = 5;                         // js/unreachable-statement
}
function unusedReturn() {
  var y;
  return y;                             // returns undefined local
}
var globalDup = 1;
var globalDup = 2;                      // js/duplicate-... redeclare
module.exports = { compute, unusedReturn, globalDup };
