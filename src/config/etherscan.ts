import dotenv from 'dotenv';

dotenv.config();

const etherscanConfig = {
baseUrl: process.env.ETHERSCAN_BASE_URL
};

export default etherscanConfig;
