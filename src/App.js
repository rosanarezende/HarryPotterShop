import React from 'react';
import styled from 'styled-components'

import Header from './Components/Header';
import Filtro from './Components/Filtro';

import Main from './Components/Main';
import Home from './Components/Home';
import Carrinho from './Components/Carrinho';
import Footer from './Components/Footer';

const Container = styled.div`
  font-size: 1rem;
  margin: 0;
`

const BotaoCarrinho = styled.button`
  position: fixed;
  right: 0;
  margin-right: 1vw;
  background-color: #a04d6b;
  padding: 10px;
  border: none;
  border-radius: 50%;
  outline: 0;
  margin-top: 1vh;
/* 
  @media screen and (max-device-width: 1200px) {
    margin-top: 2vh;
  }

  @media screen and (max-device-width: 60px) {
    margin-top: 3vh;
  } */
`

const DivTitulo = styled.div`
  display: block;
  text-align: center;
  margin: auto;
`

const TituloLogo = styled.h3`
  margin: 0;
`

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>

        <Header>
          <DivTitulo>
            <TituloLogo>Harry Potter</TituloLogo>
            <TituloLogo>Shop</TituloLogo>
          </DivTitulo>
          <Filtro />
        </Header>

        <Main>
          <Carrinho />
          <Home />
          <BotaoCarrinho onClick=''>
            <i className="material-icons">shopping_cart</i>
          </BotaoCarrinho>
        </Main>

        <Footer />

      </Container>
    );
  }
}

export default App;
