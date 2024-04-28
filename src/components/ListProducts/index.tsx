import React from 'react';
import CardProduct from './CardProduct';
import { useFetchData } from '../../services/homeService';
import * as S from './styles';

type Product = {
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  price: number;
}


const ListProducts = () => {
  const { data, isLoading, error } = useFetchData();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <S.Main>
      <S.List>
        {data.map((product: Product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </S.List>
    </S.Main>
  );
};

export default ListProducts;

