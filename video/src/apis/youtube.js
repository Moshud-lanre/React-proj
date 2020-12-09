import axios from 'axios';

const KEY =  'AIzaSyA-B3HquUArVcwJBWAAr36e01em2FPDvoI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3' ,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});