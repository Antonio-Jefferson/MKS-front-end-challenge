import styled from 'styled-components';

export const Container = styled.div`
  width: 235px;
  height: 295px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.14);

  div{
    padding: 12px 14px;
    p{
      height: 25px;
    }
  }
`;

export const InfoProduct = styled.div`
  padding: 4px;
  p{
    margin: 8px 0px;
    font-size: 10px;
    font-weight: 300;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  h3{
    height: 35px;
    font-size: 16px;
    font-weight: 400;
    padding: 4px 0px;

    display: -webkit-box;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  span{
    width: 78px;
    height: 26px;
    padding: 4px;
    border-radius: 5px;
    background-color: #373737;

    color: #fff;
    font-size: 15px;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 31px;
  background-color: var(--primary);
  border-radius: 0px 0px 8px 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap:14px;

  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

export const Main = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  width: 1030px;
  height: 601px;
  margin: auto;

  display: flex;
  gap: 22px;
  flex-wrap: wrap;

`;