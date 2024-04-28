import Image from "next/image";
import icon from '../../assets/images/shopping-bag.png';
import * as S from './styles';
import { addToCart } from "@/src/utils/cartUltils";

type Product = {
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  price: number;
}

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps){
  const handleBuyClick = () => {
    addToCart(product);
  };

  return (
    <S.Container>
      <S.InfoProduct>
          <div>
            <Image
              src={product.photo}
              alt='produto'
              width={100}
              height={80}
            />
          </div>
          <S.Price>
            <h3>{product.name}</h3>
            <span>R${product.price}</span>
          </S.Price>
          <p>{product.description}</p>
      </S.InfoProduct>
      <S.Button  onClick={handleBuyClick} >
        <Image src={icon} alt="icon" />
        <p>COMPRAR</p>
      </S.Button>
    </S.Container>
  )
}