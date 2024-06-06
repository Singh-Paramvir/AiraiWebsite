import React from 'react';
import bg from '../../../images/why choose us/sec 1/bg.png';
import Artist from '../../../images/about us/sec 3/avinash_.png';
import WebDev from '../../../images/about us/sec 3/nishu.png';
import BDE from '../../../images/about us/sec 3/mukesh.png';
import AppDev from '../../../images/about us/sec 3/aditya.png';
import NodeDev from '../../../images/about us/sec 3/rajni_.png';

export const About3 = () => {
  return (
    <div className='bg-cover bg-center min-h-screen pt-12' style={{ backgroundImage: `url(${bg})` }}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-24 pb-6'>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold text-center'>
          <img src={Artist} alt="Avinash" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1 className='w-56'>Avinash</h1>
          <h2 className='w-56'>Associate Game Designer</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold text-center'>
          <img src={WebDev} alt="Nishu" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1 className='w-56'>Nishu</h1>
          <h2 className='w-56'>Associate Frontend Developer</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold text-center'>
          <img src={AppDev} alt="Aditya" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1 className='w-56'>Aditya</h1>
          <h2 className='w-56'>Associate Mobile App Developer</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold text-center'>
          <img src={BDE} alt="Mukesh" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1 className='w-56'>Mukesh</h1>
          <h2 className='w-56'>Business Development Executive (BDE)</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold text-center'>
          <img src={NodeDev} alt="Rajni" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1 className='w-56'>Rajni</h1>
          <h2 className='w-56'>Associate Node.js Developer</h2>
        </div>
      </div>
    </div>
  );
};
