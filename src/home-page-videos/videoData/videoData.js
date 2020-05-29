import React from 'react';
import { Link } from 'react-router-dom';
import './videoData.css';

class VideoData extends React.Component {
    render(){
        const videos = this.props.videodata.map((video) => {
            return (
                <div key={video.id} className=''>
                    <videos-js>
                    <video className='videos' src={video.video_url}  controls data-setup="{}"></video>
                    </videos-js>
                    <h3>{video.title}</h3>
                    <p>{video.content}</p>
                </div>
            )
        })
        
        console.log(videos, 'I am videos')
        console.log(this.props, 'I am the props - yay!')
        return (
            <div className='videos-container'>
                <Link to='/upload-videos' className='upload-video-link'>Upload Your Videos</Link>
                <div>
                {/* <p>Videos here</p> */}
                {videos}
                </div>
            </div>
        )
    }
}
            
export default VideoData