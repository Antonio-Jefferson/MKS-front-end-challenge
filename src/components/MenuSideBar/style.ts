import styled from 'styled-components';

export const Container = styled.div`
  width: 486px;
  height: 100%;

  position: absolute;
  right: 0px;
  top: 0px;

  background-color: var(--primary);
`;

export const MainContainer = styled.div`
  padding: 22px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 70px;
  h3{
    width: 180px;
    color: #FFFF;
    font-size: 27px;
    font-weight: 700;
  }

  div{
    cursor: pointer;
  }
`;

export const ListProductCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-height: 700px;
  max-height: 700px;
  padding: 20px;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h3{
    font-size: 28px;
    font-weight: 700;

    color: #FFF;
  }

`;

export const ButtonPurchase = styled.button`
  width: 100%;
  height: 97px;
  padding: 40px 100px;

  background-color: #000;

  color: #FFF;
  font-size: 28px;
  font-weight: 700;
`;

//ProductCart

export const ContainerProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  width: 100%;
  height: 95px;
  padding: 0px 15px;
  border-radius: 8px;

  background-color: #FFF;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    max-width: 100px;
    height: auto;
  }

  p {
    width: 113px;
    height: auto;
    font-size: 14px;
  }
`;

export const SessionQTD = styled.div`

  p {
    font-size: 5px;
    font-weight: 400;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 50px;
    height: 20px;
    padding: 4px 4px;
    border-radius: 4px;

    border: 1px solid #bfbfbf;
    p{
      width: 15px;
      margin-top: 4px;
      border-left: 1px solid #bfbfbf;
      border-right: 1px solid #bfbfbf;

      text-align: center;
      font-size: 8px;
      font-weight: 400;
    }
    span{
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const IconCloseProduct = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
`;

