import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import App from './components/App';

const httpLink = createHttpLink({
    uri: 'https://api.code-challenge.ze.delivery/public/graphql'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.querySelector('#root')
)