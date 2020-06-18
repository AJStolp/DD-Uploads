import React from 'react';
import './landing-page.css';
import { Link } from 'react-router-dom';
import config from '../config';
import AuthApiService from '../services/auth-api-service';

class LandingPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        showVideos: true,
                        error: null,
                        status: null,
                }
        }
        static defaultProps = {
                onRegistrationSuccess: () => {}
        }
        //methods
        hideShowVideos = () => {
                this.setState({
                        showVideos: !this.state.showVideos
                })
        }

        handleFormSubmit = (event) => {
                event.preventDefault();
                
                const { username, password, email } = event.target;
        

                AuthApiService.postUser({
                        username: username.value,
                        password: password.value,
                        email: email.value
                    })
                        .then(user => {
                            username.value = ''
                            password.value = ''
                            email.value = ''
                            this.props.onRegistrationSuccess()
                        })
                        .then(() => {
                                let success = 'Signup successful! Welcome!'
                                this.setState({status: success})
                        })
                        .catch(res => {
                            this.setState({ error: res.error })
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
                    <form id='signupForm' className='landing-form' onSubmit={this.handleFormSubmit}>
                        <label htmlFor='email' className='landing-label'>Enter Your Email:</label>
                        <input name='email' type='email' required id='email' className='landing-inputs child' placeholder='Email'></input>

                        <label htmlFor='text' className='landing-label'>Enter A Username:</label>
                        <input name='username' type='text' id='text' className='landing-inputs child' placeholder='Username'></input>

                        <label htmlFor='password' className='landing-label'>Enter Your Password:</label>
                        <input name='password' type='password' id='password' required className='landing-inputs child' placeholder='Password'></input>

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