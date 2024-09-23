import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'; // Import Spinner
import mainPhoto from '../assets/mainPhoto.png';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // State untuk loading
  const [showImage, setShowImage] = useState(false); // State untuk menampilkan gambar

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoading(false); // Set loading ke false setelah 2 detik
      setShowImage(true); // Tampilkan gambar setelah 2 detik
    }, 1000);
  };

  const handleButtonClick = () => {
    navigate('/letter');
  };

  return (
    <div className='box-grid flex flex-col items-center justify-center h-screen'>
      {/* Tampilkan spinner jika loading */}
      {isLoading && (
        <div className="flex items-center justify-center h-full">
          <Spinner size="xl" color="teal.500" />
        </div>
      )}

      {/* Gambar dengan event onLoad */}
      <div className='mt-8'>
        <img
          src={mainPhoto}
          alt="Main"
          className={`w-96 p-1 slide-up ${isLoading ? 'hidden' : ''}`} // Sembunyikan gambar saat loading
          onLoad={handleImageLoad} // Panggil saat gambar selesai dimuat
        />
      </div>

      {/* Tampilkan paragraf dan tombol hanya setelah gambar ditampilkan */}
      {showImage && (
        <>
          <p className='mx-10 mt-6 text-justify font-caveat text-md font-bold text-[#5B6E51] slide-left'>
            Happy Birthday! | ¡Feliz cumpleaños! | Joyeux anniversaire! | Herzlichen Glückwunsch zum Geburtstag! | Buon compleanno! | Feliz aniversário! | С днём рождения! | お誕生日おめでとうございます! | 생일 축하합니다! | عيد ميلاد سعيد! | 生日快乐! | สุขสันต์วันเกิด! | Честит рожден ден! | Gefeliciteerd met je verjaardag! | Grattis på födelsedagen! | Gratulerer med dagen! | Hyvää syntymäpäivää! | Doğum günün kutlu olsun! | Felicitats! | Chúc mừng sinh nhật! | Su gimtadieniu! | Maligayang kaarawan! | Selamat Ulang Tahun!
          </p>

          <button 
            className="bg-[#A3AE85] mt-10 mb-12 text-white font-semibold py-2 px-4 w-80 rounded-md hover:bg-[#8a956c] slide-up"
            onClick={handleButtonClick}
          >
            Letter For U!
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
