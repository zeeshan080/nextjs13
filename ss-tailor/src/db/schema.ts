import {
  pgTable,
  serial,
  text,
  numeric,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const OwnerTable = pgTable(
  "owner",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    phoneno: text("phoneno").notNull(),
    image: text("image"),
    createdat: timestamp("createdat").defaultNow().notNull(),
    updatedat: timestamp("updatedat").defaultNow().notNull(),
  },
  (owner) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(owner.id),
    };
  }
);

export const ClothesTable = pgTable(
  "clothes",
  {
    id: serial("id").primaryKey(),
    length: numeric("length").notNull(),
    arms: numeric("arms").notNull(),
    surroundlength: numeric("surroundlength").notNull(),
    surroundshape: text("surroundshape").notNull(),
    chest: numeric("chest").notNull(),
    collar: numeric("collar").notNull(),
    shoulderlength: numeric("shoulderlength").notNull(),
    shouldershape: text("shouldershape").notNull(),
    cuff: numeric("cuff").notNull(),
    shalwarlength: numeric("shalwarlength").notNull(),
    shalwarpocket: numeric("shalwarpocket").notNull(),
    frontpocket: numeric("frontpocket").notNull(),
    sidepocket: numeric("sidepocket").notNull(),
    extrawork: text("extrawork"),
    createdat: timestamp("createdat").defaultNow().notNull(),
    updatedat: timestamp("updatedat").defaultNow().notNull(),
    owner: serial("owner").references(() => OwnerTable.id),
  },
  (clothes) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(clothes.id),
    };
  }
);

export type Clothes = InferModel<typeof ClothesTable>;
export type Owner = InferModel<typeof OwnerTable>;
export type newOwner = InferModel<typeof OwnerTable, 'insert'>;
export type newClothes = InferModel<typeof ClothesTable, "insert">;
