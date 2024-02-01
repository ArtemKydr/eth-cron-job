import etherscanService from '../services/etherscanService';

class CronService {

    async getTransactions() {
        const a = etherscanService.calculateTransaction()
    }
}

export default new CronService();
