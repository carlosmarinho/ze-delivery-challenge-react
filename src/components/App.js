import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import Home from '../pages/home';
import Products from '../pages/product';
import Footer from './common/Footer';
import Header from './common/Header';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-size: 14px;
        font-family: Roboto;

        @media(min-width: 400px) {
            font-size: 16px;
        }
    }
`





const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products/:id" component={Products} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App; 