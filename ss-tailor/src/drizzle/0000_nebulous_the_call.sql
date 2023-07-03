CREATE TABLE IF NOT EXISTS "clothes" (
	"id" serial PRIMARY KEY NOT NULL,
	"length" numeric NOT NULL,
	"arms" numeric NOT NULL,
	"surroundlength" numeric NOT NULL,
	"surroundshape" text NOT NULL,
	"chest" numeric NOT NULL,
	"collar" numeric NOT NULL,
	"shoulder" numeric NOT NULL,
	"shouldershape" text NOT NULL,
	"cuff" numeric NOT NULL,
	"shalwarlength" numeric NOT NULL,
	"shalwarpocket" numeric NOT NULL,
	"frontpocket" numeric NOT NULL,
	"sidepocket" numeric NOT NULL,
	"extrawork" text,
	"createdat" timestamp DEFAULT now() NOT NULL,
	"updatedat" timestamp DEFAULT now() NOT NULL,
	"owner" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "owner" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"phoneno" text NOT NULL,
	"image" text,
	"createdat" timestamp DEFAULT now() NOT NULL,
	"updatedat" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_idx" ON "clothes" ("id");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_idx" ON "owner" ("id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "clothes" ADD CONSTRAINT "clothes_owner_owner_id_fk" FOREIGN KEY ("owner") REFERENCES "owner"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
