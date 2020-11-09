import React, { useState } from 'react';
import styled from 'styled-components';

// import { gql } from 'apollo-boost';
import { gql, useQuery } from '@apollo/client';

import ProductContainer from './Product';



const CategoryWrapper = styled.div`
    display: ${p => p.renderCategory ? 'block' : 'none'};
    margin: 30px 30px;
    background: #fff;

    h2{
        margin: 10px 0 0 10px;
        color: #999;
        font-size: 16px;
        text-transform: uppercase;
    }
`

const CategoryProducts = styled.div`
    display: flex;
    box-sizing: border-box;
    /* padding: 0 20px; */
    height: 300px;
    align-items: center;
    overflow-x: auto;
    justify-content: ${p => p.big ? 'initial' : 'space-around'};

    @media(min-width: 1100px) {   
        justify-content: ${p => p.big ? 'initial' : 'space-around'};
    }
`

export const findProducts=gql`
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

const showProducts = (loading, error, data ) => {
  if(loading) return <div>Carregando...</div>
  if(error) return <div>Error...</div>
  if(data.poc.products.length === 0 ) {
    setRenderCategory(false);
    return null;
  }
  
  return(
    <>
      <h2>{title}</h2>
      <CategoryProducts big={data.poc.products.length > 5} bigger={data.poc.products.length > 6}>
          {data.poc.products.map(p => <ProductContainer key={p.id} product={p} />)}
      </CategoryProducts>
    </>
  );
}

const Category = ({ title, id, distributorId }) => {
  const [renderCategory, setRenderCategory] = useState(true);
  const { loading, error, data } = useQuery(
    findProducts,
    { 
      variables: { 
        id: distributorId, 
        search: "",
        categoryId: id
      } 
    }
  );
  return(
      <CategoryWrapper data-test="component-category" renderCategory={renderCategory}>              
        {showProducts(loading, error, data)}
      </CategoryWrapper>
  )
}

export default Category;