import React from 'react';
import './Sec1.css';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import bg from '../../../images/sec 1/bg.png';
import line1 from '../../../images/sec 1/line 1.png';
import line2 from '../../../images/sec 1/line 2.png';
import shape1 from '../../../images/sec 1/shape 1.png';
import shape2 from '../../../images/sec 1/shape 2.png';
import shape3 from '../../../images/sec 1/shape 3.png';
import Pic1 from '../../../images/sec 1/design2.png';
import stars from '../../../images/sec 1/stars.png';

const Sec1 = () => {
  return (
    <div className='home1 bg-cover bg-center h-screen lg:pb-3' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className='home-sec1 grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 lg:px-24  mb-0 md: mx-9 mb-0'>
        <div className='Sec1-left h-full z-20'>
          <div className='Sec1-h1 px-3 py-5 bg-gradient-to-tl bg-no-repeat items-left justify-center bg-contain' style={{ backgroundImage: `url(${shape1})` }}>
            <h1 className='Sec1-h text-4xl md:text-6xl lg:text-8xl uppercase font-barlow font-black text-[#0B0933]'>
              crafting
            </h1>
          </div>
          <div className=' Sec1-h2 lg:px-5 lg:py-5 bg-gradient-to-tl bg-no-repeat lg:-mt-2 items-left justify-center bg-contain' style={{ backgroundImage: `url(${shape2})` }}>
            <h1 className='Sec1-h text-4xl md:text-6xl lg:text-8xl uppercase font-barlow font-black text-[#0B0933]'>
              digital
            </h1>
          </div>
          <div className='Sec1-h3 px-3 py-10 bg-gradient-to-tl bg-no-repeat lg:-mt-6 items-left justify-center bg-contain -mt-3' style={{ backgroundImage: `url(${shape3})` }}>
            <h1 className='h3 text-4xl md:text-6xl lg:text-8xl uppercase font-barlow font-black text-[#0B0933]'>
              realities
            </h1>
          </div>
          <blockquote className='text-white pt-6 pl-6 m-0 text-lg md:text-xl'>
            <p className='font-semibold'>"From Games to Apps and Beyond"</p>
          </blockquote>
          <a href='/contact'>
          <button className='why-btn my-2 bg-gradient-to-r from-sky-800 to-sky-400 rounded-full w-84 lg:w-1/3 lg:h-1/7 lg:my-3 lg:py-3'>
            <p className='text-white font-lato font-bold '>Schedule Meeting</p>
          </button>
          </a>
        </div>
        <div className='absolute inset-x-0 bottom-0 ml-2 z-0 w-auto'>
          <img src={line2} alt="" className='h-full line2' />
        </div>
        <div className=' Sec1-rght w-full mt-6 mx-12 md:mt-0' style={{ backgroundImage: `url(${stars})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          <div className='absolute inset-y-0 top-0 -ml-48 z-0' >
            <img src={line1} alt="" className='line1' />
          </div>
          <div className='flex justify-end w-full'>
            <img src={Pic1} alt="Design" className='max-w-full h-auto z-10' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec1;
