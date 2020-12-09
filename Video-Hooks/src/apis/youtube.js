import axios from 'axios';

const KEY =  'AIzaSyBwL4siDEvDU7-B-OpU0C38T_p8yTyBnu0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3' ,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});