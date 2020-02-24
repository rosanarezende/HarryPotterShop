import React from 'react';
import styled from 'styled-components'

const FiltroContainer = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-between;
    padding: 1.5vh 10vw 1.5vh 10vw;

    @media screen and (max-device-width: 1200px) {
      flex-wrap:wrap;
      width: 40vw;
      padding: 0.5vh 10vw 0.5vh 10vw;
    }
`

class Filtro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valueBusca: '',
      valueValorMax: '',
      valueValorMin: ''
    }
  }

  mudaValueBusca = (event) => {
    let novoValor = event.target.value
    this.setState({valueBusca: novoValor})
    this.props.aoMudarFiltro('novoValorBusca', novoValor)
  }

  mudaValueValorMin = (event) => {
    let novoValor = event.target.value
    this.setState({valueValorMin: novoValor})
    this.props.aoMudarFiltro('novoValorMin', novoValor)
  }

  mudaValueValorMax = (event) => {
    let novoValor = event.target.value
    this.setState({valueValorMax: novoValor})
    this.props.aoMudarFiltro('novoValorMax', novoValor)
  }

  render() {
    return (
      <FiltroContainer>
        <input type='text' placeholder='Digite o que você procura' value={this.state.valueBusca} onChange={this.mudaValueBusca}/>
        <input type='text' placeholder='Digite o valor mínimo' value={this.state.valueValorMin} onChange={this.mudaValueValorMin}/>
        <input type='text' placeholder='Digite o valor máximo' value={this.state.valueValorMax} onChange={this.mudaValueValorMax}/>
      </FiltroContainer>
    );
  }
}

export default Filtro;