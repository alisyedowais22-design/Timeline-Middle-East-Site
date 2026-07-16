import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductBannerSlider.css';

const banners = [
  {
    id: 1,
    image: '/home-banners/f5-banner-1.png',
    alt: 'F5 ADAS BSD DashCam Banner',
    to: '/products/f5',
  },
  {
    id: 2,
    image: '/home-banners/f5-banner-2.png',
    alt: 'F5 Smart Fleet Camera Banner',
    to: '/products/f5',
  },
  
  {
    id: 6,
    image: '/home-banners/f7-banner-1.png',
    alt: 'F7 ADAS BSD DashCam Banner',
    to: '/products/f7',
  },
  {
    id: 7,
    image: '/home-banners/f7-banner-2.png',
    alt: 'F7 Smart Protection DashCam Banner',
    to: '/products/f7',
  },
  
];

const ProductBannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="product-banner-slider-section">
      <div className="product-banner-slider">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`product-banner-slide ${index === activeIndex ? 'active' : ''}`}
          >
            <Link to={banner.to} className="product-banner-link" aria-label={banner.alt}>
              <img src={banner.image} alt={banner.alt} />
            </Link>
          </div>
        ))}

        <button
          type="button"
          className="product-banner-arrow left"
          onClick={prevSlide}
          aria-label="Previous banner"
        >
          ‹
        </button>

        <button
          type="button"
          className="product-banner-arrow right"
          onClick={nextSlide}
          aria-label="Next banner"
        >
          ›
        </button>

        <div className="product-banner-dots">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              className={index === activeIndex ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBannerSlider;