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
    <div className='bg-cover bg-center min-h-screen pt-9 ' style={{ backgroundImage: `url(${bg})` }}>
      <h1 className='text-center text-white font-lato font-black text-3xl pb-6 pt-0'>Meet Our Team</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-24 pt-3 pb-6'>
        
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold text-center mx-20'>
          <img src={CEO} alt="Aman" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1 className='w-56'>Aman</h1>
          <h2 className='w-56'>CEO & Founder</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold text-center'>
          <img src={HR} alt="Charu" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1 className='w-56'>Charu Thakur</h1>
          <h2 className='w-56'>HR Manager</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold text-center'>
          <img src={MD} alt="Ashish" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1 className='w-56'>Ashish</h1>
          <h2 className='w-56'>Managing Director</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold text-center'>
          <img src={MANG} alt="Mukul" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1 className='w-56'>Mukul</h1>
          <h2 className='w-56'>Project Manager</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold text-center'>
          <img src={Designer} alt="Vanshika" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1 className='w-56'>Vanshikha</h1>
          <h2 className='w-56'>Senior Game Designer</h2>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-xl font-semibold text-center'>
          <img src={Param} alt="Param" className='w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full' />
          <h1 className='w-56'>Paramvir Singh</h1>
          <h2 className='w-64'>Senior Node.js Developer</h2>
        </div>
      </div>
    </div>
  );
};
