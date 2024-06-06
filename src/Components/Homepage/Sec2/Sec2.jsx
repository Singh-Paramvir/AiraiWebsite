import React from 'react';
import './Sec2.css';
import bg from '../../../images/sec 2/bg.png';
import design from '../../../images/sec 2/design.png';

export const Sec2 = () => {
  return (
    <div className='Sec2 bg-cover bg-center min-h-screen p-6 overflow-hidden' style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex items-center justify-center text-center'>
      <h1 className='text-white text-4xl font-black font-lato py-9'>About Us</h1>
      </div>
      <div className='Sec2-data grid grid-cols-1 md:grid-cols-2 gap-4 '>
      <div className='Sec2-imgs flex items-center justify-center m-0 p-0 mb-6  ' >

<div className="square ">
  <span></span>
  <span></span>
  <span></span>
  <img src={design} alt="Design" className='w-auto mt-7 ml-3 md:max-w-full md:h-auto relative z-10' />
</div>
</div>
        <div className='about-para flex items-center justify-center p-20'>
          <p className='text-white text-2xl '>Welcome to AIRAI, where creativity meets innovation in the world of game design and
development. We create beyond the box immersive digital experiences. In the constantly
changing game industry, we are driven by our passion, innovation, and dedication to quality. We
are a group of creative minds with a simple yet ambitious goal: to redefine the gaming industry.
Our goal is to provide participants with truly memorable experiences.</p>
        </div>
      </div>
    </div>
  );
};
