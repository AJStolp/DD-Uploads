import React from 'react';
import './landing-page.css';
import { Link } from 'react-router-dom';
import config from '../config';
import TokenService from '../services/token-service';

class LandingPage extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        showVideos: true,
                        email: '',
                        username: '',
                        password: '',
                        status: null,
                }
                this.handleFormSubmit = this.handleFormSubmit.bind(this);
        }
        static defaultProps = {
                onLoginSuccess: () => {}
        }
        //methods
        hideShowVideos = () => {
                this.setState({
                        showVideos: !this.state.showVideos
                })
        }

        onEmailChange = async (email) => {
                email.preventDefault();
                await this.setState({
                        email: email.target.value
                })
        };

        onUserNameChange = async (username) => {
                username.preventDefault();
                await this.setState({
                        username: username.target.value
                })
        };

        onPasswordChange = async (password) => {
                password.preventDefault();
                await this.setState({
                        password: password.target.value,
                })
        };

        handleFormSubmit = (submit) => {
                submit.preventDefault();

                const { username, password } = submit.target;

                TokenService.saveAuthToken(
                        TokenService.makeBasicAuthToken(username, password)
                )
                this.props.onLoginSuccess()

                const addedUserData = {
                        email: this.state.email,
                        username: this.state.username,
                        password: this.state.password,
                }

                const request = {
                        method: 'POST',
                        headers: {
                                'content-type': 'application/json',
                        },
                        body: JSON.stringify(addedUserData)
                };

               const url = `${config.API_ENDPOINT}/users`;


              fetch(url, request)
               .then(res => {
                       if(!res.ok) {
                               throw new Error ('Sorry, something went wrong please try again')
                       }
                       return res.json()
               })
               .then(data => {
                        this.setState({
                                status: 'Your signup was successful! Welcome!:sunglasses:'
                        })
               })
               .catch(error => {
                       alert(error)
               })
        };


        render() {
                return (
                <div className='landing-parent-section'>
                        <section className='welcome-text'>
                                <h1 className='skills-kills-thrills'>Skills, <span className='kills'>Kills</span>, and Thrills</h1>
                                <p>Explore the landscape of players greatest performances. If you feel like your skills can compete, then upload clips of your own!</p>
                        </section>
                    {/* <p className='welcome-text'>Do not forget to leave a rating!</p> */}
                    <form id='signupForm' className='landing-form' onSubmit={(e) => this.handleFormSubmit(e)}>
                        <label htmlFor='email' className='landing-label'>Enter Your Email:</label>
                        <input onChange={(e) => this.onEmailChange(e)} type='email' required id='email' className='landing-inputs child' placeholder='Email'></input>

                        <label htmlFor='text' className='landing-label'>Enter A Username:</label>
                        <input onChange={(e) => this.onUserNameChange(e)} type='text' id='text' className='landing-inputs child' placeholder='Username'></input>

                        <label htmlFor='password' className='landing-label'>Enter Your Password:</label>
                        <input onChange={(e) => this.onPasswordChange(e)} type='password' id='password' required className='landing-inputs child' placeholder='Password'></input>

                        <button type='submit' className='landing-button-home child'>Sign up!</button>
                    </form>
                    <section className='watch-now'>
                            <h4>Feel free to watch videos without signing up, or in. However, you will not be able to upload videos.</h4>
                            <Link to='/home-page' className='watch-now watch-now-link' onClick={() => this.hideShowVideos()}>Watch Videos Now</Link>
                    </section>
               </div>       
                )

        }
}

export default LandingPage