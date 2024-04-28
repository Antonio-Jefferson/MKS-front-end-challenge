import Image from "next/image";
import productImage from '../../assets/images/macbook-pro.png';
import icon from '../../assets/images/shopping-bag.png';
import * as S from './styles';

export default function CardProduct(){
  return (
    <S.Container>
      <S.InfoProduct>
          <div>
            <Image src={productImage} alt='produto' />
          </div>
          <S.Price>
            <h3>Apple Macbook Pro</h3>
            <span>R$2.499</span>
          </S.Price>
          <p>Redesigned from scratch and completely revised.</p>
      </S.InfoProduct>
      <S.Button>
        <Image src={icon} alt="icon" />
        <p>COMPRAR</p>
      </S.Button>
    </S.Container>
  )
}