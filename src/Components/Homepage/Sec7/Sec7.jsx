import React from 'react';
import bg from '../../../images/sec 7/bg.png';
import character from '../../../images/sec 7/character.png';
import './Sec7.css';
const Sec7 = () => {
  return (
    <div className='Sec-7 bg-cover bg-center min-h-screen lg:p-6 pb-0 relative ' style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex items-center justify-center text-center'>
        <h1 className='Sec7-head text-white text-4xl m-12 mb-6 capitalize font-black font-lato text-center'>Why Choose  us?</h1>
      </div>
     
      <div className='Sec7-content grid grid-cols-1 md:grid-cols-2 gap-0'>
        <div className='Content1 flex items-center justify-center lg:p-20 pt-0'>
          <div className='h-96 ml-3 lg:m-0 '>
            <h1 className='Cont1-h text-white text-2xl pb-3 font-black font-lato'>Comprehensive Services</h1>
            <p className='Cont1-p lg:mr-32 mr-24 text-white text-lg font-500 font-lato leading-6'>
            We offer a wide range of services, from web and app development to game development. This comprehensive approach 
            allows us to be your one-stop solution, streamlining 
            your experience and providing consistent quality across all projects.
            </p>
            <h1 className=' Cont1-h text-white text-2xl font-black font-lato mt-6 pb-3'>Customer-Centric Approach</h1>
            <p className=' Cont1-p lg:mr-32 mr-24 text-white text-lg font-500 font-lato leading-6'>
            your satisfaction is our top priority. We listen to your needs, collaborate closely, and keep you informed 
            every step of the way. Our goal is to exceed your expectations, 
            building lasting relationships and delivering value with every interaction.
            </p>
          </div>
        </div>
        <img src={character} alt="" className='Char-pic absolute bottom-0 left-1/2 transform -translate-x-1/2 object-contain  sm:text-left' />
        <div className='Sec7-content2 flex  p-20 pb-0 h-auto absolute bottom-10 left-1/2 transform translate-x-0 text-right '>
          <div className='Content2 h-96 mr-16 '>
            <h1 className=' Cont2-h text-white text-2xl font-black font-lato pb-3 md:text-xl'>Innovative Solutions</h1>
            <p className='Cont2-p text-white text-lg lg:ml-24 font-500 font-lato leading-6'>
            we excel at turning ideas into powerful web solutions for brand growth. We lead the charge in technology
             and industry trends, always innovating to deliver cutting-edge solutions. Our dedication to creativity and innovation 
             ensures you receive advanced, effective products and services.
            </p>
            <h1 className='  Cont2-h text-white text-2xl font-black font-lato mt-6 pb-3 '>Proven Results, Reliability and Trust</h1>
            <p className='Cont2-p m-0  mb-0 lg:ml-28 text-white text-lg font-500 font-lato leading-6 ' >
            Trust in us for proven results, reliability, and professionalism. We ensure timely delivery, open communication, and high-quality
             standards, earning your trust every step of the way.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec7;
