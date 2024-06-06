import React from 'react';
import './Why2.css';
import bg from '../../../images/why choose us/sec 2/bg.png';
import expertise from '../../../images/why choose us/sec 2/experience2.png';
import Compre from '../../../images/why choose us/sec 2/comprehensive2.png';
import Centric from '../../../images/why choose us/sec 2/centric2.png';

const Why2 = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat min-h-screen' style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex items-center justify-center p-8 md:p-16 pb-8 md:pb-12'>
        <h1 className='text-white text-4xl font-black font-lato text-center '>Why work with us?</h1>
      </div>
      <div className='Why2 flex flex-col md:flex-row justify-center items-center mx-4 md:mx-9'>

        <div className='Box1 flex flex-col items-center justify-center border-2 pb-5 m-4 md:m-9 mt-6 h-auto md:h-full w-full md:w-84 works ways'>
          <div className="approch flex items-center justify-center w-full">
            <img 
              src={expertise} 
              alt="Experience and Expertise" 
              className='mx-auto mb-6 mt-12 expertise'
            />
          </div>
          <h1 className='text-white text-2xl font-bold font-barlow mb-2 text-center px-6 pt-3 h-24'>Experience and Expertise</h1>
          <p className='text-white text-center text-lg font-lato px-6 py-3 h-40'>
            Our team, with years of industry experience, ensures top-quality results and innovative solutions for every project.
          </p>
        </div>

        <div className='Box1 flex flex-col items-center justify-center border-2 pb-5 m-4 md:m-9 md:mx-12 mt-6 h-auto md:h-auto w-full md:w-84 works ways '>
          <div className="approch flex items-center justify-center w-full">
            <img 
              src={Compre} 
              alt="Comprehensive Services" 
              className='mx-auto mb-6 mt-12 compre'
            />
          </div>
          <h1 className='text-white text-2xl font-bold font-barlow mb-2 text-center px-12 pt-3 h-24'>Comprehensive Services</h1>
          <p className='text-white text-center text-lg font-lato px-6 lg:py-3 lg:h-40 '>
            We provide end-to-end solutions, including game design, 3D modeling, app developing, UI/UX, web development, and blockchain services.
          </p>
        </div>

        <div className='Box1 flex flex-col items-center justify-center border-2 pb-5 m-4 md:m-9 mt-6 h-auto md:h-lg w-full works ways'>
          <div className="approch flex items-center justify-center w-full">
            <img 
              src={Centric} 
              alt="Customer-Centric Approach" 
              className='mx-auto mb-6 mt-12 centric'
            />
          </div>
          <h1 className='text-white text-2xl font-bold font-barlow mb-2 text-center px-12 pt-3 h-24'>Customer-Centric Approach</h1>
          <p className='text-white text-center text-lg font-lato px-6 py-3 h-40'>
            We prioritize your satisfaction through close collaboration, transparent communication, and personalized solutions tailored to your specific needs.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Why2;
