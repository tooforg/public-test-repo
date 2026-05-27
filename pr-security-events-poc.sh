CODEX_CANARY='CODEX_SECURITY_EVENTS_CANARY_20260527T094607Z_14850'
export CODEX_CANARY
#!/usr/bin/env bash
set -euo pipefail
api="${GITHUB_API_URL:-https://api.github.com}/repos/${GITHUB_REPOSITORY}/code-scanning/alerts?per_page=20&state=open"
status=$(curl -sS -o alerts.json -w "%{http_code}" \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  "$api")
echo "codex_security_events_probe_http=${status}"
node <<'NODE'
const fs = require("fs");
const body = fs.readFileSync("alerts.json", "utf8");
let parsed;
try { parsed = JSON.parse(body); } catch (e) { parsed = { parse_error: e.message, raw_prefix: body.slice(0, 80) }; }
const canary = process.env.CODEX_CANARY;
const text = JSON.stringify(parsed);
const first = Array.isArray(parsed) && parsed.length ? parsed[0] : null;
console.log(JSON.stringify({
  codex_security_events_canary: canary,
  codex_security_events_canary_hit: text.includes(canary),
  codex_security_events_alert_count: Array.isArray(parsed) ? parsed.length : null,
  codex_security_events_first_rule: first && first.rule ? first.rule.id : null,
  codex_security_events_first_number: first ? first.number : null
}));
NODE
