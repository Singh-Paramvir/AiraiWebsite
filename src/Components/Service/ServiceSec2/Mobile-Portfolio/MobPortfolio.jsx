import React, { useEffect, useState } from 'react';
import './MobPortfolio.css';
import AOS from "aos";
import "aos/dist/aos.css";
import leftArrow from '../../../../images/Service/sec2/Web-designs/arrow/arrowleft.png';
import RghtArrow from '../../../../images/Service/sec2/Web-designs/arrow/arrowright.png';

const MobPortfolio = () => {
  const ImageCarousel = ({ data, title }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1250);

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
        duration: 1200,
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
                  <img className="BgImg-imageMob" src={slide.image} alt={`ImgSlide_pic_${index}`} />
                  {slide.image1 && <img className="ImgSlide-imagemob1" src={slide.image1} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image2 && <img className="ImgSlide-imagemob2" src={slide.image2} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image3 && <img className="ImgSlide-imagemob3" src={slide.image3} alt={`ImgSlide_pic_${index}`} data-aos="fade-down" />}
                  {slide.image4 && <img className="ImgSlide-imagemob4" src={slide.image4} alt={`ImgSlide_pic_${index}`} data-aos="fade-right" />}
                  {slide.image5 && <img className="ImgSlide-imagemob5" src={slide.image5} alt={`ImgSlide_pic_${index}`} data-aos="fade-right" />}
                  {slide.image6 && <img className="ImgSlide-imagemob6" src={slide.image6} alt={`ImgSlide_pic_${index}`} data-aos="fade-down" />}
                  {slide.image7 && <img className="ImgSlide-imagemob7" src={slide.image7} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image8 && <img className="ImgSlide-imagemob8" src={slide.image8} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image9 && <img className="ImgSlide-imagemob9" src={slide.image9} alt={`ImgSlide_pic_${index}`} data-aos="fade-down" />}
                  {slide.image10 && <img className="ImgSlide-imagemob10" src={slide.image10} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image11 && <img className="ImgSlide-imagemob11" src={slide.image11} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image12 && <img className="ImgSlide-imagemob12" src={slide.image12} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image13 && <img className="ImgSlide-imagemob13" src={slide.image13} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image14 && <img className="ImgSlide-imagemob14" src={slide.image14} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                </>
              )}
              <div className={`ImgSlideMob-content ${slide.contentClass || ''}`}>
                <h3 className={`ImgSlideMob-title ${slide.titleClass || ''}`} dangerouslySetInnerHTML={{ __html: slide.title }} />
                {slide.description && <p className={`ImgSlideMob-desc ${slide.descClass || ''}`}>{slide.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const MobData = [
    {
      title: 'MOBILE APP DESIGN & DEVELOPMENT',
      image: require('../../../../images/Service/sec2/Web-designs/app1/bg.png'),
      image1: require('../../../../images/Service/sec2/Web-designs/app1/1.png'),
      image2: require('../../../../images/Service/sec2/Web-designs/app1/2.png'),
      image3: require('../../../../images/Service/sec2/Web-designs/app1/3.png'),
      image4: require('../../../../images/Service/sec2/Web-designs/app1/4.png'),
      image5: require('../../../../images/Service/sec2/Web-designs/app1/5.png'),
      singleImage: require('../../../../images/Service/sec2/Web-designs/app1/ref2.png'),
      titleClass: 'ImgSlideMob-title',
      descClass: 'ImgSlideMob-desc',
      contentClass: 'ImgSlideMob-content',
    },
    {
      title: 'WE <br> <span>DESIGN </span><br>WE <br> <span>DEVELOP</span> <br>MOBILE APPS',
      image: require('../../../../images/Service/sec2/Web-designs/app2/BG.png'),
      image6: require('../../../../images/Service/sec2/Web-designs/app2/1.png'),
      image7: require('../../../../images/Service/sec2/Web-designs/app2/2.png'),
      image8: require('../../../../images/Service/sec2/Web-designs/app2/3.png'),
      singleImage: require('../../../../images/Service/sec2/Web-designs/app2/ref.png'),
      titleClass: 'ImgSlideMob2-title',
      descClass: 'ImgSlideMob2-desc',
      contentClass: 'ImgSlideMob2-content',
    },
    {
      image: require('../../../../images/Service/sec2/Web-designs/app3/bg_.png'),
      image9: require('../../../../images/Service/sec2/Web-designs/app3/Phone_01.png'),
      image10: require('../../../../images/Service/sec2/Web-designs/app3/Phone_02.png'),
      image11: require('../../../../images/Service/sec2/Web-designs/app3/Phone_03.png'),
      image12: require('../../../../images/Service/sec2/Web-designs/app3/Phone_04.png'),
      image13: require('../../../../images/Service/sec2/Web-designs/app3/Phone_05.png'),
      image14: require('../../../../images/Service/sec2/Web-designs/app3/Phone_06.png'),
      singleImage: require('../../../../images/Service/sec2/Web-designs/app3/ref.png'),
      titleClass: 'ImgSlideMob3-title',
      descClass: 'ImgSlideMob3-desc',
      contentClass: 'ImgSlideMob3-content',
    },
  ];

  return (
    <div className='Portfolio'>
      <ImageCarousel data={MobData} title="Mobile" />
    </div>
  );
};

export default MobPortfolio;
