import { createPool } from 'mysql2/promise';
import mysql from 'mysql2/promises';
import { DB_HOST, DB_DATABASES, DB_PASSWORD, DB_PORT, DB_USER} from '../config';

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASES,
});