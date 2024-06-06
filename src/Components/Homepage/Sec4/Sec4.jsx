import React from 'react';
import '../Sec4/Sec4.css';
import bg from '../../../images/sec 4/bg.png';
import circle1 from '../../../images/sec 4/1.png';
import circle2 from '../../../images/sec 4/2.png';
import circle3 from '../../../images/sec 4/3.png';
import circle4 from '../../../images/sec 4/4.png';
import circle5 from '../../../images/sec 4/5.png';
const Sec4 = () => {


  return (
    <div className='bg-cover bg-center min-h-screen p-6' style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex items-center justify-center text-center'>
        <h1 className='text-white font-bold text-4xl lg:m-12 m-6 text-center'>Growing Exponentially</h1>
      </div>
      <div className='Sec4-content h-auto grid grid-cols-5 justify-center items-center m-12 md:ml-30 mr-28 sm:m-9 ml-48 mr-28'>
        <div className='Circle1 w-full py-20 rounded-lg bg-contain bg-no-repeat bg-center z-0 ' style={{backgroundImage: `url(${circle1})`}}>
          <h1 className='head1 text-4xl py-2 text-center font-black font-barlow text-[#0B0933] sm: text-1xl py-1'>50%</h1>
          <h1 className='head-P1 text-[#0B0933] text-xl font-extrabold font-barlow  text-center sm:py-2'>Team of <br/>Experts</h1>
        </div>
        <div className='Circle2 py-20 rounded-lg bg-contain bg-no-repeat bg-center -ml-24 z-10 sm: -ml-12' style={{backgroundImage: `url(${circle2})`}}>
          <h1 className='head2 text-[#0B0933] text-6xl py-6 font-black font-barlow text-center font-extrabold'>98%</h1>
          <h1 className='head-P2 text-[#0B0933] text-2xl font-extrabold font-barlow text-center'>On - Time <br/>Delivery</h1>
        </div>
        <div className='Circle3 pl-16 pr-20 py-20 rounded-lg bg-contain bg-no-repeat bg-center -ml-20 -mr-4 z-20 sm: -ml-16' style={{backgroundImage: `url(${circle3})`}}>
         <h1 className='head3 text-[#0B0933] text-8xl text-center font-black sm:mt-0 mb-8 font-900 font-barlow'>500+</h1>
          <h1 className='head-P3 text-[#0B0933] lg:text-4xl font-extrabold font-barlow text-center z-200 lg:my-12 sm:my-9  text-8xl'>Happy Clients</h1>
        </div>
        <div className='Circle4 py-20 rounded-lg bg-contain bg-no-repeat bg-center lg:-ml-24 z-10 ' style={{backgroundImage: `url(${circle4})`}}>
        <h1 className='head4 text-[#0B0933] text-6xl py-6 font-black font-barlow text-center font-extrabold'>300+</h1>
          <h1 className='head-P4 text-[#0B0933] text-2xl font-extrabold font-barlow text-center'>Products <br/>Delivered</h1>
        </div>
        <div className=' Circle5 w-full py-20 rounded-lg bg-contain bg-no-repeat bg-center  -ml-20 z-0 sm: -ml-12' style={{backgroundImage: `url(${circle5})`}}>
          <h1 className='head5 text-[#0B0933] text-4xl py-2 text-center font-extrabold font-barlow'>90%</h1>
          <h1 className='head-P5 text-[#0B0933] text-xl font-extrabold  font-barlow  text-center '>Customer <br/>Retention Rate</h1>
        </div>
      </div>
    </div>
  );
}

export default Sec4;