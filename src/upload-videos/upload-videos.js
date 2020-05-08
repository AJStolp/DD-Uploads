import config from '../config';
import React from 'react';
import './upload-videos.css';
import { IoIosCloudUpload } from 'react-icons/io';

class UploadVideos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: '',
            videos: [],
        }
    }

    //methods for getting data

    onTitleChange = async (title) => {
        title.preventDefault();
        await this.setState({
            title: title.target.value
        })
    }
    onContentChange = async (content) => {
        content.preventDefault();
        await this.setState({
            content: content.target.value
        })
    }

    submitForm = (form) => {
        form.preventDefault();

        const addedVideoData = {
            title: '',
            content: '',
            status: '',
        }

        const request = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedVideoData)
        };

        const url = `${config.API_ENDPOINT}/videos`;

        fetch(url, request)
           .then(res => {
              if (!res.ok) {
                   throw new Error('Sorry, something occurred when trying to upload - Please try your upload again.')
               }
               return res.json()
           })
           .then(data => {
                this.setState({
                    status: 'Your video upload was successful! :thumbsup:'
                })
           })
           .catch(error => {
               alert(error)
           })
    }



    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submitForm(e)}>
                    <div className='upload-videos-form'>
                        <IoIosCloudUpload size='small'/>
                        <label htmlFor='file'>Browse File to Upload</label>
                        <input type='file' placeholder='choose the video you want uploaded' className='file'/>
                    </div>
                    <div className='upload-videos-form'>
                        <label htmlFor='title'>Video Title</label>
                        <input onChange={(e) => this.onTitleChange(e)} type='text' id='title' className='upload-inputs child-upload' placeholder='Your Video Title'/>
                        <label htmlFor='description'>Video Description</label>
                        <textarea onChange={(e) =>  this.onContentChange(e)} id='description' className='upload-inputs child-upload' placeholder='Your Video Description'></textarea>
                        <button type='submit' className='upload-button child-upload'>Upload Your Video</button>
                    </div>
                </form>
            </div>
        )

    }
}

export default UploadVideos