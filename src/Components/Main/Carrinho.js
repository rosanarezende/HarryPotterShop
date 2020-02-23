import React from 'react';
import styled from 'styled-components'

const CarrinhoContainer = styled.div`
  width: 25vw;
  border: 1px solid rgb(97, 46, 65);
  padding: 1vh 1vw;
  margin-left: 1vw;

  @media screen and (max-device-width: 1200px) {
    width: 96vw;
    margin: 1vh 0;
    margin-left: 0;
  }
`

function Carrinho() {
  return (
    <CarrinhoContainer>
      Eu sou o carrinho
    </CarrinhoContainer>
  );
}

export default Carrinho;