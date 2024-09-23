import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Letter from './pages/Letter';
import Login from './pages/Login';
import Video from './pages/Video';
import music from './assets/Lagu.mp3'; // Pastikan Anda telah mengimpor file musik

function App() {
  const audioRef = useRef(new Audio(music)); // Simpan audio di luar komponen halaman

  useEffect(() => {
    audioRef.current.loop = true; // Buat musik looping
    audioRef.current.play().catch(err => console.log("Audio play failed:", err));

    // Cleanup untuk menghentikan musik jika diperlukan
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset musik ke awal
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
