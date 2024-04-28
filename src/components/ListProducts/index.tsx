import CardProduct from "./CardProduct";
import * as S from './styles';

export default function ListProducts(){
  return(
    <S.Main>
      <S.List>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
      </S.List>
    </S.Main>
  )
}