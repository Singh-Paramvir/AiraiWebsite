import React from 'react';
import './About1.css'
import bg from '../../../images/why choose us/sec 1/bg.png';
import design from '../../../images/about us/sec 1/design_.png';
import Navbar from '../../Navbar/Navbar';

export const About1 = () => {
  return (
    <div className='AboutUs bg-cover bg-center min-h-screen overflow-hidden' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className='flex items-center justify-center text-center'>
        <h1 className='About1-h1 text-white text-4xl font-black font-lato py-9'>About Us</h1>
      </div>
      <div className='About1 grid grid-cols-2 xl:grid-cols-2 gap-4 '>
        <div className='whos flex flex-col items-start justify-start p-20 m-6 my-0 mr-0 pr-6 md:p-9'>
          <p className='whos-p1 text-white text-3xl font-black font-lato md:text-center'>Who we are:</p>
          <p className='whos-p2 text-white text-lg font-lato'>Welcome to AIRAI, where creativity meets innovation in the world of game design and
development. We create beyond the box immersive digital experiences. In the constantly
changing game industry, we are driven by our passion, innovation, and dedication to quality. We
are a group of creative minds with a simple yet ambitious goal: to redefine the gaming industry.
Our goal is to provide participants with truly memorable experiences.</p>
          <p className='whos-p1 text-white text-3xl font-black font-lato mt-6'>Our Mission:</p>
          <p className='whos-p2 text-white text-lg font-lato '>Our mission is to craft immersive experiences that transport users into captivating realms through games and digital 
          solutions. We strive for tech-driven excellence, embracing cutting-edge technology to remain at the forefront of the industry. Additionally, we are dedicated to client empowerment, 
          translating their visions into digital realities that exceed expectations.
           </p>
        </div>
        {/* <div className='flex items-center justify-center m-0 p-0 mb-6' style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}> */}
        <div className='About1-pic flex items-center justify-center m-0 p-0 mb-6 ' >

          <div className="About-square">
            <span></span>
            <span></span>
            <span></span>
            <img src={design} alt="Design" className='w-auto mt-7 ml-3 md:max-w-full md:h-auto relative z-10' />
          </div>
        </div>
      </div>
    </div>
  );
};
