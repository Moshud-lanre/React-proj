import {useState, useEffect } from 'react';
import youtube from '../apis/youtube';
//
const useVideos = (defaultSearchTerm) => {
    const[videos, setVideos]= useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (text) => {
        const response = await youtube.get('/search', {
            params: {
                q: text
            }
        });

        setVideos(response.data.items); 
    };

    return [videos, search ] // or {videos, search}

};

export default useVideos;