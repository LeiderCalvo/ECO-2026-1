import { Pool } from 'pg';

export const pool = new Pool({
  host: "aws-1-us-east-1.pooler.supabase.com",
  port: "6543",
  database: "postgres",
  user: "postgres.uualhzfvyhfmedsvfmuj",
  password: "kUklb1vnpEK79zYo",
});
