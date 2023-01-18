import axios from 'axios';

const KEYS = 'AIzaSyBbpQLntffJX3ehlPx21g4lMC9sHz-jXWM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    
    params: {
        part : 'snippet',
        maxResults : 5,
        key : KEYS
    }
});
