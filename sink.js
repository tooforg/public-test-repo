const cp = require('child_process');
const fs = require('fs');
const mysql = require('mysql');
const db = mysql.createConnection({});
function handler(req, res) {
  const name = req.query.name;                 // remote user input (CodeQL source)
  eval(name);                                  // js/code-injection
  cp.exec("ls " + name);                       // js/command-line-injection
  fs.readFile(name, function (e, d) {});       // js/path-injection
  db.query("SELECT * FROM t WHERE u='" + name + "'");  // js/sql-injection
  res.end(name);                               // js/reflected-xss
  var unusedVariable = 42;                      // js/unused-local-variable
  if (name == name) { return 1; }              // js/comparison-of-identical-expressions
  const apiKey = "AKIAIOSFODNN7EXAMPLE";       // (quality / hardcoded-ish)
  return apiKey;
}
module.exports = handler;
