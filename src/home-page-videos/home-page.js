import React from 'react';
import './home-page.css';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className='home-page-heading'>
                <h2>Do You Match Up?</h2>
                <Link to='/upload-videos' className='upload-video-link'>Upload Your Videos</Link>
                </div>
            <section className='div-home-page'>
                <section className='videos'>
                    <video></video>
                    <h4>Title: Triple Kill In Warzone</h4>
                    <p>Description: You cant hang with me</p>
                    <p>Rating: <span role='img' aria-label='Emoji Ratings'>&#128577; &#128533; &#128529; &#128522; &#128516;</span></p>
                </section>
                <section className='videos'>
                    <video></video>
                    <h4>Title: Squad Wipe With Rockets</h4>
                    <p>Description: Y'all can't hang with my squad</p>
                    <p>Rating: <span role='img' aria-label='Emoji Ratings'>&#128577; &#128533; &#128529; &#128522; &#128516;</span></p>
                </section>
                <section className='videos'>
                    <video></video>
                    <h4>Title: Tournament Win in Mario Kart!</h4>
                    <p>Description: Accepting Challengers</p>
                    <p>Rating: <span role='img' aria-label='Emoji Ratings'>&#128577; &#128533; &#128529; &#128522; &#128516;</span></p>
                </section>
                <section className='videos'>
                    <video></video>
                    <h4>Title: Triple Grenade Kill</h4>
                    <p>Description: Cant hang</p>
                    <p>Rating: <span role='img' aria-label='Emoji Ratings'>&#128577; &#128533; &#128529; &#128522; &#128516;</span></p>
                </section>
                <section className='videos'>
                    <video></video>
                    <h4>Title: Tournament Win in Halo!</h4>
                    <p>Description: Accepting Challengers</p>
                    <p>Rating: <span role='img' aria-label='Emoji Ratings'>&#128577; &#128533; &#128529; &#128522; &#128516;</span></p>
                </section>
                <section className='videos'>
                    <video></video>
                    <h4>Title: Red Dead Final Mission!</h4>
                    <p>Description: Incredible ending</p>
                    <p>Rating: <span role='img' aria-label='Emoji Ratings'>&#128577; &#128533; &#128529; &#128522; &#128516;</span></p>
                </section>
                <section className='videos'>
                    <video></video>
                    <h4>Title: Tournament Win in Mario Kart!</h4>
                    <p>Description: Accepting Challengers</p>
                    <p>Rating: <span role='img' aria-label='Emoji Ratings'>&#128577; &#128533; &#128529; &#128522; &#128516;</span></p>
                </section>
                </section>
            </div>
        )
    }
}

export default HomePage