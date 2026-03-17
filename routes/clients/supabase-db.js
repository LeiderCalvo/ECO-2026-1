import { Pool } from 'pg';

export const pool = new Pool({
  host: "aws....",
  port: "6543",
  database: "postgres",
  user: "******",
  password: "------",
});
