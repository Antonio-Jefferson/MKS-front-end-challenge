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
  quantity: number
  description: string;
  price: number;
}

interface ProductCartProps {
  product: Product;
  onRemove: () => void;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
}


export default function ProductCart({ product, onRemove, onIncreaseQuantity, onDecreaseQuantity }: ProductCartProps) {
  const handleRemoveFromCart = () => {
    onRemove();
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
          <span onClick={onDecreaseQuantity}>-</span>
          <p>{product.quantity || 1}</p>
          <span onClick={onIncreaseQuantity}>+</span>
        </div>
      </S.SessionQTD>
      <S.Price>
        R${product.price * (product.quantity || 1)}
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
