import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users=pgTable('users',{
    id:serial('ID').primaryKey(),
    name:varchar('Name').notNull(),
    email:varchar('email').notNull()
})