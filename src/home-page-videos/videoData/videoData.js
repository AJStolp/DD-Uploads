import React from 'react';

class VideoData extends React.Component {
    render(){
        const videos = this.props.videodata.map((video) => {
            return (
                <div key={video.id} className=''>
                    <video src={video.video_url}></video>
                    <h1>{video.title}</h1>
                    <p>{video.content}</p>
                </div>
            )
        })
        
        return (
            <div className=''>
                {videos}
            </div>
        )
    }
}
            
export default VideoData