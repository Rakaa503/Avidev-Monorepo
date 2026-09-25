import { RateLimiter } from "./index";

async function main(): Promise<void> {

    console.clear();

    console.log("========================================");
    console.log("      AVSS RATE LIMIT FRAMEWORK");
    console.log("========================================\n");

    const limiter = new RateLimiter({
        limit: 5,
        windowMs: 10_000,
    });

    const key = "127.0.0.1";

    console.log("Limit :", 5);
    console.log("Window:", "10 Seconds");

    console.log("\n----------------------------------------\n");

    for (let i = 1; i <= 6; i++) {

        const result = limiter.consume(key);

        console.log(
            `Request ${i}`.padEnd(15),
            ":",
            result.allowed ? "✔ Allowed" : "❌ Blocked",
        );

        console.log(
            "Remaining".padEnd(15),
            ":",
            result.remaining,
        );

        console.log(
            "Reset".padEnd(15),
            ":",
            new Date(result.reset).toLocaleTimeString(),
        );

        console.log();

    }

    console.log("----------------------------------------");

    console.log(
        "Stats :",
        limiter.stats(),
    );

    console.log(
        "Keys  :",
        limiter.keys(),
    );

    limiter.clear();

    console.log(
        "\nClear :",
        limiter.stats(),
    );

    console.log("\n========================================");
    console.log("   RATE LIMIT TEST COMPLETED");
    console.log("========================================");

}

main().catch(console.error);