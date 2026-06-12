// PM2 Windows wrapper — Next.js dev server
const { spawn } = require("child_process");
const path = require("path");

const child = spawn("npm", ["run", "dev"], {
  cwd: __dirname,
  shell: true,
  stdio: "inherit",
  env: { ...process.env, PORT: "3000" },
});

child.on("exit", (code) => process.exit(code ?? 0));
child.on("error", (err) => { console.error(err); process.exit(1); });
