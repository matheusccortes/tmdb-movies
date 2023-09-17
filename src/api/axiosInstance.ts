import axios from 'axios';
import {API_BASE_URL, API_ACCESS_TOKEN} from '@env';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  },
});
