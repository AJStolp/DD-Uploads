import React from 'react';
import './landing-page.css';

class LandingPage extends React.Component {
    render() {
        return (
            <section className='landing-parent-section'>
            <h1>Skills, Kills, and Thrills</h1>
            <p className='welcome-text'>Explore the landscape of players greatest performances. If you feel like your skills can compete, then upload clips of your own!</p>
            <p>Do not forget to leave a rating!</p>
            <form className='landing-form'>
                <label for='email'>Enter Your Email:</label>
                <input type='email' required id='email' className='landing-inputs child'></input>
                <label for='text'>Enter A Username:</label>
                <input type='text' id='text' className='landing-inputs child'></input>
                <label for='password'>Enter Your Password:</label>
                <input type='password' id='password' required className='landing-inputs child'></input>
                <button type='button' className='landing-buttons child'>Sign up!</button>
            </form>
       </section>
        )
    }
}

export default LandingPage