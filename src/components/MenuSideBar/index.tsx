import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';
import * as S from './style';
import Image from 'next/image';
import iconClose from '../../assets/icons/Close_cart.png';
import { getCartProducts } from '@/src/utils/cartUltils';
import { useAnimation, motion } from 'framer-motion';

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
  const controls = useAnimation();

  useEffect(() => {
    const productsFromLocalStorage = getCartProducts();
    setCartProducts(productsFromLocalStorage);
  }, []);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
      },
    }));
  }, [cartProducts, controls]);

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
          {cartProducts.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              <ProductCart product={product} />
            </motion.div>
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