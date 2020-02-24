import React from 'react';
import styled from 'styled-components'

import Carrinho from './Carrinho';
import { LISTADEPRODUTOS } from '../../Shared/listaDeProdutos';

const HomeContainer = styled.div`
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
  padding: 1vh 1vw;
  display: flex;
  flex-wrap: wrap;
`

const DivCadaProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14vw;
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
  width: 100%;
`

const ValorSemDesconto = styled.span`
  text-decoration: line-through;
`

const SpanDesconto = styled.span`
  background-color:  rgb(201, 248, 131);
  border-radius: 10%;
  padding: 0.5vh 0.5vw;
`

const DivProdutoRenderizado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1vh 1vw;
  padding: 1vh 1vw;
  border: 1px rgb(97, 46, 65) double;
  height: 50%;

`

const DivBotaoExcluiRenderizacao = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-bottom: 1vh;

  cursor: pointer;
    transition: 0.2s;
    
  :hover {
      color: red;
  }
`

const listaDeProdutos = LISTADEPRODUTOS


class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      estadoCarrinho: false,
      ordem: "crescente",
      carrinho: [],

      // RENDERIZAR
      produtoRenderizado: null,
    }
  }

  ////////////////////////////////
  // GUARDAR NO ESTADO
  componentDidMount() {
    const noEstadodoCarrinho = localStorage.getItem('carrinho')
    const novoEstado = JSON.parse(noEstadodoCarrinho)
    if (novoEstado.id === undefined) {
      this.setState({ carrinho: novoEstado })
    } 
    // if (novoEstado) {
    //   this.setState({ carrinho: novoEstado })
    // }
  }

  componentDidUpdate() {
    const estadoComoString = JSON.stringify(this.state.carrinho)
    localStorage.setItem('carrinho', estadoComoString)
  }
  ////////////////////////////////


  apareceDesapareceCarrinho = () => {
    this.setState({ estadoCarrinho: !this.state.estadoCarrinho })
  }

  mudaSeletor = (event) => {
    this.setState({ ordem: event.target.value })
  }

  adicionaProduto = (produtoAdicionado) => {
    const copiaCarrinho = [...this.state.carrinho]

    // checo se o produto tá no carrinho
    const produtoEstaNoCarrinho = this.state.carrinho.findIndex(cadaProduto =>
      cadaProduto.produtoAdicionado.id === produtoAdicionado.id)

    // se já tá no carrinho, só adiciono 1 na quantidade (paramentro novo que to criando)
    if (produtoEstaNoCarrinho > -1) {
      copiaCarrinho[produtoEstaNoCarrinho].quantidade += 1
    } else { // se é a primeira vez
      copiaCarrinho.push({ 
        produtoAdicionado: produtoAdicionado,
        quantidade: 1 
      })
    }

    this.setState({
      carrinho: copiaCarrinho, // atualiza conteudo do carrinho no estado
      estadoCarrinho: true //fazer carrinho aparecer
    })
  }

  excluiProdutoDoCarrinho = (produtoAdicionado) => {
    const copiaCarrinho = [...this.state.carrinho]
    const produtoEstaNoCarrinho = this.state.carrinho.findIndex(cadaProduto =>
      cadaProduto.produtoAdicionado.id === produtoAdicionado.id)   
    copiaCarrinho.splice(produtoEstaNoCarrinho, 1)
    this.setState({carrinho: copiaCarrinho})

  }

  maisProdutoDoCarrinho = (produtoAdicionado) => {
    const copiaCarrinho = [...this.state.carrinho]
    const produtoEstaNoCarrinho = this.state.carrinho.findIndex(cadaProduto =>
      cadaProduto.produtoAdicionado.id === produtoAdicionado.id)
    copiaCarrinho[produtoEstaNoCarrinho].quantidade += 1
    this.setState({carrinho: copiaCarrinho})
  }

  menosProdutoDoCarrinho = (produtoAdicionado) => {
    const copiaCarrinho = [...this.state.carrinho]
    const produtoEstaNoCarrinho = this.state.carrinho.findIndex(cadaProduto =>
      cadaProduto.produtoAdicionado.id === produtoAdicionado.id)
    if (copiaCarrinho[produtoEstaNoCarrinho].quantidade > 1) { // para em zero
      copiaCarrinho[produtoEstaNoCarrinho].quantidade -= 1
    }    
    this.setState({carrinho: copiaCarrinho})
  }



  // RENDERIZAR
  renderizaProduto = (produtoClicado) => {
    // console.log('renderiza', produtoClicado.name)
    this.setState({
      produtoRenderizado: produtoClicado
    }) 
  }

  naoRenderizaProduto = () => {
    this.setState({
      produtoRenderizado: null
    }) 
  }

  renderizaProdutoNaTela = (produtoClicado) => {
    if(this.state.produtoRenderizado !== null) {
      return (
        <DivProdutoRenderizado>
          <DivBotaoExcluiRenderizacao>
            <i className="material-icons" onClick={() => this.naoRenderizaProduto()}>close</i>
          </DivBotaoExcluiRenderizacao>
          <ImagemProduto src={produtoClicado.imageUrl} alt={produtoClicado.name}/>
          <p>{produtoClicado.name}</p>
          <div>
            <ValorSemDesconto>R$ {parseFloat(produtoClicado.value).toFixed(2)}</ValorSemDesconto><span>  </span>
            <SpanDesconto>-5%</SpanDesconto>
            <p>R$ {parseFloat(produtoClicado.value * 0.95).toFixed(2)}</p>
            <BotaoAdiciona onClick={() => this.adicionaProduto(produtoClicado)}>Adicionar ao carrinho</BotaoAdiciona>
          </div>
        </DivProdutoRenderizado>
      )
    } else {
      return (
        <div></div>
      )
    }
  }



  render() {

    let listaOrdenada
    if (this.state.ordem === 'crescente') {
      listaOrdenada = listaDeProdutos.sort(function (a, b) {
        return a.value < b.value ? -1 : a.value > b.value ? 1 : 0
      })
    } else if (this.state.ordem === 'decrescente') {
      listaOrdenada = listaDeProdutos.sort(function (a, b) {
        return a.value < b.value ? 1 : a.value > b.value ? -1 : 0
      })
    }

    const listaNaoFiltrada = listaOrdenada.map(cadaProduto => {
      return (
        <DivCadaProduto key={cadaProduto.id}>
          <ImagemProduto src={cadaProduto.imageUrl} alt={cadaProduto.name} onClick={() => this.renderizaProduto(cadaProduto)}/>
          <p>{cadaProduto.name}</p>
          <div>
            <ValorSemDesconto>R$ {parseFloat(cadaProduto.value).toFixed(2)}</ValorSemDesconto><span>  </span>
            <SpanDesconto>-5%</SpanDesconto>
            <p>R$ {parseFloat(cadaProduto.value * 0.95).toFixed(2)}</p>
            <BotaoAdiciona onClick={() => this.adicionaProduto(cadaProduto)}>Adicionar ao carrinho</BotaoAdiciona>
          </div>

        </DivCadaProduto>
      )
    })

    // RECEBE FILTRO
    // this.props.mudouFiltroBusca // this.props.mudouFiltroMin // this.props.mudouFiltroMax
    const listaFiltrada = listaOrdenada.filter(cadaProduto => {
      let filtroBusca = this.props.mudouFiltroBusca
      let filtroMin = this.props.mudouFiltroMin
      let filtroMax = this.props.mudouFiltroMax
      if (filtroBusca && filtroMin && filtroMax) {
        return (
          cadaProduto.name.toLowerCase().includes((filtroBusca).toLowerCase()) &&
          cadaProduto.value >= filtroMin &&
          cadaProduto.value <= filtroMax
        )
      }
      if (filtroBusca && filtroMin) {
        return (
          cadaProduto.name.toLowerCase().includes((filtroBusca).toLowerCase()) &&
          cadaProduto.value >= filtroMin
        )
      }
      if (filtroBusca && filtroMax) {
        return (
          cadaProduto.name.toLowerCase().includes((filtroBusca).toLowerCase()) &&
          cadaProduto.value <= filtroMax
        )
      }
      if (filtroMin && filtroMax) {
        return (
          cadaProduto.value >= filtroMin &&
          cadaProduto.value <= filtroMax)
      }      
      if (filtroBusca) {
        return cadaProduto.name.toLowerCase().includes((filtroBusca).toLowerCase())
      }
      if (filtroMin) {
        return cadaProduto.value >= filtroMin
      }
      if (filtroMax) {
        return cadaProduto.value <= filtroMax
      }
      return listaNaoFiltrada
    }).map(cadaProduto => {
      return (
        <DivCadaProduto key={cadaProduto.id}>
          <ImagemProduto src={cadaProduto.imageUrl} alt={cadaProduto.name} onClick={() => this.renderizaProduto(cadaProduto)}/>
          <p>{cadaProduto.name}</p>
          <div>
            <ValorSemDesconto>R$ {parseFloat(cadaProduto.value).toFixed(2)}</ValorSemDesconto><span>  </span>
            <SpanDesconto>-5%</SpanDesconto>
            <p>R$ {parseFloat(cadaProduto.value * 0.95).toFixed(2)}</p>
            <BotaoAdiciona onClick={() => this.adicionaProduto(cadaProduto)}>Adicionar ao carrinho</BotaoAdiciona>
          </div>

        </DivCadaProduto>
      )
    })


    let listaDeItens
    if (this.props.mudouFiltroBusca || this.props.mudouFiltroMin || this.props.mudouFiltroMax) {
      listaDeItens = listaFiltrada
    } else {
      listaDeItens = listaNaoFiltrada
    }


    return (
      <HomeContainer>

        <DivHomeSuperior>

          <span>Quantidade de produtos: {listaDeItens.length}</span>

          <select onChange={this.mudaSeletor} value={this.state.ordem}>
            <option value='crescente'>Preço: Crescente</option>
            <option value='decrescente'>Preço: Decrescente</option>
          </select>

        </DivHomeSuperior>

        <DivHomeInferior>
          
          {this.state.estadoCarrinho && 
          <Carrinho 
            itensNoCarrinho={this.state.carrinho} // enviei info pro carrinho
            excluiProdutoDoCarrinho={this.excluiProdutoDoCarrinho}
            maisProdutoDoCarrinho={this.maisProdutoDoCarrinho}
            menosProdutoDoCarrinho={this.menosProdutoDoCarrinho}
          />}

          {/* RENDERIZAR */}
          {this.renderizaProdutoNaTela(this.state.produtoRenderizado)}

          <DivProdutos>
            {listaDeItens}
          </DivProdutos>

        </DivHomeInferior>

        <BotaoCarrinho
          onClick={this.apareceDesapareceCarrinho}
        ><i className="material-icons">shopping_cart</i>
        </BotaoCarrinho>

      </HomeContainer>
    );
  }
}

export default Home;