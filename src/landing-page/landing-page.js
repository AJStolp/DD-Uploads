import React from 'react';
import './landing-page.css';
import { Link } from 'react-router-dom';
import config from '../config';

class LandingPage extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        showVideos: true,
                        email: '',
                        userName: '',
                        password: '',
                        status: '',
                }
                this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
                console.log(this.state.email)
        };

        onUserNameChange = async (userName) => {
                userName.preventDefault();
                await this.setState({
                        userName: userName.target.value
                })
                console.log(this.state.userName)
        };

        onPasswordChange = async (password) => {
                password.preventDefault();
                await this.setState({
                        password: password.target.value,
                })
                console.log(this.state.password)
        };

        handleFormSubmit = (submit) => {
                submit.preventDefault();

                let formData = document.getElementById('signupForm');

                const request = {
                        method: 'POST',
                        headers: {
                                'content-type': 'application/json'
                        }
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
                <section className='landing-parent-section'>
                    <h1>Skills, Kills, and Thrills</h1>
                    <p className='welcome-text'>Explore the landscape of players greatest performances. If you feel like your skills can compete, then upload clips of your own!</p>
                    <p>Do not forget to leave a rating!</p>
                    <form id='signupForm' className='landing-form' onSubmit={(e) => this.handleFormSubmit(e)}>
                        <label htmlFor='email' className='landing-label'>Enter Your Email:</label>
                        <input onChange={(e) => this.onEmailChange(e)} type='email' required id='email' className='landing-inputs child' placeholder='Email'></input>

                        <label htmlFor='text' className='landing-label'>Enter A Username:</label>
                        <input onChange={(e) => this.onUserNameChange(e)} type='text' id='text' className='landing-inputs child' placeholder='Username'></input>

                        <label htmlFor='password' className='landing-label'>Enter Your Password:</label>
                        <input onChange={(e) => this.onPasswordChange(e)} type='password' id='password' required className='landing-inputs child' placeholder='Password'></input>

                        <button type='submit' className='landing-buttons child'>Sign up!</button>
                    </form>
                    <section className='watch-now'>
                            <h3>Feel free to watch videos without signing up, or in. However, you will not be able to rate or upload videos</h3>
                            <Link to='/home-page' className='watch-now watch-now-link' onClick={() => this.hideShowVideos()}>Watch Videos Now</Link>
                    </section>
               </section>       
                )

        }
}

export default LandingPage