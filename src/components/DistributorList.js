import React from 'react';
import styled from 'styled-components';

import { gql, useQuery } from '@apollo/client';


const DistribuitorArea = styled.div`
  display: flex;
  background-color: #f3e8bf;
  margin: 30px;
  padding: 20px;
  text-align: center;

  h2{
    width: 100%;
  }
`

const findDistributor=gql`
query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      __typename
      id
      status
      tradingName
      officialName
      deliveryTypes {
        __typename
        pocDeliveryTypeId
        deliveryTypeId
        price
        title
        subtitle
        active
      }
      paymentMethods {
        __typename
        pocPaymentMethodId
        paymentMethodId
        active
        title
        subtitle
      }
      pocWorkDay {
        __typename
        weekDay
        active
        workingInterval {
          __typename
          openingTime
          closingTime
        }
      }
      address {
        __typename
        address1
        address2
        number
        city
        province
        zip
        coordinates
      }
      phone {
        __typename
        phoneNumber
      }
    }
  }
  
`

const DistributorList = ({geoLocation, setIdDistributor}) => {
    if(geoLocation) {
      const { loading, error, data } = useQuery(
        findDistributor,
        { 
          variables: {
            "algorithm": "NEAREST",
            "lat": geoLocation.lat,
            "long": geoLocation.long,
            "now": "2017-08-01T20:00:00.000Z"
          } 
        }
      );

      if (loading) return <DistribuitorArea>Carregando</DistribuitorArea>;
      if (error) return `Error! ${error}`;

      // setIdDistributor()
      if(!data.pocSearch.length) {
        return (
          <DistribuitorArea>
            <h2>Distribuidor não encontrado na localização informada!</h2>
          </DistribuitorArea>
        )
      }
      
      return(        
        <DistribuitorArea>
          {
            data.pocSearch.map(search => {
              setIdDistributor(search.id)
              return <h2 key={search.id}>Distribuidor mais próximo: '{search.officialName}'</h2>
            }
            )
          }
        </DistribuitorArea>
         
      )
    }
}

export default DistributorList;