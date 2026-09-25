import { logger } from "./logger";

console.log("");
console.log("========================================");
console.log("       AVSS LOGGER TEST");
console.log("========================================");
console.log("");

logger.info("Server Started");
logger.success("User Login Success");
logger.warn("Unauthorized Access");
logger.error("Database Connection Failed");
logger.debug("Session Created");
logger.security("SQL Injection Attempt Detected");
logger.database("Connected to PostgreSQL");
logger.access("GET /api/users");
logger.fatal("Unexpected Application Crash");

console.log("");
console.log("========================================");
console.log("      ALL TESTS COMPLETED");
console.log("========================================");
console.log("");