import React from 'react';
import paper from '../assets/paper.png';
import dump from '../assets/PhotoDump.png';
import { useNavigate } from 'react-router-dom';


const Letter = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/video');
    };
    return (
        <div className="box-grid flex flex-col items-center">
            <div className='relative mt-8 w-[90%] pb-28 overflow-hidden'>
                <img src={paper} alt="paper" className="w-full" />
                <img 
                    src={dump} 
                    alt="Photo Gabung" 
                    className="absolute top-[800px] left-1/2 transform -translate-x-1/2" 
                />
            </div>
            <button 
        className="bg-[#A3AE85] mb-12 text-white font-semibold py-2 px-4 w-80 rounded-md hover:bg-[#8a956c]" 
        onClick={handleButtonClick}
      >
        Click For Ur Gift!
      </button>
        </div>
    );
};

export default Letter;
