import React from 'react';
import paper from '../assets/paper.png';
import dump from '../assets/PhotoDump.png';

const Letter = () => {
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
        </div>
    );
};

export default Letter;
