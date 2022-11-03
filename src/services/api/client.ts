import axios from 'axios';
import { API_URL } from 'configs';

const apiClient = axios.create({
  baseURL: API_URL.toString(),
  headers: {
    //  Authorization: `<Token>`,
    Accept: 'application/json',
  },
});

export { apiClient };
