import React, { useState, useEffect } from 'react';
import Image from "next/image";
import cart from '../../assets/icons/cart.png'
import logo from '../../assets/images/MKS.png'
import subtitulo from '../../assets/images/Sistemas.png'
import * as S from './styles';
import { getCartProducts } from '../../utils/cartUltils';

interface IProps {
  setIsOpen: React.Dispatch<boolean>;
}

export default function HeaderComponent({ setIsOpen }: IProps) {
  const [cartItemCount, setCartItemCount] = useState<number>(0);

  useEffect(() => {
    const updateCartItemCount = () => {
      const cartProducts = getCartProducts();
      const totalCount = cartProducts.reduce((total, product) => total + (product.quantity || 1), 0);
      setCartItemCount(totalCount);
    };

    updateCartItemCount();
  }, [setCartItemCount]);

  return (
    <S.Container>
      <S.InnerContainer>
        <Image src={logo} alt="logo" />
        <Image src={subtitulo} alt="subtitulo"/>
      </S.InnerContainer>
      <S.CartCounter onClick={() => setIsOpen(true)}>
        <div>
          <Image src={cart} alt="cart" />
          <span>{cartItemCount}</span>
        </div>
      </S.CartCounter>
    </S.Container>
  );
}
