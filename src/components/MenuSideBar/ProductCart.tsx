import Image from 'next/image';
import productImage from '../../assets/images/macbook-pro.png'
import iconClose from '../../assets/icons/Close_cart.png';
import * as S from './style'
import { removeCartItem } from '@/src/utils/cartUltils';

type Product = {
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  price: number;
}

interface ProductCartProps {
  product: Product;
}

export default function ProductCart({product}: ProductCartProps) {
  const handleRemoveFromCart = () => {
    removeCartItem(product.id);
  };

  return (
    <S.ContainerProduct>
      <S.ContainerImage>
        <Image src={product.photo} alt='image produto' width={80} height={40}/>
        <p>{product.name}</p>
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
        R${product.price}
      </S.Price>
      <S.IconCloseProduct onClick={handleRemoveFromCart}>
        <Image
          src={iconClose}
          alt='Close'
          width={25}
        />
      </S.IconCloseProduct>
    </S.ContainerProduct>
  )
}