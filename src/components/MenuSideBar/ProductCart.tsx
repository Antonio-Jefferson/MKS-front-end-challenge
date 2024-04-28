import Image from 'next/image';
import productImage from '../../assets/images/macbook-pro.png'
import iconClose from '../../assets/icons/Close_cart.png';
import * as S from './style'

export default function ProductCart() {
  return (
    <S.ContainerProduct>
      <S.ContainerImage>
        <Image src={productImage} alt='image produto' />
        <p>Apple Watch Series 4 GPS</p>
      </S.ContainerImage>
      <S.SessionQTD>
        <p>Qtd:</p>
        <div>
          <span>-</span>
          <p>1</p>
          <span>+</span>
        </div>
      </S.SessionQTD>
      <S.Price>
        R$399
      </S.Price>
      <S.IconCloseProduct>
        <Image
          src={iconClose}
          alt='Close'
          width={25}
        />
      </S.IconCloseProduct>
    </S.ContainerProduct>
  )
}