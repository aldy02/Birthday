import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Letter from './pages/Letter';
import Home from './pages/Home';
import Login from './pages/Login';
import Video from './pages/Video';
import music from './assets/Lagu.mp3';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const audioRef = useRef(new Audio(music)); // Simpan audio di luar komponen halaman

  useEffect(() => {
    audioRef.current.loop = true; // Buat musik looping

    // Cleanup untuk menghentikan musik jika diperlukan
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  const playAudio = () => {
    audioRef.current.play().catch(err => console.log("Audio play failed:", err));
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // Reset musik ke awal
  };

  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login playAudio={playAudio} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/video" element={<Video stopAudio={stopAudio} />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
