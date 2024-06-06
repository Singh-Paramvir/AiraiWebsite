import React from 'react';
import bg from '../../../images/why choose us/sec 1/bg.png';
import design from '../../../images/why choose us/sec 1/design_.png';
import Navbar from '../../Navbar/Navbar';
import './Why1.css';

export const Why1 = () => {
  return (
    <div className='bg-cover bg-center min-h-screen overflow-hidden' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className='flex items-center justify-center text-center'>
        <h1 className='text-white text-4xl font-black font-lato py-6 Pb-3 text-center'>Why Choose Us?</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
        <div className='flex flex-col items-start justify-start p-20 m-6 pt-6 my-0 mr-0 pr-6'>
          <p className='Choose-head text-white font-black font-Myraid leading-tight'>AIRAI is your one <br/>stop shop for custom solutions.</p>
          <p className='text-white text-lg font-lato pt-12'>"Transform Your Brand with Engaging Visual Experiences"</p>
          <button className='mt-12 rounded-full bg-gradient-to-r from-sky-800 to-sky-400 py-3'>
            <p className='text-white font-medium text-lg px-10'>Schedule Meeting</p>
          </button>
        </div>
        <div className='flex items-center justify-center overflow-hidden' >
          <div className="square overflow-hidden">
            <span></span>
            <span></span>
            <span></span>
            <img src={design} alt="Design" className='w-auto h-auto py-6 sm:w-auto h-auto px-6 relative z-10' />
          </div>
        </div>
      </div>
    </div>
  );
};
