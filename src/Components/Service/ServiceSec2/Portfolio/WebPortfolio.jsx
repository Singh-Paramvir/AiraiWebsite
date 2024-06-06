import React, { useEffect, useState } from 'react';
import './WebPortfolio.css';
import AOS from "aos";
import "aos/dist/aos.css";
import leftArrow from '../../../../images/Service/sec2/Web-designs/arrow/arrowleft.png';
import RghtArrow from '../../../../images/Service/sec2/Web-designs/arrow/arrowright.png';

const WebPortfolio = () => {
  const ImageCarousel = ({ data, title }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 960);

    useEffect(() => {
      const intervalId = setInterval(() => {
        plusSlides(1);
      }, 5000);

      return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 1250);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    function plusSlides(n) {
      setSlideIndex((prevIndex) => {
        const newIndex = (prevIndex + n) % data.length;
        return newIndex < 0 ? data.length - 1 : newIndex;
      });
    }

    useEffect(() => {
      showSlides(slideIndex);
    }, [slideIndex]);

    function showSlides(n) {
      const slides = document.querySelectorAll(`.${title}-ImgSlide`);
      slides.forEach((slide, index) => {
        slide.style.display = index === n ? 'block' : 'none';
      });
    }

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });

      return () => {
        AOS.refresh();
      };
    }, []);

    return (
      <section className="images_Carousel">
        <div className="ImgSlider-container">
        <button className="Leftarrow-btn" onClick={() => plusSlides(-1)}>
            <img src={leftArrow} alt="" />
          </button>
          <button className="Rightarrow-btn" onClick={() => plusSlides(1)}>
          <img src={RghtArrow} alt="" />
          </button>

          {data.map((slide, index) => (
            <div
              key={index}
              className={`ImgSlide fade ${title}-ImgSlide`}
              style={{ display: slideIndex === index ? 'block' : 'none' }}
            >
              {isSmallScreen ? (
                <img className="SingleImg" src={slide.singleImage} alt={`ImgSlide_pic_${index}`} />
              ) : (
                <>
                  <img className="BgImg-image" src={slide.image} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />
                  {slide.image1 && <img className="ImgSlide-image1" src={slide.image1} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image2 && <img className="ImgSlide-image2" src={slide.image2} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image3 && <img className="ImgSlide-image3" src={slide.image3} alt={`ImgSlide_pic_${index}`} data-aos="fade-down" />}
                  {slide.image4 && <img className="ImgSlide-image4" src={slide.image4} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image5 && <img className="ImgSlide-image5" src={slide.image5} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image6 && <img className="ImgSlide-image6" src={slide.image6} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image7 && <img className="ImgSlide-image7" src={slide.image7} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                </>
              )}
              <div className={`ImgSlide-content ${slide.contentClass || ''}`}>
                <h3 className={`ImgSlide-title ${slide.titleClass || ''}`} dangerouslySetInnerHTML={{ __html: slide.title }} />
                {slide.description && <p className={`ImgSlide-desc ${slide.descClass || ''}`}>{slide.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const webData = [
    {
      title: 'CRAFTING <br>YOUR DIGITAL VISION',
      description: 'Unique Websites for your Unique Needs',
      image: require('../../../../images/Service/sec2/Web-designs/web 1/bg.png'),
      image1: require('../../../../images/Service/sec2/Web-designs/web 1/1.png'),
      image2: require('../../../../images/Service/sec2/Web-designs/web 1/2.png'),
      singleImage: require('../../../../images/Service/sec2/Web-designs/web 1/ref.png'),
      titleClass: 'ImgSlide1-title',
      descClass: 'ImgSlide1-desc',
      contentClass: 'ImgSlide1-content',
    },
    {
      title: 'Design and Develop Websites',
      image: require('../../../../images/Service/sec2/Web-designs/web 2/bg 2.png'),
      image3: require('../../../../images/Service/sec2/Web-designs/web 2/1.png'),
      image4: require('../../../../images/Service/sec2/Web-designs/web 2/2.png'),
      image5: require('../../../../images/Service/sec2/Web-designs/web 2/3.png'),
      singleImage: require('../../../../images/Service/sec2/Web-designs/web 2/ref.png'),
      titleClass: 'ImgSlide2-title',
      descClass: 'ImgSlide-desc',
      contentClass: 'ImgSlide2-content',
    },
    {
      title: 'GROW <br>YOUR BUSINESS WITH US',
      image: require('../../../../images/Service/sec2/Web-designs/web 3/bg.png'),
      image6: require('../../../../images/Service/sec2/Web-designs/web 3/1.png'),
      image7: require('../../../../images/Service/sec2/Web-designs/web 3/2.png'),
      singleImage: require('../../../../images/Service/sec2/Web-designs/web 3/ref.png'),
      titleClass: 'ImgSlide3-title',
      contentClass: 'ImgSlide3-content',
    },
  ];

  return (
    <div className='Portfolio'>
      <ImageCarousel data={webData} title="Web" />
    </div>
  );
};

export default WebPortfolio;
