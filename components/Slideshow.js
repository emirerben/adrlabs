import { useState, useEffect } from 'react';
import utilStyles from '../styles/utils.module.css';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="slideshow-container">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Slide ${index}`}
          className={index === currentIndex ? 'slide active' : 'slide'}
        />
      ))}
    </div>
  );
};

export default Slideshow;
