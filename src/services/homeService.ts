import { useQuery } from 'react-query';
import axios from 'axios';

export const useFetchData = () => {
  return useQuery('data', async () => {
    try {
      const apiUrl = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"

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
