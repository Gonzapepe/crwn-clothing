import React from 'react';
import HomePage from './pages/homepage/homepage'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'
import signInAndSignUp from './pages/sign-in-and-sign-up/signin_signup'
import { auth } from './firebase/firebase-utils'


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={signInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
