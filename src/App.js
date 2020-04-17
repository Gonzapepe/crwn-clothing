import React from 'react';
import HomePage from './pages/homepage/homepage'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
