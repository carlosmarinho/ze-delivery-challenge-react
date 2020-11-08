import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    /* max-height:  */
    /* min-width: 200px; */
    min-width: 200px;
    /* justify-content: space-around; */
    align-items: center;
    border: 1px solid #fafafa;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
    margin: 0 10px;

`;

const ProductImage = styled.div`

    display: flex;
    align-items: center;
    height: 55%;

    img {
        width: 100px;
        /* height: 96px; */
    }

`

const ProductContent = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    height: 45%;
    text-align: center;

    h3{
        border-top: 2px solid #f3f3f3;
        width: 100%;
        padding-top: 10px;
        margin-top: 0px;
        text-align: center;
        color: #999;
        font-size: 14px;
    }

    span {
        font-size: 14px;
        font-weight: bold;
    }

`


const Product = ({product: {id, title, images, productVariants}}) => {
    return(
        <Wrapper data-test="component-product" key={id}>
            <ProductImage>
                <img src={images[0].url} alt=""/>
            </ProductImage>
            <ProductContent>
                <h3>{title}</h3>
                <span data-test="product-price">R$ {productVariants[0].price}</span>
            </ProductContent>
        </Wrapper>
    )
}

export default Product;