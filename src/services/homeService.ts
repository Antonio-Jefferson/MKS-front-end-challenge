import { useQuery } from 'react-query';
import axios from 'axios';

export const useFetchData = () => {
  return useQuery('data', async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_APP_API_URL;

      if (!apiUrl) {
        throw new Error('API URL not defined in environment variables');
      }

      const response = await axios.get(apiUrl);

      return response.data.products;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  });
};
