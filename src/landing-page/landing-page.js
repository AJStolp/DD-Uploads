import React from "react";
import "./landing-page.css";
import { Link } from "react-router-dom";
import AuthApiService from "../services/auth-api-service";

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showVideos: true,
			error: "",
			status: null,
		};
	}
	static defaultProps = {
		history: {
			push: () => {},
		},
	};

	handleFormSubmit = (event) => {
		event.preventDefault();

		const { username, password, email } = event.target;

		AuthApiService.postUser({
			username: username.value,
			password: password.value,
			email: email.value,
		})
			.then((user) => {
				username.value = "";
				password.value = "";
				email.value = "";
			})
			.then(() => {
				window.location.assign("/sign-in-form");
				let success =
					"Signup successful - Welcome! You can now upload your own videos!";
				let signIn = "Now that you are registered please sign in!";
				this.setState({ status: success });
				alert(success);
				alert(signIn);
			})
			.catch(
				(res) => {
					this.setState({ error: res.error });
				},
				// setTimeout(function () {
				// 	window.location.reload();
				// }, 3000)
			);
	};
	render() {
		return (
			<div className='landing-parent-section'>
				<section className='welcome-text'>
					<h1 className='skills-kills-thrills'>
						Skills, <span className='kills'>Kills</span>, and Thrills
					</h1>
					<p>
						Explore the landscape of players greatest performances. If you feel
						like your skills can compete, then upload clips of your own!
					</p>
				</section>
				<form
					id='signupForm'
					className='landing-form'
					onSubmit={this.handleFormSubmit}
				>
					<label htmlFor='email' className='landing-label'>
						Enter Your Email:
					</label>
					<input
						name='email'
						type='email'
						required
						id='email'
						className='landing-inputs child'
						placeholder='Email'
					></input>

					<label htmlFor='text' className='landing-label'>
						Enter A Username:
					</label>
					<input
						name='username'
						type='text'
						id='text'
						className='landing-inputs child'
						placeholder='Username'
					></input>

					<label htmlFor='password' className='landing-label'>
						Enter Your Password:
					</label>
					<input
						name='password'
						type='password'
						id='password'
						required
						className='landing-inputs child'
						placeholder='Password'
					></input>

					<button type='submit' className='landing-button-home child'>
						Sign up!
					</button>
					<span className='span-class-error'>{this.state.error}</span>
				</form>
				<section className='watch-now'>
					<h4>
						Feel free to watch videos without signing up, or in. However, you
						will not be able to upload videos.
					</h4>
					<Link to='/home-page' className='watch-now watch-now-link'>
						Watch Videos Now
					</Link>
				</section>
			</div>
		);
	}
}

export default LandingPage;
