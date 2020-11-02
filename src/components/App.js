import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-size: 14px;

        @media(min-width: 400px) {
            font-size: 16px;
        }
    }
`

import Home from '../pages/home';
import Header from './common/Header';
// const Home = () => <div>Meu App</div>
const Products = () => <div>Meus Produtos</div>

const httpLink = createHttpLink({
    uri: 'https://api.code-challenge.ze.delivery/public/graphql'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache
})

const App = () => {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" component={Products} />
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App; 