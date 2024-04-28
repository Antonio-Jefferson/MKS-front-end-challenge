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
    //alert('Este produto já foi adicionado ao carrinho!');
  } else {
    existingProducts.push(product);
    localStorage.setItem('products', JSON.stringify(existingProducts));
  }
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


