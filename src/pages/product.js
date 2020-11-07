import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Category from '../components/common/Category';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const findCategorys=gql`
query allCategoriesSearch {
    allCategory{
      title
      id
    }
}
`

const ProductWrapper = styled.div`
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
`


const Product = () => {

    const { id } = useParams();
    return(
        <ProductWrapper>
            <Query 
                query={findCategorys}
                
            >
                {({loading, error, data}) => {
                    if (loading) return <div>Carregando Categorias..</div>;
                    if (error) return `Error! ${error}`;

                    return(
                        data.allCategory.map(category => <Category key={category.id} distributorId={id} {...category} />)
                    )
                }}

            </Query>
        </ProductWrapper>
    )
}

export default Product;