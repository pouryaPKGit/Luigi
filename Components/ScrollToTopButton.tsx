"use client"
import { useState, useEffect } from 'react';
import { FaArrowTurnUp } from "react-icons/fa6";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <div>
      <button 
        onClick={scrollToTop} 
        className={`scroll-to-top-button ${isVisible ? 'show' : 'hide'}`}
      >
        <FaArrowTurnUp className="text-xl" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
