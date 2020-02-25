import React from 'react';
import styled from 'styled-components'

const FiltroContainer = styled.div`
    width: 55vw;
    display: flex;
    padding: 1.5vh 10vw 1.5vh 5vw;

    @media screen and (max-device-width: 1200px) {
      flex-wrap:wrap;
      padding: 0.5vh 1vw 0.5vh 1vw;
    }
`

const InputTexto = styled.input`
  width: 40vw;
  margin-left: 1vw;
  
  @media screen and (max-device-width: 1200px) {
    width: 46vw;
  }

`
const InputNumero = styled.input`
  width: 15vw;
  margin-left: 1vw;

  @media screen and (max-device-width: 1200px) {
    width: 22vw;
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
        <InputTexto type='text' placeholder='O que você procura?' value={this.state.valueBusca} onChange={this.mudaValueBusca}/>
        <InputNumero type='text' placeholder='Valor mínimo' value={this.state.valueValorMin} onChange={this.mudaValueValorMin}/>
        <InputNumero type='text' placeholder='Valor máximo' value={this.state.valueValorMax} onChange={this.mudaValueValorMax}/>
      </FiltroContainer>
    );
  }
}

export default Filtro;