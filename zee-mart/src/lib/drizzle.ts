import {
    pgTable,
    serial,
    text,
    numeric,
    timestamp,
    uniqueIndex,
    json
  } from 'drizzle-orm/pg-core'
  import { InferModel } from 'drizzle-orm'
import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'


export const CategoriesTable = pgTable(
    'categories',
    {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
      slug: text('slug').notNull(),
      discription: text('discription').notNull(),
      createdAt: timestamp('createdAt').defaultNow().notNull(),
    },
    (categories) => {
      return {
        uniqueIdx: uniqueIndex('unique_idx').on(categories.slug),
      }
    }
  )

export const ProductsTable = pgTable(
  'products',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    price: numeric('price').notNull(),
    image: text('image').notNull(),   
    sizes: json('sizes').notNull(),
    createdat: timestamp('createdat').defaultNow().notNull(),
    category: serial('category').references(()=> CategoriesTable.id )
  },
  (products) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(products.name),
    }
  }
)

export type products = InferModel<typeof ProductsTable>
export type newProduct = InferModel<typeof ProductsTable, 'insert'>

// Connect to Vercel Postgres
export const db = drizzle(sql)