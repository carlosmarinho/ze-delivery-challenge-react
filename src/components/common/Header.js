import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    background: black;
    color: #fff;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
`;

const Logo = styled.div`

    img {
        height: 40px;
        width: 140px;
    }
`;

const LoginArea = styled.div`
    border: 1px solid #FFC500;
    border-radius: 24px;
    padding: 10px;
    color: #FFC500;

    :hover{
        background: #FFC500;
        color: #000;
    }
    
`

const Header = () => {
    return(
        <HeaderWrapper>
            <Logo>
                <img src="/public/images/white-logo.png"/>
            </Logo>
            <LoginArea>
                ENTRAR
            </LoginArea>
        </HeaderWrapper>
    )
}

export default Header;