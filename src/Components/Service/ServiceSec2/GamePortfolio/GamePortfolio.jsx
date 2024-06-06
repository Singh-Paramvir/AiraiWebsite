import React, { useEffect, useState } from 'react';
import './GamePortfolio.css';
import AOS from "aos";
import "aos/dist/aos.css";
import leftArrow from '../../../../images/Service/sec2/Web-designs/arrow/arrowleft.png';
import RghtArrow from '../../../../images/Service/sec2/Web-designs/arrow/arrowright.png';

const GamePortfolio = () => {
  const ImageCarousel = ({ data, title }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1250);
    const totalSlides = data.length;

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
        let newIndex = prevIndex + n;
        if (newIndex >= totalSlides) {
          newIndex = 0;
        } else if (newIndex < 0) {
          newIndex = totalSlides - 1;
        }
        return newIndex;
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
            <div key={index} className={`ImgSlide fade ${title}-ImgSlide`} style={{ display: slideIndex === index ? 'block' : 'none' }}>
              {isSmallScreen ? (
                <img className="SingleImg" src={slide.singleImage} alt={`ImgSlide_pic_${index}`} />
              ) : (
                <>
                  <img className="BgImg-imageGame" src={slide.image} alt={`ImgSlide_pic_${index}`} />
                  {slide.image1 && <img className="ImgSlide-imageGame1" src={slide.image1} alt={`ImgSlide_pic_${index}`} />}
                  {slide.image2 && <img className="ImgSlide-imageGame2" src={slide.image2} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image3 && <img className="ImgSlide-imageGame3" src={slide.image3} alt={`ImgSlide_pic_${index}`} data-aos="fade-down" />}
                  {slide.image4 && <img className="ImgSlide-imageGame4" src={slide.image4} alt={`ImgSlide_pic_${index}`} data-aos="fade-right" />}
                  {slide.image5 && <img className="ImgSlide-imageGame5" src={slide.image5} alt={`ImgSlide_pic_${index}`} data-aos="fade-right" />}
                  {slide.image6 && <img className="ImgSlide-imageGame6" src={slide.image6} alt={`ImgSlide_pic_${index}`} data-aos="fade-right" />}
                  {slide.image7 && <img className="ImgSlide-imageGame7" src={slide.image7} alt={`ImgSlide_pic_${index}`} data-aos="fade-right" />}
                  {slide.image8 && <img className="ImgSlide-imageGame8" src={slide.image8} alt={`ImgSlide_pic_${index}`} data-aos="fade-down" />}
                  {slide.image9 && <img className="ImgSlide-imageGame9" src={slide.image9} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image10 && <img className="ImgSlide-imageGame10" src={slide.image10} alt={`ImgSlide_pic_${index}`} data-aos="fade-right" />}
                  {slide.image11 && <img className="ImgSlide-imageGame11" src={slide.image11} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image12 && <img className="ImgSlide-imageGame12" src={slide.image12} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image13 && <img className="ImgSlide-imageGame13" src={slide.image13} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image14 && <img className="ImgSlide-imageGame14" src={slide.image14} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image15 && <img className="ImgSlide-imageGame15" src={slide.image15} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image16 && <img className="ImgSlide-imageGame16" src={slide.image16} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image17 && <img className="ImgSlide-imageGame17" src={slide.image17} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image18 && <img className="ImgSlide-imageGame18" src={slide.image18} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
                  {slide.image19 && <img className="ImgSlide-imageGame19" src={slide.image19} alt={`ImgSlide_pic_${index}`} data-aos="fade-left" />}
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

  const GameData = [
    {
      // title: 'MOBILE APP DESIGN & DEVELOPMENT',
      // description: 'Unique Websites for your Unique Needs',
      image: require('../../../../images/Service/sec2/Web-designs/game1/bg.png'),
      image1: require('../../../../images/Service/sec2/Web-designs/game1/logo_.png'),
      image2: require('../../../../images/Service/sec2/Web-designs/game1/1.png'),
      image3: require('../../../../images/Service/sec2/Web-designs/game1/2.png'),
      image4: require('../../../../images/Service/sec2/Web-designs/game1/3.png'),
      image5: require('../../../../images/Service/sec2/Web-designs/game1/4.png'),
      image6: require('../../../../images/Service/sec2/Web-designs/game1/5.png'),
      image7: require('../../../../images/Service/sec2/Web-designs/game1/6.png'),
      singleImage: require('../../../../images/Service/sec2/Web-designs/game1/ref.png'),
    },
    {
      image: require('../../../../images/Service/sec2/Web-designs/game3/bg.png'),
      image8: require('../../../../images/Service/sec2/Web-designs/game3/1.png'),
      image9: require('../../../../images/Service/sec2/Web-designs/game3/2.png'),
      image10: require('../../../../images/Service/sec2/Web-designs/game3/3.png'),
      image11: require('../../../../images/Service/sec2/Web-designs/game3/4.png'),
      singleImage: require('../../../../images/Service/sec2/Web-designs/game3/ref.png'),
    },
    {
      image: require('../../../../images/Service/sec2/Web-designs/game2/bg.png'),
      image12: require('../../../../images/Service/sec2/Web-designs/game2/logo_.png'),
      image13: require('../../../../images/Service/sec2/Web-designs/game2/screen1.png'),
      image14: require('../../../../images/Service/sec2/Web-designs/game2/screen2.png'),
      image15: require('../../../../images/Service/sec2/Web-designs/game2/screen3.png'),
      image16: require('../../../../images/Service/sec2/Web-designs/game2/screen4.png'),
      image17: require('../../../../images/Service/sec2/Web-designs/game2/screen5.png'),
      image18: require('../../../../images/Service/sec2/Web-designs/game2/screen6.png'),
      image19: require('../../../../images/Service/sec2/Web-designs/game2/screen7.png'),
      singleImage: require('../../../../images/Service/sec2/Web-designs/game2/ref.png'),
    },
  ];

  return (
    <div className='Portfolio'>
      <ImageCarousel data={GameData} title="Game" />
    </div>
  );
};

export default GamePortfolio;
