import React from 'react';
import './sign-in.css';

class SignIn extends React.Component {
    render() {
        return (
            <section className='sign-in'>
                <label for='email'>Enter Your Email:</label>
                <input type='email' required id='email' className='landing-inputs child'></input>
                <label for='password'>Enter Your Password:</label>
                <input type='password' id='password' required className='landing-inputs child'></input>
                <button type='button' className='landing-buttons child'>Sign In!</button>
            </section>
        )
    }
}

export default SignIn