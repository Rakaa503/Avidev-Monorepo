import {
  UnauthorizedError,
  ForbiddenError,
  ValidationError,
  SessionExpiredError,
  InternalServerError,
  errorHandler,
} from "./errors";

console.log("========== ERROR SYSTEM ==========\n");

console.log(errorHandler(new UnauthorizedError()));
console.log();

console.log(errorHandler(new ForbiddenError()));
console.log();

console.log(errorHandler(new ValidationError()));
console.log();

console.log(errorHandler(new SessionExpiredError()));
console.log();

console.log(errorHandler(new InternalServerError()));
console.log();

console.log("✅ Error System Loaded");