import React, { useState } from 'react';
import '../index.css';
import profileImage from '../assets/pp.jpg';
import pitaImage from '../assets/pita.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState(''); // State untuk menyimpan input
  const [error, setError] = useState(''); // State untuk menyimpan pesan error
  const placeholderText = "Insert your tanggal & bulan!";
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleButtonClick = (value) => {
    if (input.length < 4) {
      const newInput = input + value; // Tambahkan nilai tombol ke input
      setInput(newInput); // Update input

      // Cek jika input sudah 4 digit
      if (newInput.length === 4) {
        if (newInput !== '2409') {
          setError('Masa lupa tanggal & bulan sendiri 😏'); // Pesan error jika input bukan 2409
          // Reset input dan error langsung
          setInput('');
        } else {
          setError(''); // Reset error jika input benar
          navigate('/home'); // Redirect ke halaman Home
        }
      } else {
        setError(''); // Reset error jika input kurang dari 4 digit
      }
    }
  };

  return (
    <div className='box-grid flex flex-col items-center'>
      <div className='flex justify-center flex-col items-center'>
        <img 
          src={profileImage} 
          alt="Foto Profile" 
          className="w-40 h-40 rounded-full object-cover mt-10 border-4 border-[#231F20] border-dashed p-1" 
        />
        <h1 className='text-[#BF6528] text-3xl font-bold mt-3'>Hello, Opaa! ✨</h1>
      </div>

      <div className="mt-10 w-80 border-2 border-black py-2 px-4 bg-gray-50 text-2xl font-semibold flex items-center justify-center">
        <h2 className={`text-xl ${input ? 'text-[#353535]' : 'text-[#cac8c8] text-md'}`}>
          {input || placeholderText}
        </h2>
      </div>

      {/* Pesan Error */}
      {error && <p className="text-red-500 text-lg mt-8">{error}</p>}

      {/* Tombol */}
      <div className="grid grid-cols-3 mt-12 gap-10 pb-16">
        {Array.from({ length: 9 }, (_, index) => (
          <button 
            key={index} 
            className="font-semibold text-3xl italic w-20 h-20 bg-[#A3AE85] text-white rounded-lg shadow-md hover:bg-[#89946d]"
            onClick={() => handleButtonClick((index + 1).toString())}
          >
            {index + 1}
          </button>
        ))}
        <div className="font-semibold text-3xl col-span-3 flex items-center justify-center">
          <img src={pitaImage} alt="Pita" className="w-20 h-20" />
          <button 
            className="w-20 h-20 italic mx-10 bg-[#A3AE85] text-white rounded-lg shadow-md hover:bg-[#89946d]"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
          <img src={pitaImage} alt="Pita" className="w-20 h-20" />
        </div>
      </div>
    </div>
  );
};

export default Login;
