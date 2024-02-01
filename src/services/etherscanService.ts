// src/services/PostgresService.ts
import { createConnection, Connection, Repository } from 'typeorm';
import pgConfig from '../config/pg';

class EtherscanService {
    private connection: Connection;
    private transactionRepository: Repository<Transaction>;

    constructor() {
        this.initialize();
    }

    private async initialize() {
        // Подключение к базе данных
        this.connection = await createConnection({
            type: pgConfig.type,
            host: pgConfig.host,
            port: pgConfig.port,
            username: pgConfig.username,
            password: pgConfig.password,
            database: pgConfig.database,
            entities: [Transaction],
        });

        // Получение репозитория для сущности Transaction
        this.transactionRepository = this.connection.getRepository(Transaction);
    }

    public async createTransaction(data: Partial<Transaction>): Promise<Transaction> {
        const transaction = this.transactionRepository.create(data);
        return await this.transactionRepository.save(transaction);
    }

    public async updateTransaction(id: number, data: Partial<Transaction>): Promise<Transaction | null> {
        const transaction = await this.transactionRepository.findOne(id);
        if (!transaction) return null;

        this.transactionRepository.merge(transaction, data);
        return await this.transactionRepository.save(transaction);
    }

    public async deleteTransaction(id: number): Promise<boolean> {
        const result = await this.transactionRepository.delete(id);
        return result.affected > 0;
    }

    public async getTransactions(): Promise<Transaction[]> {
        return await this.transactionRepository.find();
    }
}
const postgres = new EtherscanService();
export default postgres;
