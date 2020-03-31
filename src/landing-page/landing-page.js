import React from 'react';
import './landing-page.css';
import { Link } from 'react-router-dom';

function LandingPage (props) {
        return (
        <section className='landing-parent-section'>
            <h1>Skills, Kills, and Thrills</h1>
            <p className='welcome-text'>Explore the landscape of players greatest performances. If you feel like your skills can compete, then upload clips of your own!</p>
            <p>Do not forget to leave a rating!</p>
            <form className='landing-form'>
                <label htmlFor='email'>Enter Your Email:</label>
                <input type='email' required id='email' className='landing-inputs child'></input>
                <label htmlFor='text'>Enter A Username:</label>
                <input type='text' id='text' className='landing-inputs child'></input>
                <label htmlFor='password'>Enter Your Password:</label>
                <input type='password' id='password' required className='landing-inputs child'></input>
                <button type='button' className='landing-buttons child'>Sign up!</button>
            </form>
            <section className='watch-now'>
                    <h3>Feel free to watch videos without signing up. However, you will not be able to rate or upload videos</h3>
                    <Link to='/home-page' className='watch-now watch-now-link' onClick={props.hideShowVideos}>Watch Videos Now</Link>
            </section>
       </section>
        )
}

export default LandingPage