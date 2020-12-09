import './videoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return (
    <div onClick={()=> onVideoSelect(video)} className='item Video-item'>
        <img className='ui image' alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
        <div className='content'>
            <div className=''>
                {video.snippet.title}
            </div>
            
        </div>
    
    </div>
    )
}

export default VideoItem;