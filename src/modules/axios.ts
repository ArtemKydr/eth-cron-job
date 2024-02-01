import axios from 'axios';

class Axios {

    public async makeRequest(method: string, path: string, params: any): Promise<any> {
        try {
            const response = await axios({
                method,
                url: `${baseUrl}${path}`,
                params,
            });

            // Возвращаем результат запроса
            return response.data;
        } catch (error) {
            // Обработка ошибок, например, логирование или переброска ошибки
            console.error('Error making request:', error.message);
            throw error;
        }
    }
}

const axiosService = new Axios()

export default axiosService;

