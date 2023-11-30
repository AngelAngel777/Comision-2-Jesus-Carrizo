import React, { useEffect, useRef } from 'react';

function Carousel({ images }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current && window.bootstrap) {
      const options = {
        interval: 5000,
        touch: false
      };

      new window.bootstrap.Carousel(carouselRef.current, options);
    }
  }, []);

  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" ref={carouselRef}>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={image}
              className="d-block w-100"
              alt={`Slide ${index}`}
              loading="lazy" // Carga perezosa para mejorar el rendimiento
              decoding="async" // Decodificación asíncrona para acelerar la carga
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

