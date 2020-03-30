import React from 'react';
import './App.css';
import LandingPage from './landing-page/landing-page';
import { Route, Switch } from 'react-router-dom';
import Nav from './nav/nav';
import SignIn from './sign-in/sign-in';

class App extends React.Component {
render(){
    return (
    <div>
      <Nav />
      <Switch className="App">
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/Sign-in' component={SignIn} />
      </Switch>
    </div>
    );

  }
}

export default App;
