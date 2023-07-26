import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'constants/constants';

const apiConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    Accept: 'Application/json',
    'Content-Type': 'Application/json',
  },
};

export const baseAxiosInstance: AxiosInstance = axios.create(apiConfig);
