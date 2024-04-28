import { render, fireEvent } from '@testing-library/react';
import HeaderComponent from '../src/components/Header/index';

test('HeaderComponent renderiza corretamente', () => {
  const setIsOpen = jest.fn();
  const { getByAltText } = render(<HeaderComponent setIsOpen={setIsOpen} />);
  expect(getByAltText('logo')).toBeInTheDocument();
  expect(getByAltText('subtitulo')).toBeInTheDocument();
});

test('Clique no ícone do carrinho chama setIsOpen corretamente', () => {
  const setIsOpen = jest.fn();
  const { getByAltText } = render(<HeaderComponent setIsOpen={setIsOpen} />);
  fireEvent.click(getByAltText('cart'));
  expect(setIsOpen).toHaveBeenCalledWith(true);
});
