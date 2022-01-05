import { Pool } from "pg";

const connectionString = 'postgres://dfthvocd:lOjisDx-jRa1ZVpHrUlsOKZjE7FnouUd@kesavan.db.elephantsql.com/dfthvocd';

const db = new Pool({ connectionString });

export default db;