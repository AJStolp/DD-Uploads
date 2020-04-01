import React from 'react';
import './upload-videos.css';
import { findAllByPlaceholderText } from '@testing-library/react';

class UploadVideos extends React.Component {
    render() {
        return (
            <div>
                
                <form className='upload-videos-form'>
                    <label htmlFor='title'>Video Title</label>
                    <input type='text' id='title' className='upload-inputs' placeholder='Your Video Title'/>
                    <label htmlFor='description'>Video Description</label>
                    <textarea id='description' className='upload-inputs' placeholder='Your Video Description'></textarea>
                    <button type='submit' className='upload-button'>Upload Your Video</button>
                </form>
            </div>
        )

    }
}

export default UploadVideos