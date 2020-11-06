import React from 'react';
import styled from 'styled-components';
import ProductContainer from '../components/common/Product';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo'

const ProductWrapper = styled.div`
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
`

const Category = styled.div`
    margin: 30px 30px;
    background: #fff;

    h2{
        margin: 10px 0 0 10px;
        color: #999;
        font-size: 16px;
        text-transform: uppercase;
    }

`

const CategoryWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
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

const findProducts=gql`
query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        rgb
        images {
          url
        }
        productVariants {
          availableDate
          productVariantId
          price
          inventoryItemId
          shortDescription
          title
          published
          volume
          volumeUnit
          description
          subtitle
          components {
            id
            productVariantId
            productVariant {
              id
              title
              description
              shortDescription
            }
          }
        }
      }
    }
  }
`

const Product = ({ }) => {
    return(
        <ProductWrapper>
            <Category>
                <h2>Cervejas</h2>
                <CategoryWrapper big={ar.length > 5}>
                    <Query 
                        query={findProducts}
                        variables={{
                            "id": "532",
                            "search": "",
                            "categoryId": null
                        }}
                    >
                        {({ loading, error, data }) => {
                            if(loading) return <div>Carregando...</div>
                            if(error) return <div>Error...</div>
                            
                            // console.log("data: ", data);
                            return(
                                data.poc.products.map(p => <ProductContainer product={p} />)                            
                            );
                        }}

                    </Query>
                </CategoryWrapper>      
            </Category>
        </ProductWrapper>
    )
}

export default Product;