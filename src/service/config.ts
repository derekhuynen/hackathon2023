import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const BASE_URL = '';

const apiConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    Accept: 'Application/json',
    'Content-Type': 'Application/json',
  },
};

export const baseAxiosInstance: AxiosInstance = axios.create(apiConfig);
