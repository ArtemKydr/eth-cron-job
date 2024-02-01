import { startApiService } from './api';
import CronService from './jobs/cronJob';

async function runApp() {
    const a = await CronService.saveTransactionsToDatabase();
}

// Запуск приложения
runApp().catch((error) => console.error('Error during app startup:', error));
