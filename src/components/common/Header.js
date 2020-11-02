import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    background: black;
    color: #fff;
    height: 70px;
    align-content: center;
    align-items: center;
    padding: 0 5%;
`;

const Logo = styled.div`

    img {
        height: 40px;
        width: 140px;
    }
`;

const Header = () => {
    return(
        <HeaderWrapper>
            <Logo>
                <img src="/public/images/white-logo.png"/>
            </Logo>
        </HeaderWrapper>
    )
}

export default Header;