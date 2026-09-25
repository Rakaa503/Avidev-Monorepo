import {
  loggerPlugin,
  auditPlugin,
} from "./plugins";

console.log("========== PLUGINS ==========\n");

const logger = loggerPlugin();
const audit = auditPlugin();

logger.setup();
audit.setup();

console.log();

console.log("Logger :", logger.name);
console.log("Audit  :", audit.name);

console.log("\n=============================");