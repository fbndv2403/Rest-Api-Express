import { createPool } from 'mysql2/promise';
import { DB_HOST, DB_DATABASES, DB_PASSWORD, DB_PORT, DB_USER} from '../config.js';

export const pool = createPool({
    host: DB_HOST,
    user: "fabian",
    password: "admin",
    port: DB_PORT,
    database: DB_DATABASES,
});