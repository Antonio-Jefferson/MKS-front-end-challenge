import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';
import * as S from './style';
import Image from 'next/image';
import iconClose from '../../assets/icons/Close_cart.png';
import { getCartProducts, removeCartItem } from '@/src/utils/cartUltils';
import { useAnimation, motion } from 'framer-motion';

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
type Product = {
  id: number;
  name: string;
  brand: string;
  photo: string;
  quantity: number,
  description: string;
  price: number;
}

export default function MenuSideBar({ setIsOpen }: IProps) {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
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

  useEffect(() => {
    let totalPrice = 0;
    cartProducts.forEach((product) => {
      totalPrice += product.price * (product.quantity || 1);
    });
    setTotal(totalPrice);
  }, [cartProducts]);

  const handleRemoveFromCart = (productId: number) => {
    removeCartItem(productId);
    const updatedCartProducts = cartProducts.filter((product) => product.id !== productId);
    setCartProducts(updatedCartProducts);
  };

  const handleIncreaseQuantity = (productId: number) => {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: (product.quantity || 1) + 1,
        };
      }
      return product;
    });
    setCartProducts(updatedCartProducts);
  };

  const handleDecreaseQuantity = (productId: number) => {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === productId && product.quantity && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
    setCartProducts(updatedCartProducts);
  };

  return (
    <S.Container>
      <S.MainContainer>
        <S.Header>
          <h3>Carrinho de compras</h3>
          <div>
            <Image src={iconClose} alt='Close' onClick={() => setIsOpen(false)} />
          </div>
        </S.Header>
        <S.ListProductCart>
          {cartProducts.map((product) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 50 }} animate={controls}>
              <ProductCart
                product={product}
                onRemove={() => handleRemoveFromCart(product.id)}
                onIncreaseQuantity={() => handleIncreaseQuantity(product.id)}
                onDecreaseQuantity={() => handleDecreaseQuantity(product.id)}
              />
            </motion.div>
          ))}
        </S.ListProductCart>
        <S.Total>
          <h3>Total:</h3>
          <h3>R${total}</h3>
        </S.Total>
      </S.MainContainer>
      <S.ButtonPurchase>Finalizar Compra</S.ButtonPurchase>
    </S.Container>
  );
}