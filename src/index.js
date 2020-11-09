import React from 'react';
import ReactDOM from 'react-dom';
// import { ApolloProvider } from 'react-apollo';
// import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import App from './components/App';


const client = new ApolloClient({
    uri: 'https://api.code-challenge.ze.delivery/public/graphql',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.querySelector('#root')
)