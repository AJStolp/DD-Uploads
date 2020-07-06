import React from "react";
import "./App.css";
import LandingPage from "./landing-page/landing-page";
import { Route, Switch } from "react-router-dom";
import NavLogIn from "./nav-log-in/nav-log-in";
import SignIn from "./sign-in-form/sign-up";
import HomePage from "./home-page-videos/home-page";
import UploadVideos from "./upload-videos/upload-videos";
import Footer from "./footer/footer";
import PrivateRoute from "./utils/privateRoute";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			username: "",
			password: "",
		};
		// this.hideShowNav = this.hideShowNav.bind(this);
	}

	// hideShowNav = () => {
	//   this.setState({
	//     showMe: !this.state.showMe
	//   })
	// }

	onEmailChange = (email) => {
		email.preventDefault();
		this.setState({
			email: email.target.value,
		});
	};

	render() {
		return (
			<div>
				<NavLogIn />
				<Switch className='App'>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/Sign-in' component={SignIn} />
					<Route exact path='/home-page' component={HomePage} />
					<PrivateRoute path={"/upload-videos"} component={UploadVideos} />
					<Route exact path='/sign-in-form' component={SignIn} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
