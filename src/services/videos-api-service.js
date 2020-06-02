import TokenService from './token-service';
import config from '../config';

const VideoApiService = {

    postVideo() {
        return fetch(`${config.API_ENDPOINT}/videos`, {
            method: 'POST',
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
            body: FormData
        })
        .then(res => {
            (!res.ok)
            ? res.json().then(e => Promise.reject(alert(e)))
            : res.json()
        })
    }
}

export default VideoApiService