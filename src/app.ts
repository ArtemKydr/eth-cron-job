import CronService from './jobs/cronJob';

async function runApp() {
    const a = await CronService.getTransactions();
}

// Запуск приложения
runApp().catch((error) => console.error('Error during app startup:', error));
