import React from 'react';
import './sign-up.css';

class SignIn extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <section className='sign-in'>
                    <label htmlFor='email'>Enter Your Email:</label>
                    <input type='email' required id='email' className='landing-inputs child'></input>
                    <label htmlFor='password'>Enter Your Password:</label>
                    <input type='password' id='password' required className='landing-inputs child'></input>
                    <button type='button' className='landing-buttons child'>Sign In!</button>
                </section>
            </div>
        )
    }
}

export default SignIn