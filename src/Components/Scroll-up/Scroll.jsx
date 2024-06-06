import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import arrowUp from '../../images/Scroll/arrow-up-bold.svg';
import './Scroll.css';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      toggleVisibility();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <img src={arrowUp} alt="Scroll to Top" className="scroll-to-top-icon" />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
