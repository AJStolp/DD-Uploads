import config from '../config';
import React from 'react';
import './upload-videos.css';
import { FaCloudUploadAlt } from 'react-icons/fa';

class UploadVideos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: '',
        }
        this.submitForm = this.submitForm.bind(this);
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

        let headers = new Headers();

        const formData = new FormData();
        let myFile = document.getElementById('file').files[0];
        formData.append('video', myFile);

        const request = {
            method: 'POST',
            headers: headers,
            body: formData
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
                <form onSubmit={(e) => this.submitForm(e)} id='form'>
                    <div className='div-main'>

                        <section className='upload-files'>
                            <FaCloudUploadAlt id='upload-icon'/>
                            <label htmlFor='file'>Upload File.</label><br />
                            <input accept='video/*' type='file' placeholder='Add File' id='file' className='files'/>
                        </section>
        
                   
                        <section className='video-info'>
                            <label htmlFor='title'>Video Title</label>
                            <input onChange={(e) => this.onTitleChange(e)} type='text' id='title' className='' placeholder='Your Video Title'/>
                            <label htmlFor='description'>Video Description</label>
                            <textarea onChange={(e) =>  this.onContentChange(e)} id='description' className='' maxLength='140' placeholder='Your Video Description'></textarea>
                            <button type='submit' className='upload-btn'>Upload Your Video</button>
                        </section>

                    </div>
                </form>
            </div>
        )

    }
}

export default UploadVideos