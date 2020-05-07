import React from 'react';
import './landing-page.css';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        showVideos: true,
                        email: '',
                        userName: '',
                        password: '',
                }
        }
        //methods
        hideShowVideos = () => {
                this.setState({
                        showVideos: !this.state.showVideos
                })
        }

        onEmailChange = (email) => {
                email.preventDefault();
                this.setState({
                        email: email.target.value
                })
                console.log(this.state.email)
        }

        onUserNameChange = (userName) => {
                userName.preventDefault();
                this.setState({
                        userName: userName.target.value
                })
                console.log(this.state.userName)
        }

        onPasswordChange = (password) => {
                password.preventDefault();
                this.setState({
                        password: password.target.value
                })
        }

        render() {
                return (
                <section className='landing-parent-section'>
                    <h1>Skills, Kills, and Thrills</h1>
                    <p className='welcome-text'>Explore the landscape of players greatest performances. If you feel like your skills can compete, then upload clips of your own!</p>
                    <p>Do not forget to leave a rating!</p>
                    <form className='landing-form'>
                        <label htmlFor='email' className='landing-label'>Enter Your Email:</label>
                        <input onChange={(e) => this.onEmailChange(e)} type='email' required id='email' className='landing-inputs child' placeholder='Email'></input>
                        <label htmlFor='text' className='landing-label'>Enter A Username:</label>
                        <input onChange={(e) => this.onUserNameChange(e)} type='text' id='text' className='landing-inputs child' placeholder='Username'></input>
                        <label htmlFor='password' className='landing-label'>Enter Your Password:</label>
                        <input onChange={(e) => this.onEmailChange(e)} type='password' id='password' required className='landing-inputs child' placeholder='Password'></input>
                        <button type='button' className='landing-buttons child'>Sign up!</button>
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