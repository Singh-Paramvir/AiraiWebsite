import React from 'react';
import bg from '../../../images/why choose us/sec 1/bg.png';
import CEO from '../../../images/about us/sec 2/aman.png';
import MD from '../../../images/about us/sec 2/ashish.png';
import HR from '../../../images/about us/sec 2/charu.png';
import MANG from '../../../images/about us/sec 2/mukul.png';
import Param from '../../../images/about us/sec 2/param.png';
import Designer from '../../../images/about us/sec 2/vanshikha.png';

export const About2 = () => {
  return (
    <div className='bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex items-center justify-center text-center'>
        <h1 className='text-white text-4xl font-black font-lato py-10'>Meet Our Team</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-32'>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold '>
          <img src={CEO} alt="Aman" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1>Aman</h1>
          <h2>CEO & Founder</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold'>
          <img src={HR} alt="Charu Thakur" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1>Charu Thakur</h1>
          <h2>HR Manager</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold'>
          <img src={MD} alt="Ashish" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1>Ashish</h1>
          <h2>Managing Director</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold'>
          <img src={MANG} alt="Mukul" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1>Mukul</h1>
          <h2>Project Manager</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold'>
          <img src={Designer} alt="Vanshikha" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1>Vanshikha</h1>
          <h2>Senior Game Designer</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold'>
          <img src={Param} alt="Paramvir Singh" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1>Paramvir Singh</h1>
          <h2>Senior Node.js Developer</h2>
        </div>
      </div>
    </div>
  );
};
