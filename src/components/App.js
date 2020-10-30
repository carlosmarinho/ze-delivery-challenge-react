import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = () => <div>Meu App</div>
const Products = () => <div>Meus Produtos</div>

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;