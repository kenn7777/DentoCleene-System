import { timestamp } from "drizzle-orm/mysql-core";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const patients = pgTable('patients', {
  id: uuid("id").primaryKey().notNull(),
  name: text("name").notNull(),
  stage: text("stage").notNull(),
  contactnumber: text("contactnumber").notNull(),
  address: text("address").notNull(),
  createAt: timestamp("created_at").defaultNow().notNull(),
});

