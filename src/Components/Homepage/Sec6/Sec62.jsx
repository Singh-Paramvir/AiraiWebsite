import React from 'react'
import './Sec6.css';
import bg from '../../../images/sec 7/bg.png';
import steps from '../../../images/sec 6/Group.png';
import suport from '../../../images/sec 6/support.png';
import launch from '../../../images/sec 6/launch.png';
import test from '../../../images/sec 6/testing.png';
import scope from '../../../images/sec 6/scope analysis.png';
import plan from '../../../images/sec 6/planning.png';
import functions from '../../../images/sec 6/functional.png';
const Sec62 = () => {
  return (
    <div className='bg-cover bg-center h-screen p-6  ' style={{ backgroundImage: `url(${bg})` }}>
       <div className='flex items-center justify-center text-center p-12 '>
        <h1 className='text-white font-bold text-4xl'>Our Work Process</h1>
      </div>
     <div className='step-divs relative'>
     <img src={steps} alt="" className='step-pic'/>
     <div className='step-1'>
              <img src={suport} alt="" className='p-0 pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold pt-2'>Support & Maintenance</h1>
            </div>
            <div className='step-2'>
              <img src={launch} alt="" className='p-6 pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold pt-2'>Deployment & Launch</h1>
            </div>
            <div className='step-3'>
              <img src={test} alt="" className='p-6 pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold pt-2'>Testing</h1>
            </div>
      
      <div className='step-4'>
              <img src={scope} alt="" className='p-6 pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold pt-2'>Scope Analysis</h1>
            </div>
            <div className='step-5'>
              <img src={plan} alt="" className='p-6 pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold pt-2'>Scope Analysis</h1>
            </div>
            <div className='step-6'>
              <img src={functions} alt="" className='p-6 pb-2 mx-auto' />
              <h1 className='text-white text-xl text-center font-bold pt-2'>Scope Analysis</h1>
            </div>
   
            </div>
    </div>
  )
}

export default Sec62