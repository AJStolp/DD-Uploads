import React from "react";
import { Link } from "react-router-dom";
import "./videoData.css";
import { FaArrowAltCircleUp } from "react-icons/fa";
// import video-js from 'video.js';

class VideoData extends React.Component {
	render() {
		const videos = this.props.videodata.map((video) => {
			return (
				<section key={video.id} className='videos-item'>
					<videos-js>
						<video
							className='videos'
							src={video.video_url}
							controls
							data-setup='{}'
						></video>
					</videos-js>
					<h3 className='video-title'>{video.title}</h3>
					<p className='content'>{video.content}</p>
				</section>
			);
		});

		return (
			<div>
				<div className='upload-video-link-container'>
					<FaArrowAltCircleUp className='upload-icon-watch-page' />
					<Link to='/upload-videos' className='upload-video-link'>
						Upload Your Videos
					</Link>
				</div>
				<div className='videos-container'>{videos}</div>
			</div>
		);
	}
}

export default VideoData;
