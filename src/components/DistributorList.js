import React from 'react';
import styled from 'styled-components';

import { gql } from 'apollo-boost';
import {Query} from 'react-apollo';


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

const DistributorList = () => {
    return(
        <Query 
            query={findDistributor} 
            variables={{
                "algorithm": "NEAREST",
                "lat": "-23.632919",
                "long": "-46.699453",
                "now": "2017-08-01T20:00:00.000Z"
            }}
        >
            {({ loading, error, data }) => {
            if (loading) return <DistribuitorArea>Carregando</DistribuitorArea>;
            if (error) return `Error! ${error}`;

            return (
                    <DistribuitorArea>
                      {
                        data.pocSearch.map(search => 
                            <h2>Distribuidor mais próximo: '{search.officialName}'</h2>
                        )
                      }
                    </DistribuitorArea>
                    
                // <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
            );
        }}
        </Query>
    )
}

export default DistributorList;