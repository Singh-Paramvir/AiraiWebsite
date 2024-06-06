import React from 'react';
import './Service1.css';
import bg from '../../../images/Service/sec 1/bg.png';
import design from '../../../images/Service/sec 1/design_.png';
import bg2 from '../../../images/Service/sec 1/shape_.png';
import Navbar from '../../Navbar/Navbar';

export const Service1 = () => {
  return (
    <div className='bg-cover bg-center min-h-screen overflow-hidden' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className='flex items-center justify-center text-center'>
        <h1 className='text-white text-4xl font-black font-lato py-6 text-center'>Our Services</h1>
      </div>
      <div className='Service1-data grid grid-cols-1 xl:grid-cols-2 gap-4'>
        <div className='service-content flex flex-col items-start justify-start p-20 m-6 my-0 mr-0 pr-6'>
          <p className='service-p text-white text-lg font-lato '>We provide a comprehensive suite of digital services to meet 
            all your creative and technical needs. Our <span>game design</span> and <span>development</span> team brings your gaming visions to life, creating 
            immersive and engaging experiences across multiple platforms.Our <span>web design and development services</span> ensure your 
            online presence is both stunning and functional, with responsive designs that work seamlessly on any device. 
            We offer robust <span>frontend and backend solutions,</span> creating scalable and secure web applications. Our <span>UI/UX services </span>
            focus on designing intuitive and engaging user interfaces that enhance user satisfaction. Additionally, our graphic design 
            services tell your brand's story through compelling visuals. Finally, our <span>blockchain services</span> provide secure, decentralized 
            solutions for the modern digital landscape. Whether you're a startup or an established business, our diverse 
            offerings are designed to help you succeed.</p>
        </div>
        <div className='Service-pic flex items-center justify-center m-0 p-9 mb-6 pb-16 pl-6 md:w-auto h-auto ' >
          <div className="About-square">
            <span></span>
            <span></span>
            <span></span>
            <img src={design} alt="Design" className='w-auto mt-4 ml-3 md:max-w-full md:w-auto h-auto Serv-pics relative z-10' />
          </div>
        </div>
      </div>
    </div>
  );
};
