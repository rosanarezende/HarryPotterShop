import React from 'react';
import styled from 'styled-components'

const HomeContainer = styled.div`
  min-width: 74vw;
  padding: 1vh 1vw;

  @media screen and (max-device-width: 1200px) {
        width: 96vw;
        margin-top: 1vh;
    }
`

function Home() {
  return (
    <HomeContainer>
      Eu sou o Home
    </HomeContainer>
  );
}

export default Home;