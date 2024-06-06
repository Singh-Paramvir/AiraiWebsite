import React from 'react';
import './Sec6.css';
import bg from '../../../images/sec 6/bg.png';
import steps2 from '../../../images/sec 6/Group2.png';
import steps from '../../../images/sec 6/Group.png';
import suport from '../../../images/sec 6/support.png';
import launch from '../../../images/sec 6/launch.png';
import test from '../../../images/sec 6/testing.png';
import scope from '../../../images/sec 6/scope analysis.png';
import plan from '../../../images/sec 6/planning.png';
import functions from '../../../images/sec 6/functional.png';

const Sec6 = () => {
  return (
    <div className='Sec6-div bg-cover bg-center h-screen p-9 relative ' style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex items-center justify-center text-center lg:pt-6 pb-0'>
        <h1 className='Sec6-head text-white font-bold text-4xl text-center'>Our Work Process</h1>
      </div>
      <div className='steps-div2'>
        <img src={steps2} alt="" />
      </div>
      <div className='steps-div flex flex-col md:flex-row gap-4 relative'>
        <div className='flex-1 md:flex-shrink-0 md:w-1/4 p-6 flex flex-col items-center pt-1'>
          <div className='h-96 w-84'>
            <div className='pb-9 pr-9 pt-3'>
              <img src={suport} alt="" className='p-6 pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold pt-2'>Support & Maintenance</h1>
            </div>
            <div className='p-16 pt-12 pl-3 pr-56'>
              <img src={launch} alt="" className='p-6 pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold'>Deployment & Launch</h1>
            </div>
            <div className='pt-5  pr-10'>
              <img src={test} alt="" className='p-4 pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold'>Testing</h1>
            </div>
          </div>
        </div>

        {/* <div className='absolute flex-1 md:flex-shrink-0 md:w-5/6 p-0 mt-24  flex flex-col items-center'> */}
        <div className='absolute pt-12 bottom-1/2 left-1/2 transform -translate-x-1/2 object-cover top-1/4'>
          <img src={steps} alt="" className='work-pic ' />
        </div>
        <div className='flex-1 md:flex-shrink-0 md:w-1/4 p-6 pt-6 flex flex-col items-center'>
          <div className='h-96 w-84'>
            <div className='pb-9 pr-12 pt-3'>
              <img src={scope} alt="" className='p-3 pl-6pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold'>Scope Analysis</h1>
            </div>
            <div className='pt-12  pb-20 pl-48'>
              <img src={plan} alt="" className='p-6 pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold'>Discuss & Planning</h1>
            </div>
            <div className='pt-3 pl-12'>
              <img src={functions} alt="" className=' pt-0 pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold'>Functional Design</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec6;
