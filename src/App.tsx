import React from 'react';
import './App.css';
import './assets/main.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Products from './components/Products';
import { ProductsContexProvider } from './contex/ProductsContex';

function App(): JSX.Element {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <ProductsContexProvider>
          <Route path="/" component={Products} />
        </ProductsContexProvider>
      </Switch>
    </HashRouter>
  );
}

export default App;
