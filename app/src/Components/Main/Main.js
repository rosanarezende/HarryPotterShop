import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
    /* position: fixed; */
    margin-top: 7vh;
    
  @media screen and (max-device-width: 1200px) {
    margin-top: 10vh;
  }

  @media screen and (max-device-width: 800px) {
    margin-top: 12vh;
  }

  @media screen and (max-device-width: 400px) {
    margin-top: 15vh;
  }
`

class Main extends React.Component {

  render() {
    return (
      <MainContainer>
        {this.props.children}
      </MainContainer>
    )
  }

}

export default Main;
