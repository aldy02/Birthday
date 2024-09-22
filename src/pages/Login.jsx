import React, { useState, useEffect } from 'react';
import '../index.css';
import profileImage from '../assets/pp.jpg'; // Profile image
import pitaImage from '../assets/pita.png'; // Pita image
import music from '../assets/Lagu.mp3'; // Import your music file
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const placeholderText = "Insert your tanggal & bulan!";
  const navigate = useNavigate();
  
  useEffect(() => {
    const audio = new Audio(music);
    audio.loop = true; // Set to true if you want the music to loop
    audio.play().catch(err => console.log("Audio play failed:", err));
    
    // Cleanup function to stop audio when component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to start
    };
  }, []);

  const handleButtonClick = (value) => {
    if (input.length < 4) {
      const newInput = input + value;
      setInput(newInput);

      if (newInput.length === 4) {
        if (newInput !== '2409') {
          setError('Masa lupa tanggal & bulan sendiri 😏');
          setInput('');
        } else {
          setError('');
          navigate('/home');
        }
      } else {
        setError('');
      }
    }
  };

  const handleProfileClick = () => {
    setIsProfileClicked(true);
  };

  return (
    <div className={`box-grid flex flex-col items-center justify-center ${isProfileClicked ? '' : 'h-screen'}`}>
      <div className='flex justify-center flex-col items-center'>
        <img 
          src={profileImage} 
          alt="Foto Profile" 
          className={`w-40 h-40 rounded-full object-cover border-4 border-[#231F20] border-dashed p-1 cursor-pointer ${isProfileClicked ? 'mt-10 slide-up' : ''}`} 
          onClick={handleProfileClick}
        />
        <h1 className={`text-[#BF6528] text-3xl font-bold mt-3 ${isProfileClicked ? 'slide-down' : ''}`}>Hello, Opaa! ✨</h1>
      </div>

      {isProfileClicked && (
        <>
          <div className={`mt-10 w-80 border-2 border-black py-2 px-4 bg-gray-50 text-2xl font-semibold flex items-center justify-center ${isProfileClicked ? 'slide-left' : ''}`}>
            <h2 className={`text-xl ${input ? 'text-[#353535]' : 'text-[#cac8c8] text-md'}`}>
              {input || placeholderText}
            </h2>
          </div>

          {error && <p className="text-red-500 text-lg mt-8 slide-down">{error}</p>}

          <div className={`grid grid-cols-3 mt-12 gap-10 pb-16 ${isProfileClicked ? 'slide-down-buttons' : ''}`}>
            {Array.from({ length: 9 }, (_, index) => (
              <button 
                key={index} 
                className="font-semibold text-3xl italic w-20 h-20 bg-[#A3AE85] text-white rounded-lg shadow-md hover:bg-[#89946d]"
                onClick={() => handleButtonClick((index + 1).toString())}
              >
                {index + 1}
              </button>
            ))}
            <div className="font-semibold text-3xl col-span-3 flex items-center justify-center mt-4">
              <img src={pitaImage} alt="Pita" className="w-20 h-20" />
              <button 
                className="w-20 h-20 italic mx-10 bg-[#A3AE85] text-white rounded-lg shadow-md hover:bg-[#89946d]"
                onClick={() => handleButtonClick('0')}
              >
                0
              </button>
              <img src={pitaImage} alt="Pita" className="w-20 h-20 transform scale-x-[-1]" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
