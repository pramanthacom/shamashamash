import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const sessions = sqliteTable(
  "sessions",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    startsAt: text("starts_at").notNull(),
    city: text("city").notNull(),
    place: text("place").notNull(),
    fee: text("fee").notNull(),
    note: text("note").notNull().default(""),
    telegramUrl: text("telegram_url").notNull().default(""),
    createdAt: text("created_at").notNull(),
  },
  (table) => [index("idx_sessions_starts_at").on(table.startsAt)],
);
