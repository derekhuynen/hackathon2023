import { baseAxiosInstance } from './config';

export const getUserService = async () => {
  const response = await baseAxiosInstance.get('user');
  return await response.data;
};
 