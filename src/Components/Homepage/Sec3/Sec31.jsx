import React from 'react';
import bg from '../../../images/sec 3/bg.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bulb from '../../../images/sec 3/bulb1.png';
import puzzle from '../../../images/sec 3/puzzle 2.png';
import modeling from '../../../images/sec 3/3d-modeling 2.png';
import blockchain from '../../../images/sec 3/blockchain2.png';
import web from '../../../images/sec 3/web2.png';
import app from '../../../images/sec 3/android2.png'; 
const Sec31 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '20px', // space between slides
  };

  const slides = [
    {
      img: bulb,
      title: 'Slide 1',
      description: 'This is the description for slide 1',
    },
    {
      img: puzzle,
      title: 'Slide 2',
      description: 'This is the description for slide 2',
    },
    {
      img: modeling,
      title: 'Slide 3',
      description: 'This is the description for slide 3',
    },
    {
      img: blockchain,
      title: 'Slide 4',
      description: 'This is the description for slide 4',
    },
    {
      img: web,
      title: 'Slide 5',
      description: 'This is the description for slide 5',
    },
  ];

  return (
    <div className='bg-cover bg-center min-h-screen ' style={{ backgroundImage: `url(${bg})` }}>
      <h2> Simple Slider </h2>
      <Slider {...settings} className='p-24'>
        {slides.map((slide, index) => (
          <div className='mx-4'>
          <div key={index} style={{ padding: '0 10px' }} className='border-2 h-96 w-48'>
            <img src={slide.img} alt={slide.title}  className='w-auto h-auto'/>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sec31;
