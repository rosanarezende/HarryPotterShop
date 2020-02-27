import React from 'react';
import styled from 'styled-components'

import Carrinho from './Carrinho';
import { LISTADEPRODUTOS } from '../../Shared/listaDeProdutos';
import { DESCONTOINICIAL } from '../../Shared/descontoInicial';

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
	padding: 10px 08px 05px 08px;
	/* padding-top: 10px; */
	border-radius: 50%;
	outline: 0;
	cursor: pointer;
	:hover {color: whitesmoke;}

	@media screen and (max-device-width: 1200px) {
		:hover {color: black;}
	}
`

const DivProdutos = styled.div`
	padding: 1vh 1vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`

const DivCadaProduto = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 12vw;
	margin: 1vh 0.5vw;
	padding: 1vh 0.5vw;
	border: 1px rgb(97, 46, 65) double;
	box-shadow: -3px 3px 10px rgba(97, 46, 65, 0.23);

	@media screen and (max-device-width: 1200px) {
		width: 27vw;
		margin: 0.5vh 1vw;
		padding: 0.5vh 1vw;
	}
`

const Figure = styled.div`
	position: relative;
	margin: 0;
	padding: 0;
`

const ImagemProduto = styled.img`
	width: 100%;
	/* cursor: pointer;
	transition: 0.2s; */
`

const Figcaption = styled.figcaption`
	position: absolute;
    top: 0px;
    background-color: rgba(97, 46, 65, 0.23);
    color: white;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
        /* isso corrige ele estar passando da bordar */
    opacity: 0;
        /* esconde tudo o que fizemos */
    transition: opacity 1s;

	:hover {
		opacity: 1;
	}
	cursor: pointer;
`

const BotaoAdiciona = styled.button`
	background-color: #a04d6b;
	padding: 1vh 1vw;
	outline: 0;
	width: 100%;
	transition: all 0.2s;
	cursor: pointer;
	:hover {color: whitesmoke;}
	box-shadow: -3px 3px 10px rgba(97, 46, 65, 0.23);
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
	padding: 0.5vh 2vw;
	border: 1px rgb(97, 46, 65) double;
	width: 30vw;
	box-shadow: -3px 3px 10px rgba(97, 46, 65, 0.23);

	@media screen and (max-device-width: 1200px) {
		width: 94vw;
	}
`

const DivAbraca = styled.div``

const ImagemProdutoRenderizada = styled.img`
	width: 100%;
`

const DivBotaoExcluiRenderizacao = styled.div`
	display: flex;
	flex-direction: row-reverse;
	padding-bottom: 1vh;
	cursor: pointer;
	transition: 0.2s;
	:hover {color: red;}
`

const listaDeProdutos = LISTADEPRODUTOS
const descontoInicial = DESCONTOINICIAL

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

	/////////////// GUARDAR NO ESTADO /////////////////
	componentDidMount() {
		const noEstadodoCarrinho = localStorage.getItem('carrinho')
		const novoEstado = JSON.parse(noEstadodoCarrinho)
		if (novoEstado) {
			this.setState({ carrinho: novoEstado })
		}
	}

	componentDidUpdate() {
		const estadoComoString = JSON.stringify(this.state.carrinho)
		localStorage.setItem('carrinho', estadoComoString)
	}
	////////////////////////////////////////////////////


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
		this.setState({ carrinho: copiaCarrinho })

	}

	maisProdutoDoCarrinho = (produtoAdicionado) => {
		const copiaCarrinho = [...this.state.carrinho]
		const produtoEstaNoCarrinho = this.state.carrinho.findIndex(cadaProduto =>
			cadaProduto.produtoAdicionado.id === produtoAdicionado.id)
		copiaCarrinho[produtoEstaNoCarrinho].quantidade += 1
		this.setState({ carrinho: copiaCarrinho })
	}

	menosProdutoDoCarrinho = (produtoAdicionado) => {
		const copiaCarrinho = [...this.state.carrinho]
		const produtoEstaNoCarrinho = this.state.carrinho.findIndex(cadaProduto =>
			cadaProduto.produtoAdicionado.id === produtoAdicionado.id)
		if (copiaCarrinho[produtoEstaNoCarrinho].quantidade > 1) { // para em zero
			copiaCarrinho[produtoEstaNoCarrinho].quantidade -= 1
		}
		this.setState({ carrinho: copiaCarrinho })
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
		if (this.state.produtoRenderizado !== null) {
			return (
				<DivProdutoRenderizado>
					<DivBotaoExcluiRenderizacao>
						<i className="material-icons" onClick={() => this.naoRenderizaProduto()}>close</i>
					</DivBotaoExcluiRenderizacao>
					<ImagemProdutoRenderizada src={produtoClicado.imageUrl} alt={produtoClicado.name} />
					<p>{produtoClicado.name}</p>
					<div>
						<ValorSemDesconto> {produtoClicado.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValorSemDesconto><span>  </span>
						<SpanDesconto>-5%</SpanDesconto>
						<p>{(produtoClicado.value * descontoInicial).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
						<BotaoAdiciona onClick={() => this.adicionaProduto(produtoClicado)}>Adicionar ao carrinho</BotaoAdiciona>
						<p>{produtoClicado.descricao}</p>
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
					<Figure>
						<ImagemProduto src={cadaProduto.imageUrl} alt={cadaProduto.name} onClick={() => this.renderizaProduto(cadaProduto)} />
						<Figcaption onClick={() => this.renderizaProduto(cadaProduto)}>
							Clique para ver detalhes
						</Figcaption>
					</Figure>					
					<p>{cadaProduto.name}</p>
					<div>
						<ValorSemDesconto> {cadaProduto.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValorSemDesconto><span>  </span>
						<SpanDesconto>-{((1 - descontoInicial) * 100).toFixed()}%</SpanDesconto>
						<p> {(cadaProduto.value * descontoInicial).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
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

			let valorDoProduto = cadaProduto.value * descontoInicial

			if (filtroBusca && filtroMin && filtroMax) {
				return (
					cadaProduto.name.toLowerCase().includes((filtroBusca).toLowerCase()) &&
					valorDoProduto >= filtroMin &&
					valorDoProduto <= filtroMax
				)
			}
			if (filtroBusca && filtroMin) {
				return (
					cadaProduto.name.toLowerCase().includes((filtroBusca).toLowerCase()) &&
					valorDoProduto >= filtroMin
				)
			}
			if (filtroBusca && filtroMax) {
				return (
					cadaProduto.name.toLowerCase().includes((filtroBusca).toLowerCase()) &&
					valorDoProduto <= filtroMax
				)
			}
			if (filtroMin && filtroMax) {
				return (
					valorDoProduto >= filtroMin &&
					valorDoProduto <= filtroMax)
			}
			if (filtroBusca) {
				return cadaProduto.name.toLowerCase().includes((filtroBusca).toLowerCase())
			}
			if (filtroMin) {
				return valorDoProduto >= filtroMin
			}
			if (filtroMax) {
				return valorDoProduto <= filtroMax
			}
			return listaNaoFiltrada
		}).map(cadaProduto => {
			return (
				<DivCadaProduto key={cadaProduto.id}>
					<Figure>
						<ImagemProduto src={cadaProduto.imageUrl} alt={cadaProduto.name} onClick={() => this.renderizaProduto(cadaProduto)} />
						<Figcaption onClick={() => this.renderizaProduto(cadaProduto)}>
							Clique para ver detalhes
						</Figcaption>
					</Figure>
					<p>{cadaProduto.name}</p>
					<div>
						<ValorSemDesconto> {cadaProduto.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValorSemDesconto><span>  </span>
						<SpanDesconto>-5%</SpanDesconto>
						<p> {(cadaProduto.value * descontoInicial).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
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

					<DivAbraca>
						{/* RENDERIZAR */}
						{this.renderizaProdutoNaTela(this.state.produtoRenderizado)}
					</DivAbraca>

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