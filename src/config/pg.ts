// pg.ts
import dotenv from 'dotenv';

dotenv.config();

const pgConfig = {
type: process.env.DB_TYPE || 'postgres',
host: process.env.DB_HOST || 'localhost',
port: parseInt(process.env.DB_PORT || '5432', 10),
username: process.env.DB_USERNAME || 'your_username',
password: process.env.DB_PASSWORD || 'your_password',
database: process.env.DB_DATABASE || 'your_database',
};

export default pgConfig;
