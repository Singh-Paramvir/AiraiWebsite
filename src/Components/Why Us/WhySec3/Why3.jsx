import React from 'react';
import './Why3.css';
import bg from '../../../images/why choose us/sec 2/bg.png';
import trusted from '../../../images/why choose us/sec 3/1.png';
import delivry from '../../../images/why choose us/sec 3/2.png';
import cost from '../../../images/why choose us/sec 3/3.png';

const Why3 = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat min-h-screen p-4 lg:pb-0' style={{backgroundImage:`url(${bg})`}}>
      <div className='flex items-center justify-center lg:p-12 px-12 pt-3'>
        <h1 className='text-white text-4xl font-black font-lato text-center'>Here's What You Get:</h1>
      </div>
      <div className='get-div flex flex-col md:flex-row justify-center items-center mx-3'>
        <div className='Get-Box flex flex-col items-center justify-center lg:m-12 m-3 w-full md:w-auto'>
          <div className="Card flex items-center justify-center w-full">
            <img src={trusted} alt="Trusted Team" className='' />
          </div>
          <h1 className='text-white text-2xl font-extrabold font-barlow m-2 text-center p-3'>Trusted Team</h1>
          <p className='text-white text-center font-lato text-lg h-40'>
            Our team consists of experienced developers, designers, and strategists who bring a wealth of knowledge and expertise to the table.
          </p>
        </div>
        <div className='Get-Box flex flex-col items-center justify-center lg:m-12 m-3 w-full md:w-auto'>
          <div className="Card flex items-center justify-center w-full">
            <img src={delivry} alt="Precise Deliveries" className='' />
          </div>
          <h1 className='text-white text-2xl font-extrabold font-barlow m-2 text-center p-3'>Precise Deliveries</h1>
          <p className='text-white text-center text-lg font-lato h-40'>
            Reliable and prompt project completion, meeting deadlines without compromising quality.
          </p>
        </div>
        <div className='Get-Box flex flex-col items-center justify-center lg:m-12 m-3 w-full md:w-auto'>
          <div className="Card flex items-center justify-center w-full">
            <img src={cost} alt="Cost-Effective Pricing" className='' />
          </div>
          <h1 className='text-white text-2xl font-extrabold font-barlow lg:m-2  text-center p-3'>Cost-Effective Pricing</h1>
          <p className='text-white text-center text-lg font-lato h-40'>
            Unlocking value without compromising quality, our cost-effective pricing ensures affordability without sacrificing excellence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Why3;
