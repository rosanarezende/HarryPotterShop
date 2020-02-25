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

const ValorTotal = styled.h3``

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

	render() {

		// //podia chamar assim ou construir aqui mesmo
		// const listaDeProdutosNoCarrinho = this.mudaProdutosNoCarrinho()
		// const valorTotal = this.valorTotalNoCarrinho()

		return (
			<CarrinhoContainer>
				<TituloCarrinho>Carrinho de Compras</TituloCarrinho>
				{this.mudaProdutosNoCarrinho()}
				{/* <ValorTotal>Valor total: R$ {parseFloat(this.valorTotalNoCarrinho()).toFixed(2)}</ValorTotal> */}
				<ValorTotal>Valor total: {this.valorTotalNoCarrinho().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValorTotal>
			</CarrinhoContainer>
		);
	}
}

export default Carrinho;