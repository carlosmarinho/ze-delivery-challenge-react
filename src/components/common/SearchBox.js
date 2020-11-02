import React from 'react';
import styled from 'styled-components';

const SearchBoxWrapper = styled.div`
    display: flex;
    border: 1px solid black;
    width: 100%;
    align-items: center;
    justify-content: stretch;
    border: 1px solid #999;
    border-radius: 8px;
    background: #fff;
    height: 40px;

    svg {
        width: 24px;
        height: 24px;
        margin: auto 15px;
    }

    input {
        width: 90%;
        height: 100%;
        border: none;
    }

    input:focus {
        outline: none;
    }

`

const SearchBox = () => {
    return (
        <SearchBoxWrapper>
            <svg viewBox="0 0 24 24" style={{}} role="presentation" >
                <path 
                    d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" 
                    style={{fill: '#666'}}
                ></path>
            </svg>                                                                             
            <input type='text' placeholder="Inserir endereço para ver preço" />
        </SearchBoxWrapper>
    )
}

export default SearchBox;