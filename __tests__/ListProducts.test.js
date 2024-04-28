import { render } from '@testing-library/react';
import ListProducts from '../src/components/ListProducts/index';

jest.mock('../../services/homeService', () => ({
  useFetchData: jest.fn(() => ({
    data: [
      { id: 1, name: 'Product 1', brand: 'Brand 1', photo: 'photo1.jpg', description: 'Description 1', price: 10 },
      { id: 2, name: 'Product 2', brand: 'Brand 2', photo: 'photo2.jpg', description: 'Description 2', price: 20 },
    ],
    isLoading: false,
    error: null,
  })),
}));

test('ListProducts renderiza corretamente os produtos', () => {
  const { getByText } = render(<ListProducts />);
  expect(getByText('Product 1')).toBeInTheDocument();
  expect(getByText('Product 2')).toBeInTheDocument();
});