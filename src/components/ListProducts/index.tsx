import React from 'react';
import CardProduct from './CardProduct';
import { useFetchData } from '../../services/homeService';
import * as S from './styles';
import CardSkeleton from './CardSkeleton';
import { SkeletonTheme } from 'react-loading-skeleton';

type Product = {
  id: number;
  name: string;
  brand: string;
  photo: string;
  quantity: number;
  description: string;
  price: number;
}


export default function ListProducts() {
  const { data, isLoading, error } = useFetchData();

  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#949191" highlightColor="#aeaaaa">
        <S.Main>
          <S.List>
            {[...Array(8)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </S.List>
        </S.Main>
      </SkeletonTheme>
    );
  }

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
