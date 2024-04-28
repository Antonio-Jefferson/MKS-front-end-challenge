import React from 'react';
import Image from "next/image";
import cart from '../../assets/icons/cart.png'
import logo from '../../assets/images/MKS.png'
import subtitulo from '../../assets/images/Sistemas.png'
import * as S from './styles';

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderComponent({setIsOpen}: IProps) {
  return (
    <S.Container>
      <S.InnerContainer>
          <Image src={logo} alt="logo" />
          <Image src={subtitulo} alt="subtitulo"/>
      </S.InnerContainer>
      <S.CartCounter onClick={()=> setIsOpen(true)}>
        <div>
          <Image src={cart} alt="cart" />
          <span>0</span>
        </div>
      </S.CartCounter>
  </S.Container>
  )
}