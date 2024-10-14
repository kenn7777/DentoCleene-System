
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
config({path: ".env.local"})



export default {
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./supabase/migrations",
  dbCredentials: {
     url: process.env.DATABASE_URL,
  },
}; 