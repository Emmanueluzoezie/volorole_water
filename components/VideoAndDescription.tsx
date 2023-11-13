import React from 'react'

const VideoAndDescription = () => {
    return (
        <div className='max-w-[500px] mx-auto video-container'>
            <video width="700" height="500" controls className="responsive-video">
                <source src="/video/videoone.mp4" type="video/mp4" />
                {/* Your browser does not support the video tag. */}
            </video>
        </div>
    );
};

export default VideoAndDescription