type Product = {
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  quantity: number,
  price: number;
}

export const addToCart = (product: Product) => {
  const existingProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');

  const existingProductIndex = existingProducts.findIndex((existingProduct) => existingProduct.id === product.id);

  if (existingProductIndex !== -1) {
    existingProducts[existingProductIndex].quantity = (existingProducts[existingProductIndex].quantity || 1) + 1;
  } else {
    product.quantity = 1;
    existingProducts.push(product);
  }
  localStorage.setItem('products', JSON.stringify(existingProducts));
};


export const getCartProducts = (): Product[] => {
  const existingProductsJSON = localStorage.getItem('products');

  if (existingProductsJSON) {
    return JSON.parse(existingProductsJSON);
  } else {
    return [];
  }
};

export const removeCartItem = (productId: number): void => {
  const existingProductsJSON = localStorage.getItem('products');

  if (existingProductsJSON) {

    const existingProducts: Product[] = JSON.parse(existingProductsJSON);

    const updatedProducts = existingProducts.filter((product) => product.id !== productId);

    localStorage.setItem('products', JSON.stringify(updatedProducts));
  } else {
    alert('Não há produtos no carrinho!');
  }
};


