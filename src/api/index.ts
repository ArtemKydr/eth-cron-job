// src/api/index.ts
import express from 'express';
import { createConnection } from 'typeorm';
import Transaction from '../entities/Transaction';

export async function startApiService() {
    const app = express();
    const PORT = 3000;

    app.get('/api/mostChangedBalance', async (req, res) => {
        // Реализация вашего API-эндпоинта
    });

    app.listen(PORT, async () => {
        console.log(`API Server is running on http://localhost:${PORT}`);

        // Подключение к базе данных
        await createConnection({
            type: 'postgres',
            // Добавьте остальные параметры подключения
            entities: [Transaction],
        });
    });
}
