import React from 'react';
import styled from 'styled-components';

const SearchAreaWrapper = styled.div`
    width: 100%;
    height: 464px;
    background-size: auto 700px;
    background-position: bottom right;
    background-image: url(https://courier-images-web.imgix.net/static/img/img-welcome-bg.png?auto=compress,format&fit=max&w=500&h=400&dpr=2&fm=png)
`

const SearchArea = () => {
    return (
        <SearchAreaWrapper>
            <input type='text' placeholder="Inserir endereço para ver preço" />
        </SearchAreaWrapper>
    )
}

export default SearchArea;