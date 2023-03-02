import { Pool } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

export const db = new Pool({
     user: process.env.POSTGRES_USER,
     password: process.env.POSTGRES_PASSWORD,
     host: process.env.POSTGRES_HOST,
     database: process.env.POSTGRES_DATABASE,
});



