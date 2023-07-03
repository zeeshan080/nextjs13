import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
 
 // for connect to DB
const queryClient = postgres({ssl:"require"});
export const db: PostgresJsDatabase = drizzle(queryClient);
