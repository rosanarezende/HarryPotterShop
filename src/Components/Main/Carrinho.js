import React from 'react';
import styled from 'styled-components'

const CarrinhoContainer = styled.div`
  width: 35vw;
  border: 1px solid rgb(97, 46, 65);
  padding: 1vh 1vw;
  margin-left: 1vw;

  @media screen and (max-device-width: 1200px) {
    width: 96vw;
    margin: 1vh 0;
    margin-left: 0;
  }
`

const DivCadaProdutoNoCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin: 1vh 0;
`

const DivPrecoEExcluir = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-device-width: 1200px) {
    width: 30%;
  }
`

const BotaoDeletar = styled.button`
  border-radius: 50%;
  outline: 0;

`

class Carrinho extends React.Component {

  render() {

    const listaDeProdutosNoCarrinho = this.props.itensNoCarrinho.map(cadaProduto => {
      return (
        <DivCadaProdutoNoCarrinho key={cadaProduto.produtoAdicionado.id}>
          <span>{cadaProduto.quantidade}x {cadaProduto.produtoAdicionado.name}</span>
          <DivPrecoEExcluir>
            <span>R$ { parseFloat(cadaProduto.produtoAdicionado.value * 0.95 * cadaProduto.quantidade).toFixed(2) } </span>
            <BotaoDeletar>X</BotaoDeletar>
          </DivPrecoEExcluir>

        </DivCadaProdutoNoCarrinho>
      )
    })

    return (
      <CarrinhoContainer>
        {listaDeProdutosNoCarrinho}
      </CarrinhoContainer>
    );
  }
}

export default Carrinho;