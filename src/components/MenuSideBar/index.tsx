import React from 'react';
import ProductCart from './ProductCart';
import * as S from './style';
import Image from 'next/image';
import iconClose from '../../assets/icons/Close_cart.png';

export default function MenuSideBar() {
  return (
    <S.Container>
      <S.MainContainer>
        <S.Header>
          <h3>Carrinho de compras</h3>
          <Image
            src={iconClose}
            alt='Close'
          />
        </S.Header>
        <S.ListProductCart>
          <ProductCart/>
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