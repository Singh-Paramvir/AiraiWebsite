import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from '../../../images/sec 5/bg.png';
import pic1 from '../../../images/sec 5/Artboard 1.png';
import pic2 from '../../../images/sec 5/Artboard 2.png';
import pic3 from '../../../images/sec 5/Artboard 3.png';
import './Sec5.css';

const CustomDots = ({ dots }) => {
  const visibleDots = dots.slice(0, 2); // Show only the first 2 dots

  return (
    <ul style={{ display: 'flex', justifyContent: 'center' }}>
      {visibleDots.map((dot, index) => (
        <li key={index} style={{ margin: '0 5px' }}>
          {dot.props.children}
        </li>
      ))}
    </ul>
  );
};

const Sec5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ],
    arrows: false,
    appendDots: dots => <CustomDots dots={dots} />,
    customPaging: i => (
      <button
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
          border: "none"
        }}
      ></button>
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const getSlideClass = (index) => {
    const totalSlides = 6; // Total number of slides
    const adjustedIndex = index % totalSlides;
    const centerIndex = (currentIndex % totalSlides) + 1;

    if (window.innerWidth <= 1024) {
      // Small screen size, no rotations
      return '';
    }

    if (adjustedIndex === centerIndex - 1) return 'center';
    if (adjustedIndex === (centerIndex + 1) % totalSlides) return 'rotate-left';
    if (adjustedIndex === (centerIndex + 2) % totalSlides) return 'rotate-right';
    return '';
  };

  return (
    <div className='bg-cover bg-center max-h-screen p-6' style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex items-center justify-center text-center'>
        <h1 className='text-white font-bold text-4xl m-6 text-center'>Our Work</h1>
      </div>
      <div className='Img-container'>
        <div className='Image-div h-full flex justify-center items-center lg:m-2 '>
          <div className='w-full py-9 '>
            <Slider {...settings2}>
              {[pic1, pic2, pic3, pic1, pic2, pic3].map((pic, index) => (
                <div key={index} className={`img-slider w-full h-full 
                flex flex-col items-center justify-center ${getSlideClass(index)}`}>
                  <img src={pic} alt={`Pic ${index + 1}`} className='work-imgs'/>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec5;
