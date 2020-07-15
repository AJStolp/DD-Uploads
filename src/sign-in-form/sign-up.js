import React from "react";
import { Link } from "react-router-dom";
import "./sign-up.css";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: "",
		};
	}
	static defaultProps = {
		onLoginSuccess: () => {},
	};
	handleSubmitJwtAuth = (event) => {
		event.preventDefault();

		const { username, password } = event.target;

		AuthApiService.postLogin({
			username: username.value,
			password: password.value,
		})
			.then((res) => {
				username.value = "";
				password.value = "";
				TokenService.saveAuthToken(res.authToken);
				window.location.assign("/upload-videos");
				this.props.onLoginSuccess();
			})
			.catch((res) => {
				this.setState({
					error: res.error,
				});
			});
	};

	render() {
		return (
			<div className='main-container'>
				<form
					className='sign-in border-gradient-purple'
					onSubmit={this.handleSubmitJwtAuth}
				>
					<p htmlFor='email'>Enter Your Username:</p>
					<input
						title='email'
						name='username'
						type='text'
						required
						id='email'
						className='sign-in-inputs'
						placeholder='Username'
					></input>
					<p htmlFor='password'>Enter Your Password:</p>
					<label htmlFor='password'></label>
					<input
						title='password'
						name='password'
						type='password'
						id='password'
						required
						className='sign-in-inputs'
						placeholder='Password'
					></input>
					<button type='submit' className='landing-buttons child'>
						Sign In!
					</button>
					<Link to='/home-page' className='sign-up-watch-now'>
						Watch Videos Now
					</Link>
				</form>
				<div className='alert'>
					<p>
						<strong>{this.state.error}</strong>
					</p>
				</div>
			</div>
		);
	}
}

export default SignIn;
