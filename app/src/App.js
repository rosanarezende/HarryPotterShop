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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Recebendo info Filtro
      filtroBusca: '',
      filtroValorMax: '',
      filtroValorMin: '',
    }
  }

  //Recebendo info filtro
  atualizaFiltro = (nomeFiltro, valorFiltro) => {
    if (nomeFiltro === 'novoValorBusca') {
      this.setState({ filtroBusca: valorFiltro })
    } else if (nomeFiltro === 'novoValorMax') {
      this.setState({ filtroValorMax: valorFiltro })
    } else if (nomeFiltro === 'novoValorMin') {
      this.setState({ filtroValorMin: valorFiltro })
    }
  }


  render() {
    return (
      <Container>

        <Header>

          <DivTitulo>
            <TituloLogo>Harry Potter</TituloLogo>
            <TituloLogo>Shop</TituloLogo>
          </DivTitulo>

          <Filtro
            //Recebendo info filtro
            aoMudarFiltro={this.atualizaFiltro}
          />

        </Header>

        <Main>
          <Home
            // MANDANDO info filtro
            mudouFiltroBusca={this.state.filtroBusca}
            mudouFiltroMin={this.state.filtroValorMin}
            mudouFiltroMax={this.state.filtroValorMax}
          />
        </Main>

        <Footer />

      </Container>
    );
  }
}

export default App;
