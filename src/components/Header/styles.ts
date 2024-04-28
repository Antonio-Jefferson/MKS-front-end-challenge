import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 101px;

  background-color: var(--primary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 65px;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const CartCounter = styled.span`
  width: 90px;
  height: 45px;

  border-radius: 8px;
  background-color: var(--secundary);

  display: flex;
  justify-content: center;
  div{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
  }

  :hover{
    cursor: pointer;
  }
`;