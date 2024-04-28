type Product = {
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  price: number;
}

export const addToCart = (product: Product) => {
  const existingProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');

  const isProductExists = existingProducts.some((existingProduct) => existingProduct.id === product.id);

  if (isProductExists) {
    alert('Este produto já foi adicionado ao carrinho!');
  } else {
    existingProducts.push(product);
    localStorage.setItem('products', JSON.stringify(existingProducts));
  }
};


