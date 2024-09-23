import React, { useRef } from 'react';
import videosample from '../assets/videosample.mp4';

const Video = ({ stopAudio }) => {
    const videoRef = useRef(null); // Referensi untuk video

    const handleVideoPlay = () => {
        stopAudio(); // Hentikan musik saat video diputar
    };

    return (
        <div className="box-grid flex flex-col items-center h-screen">
            <div className='w-[95%] mt-20 bg-[#A3AE85] p-4 rounded-lg'>
                <div className='flex justify-between'>
                    <h1 className='text-white font-caveat font-medium text-lg ml-2 mb-4 mt-1'>Breaking News.mp4</h1>
                    <h1 className='text-white font-caveat font-medium text-lg ml-2 mr-3 mb-4 mt-1'>🔴Live (banget)</h1>
                </div>
                <video 
                    ref={videoRef} // Set referensi untuk video
                    className='rounded-lg border-[3px] border-black'
                    src={videosample}
                    width="1920"
                    height="1080"
                    controls
                    onPlay={handleVideoPlay} // Panggil fungsi saat video diputar
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Video;
