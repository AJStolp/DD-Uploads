import React from 'react';
import './home-page.css';
import config from '../config';
import VideoData from './videoData/videoData';

class HomePage extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            videos: [],
            error: null,
        }
    }

    setVideos = (videos) => {
        this.setState({
            videos,
        })
    }

    componentDidMount() {
        const APIEndpoint = config.API_ENDPOINT;
        const videosEndpoint = '/videos';
        const url = APIEndpoint + videosEndpoint;

        const request = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }

        fetch(url, request)
            .then(res => {
               if(!res.ok) {
                   return res.json().then(error => Promise.reject(error))
               }
               return res.json()
            })
            .then(this.setVideos)
            .catch(error => {
                console.log(error)
                this.setState({error})
            });
    };



    render() {
        return (
            <div>
                <section>
                    <VideoData videodata={this.state.videos}/>
                </section>
            </div>
        )
    }
}

export default HomePage