import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    /* max-height:  */
    max-width: 200px;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #fafafa;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
    margin: 0 10px;

    img {
        width: 128px;
    }

    h3{
        border-top: 2px solid #f3f3f3;
        width: 100%;
        padding-top: 5px;
        margin-top: 0px;
        text-align: center;
        color: #999;
        font-size: 14px;
    }

    span {
        font-size: 14px;
        font-weight: bold;
    }
`;


const Product = ({product: {name, img, price}}) => {
    console.log(name, img, price)
    return(
        <Wrapper>
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <span>R$ {price}</span>
        </Wrapper>
    )
}

export default Product;