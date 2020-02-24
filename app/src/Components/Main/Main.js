import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
    /* position: fixed; */
    margin-top: 8vh;
    
  @media screen and (max-device-width: 1200px) {
    margin-top: 11vh;
  }

  @media screen and (max-device-width: 800px) {
    margin-top: 13vh;
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
