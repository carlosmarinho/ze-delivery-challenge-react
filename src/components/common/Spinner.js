import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 380px;
    left: auto;
    font-weight: bolder;
`

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const SpinnerImg = styled.div`
    border: 4px solid #ddd;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border-top: none;
    border-right: none;
    animation: ${rotation} 1s linear infinite;
    
`

const Spinner = () => {
    return(
        <>
        <SpinnerWrapper>
            <SpinnerImg />
            Carregando...
        </SpinnerWrapper>
        </>
    )
}

export default Spinner;