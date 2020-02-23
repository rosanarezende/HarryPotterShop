import React from 'react';
import styled from 'styled-components'

import Carrinho from './Carrinho';
import { LISTADEPRODUTOS } from '../../Shared/listaDeProdutos';

const HomeContainer = styled.div`
  width: 98vw;
  min-height: 79vw;
  padding: 1vh 1vw;
  display: flex;
  flex-direction: column;
`

const DivHomeSuperior = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 8vh;
  padding-top: 2vh;
`

const DivHomeInferior = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-top: 2vh;
  @media screen and (max-device-width: 1200px) {
    flex-direction: column;
  }
`

const BotaoCarrinho = styled.button`
  position: fixed;
  right: 0;
  margin-right: 1vw;
  background-color: #a04d6b;
  padding: 10px;
  border-radius: 50%;
  outline: 0;
`

const DivProdutos = styled.div`
  min-width: 78vw;
  padding: 1vh 1vw;
  display: flex;
  flex-wrap: wrap;
`

const DivCadaProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
  margin: 1vh 1vw;
  padding: 1vh 1vw;
  border: 1px rgb(97, 46, 65) double;

  @media screen and (max-device-width: 1200px) {
    width: 27vw;
  }
`

const ImagemProduto = styled.img`
  width: 100%;
`

const BotaoAdiciona = styled.button`
  background-color: #a04d6b;
  padding: 1vh 1vw;
  outline: 0;
`

const ValorSemDesconto = styled.span`
  text-decoration: line-through;
`

const SpanDesconto = styled.span`
  background-color:  rgb(201, 248, 131);
  border-radius: 10%;
  padding: 0.5vh 0.5vw;
`

const listaDeProdutos = LISTADEPRODUTOS

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      estadoCarrinho: false,
      ordem: "crescente"
    }

  }

  apareceDesapareceCarrinho = () => {
    this.setState({estadoCarrinho: !this.state.estadoCarrinho})
  }

  mudaSeletor = (event) => {
    this.setState({ordem: event.target.value})
  }

  render() {

    const listaCadaItem = listaDeProdutos.map(cadaProduto => {
      return (
        <DivCadaProduto key={cadaProduto.id}>
          <ImagemProduto src={cadaProduto.imageUrl} alt={cadaProduto.name}/>
          <p>{cadaProduto.name}</p>
          <div>
            <ValorSemDesconto>R$ {parseFloat(cadaProduto.value).toFixed(2)}</ValorSemDesconto><span>  </span>
            <SpanDesconto>-5%</SpanDesconto>
            <p>R$ {parseFloat(cadaProduto.value * 0.95).toFixed(2)}</p>            
            <BotaoAdiciona>Adicionar ao carrinho</BotaoAdiciona>
          </div>
          
        </DivCadaProduto>
      )
    })
  
    return (
    <HomeContainer>

      <DivHomeSuperior>
       
        <span>Quantidade de produtos: {listaCadaItem.length}</span>
        
        <select onChange={this.mudaSeletor} value={this.state.ordem}>
          <option value='crescente'>Preço: Crescente</option>
          <option value='decrescente'>Preço: Decrescente</option>
        </select>

      </DivHomeSuperior>

      <DivHomeInferior>
          {this.state.estadoCarrinho && <Carrinho/>}
        <DivProdutos>
          {listaCadaItem}
        </DivProdutos>
        
        
      </DivHomeInferior>

      <BotaoCarrinho onClick={this.apareceDesapareceCarrinho}> 
        <i className="material-icons">shopping_cart</i>
      </BotaoCarrinho>

    </HomeContainer>
  );
  }
}

export default Home;