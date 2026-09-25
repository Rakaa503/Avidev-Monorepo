import { Hono } from "hono";

import { ProductsController } from "./products.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { roleMiddleware } from "../../middleware/role.middleware";

const products = new Hono();

const controller = new ProductsController();

/**
 * Product Statistics
 */
products.get(
    "/stats",
    authMiddleware,
    roleMiddleware("admin", "superadmin"),
    (c) => controller.stats(c)
);

/**
 * Public Product Endpoints
 */
products.get("/", (c) =>
    controller.index(c)
);

products.get("/:id", (c) =>
    controller.show(c)
);

/**
 * Create Product
 */
products.post(
    "/",
    authMiddleware,
    roleMiddleware("admin", "superadmin"),
    (c) => controller.store(c)
);

/**
 * Update Product
 */
products.put(
    "/:id",
    authMiddleware,
    roleMiddleware("admin", "superadmin"),
    (c) => controller.update(c)
);

/**
 * Delete Product
 */
products.delete(
    "/:id",
    authMiddleware,
    roleMiddleware("superadmin"),
    (c) => controller.destroy(c)
);

export default products;