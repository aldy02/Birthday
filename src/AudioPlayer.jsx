import React, { useEffect, useRef } from 'react';
import music from './assets/Lagu.mp3'; // Path to your music file

const AudioPlayer = () => {
  const audioRef = useRef(new Audio(music));

  useEffect(() => {
    audioRef.current.loop = true;
    audioRef.current.play().catch(err => console.log("Audio play failed:", err));
    
    return () => {
      audioRef.current.pause();
    };
  }, []);

  return null;
};

export default AudioPlayer;
