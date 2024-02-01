// pg.ts
import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
cronRestartMs: process.env.CRON_RESTART_MS
};

export default appConfig;
