import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainPhoto from '../assets/mainPhoto.png';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/letter');
  };

  return (
    <div className='box-grid flex flex-col items-center'>
      {/* Gambar dengan animasi slide-down */}
      <div className='mt-8'>
        <img
          src={mainPhoto}
          alt="Main"
          className="w-96 p-1 slide-up" // Menambahkan kelas slide-down
        />
      </div>

      {/* Paragraf dengan animasi fade-in */}
      <p className='mx-10 mt-6 text-justify font-caveat text-md font-bold text-[#5B6E51] slide-left'>
        Happy Birthday! | ¡Feliz cumpleaños! | Joyeux anniversaire! | Herzlichen Glückwunsch zum Geburtstag! | Buon compleanno! | Feliz aniversário! | С днём рождения! | お誕生日おめでとうございます! | 생일 축하합니다! | عيد ميلاد سعيد! | 生日快乐!  | สุขสันต์วันเกิด! | Честит рожден ден! | Gefeliciteerd met je verjaardag! | Grattis på födelsedagen! | Gratulerer med dagen! | Hyvää syntymäpäivää! | Doğum günün kutlu olsun! | Felicitats! | Chúc mừng sinh nhật! | Su gimtadieniu! | Maligayang kaarawan! | Selamat Ulang Tahun!
      </p>

      {/* Tombol dengan animasi slide-up */}
      <button 
        className="bg-[#A3AE85] mt-10 mb-12 text-white font-semibold py-2 px-4 w-80 rounded-md hover:bg-[#8a956c] slide-up"
        onClick={handleButtonClick}
      >
        Letter For U!
      </button>
    </div>
  );
};

export default Home;