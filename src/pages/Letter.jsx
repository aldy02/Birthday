import React from 'react';
import paper from '../assets/paper.png';

const Letter = () => {
    return (
        <div className="box-grid flex flex-col items-center">
            <div className='relative mt-8 w-[90%]'>
                <img src={paper} alt="paper" className="w-full" />
                <p className='absolute leading-[30px] left-52 top-[10px] w-full font-caveat text-[#5B6E51] p-[70px]'>Sept 24, 2024</p>
                <p className="absolute leading-[30px] top-[40px] w-full text-justify font-caveat text-[#5B6E51] p-[70px]">
                    <br/>Dear Opaa,<br/>
                    HBD to the girl who is on my mind the most right now, semoga dengan bertambahnya umur, doa2 dan target2 yang sudah kamu rencanakan terkabul dan di permudah, juga semoga punya lebih waktu luang biar bisa santai main game atau sekedar nonton series, I think u really need that lol.
                    <br/> <br/>Its been a while since we become “friend”. Kalo di ibaratkan game petualangan tuh, kayaknya kita udah cukup tinggi level multiplayernya, udah beberapa petualangan kita lewati, yaa sebagian besarnya berhubungan sama osha oshi sihh, but I really enjoy at that moment, the moment where we can go together, the moment we play together, the moment we do an adventure together, the moment we are together.
                </p>
                <p className="absolute leading-[30px] top-[602px] w-full text-justify font-caveat text-[#5B6E51] p-[70px]">
                Doa udah, memories udah, yang belum? Yak benar confession of feel, maybe this tiny little s*it on my kokoro that I’ve been hiding it since we’re in Jakarta udah terlalu gede bahkan lebih gede dari ulti killjoy yang kayaknya udah ga bisa di sembunyiin lagi, tapi ntar aja dehh, biar u not in mix feeling, ini juga paling bakal hanya jadi sponsor yang bisa di skip kek di youtube bagi kamu, jadi ntar aja deh wkwkw. Sekali lagi selamat ulang tahun Aufa Wa Yumna.
                </p>
                <p className="absolute left-[268px] top-[904px] w-full font-caveat text-[#5B6E51] p-[70px]">
                Bill
                </p>
            </div>
        </div>
    );
};

export default Letter;
