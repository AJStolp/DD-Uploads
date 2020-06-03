import config from '../config';
import React from 'react';
import { Link } from 'react-router-dom';
import './upload-videos.css';
import { FaCloudUploadAlt } from 'react-icons/fa';

class UploadVideos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: '',
            status: ''
        }
    }

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

        let myForm = document.getElementById('form')
        const formData = new FormData(myForm);

        const request = {
            method: 'POST',
            body: formData,
            'Accept': "application/json",
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
                    status: 'Your video upload was successful! :thumbsup:',
                })
           })
           .catch(error => {
               console.log(error);
           })
    }



    render() {
        return (
            <div>
                <form onSubmit={(form) => this.submitForm(form)} id='form' encType='multipart/form-data'>
                    <div className='row'>
    
                        <section className='column' id='column-1'>
                            <FaCloudUploadAlt id='upload-icon' />
                            <div>
                                <h2 htmlFor='file' id='up-label'>Upload File.</h2>
                                <input accept='video/*' name='file' type='file' id='file' className='files'/>
                            </div>
                        </section>
                   
                        <section className='column'>
                            <p htmlFor='title'>Video Title</p>
                            <input name='title' maxLength='40' value={this.state.title} onChange={(title) => this.onTitleChange(title)} type='text' id='title' placeholder='Your Video Title' required/>
                            <p htmlFor='description'>Video Description</p>
                            <textarea name='content' value={this.state.content} onChange={(content) =>  this.onContentChange(content)} id='description' className='' maxLength='140' placeholder='Your Video Description' required></textarea><br></br>
                            <button type='submit' className='upload-btn'>Upload Your Video</button>
                        </section>
                    </div>
                        <div>
                        <Link to='/home-page' className='watch-now watch-now-link'>Watch Videos Now</Link>
                        </div>
                </form>
            </div>
        )

    }
}

export default UploadVideos