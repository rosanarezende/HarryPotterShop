import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
    position: fixed;
    top: 7vh;
    
  @media screen and (max-device-width: 1200px) {
    top: 10vh;
  }

  @media screen and (max-device-width: 800px) {
    top: 12vh;
  }

  @media screen and (max-device-width: 400px) {
    top: 15vh;
  }
`

const MainInterno = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 0 1vw;

    @media screen and (max-device-width: 1200px) {
        flex-direction: column;
    }
`


class Main extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MainContainer>

                <MainInterno>
                    {this.props.children}
                </MainInterno>


            </MainContainer>
        )
    }

}

export default Main;
