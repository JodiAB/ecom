// src/lib/db/index.ts
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema"; // adjust path if yours is different


import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' })
// Next.js reads .env/.env.local automatically
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const client = neon(connectionString);
export const db = drizzle(client, { schema });
