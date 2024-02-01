import etherscanConfig from '../config/etherscan';
import axiosService from '../modules/axios';

class EtherscanService {
    constructor(config) {
        this.baseUrl = config.baseUrl;
    }

    async calculateTransaction() {
        try {
            const lastBlockNumber = await axiosService.makeRequest('GET', `${this.baseUrl}/api`, {
                module: 'proxy',
                action: 'eth_blockNumber'
            });

            const startBlockNumber = 19000000;
            const endBlockNumber = parseInt(lastBlockNumber.data.result, 16);

            for (let blockNumber = startBlockNumber; blockNumber <= endBlockNumber; blockNumber++) {
                const blockInfo = await axiosService.makeRequest('GET', 'https://api.etherscan.io/api', {
                    module: 'proxy',
                    action: 'eth_getBlockByNumber',
                    tag: blockNumber.toString(16),
                    boolean: true
                });

                const transactions = blockInfo.data.result.transactions;

                for (const transaction of transactions) {
                    // Реализация сохранения транзакций в базу данных
                    // Implement saving transactions to the database
                }
            }
        } catch (error) {
            console.error('Error in calculateTransaction:', error);
        }
    }
}

const etherscanService = new EtherscanService(etherscanConfig);
export default etherscanService;
