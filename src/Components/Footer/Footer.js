import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div`
    background-color: rgb(97, 46, 65);
    padding: 1vh 0;
`

const FooterInterno = styled.div`
    background-color: white;
    text-align: center;
    padding: 1vh 0;
    a:link{
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
`

class Footer extends React.Component {

    render() {
        return (
            <FooterContainer>
                <FooterInterno>
                    <i>Desenvolvido por</i> <a href='https://github.com/rosanarezende/'>Rosana Rezende</a>
                </FooterInterno>
            </FooterContainer>
        )
    }

}

export default Footer;
