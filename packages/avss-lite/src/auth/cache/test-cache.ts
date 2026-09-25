import {
  MemoryCache,
  createCache,
} from "./index";

async function main(): Promise<void> {
  console.clear();

  console.log("========================================");
  console.log("         AVSS CACHE FRAMEWORK");
  console.log("========================================\n");

  const cache = createCache(
    new MemoryCache(),
  );

  console.log("Driver : Memory");

  console.log("\n----------------------------------------\n");

  // SET
  cache.set("framework", "AVSS Lite");

  console.log(
    "✔ Set Cache        :",
    cache.get("framework"),
  );

  // GET
  console.log(
    "✔ Get Cache        :",
    cache.get("framework"),
  );

  // HAS
  console.log(
    "✔ Has Cache        :",
    cache.has("framework"),
  );

  // KEYS
  console.log(
    "✔ Keys             :",
    cache.keys(),
  );

  // STATS
  console.log(
    "✔ Stats            :",
    cache.stats(),
  );

  // TTL TEST
  cache.set(
    "temporary",
    "Expired",
    1000,
  );

  console.log(
    "✔ TTL Cache        :",
    cache.get("temporary"),
  );

  await new Promise((resolve) =>
    setTimeout(resolve, 1200),
  );

  console.log(
    "✔ TTL Expired      :",
    cache.get("temporary"),
  );

  // DELETE
  cache.delete("framework");

  console.log(
    "✔ Delete Cache     :",
    !cache.has("framework"),
  );

  // CLEAR
  cache.set("user", "admin");
  cache.set("token", "123456");

  cache.clear();

  console.log(
    "✔ Clear Cache      :",
    cache.size() === 0,
  );

  console.log("\n----------------------------------------");

  console.log(
    "Driver : Memory",
  );

  console.log(
    "Total Keys :",
    cache.size(),
  );

  console.log(
    "Stats :",
    cache.stats(),
  );

  console.log("\n========================================");
  console.log("      CACHE TEST COMPLETED");
  console.log("========================================");
}

main().catch(console.error);