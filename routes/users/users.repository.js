import { pool } from "../clients/supabase-db.js";

export class UsersRepository {
    getAllUsers = async () => {
        const result = await pool.query("SELECT * FROM profiles")
        return result.rows
    }
    
    getUserById = async (id) => {
        const result = await pool.query("SELECT * FROM profiles WHERE id = $1;", [id])
        return result.rows[0]
    }
}