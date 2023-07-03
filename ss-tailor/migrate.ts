import { drizzle,PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const db:PostgresJsDatabase = drizzle(postgres({ ssl: 'require', max: 1 }));
const main = async () => {
	console.log("migrating...")
	await migrate(db, { migrationsFolder: './src/drizzle' });
	process.exit(0);
};
main();