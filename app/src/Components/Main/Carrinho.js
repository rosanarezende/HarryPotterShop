import React from 'react';
import styled from 'styled-components'
import { DESCONTOINICIAL } from '../../Shared/descontoInicial';

const CarrinhoContainer = styled.div`
	width: 30vw;
	border: 1px solid rgb(97, 46, 65);
  	padding: 1vh 1vw;
  	margin-left: 1vw;

  	@media screen and (max-device-width: 1200px) {
		width: 96vw;
		margin: 1vh 0;
		margin-left: 0;
  	}
`

const TituloCarrinho = styled.h3`
  	margin-top: 0;
`

const DivItensNoCarrinho = styled.div`
`

const ValorTotal = styled.h3`
	margin-top:0;
`

const ParagrafoSemDesconto = styled.p`
	margin: 0;
`

const ValorSemDesconto = styled.span`
	text-decoration: line-through;
`

const DivCentralizaBotao = styled.div`
	display: flex;
	justify-content: center;
`

const BotaoDescontoExtra = styled.button`
	font-weight: bold;
	width: 80%;
  	margin: 2vh 0;
	padding: 1vh 1vw;
  	background-color: rgb(201, 248, 131);
  	outline:0;
  	border-radius: 10px;

	@media screen and (max-device-width: 1200px) {
		width: 50%;
  	}
`

const DivCadaProdutoNoCarrinho = styled.div`
  	display: flex;
  	flex-direction:column;
  	font-size: 0.9rem;
  	margin: 1vh 0;
`

const TextoItalico = styled.span`
  	font-style: italic;
`

const DivInternaSuperior = styled.div`
  	display: flex;
  	justify-content: space-between;
`

const DivInternaInferior = styled.div`
  	display: flex;
  	margin: 0 auto;
`

const BotaoCarrinho = styled.button`
  	font-weight: bold;
  	margin-right: 1vh;
  	background-color: #a04d6b;
  	outline:0;
  	border-radius: 10px;
`

const descontoInicial = DESCONTOINICIAL

class Carrinho extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			clicouBotaoDesconto: false
		}
	}

	mudaProdutosNoCarrinho = () => {
		return this.props.itensNoCarrinho.map(cadaProduto => {
			return (
				<DivCadaProdutoNoCarrinho key={cadaProduto.produtoAdicionado.id}>
					<DivInternaSuperior>
						<span>{cadaProduto.quantidade}x <TextoItalico>{cadaProduto.produtoAdicionado.name}</TextoItalico></span>
						<span> {(cadaProduto.produtoAdicionado.value * descontoInicial * cadaProduto.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
					</DivInternaSuperior>

					<DivInternaInferior>
						<BotaoCarrinho onClick={() => this.props.maisProdutoDoCarrinho(cadaProduto.produtoAdicionado)}>
							+1
						</BotaoCarrinho>
						<BotaoCarrinho onClick={() => this.props.menosProdutoDoCarrinho(cadaProduto.produtoAdicionado)}>
							-1
						</BotaoCarrinho>
						<BotaoCarrinho onClick={() => this.props.excluiProdutoDoCarrinho(cadaProduto.produtoAdicionado)}>
							Excluir
						</BotaoCarrinho>
					</DivInternaInferior>

				</DivCadaProdutoNoCarrinho>
			)
		})
	}

	valorTotalNoCarrinho = () => {
		return this.props.itensNoCarrinho.reduce((prevVal, cadaProduto) =>
			prevVal + (cadaProduto.produtoAdicionado.value * descontoInicial * cadaProduto.quantidade), 0)
	}

	clicarBotaoDesconto = () => {
		this.setState({clicouBotaoDesconto: !this.state.clicouBotaoDesconto})
	}

	render() {

		// //podia chamar assim ou construir aqui mesmo
		// const listaDeProdutosNoCarrinho = this.mudaProdutosNoCarrinho()
		// const valorTotal = this.valorTotalNoCarrinho()

		const descontoExtra = 0.90
		
		const textoBotao = this.state.clicouBotaoDesconto ? 'Não gosto de descontos!' : `Quero +${((1 - descontoExtra) * 100).toFixed()}% de desconto`
		
		let valorFinal
		if (this.state.clicouBotaoDesconto) {
			valorFinal = (
				<div>
				<ParagrafoSemDesconto>Valor anterior: <ValorSemDesconto>{this.valorTotalNoCarrinho().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValorSemDesconto></ParagrafoSemDesconto>
				<ValorTotal>Valor total: {(this.valorTotalNoCarrinho() * descontoExtra).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValorTotal>
				</div>
			)
		} else {
			valorFinal = (
				<ValorTotal>Valor total: {this.valorTotalNoCarrinho().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValorTotal>
			)	
		}

		return (
			<CarrinhoContainer>
				<TituloCarrinho>
					Carrinho de Compras
				</TituloCarrinho>
				
				<DivItensNoCarrinho>
					{this.mudaProdutosNoCarrinho()}
				</DivItensNoCarrinho>
				
				<DivCentralizaBotao>
					<BotaoDescontoExtra onClick={this.clicarBotaoDesconto}>
						{textoBotao}
					</BotaoDescontoExtra>
				</DivCentralizaBotao>

				{valorFinal}
				
			</CarrinhoContainer>
		);
	}
}

export default Carrinho;