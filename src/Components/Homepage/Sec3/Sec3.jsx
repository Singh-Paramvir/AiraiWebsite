import React from 'react';
import '../Sec3/Sec3.css';
import bg from '../../../images/sec 3/bg.png';
import Slider from "react-slick";
import bulb from '../../../images/sec 3/bulb1.png';
import puzzle from '../../../images/sec 3/puzzle 2.png';
import modeling from '../../../images/sec 3/3d-modeling 2.png';
import blockchain from '../../../images/sec 3/blockchain2.png';
import web from '../../../images/sec 3/web2.png';
import app from '../../../images/sec 3/icons8.png';

const Sec3 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          dots: false,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ],
    arrows: false,
  };

  return (
    <div className='Sec3 bg-cover bg-center h-screen lg:p-6' style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex items-center justify-center text-center '>
      <h1 className='text-white text-4xl font-black font-lato lg:py-6 py-3 text-center' >Our Expertise</h1>
      </div>
      <div className='slider-div flex justify-center items-center lg:m-2 lg:pl-12 mb-0 md:mx-10 '>
        <div className='w-full lg:p-4 rounded-lg '>
          <Slider {...settings} className="slider">
            <div>
              <div className='slide-divs draw meet '>
                <div className="Card flex items-center justify-center w-full h-28">
                  <img src={bulb} alt="Bulb" className='h-24' />
                </div>
                <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-6 pb-2 slide-h1 px-6'>User Experience and Interface Design</h1>
                <p className='text-white text-center text-lg lg:px-9 lg:pb-12 slide-p px-3 pb-3'>
                  Having a user-friendly design is extremely important for any mobile game. We ensure to leverage the latest
                  designing methodologies to design a captivating user interface.
                </p>
              </div>
            </div>
            <div>
              <div className='slide-divs draw meet'>
                <div className="Card flex items-center justify-center w-full h-28">
                  <img src={puzzle} alt="Puzzle" className='mx-auto' />
                </div>
                <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-6 pb-2 slide-h1 px-6'>Game Design & Development</h1>
                <p className='text-white text-center text-lg lg:px-10 lg:pb-12 slide-p px-3 pb-3'>
                Create engaging gaming experiences for your audience.Our game
production service combines technology with creativity to create visually appealing
and captivating games for a variety of platforms.                </p>
              </div>
            </div>
            <div>
              <div className='slide-divs draw meet'>
                <div className="Card flex items-center justify-center w-full h-28">
                  <img src={modeling} alt="Modeling" className='' />
                </div>
                <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-6 pb-2 slide-h1 px-6'>3D <br />Modelling</h1>
                <p className='text-white text-center text-lg lg:px-10 lg:pb-12 slide-p px-3 pb-3'>
                With the help of our expert modeling services, transport your audience to
stunning 3D landscapes. We carefully create 3D models of things, people, and places to
give your creative ideas depth and reality.                </p>
              </div>
            </div>
            <div>
              <div className='slide-divs draw meet'>
                <div className="Card flex items-center justify-center w-full h-28">
                  <img src={blockchain} alt="Blockchain" className='' />
                </div>
                <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-6 pb-2 slide-h1 px-6'>Blockchain <br />Services</h1>
                <p className='text-white text-center text-lg lg:px-10 lg:pb-12 slide-p px-3 pb-3'>
                Embrace the future with our blockchain development services. We use blockchain to enhance security, 
                transparency, and efficiency in your projects with decentralized apps and smart contracts.  </p>
              </div>
            </div>
            <div>
              <div className='slide-divs draw meet'>
                <div className="Card flex items-center justify-center w-full h-28">
                  <img src={web} alt="Web Design" className='' />
                </div>
                <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-6 pb-2 slide-h1 px-6'>Web Design & Development</h1>
                <p className='text-white text-center text-lg lg:px-10 lg:pb-12 slide-p px-3 pb-3'>
                Boost your online visibility with our expert web development services. From responsive and sleek designs
                 to robust backends, we create websites that look stunning and perform seamlessly.   </p>
              </div>
            </div>
            <div>
              <div className='slide-divs draw meet sm:w-84'>
                <div className="Card flex items-center justify-center w-full h-28 ">
                  <img src={app} alt="App Design" className='' />
                </div>
                <div>
                  <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-6 pb-2 slide-h1 px-6'>Android App Design & Development</h1>
                  <p className='text-white text-center text-lg lg:px-9  lg:pb-12 lg:mb-2 slide-p px-3 pb-6'>
                  Transform your ideas into effective mobile applications. Our team
of experienced and skilled developers specializes in developing innovative and user-friendly
mobile apps for both Android and iOS platforms.                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Sec3;
