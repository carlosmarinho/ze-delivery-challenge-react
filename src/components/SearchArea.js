import React from 'react';
import styled from 'styled-components';
import SearchBox from './common/SearchBox';

const SearchAreaWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 464px;
    background-size: auto 700px;
    background-position: bottom right;
    align-items: center;
    background-image: url('https://courier-images-web.imgix.net/static/img/img-welcome-bg.png?auto=compress,format&fit=max&w=500&h=400&dpr=2&fm=png');
    

    h1{
        margin-top: 100px;
        max-width: 592px;
        font-size: 36px;
        text-align: center;
    }

    
`


const SearchBoxWrapper = styled.div`
    max-width: 592px;
    width: 100%;   
    /* background: #fff; */
    /* border: none; */
`

const SearchArea = () => {
    return (
        <SearchAreaWrapper>
            <h1>Bebidas Geladas a preço de mercado na sua casa agora</h1>
            <SearchBoxWrapper>
                <SearchBox />
            </SearchBoxWrapper>
        </SearchAreaWrapper>
    )
}

export default SearchArea;