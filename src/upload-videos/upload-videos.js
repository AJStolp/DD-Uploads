import React from 'react';
import './upload-videos.css';

class UploadVideos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: '',
            rating: '',
            videos: [],
        }
    }

    //methods for getting data

    onTitleChange = (title) => {
        title.preventDefault();
        this.setState({
            title: title.target.value
        })
    }
    onContentChange = (content) => {
        content.preventDefault();
        this.setState({
            content: content.target.value
        })
    }


    render() {
        return (
            <div>
                <form className='upload-videos-form'>
                    <label htmlFor='title'>Video Title</label>
                    <input onChange={() => this.onTitleChange()} type='text' id='title' className='upload-inputs child-upload' placeholder='Your Video Title'/>
                    <label htmlFor='description'>Video Description</label>
                    <textarea onChange={() =>  this.onContentChange()} id='description' className='upload-inputs child-upload' placeholder='Your Video Description'></textarea>
                    <button type='submit' className='upload-button child-upload'>Upload Your Video</button>
                </form>
            </div>
        )

    }
}

export default UploadVideos