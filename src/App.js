import React from 'react';
import styled from 'styled-components'

import Header from './Components/Header/Header';
import Filtro from './Components/Header/Filtro';

import Main from './Components/Main/Main';
import Home from './Components/Main/Home';

import Footer from './Components/Footer/Footer';

const Container = styled.div`
  font-size: 1rem;
  margin: 0;

  @media screen and (max-device-width: 1200px) {
    font-size: 0.8rem;
  }
`

const DivTitulo = styled.div`
  display: block;
  text-align: center;
  margin: auto;
`

const TituloLogo = styled.h3`
  margin: 0;
`

function App() {

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
          <Home />
        </Main>

        <Footer />

      </Container>
    );

}

export default App;
