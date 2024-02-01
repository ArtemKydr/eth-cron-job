import axiosService from '../modules/axios';
import appConfig from '../config/app';

class CronService {

    async saveTransactionsToDatabase() {
        const params = {
            module: 'proxy',
            action: 'eth_blockNumber'
        }
        const lastBlockNumber = await axiosService.makeRequest('GET', 'api', params);

        const startBlockNumber = 19000000;
        const endBlockNumber = parseInt(lastBlockNumber.data.result, 16);

        for (let blockNumber = startBlockNumber; blockNumber <= endBlockNumber; blockNumber++) {
            const blockInfo = await axios.get(`https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${blockNumber.toString(16)}&boolean=true`);
            const transactions = blockInfo.data.result.transactions;

            for (const transaction of transactions) {
                // Реализация сохранения транзакций в базу данных
            }
        }
    }
}

export default new CronService(appConfig);
