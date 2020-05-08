import React from 'react';
import './App.css';
import LandingPage from './landing-page/landing-page';
import { Route, Switch } from 'react-router-dom';
import NavLogIn from './nav-log-in/nav-log-in';
import SignIn from './sign-in-form/sign-up';
import NavSignUp from './nav-sign-up/nav-sign-up';
import HomePage from './home-page-videos/home-page';
import UploadVideos from './upload-videos/upload-videos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    }
    this.hideShowNav = this.hideShowNav.bind(this);
  }

  hideShowNav = () => {
    this.setState({
      showMe: !this.state.showMe
    })
  }

  onEmailChange = (email) => {
    email.preventDefault();
    this.setState({
      email: email.target.value,
    })
    console.log(this.state.email)
  }

render(){
    return (
  <div>
      {this.state.showMe ? <NavLogIn hideShowNav={this.hideShowNav}/> : <NavSignUp hideShowNav={this.hideShowNav}/>}
      <Switch className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Sign-in' component={SignIn} />
        <Route exact path='/home-page' component={HomePage} hideShowVideos={() => this.hideShowVideos()}/>
        <Route exact path='/upload-videos' component={UploadVideos} />
        <Route exact path='/sign-in-form' component={SignIn}/>
      </Switch>
  </div>
    );

  }
}

export default App;
