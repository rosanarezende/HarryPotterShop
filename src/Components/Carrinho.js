import React from 'react';
import styled from 'styled-components'

const CarrinhoContainer = styled.div`
  width: 20vw;
  border: 1px solid rgb(97, 46, 65);
  margin-top: 7vh;
  padding: 1vh 1vw;

  @media screen and (max-device-width: 1200px) {
    width: 90vw;
    margin-top: 1vh;
  }

  @media screen and (max-device-width: 800px) {
    width: 85vw;
  }

  @media screen and (max-device-width: 400px) {
    width: 80vw;
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