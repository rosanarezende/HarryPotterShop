import React from 'react';
import styled from 'styled-components'
import Filtro from './Components/Filtro';
import Home from './Components/Home';
import Carrinho from './Components/Carrinho';

const Container = styled.div``

function App() {
  return (
    <Container>
      
      <Filtro/>

      <Home/>

      <Carrinho/>

      <button><i className="material-icons">shopping_cart</i></button>

    </Container>
  );
}

export default App;
