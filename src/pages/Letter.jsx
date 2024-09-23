import React, { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react'; // Import Spinner dari Chakra UI
import paper from '../assets/paper.png';
import dump from '../assets/PhotoDump.png';
import { useNavigate } from 'react-router-dom';

const Letter = () => {
    const [loading, setLoading] = useState(true); // State untuk loading spinner
    const [showContent, setShowContent] = useState(false); // State untuk menunjukkan konten
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/video');
    };

    const handleImageLoad = () => {
        // Setelah gambar dimuat, set loading ke false dan showContent ke true setelah 1 detik
        setTimeout(() => {
            setLoading(false);
            setShowContent(true);
        }, 2000); // Delay 1 detik
    };

    return (
        <div className="box-grid flex flex-col items-center">
            {loading && (
                <div className="flex justify-center items-center h-screen">
                    <Spinner size="xl" color="teal.500" />
                </div>
            )}
            <div className='relative mt-8 w-[90%] pb-28 overflow-hidden'>
                <img 
                    src={paper} 
                    alt="paper" 
                    className="w-full" 
                    onLoad={handleImageLoad} // Panggil saat gambar selesai dimuat
                    style={{ display: loading ? 'none' : 'block' }} // Sembunyikan gambar sampai loading selesai
                />
                <img 
                    src={dump} 
                    alt="Photo Gabung" 
                    className="absolute top-[800px] left-1/2 transform -translate-x-1/2" 
                />
            </div>
            {showContent && (
                <button 
                    className="bg-[#A3AE85] mb-12 text-white font-semibold py-2 px-4 w-80 rounded-md hover:bg-[#8a956c]" 
                    onClick={handleButtonClick}
                >
                    Click For Ur Gift!
                </button>
            )}
        </div>
    );
};

export default Letter;
