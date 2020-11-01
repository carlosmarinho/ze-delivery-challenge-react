import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    background: black;
    color: #fff;
    height: 80px;
    align-content: center;
    align-item: cneter;
`;

const Logo = styled.div`

`;

const Header = () => {
    return(
        <HeaderWrapper>
            <Logo>
                <img />
            </Logo>
        </HeaderWrapper>
    )
}

export default Header;