import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    background-color: rgb(97, 46, 65);
    padding: 1vh 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

const HeaderInterno = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2vw;
    background-color: white;

    @media screen and (max-device-width: 1200px) {
        padding: 1vh 1vw;
    }
`

class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HeaderContainer>
                <HeaderInterno>
                    {this.props.children}
                </HeaderInterno>
            </HeaderContainer>
        )
    }

}

export default Header;
