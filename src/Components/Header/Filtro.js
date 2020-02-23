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


function Filtro() {
  return (
    <FiltroContainer>
      <input type='text' placeholder='Digite o que você procura'/>
      <input type='text' placeholder='Digite o valor mínimo'/>
      <input type='text' placeholder='Digite o valor máximo'/>
    </FiltroContainer>
  );
}

export default Filtro;