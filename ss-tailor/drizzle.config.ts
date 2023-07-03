import "dotenv/config"
import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/db/schema.ts",
  out: "./src/drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL ?? '',
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE
  }
} satisfies Config;