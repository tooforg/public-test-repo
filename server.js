const http = require('http');
const cp = require('child_process');
http.createServer((req,res)=>{
  const u = new URL(req.url,'http://x');
  const name = u.searchParams.get('name');   // user input
  eval(name);                                 // CodeQL: js/code-injection
  cp.exec('echo '+name);                      // CodeQL: js/command-line-injection
  res.end('ok');
}).listen(3000);
// poke

//poke2
