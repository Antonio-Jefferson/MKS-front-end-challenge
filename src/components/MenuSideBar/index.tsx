import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';
import * as S from './style';
import Image from 'next/image';
import iconClose from '../../assets/icons/Close_cart.png';
import { getCartProducts } from '@/src/utils/cartUltils';

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
type Product = {
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  price: number;
}

export default function MenuSideBar({setIsOpen}: IProps) {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsFromLocalStorage = getCartProducts();
    setCartProducts(productsFromLocalStorage);
  }, []);

  return (
    <S.Container>
      <S.MainContainer>
        <S.Header>
          <h3>Carrinho de compras</h3>
          <div>
            <Image
              src={iconClose}
              alt='Close'
              onClick={()=> setIsOpen(false)}
            />
          </div>
        </S.Header>
        <S.ListProductCart>
          {cartProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </S.ListProductCart>
        <S.Total>
          <h3>Total:</h3>
          <h3>R$798</h3>
        </S.Total>
      </S.MainContainer>
      <S.ButtonPurchase>Finalizar Compra</S.ButtonPurchase>
    </S.Container>
  )
}