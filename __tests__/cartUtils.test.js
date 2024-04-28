import { addToCart, removeCartItem, getCartProducts } from '../src/utils/cartUltils';

const product1 = { id: 1, name: 'Product 1', brand: 'Brand 1', photo: 'photo1.jpg', description: 'Description 1', price: 10 };
const product2 = { id: 2, name: 'Product 2', brand: 'Brand 2', photo: 'photo2.jpg', description: 'Description 2', price: 20 };

beforeEach(() => {
  localStorage.clear();
});

test('addToCart adiciona corretamente um produto ao carrinho', () => {
  addToCart(product1);
  const cartProducts = getCartProducts();
  expect(cartProducts).toHaveLength(1);
  expect(cartProducts[0]).toEqual(product1);
});

test('addToCart não adiciona o mesmo produto duas vezes ao carrinho', () => {
  addToCart(product1);
  addToCart(product1);
  const cartProducts = getCartProducts();
  expect(cartProducts).toHaveLength(1);
});

test('removeCartItem remove corretamente um produto do carrinho', () => {
  addToCart(product1);
  addToCart(product2);
  removeCartItem(product1.id);
  const cartProducts = getCartProducts();
  expect(cartProducts).toHaveLength(1);
  expect(cartProducts[0]).toEqual(product2);
});

test('removeCartItem não faz nada se o produto não estiver no carrinho', () => {
  addToCart(product1);
  removeCartItem(product2.id);
  const cartProducts = getCartProducts();
  expect(cartProducts).toHaveLength(1);
  expect(cartProducts[0]).toEqual(product1);
});

test('getCartProducts retorna uma lista vazia se não houver produtos no carrinho', () => {
  const cartProducts = getCartProducts();
  expect(cartProducts).toHaveLength(0);
});

test('getCartProducts retorna os produtos corretamente do localStorage', () => {
  addToCart(product1);
  addToCart(product2);
  const cartProducts = getCartProducts();
  expect(cartProducts).toHaveLength(2);
  expect(cartProducts).toContainEqual(product1);
  expect(cartProducts).toContainEqual(product2);
});
