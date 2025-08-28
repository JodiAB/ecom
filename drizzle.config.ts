import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/lib/db/schema",
  out: "./drizzle/migrations",
  dialect: "postgresql", // ✅ required
  dbCredentials: {
    url: process.env.DATABASE_URL!, // ✅ renamed to url
  },
});
