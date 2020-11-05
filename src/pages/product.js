import React from 'react';
import styled from 'styled-components';
import DistributorList from '../components/DistributorList';
import ProductContainer from '../components/common/Product';

const ProductWrapper = styled.div`
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
`

const CategoryWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    margin: 30px 30px;
    background: #fff;
    /* padding: 0 20px; */
    height: 300px;
    align-items: center;
    overflow-x: auto;
    justify-content: ${p => p.big ? 'initial' : 'space-around'};

    @media(min-width: 1100px) {   
        justify-content: space-around;
    }
`

const ar = [
    {name: 'teste', img: 'https://courier-images-prod.imgix.net/produc_variant/00008579_dfcca1fc-3364-4927-bcd6-d514c73ce88b.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2', price: '55,33'},
    {name: 'teste 123', img: 'https://courier-images-prod.imgix.net/produc_variant/00008579_dfcca1fc-3364-4927-bcd6-d514c73ce88b.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2', price: '5,37'},
    {name: 'teste 456', img: 'https://courier-images-prod.imgix.net/produc_variant/00008579_dfcca1fc-3364-4927-bcd6-d514c73ce88b.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2', price: '15,36'},
    {name: 'teste 789', img: 'https://courier-images-prod.imgix.net/produc_variant/00008579_dfcca1fc-3364-4927-bcd6-d514c73ce88b.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2', price: '25,35'},
    {name: 'teste 10 11', img: 'https://courier-images-prod.imgix.net/produc_variant/00008579_dfcca1fc-3364-4927-bcd6-d514c73ce88b.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2', price: '53,34'},
    {name: 'teste 789', img: 'https://courier-images-prod.imgix.net/produc_variant/00008579_dfcca1fc-3364-4927-bcd6-d514c73ce88b.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2', price: '25,35'},
    {name: 'teste 10 11', img: 'https://courier-images-prod.imgix.net/produc_variant/00008579_dfcca1fc-3364-4927-bcd6-d514c73ce88b.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2', price: '53,34'},
]

const Product = ({ }) => {
    return(
        <ProductWrapper>
            
            <CategoryWrapper big={ar.length > 5}>
                {ar.map(p => <ProductContainer product={p} />)}
            </CategoryWrapper>      
        </ProductWrapper>
    )
}

export default Product;