import React from 'react';
import './sign-up.css';

class SignIn extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <section className='sign-in'>
                    <label htmlFor='email'>Enter Your Email:</label>
                    <input type='email' required id='email' className='landing-inputs child' placeholder='Email'></input>
                    <label htmlFor='password'>Enter Your Password:</label>
                    <input type='password' id='password' required className='landing-inputs child' placeholder='Password'></input>
                    <button type='submit' className='landing-buttons child'>Sign In!</button>
                </section>
            </div>
        )
    }
}

export default SignIn