import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

import globalHome from '../assets/global-home.png';
import globalSolutions from '../assets/global-solutions.png';
import globalCaseStudies from '../assets/global-case-studies.png';
import globalProducts from '../assets/global-products.png';
import globalAbout from '../assets/global-about.png';
import globalContact from '../assets/global-home.png';

const SLIDES = [
  {
    eyebrow: 'DUBAI FLEET INTELLIGENCE',
    title: 'Smart Fleet Control For Dubai & the GCC.',
    desc: 'Timeline Telematics Middle East delivers real-time GPS tracking, AI dashcams, fuel monitoring, asset visibility, and fleet intelligence for UAE and GCC businesses.',
    primaryText: 'Book a Demo',
    primaryLink: '/contact',
    secondaryText: 'Explore Solutions',
    secondaryLink: '/solutions',
    img: globalHome,
  },
  {
    eyebrow: 'UAE & GCC SOLUTIONS',
    title: 'Connected Solutions For Regional Operations.',
    desc: 'From logistics and construction to oil & gas, public transport, cold chain, and enterprise fleets, our solutions help operators improve visibility, safety, and performance.',
    primaryText: 'View Solutions',
    primaryLink: '/solutions',
    secondaryText: 'Talk to Sales',
    secondaryLink: '/contact',
    img: globalSolutions,
  },
  {
    eyebrow: 'PROVEN OPERATIONAL IMPACT',
    title: 'Built For Results Across Middle East Fleets.',
    desc: 'See how intelligent telematics, connected devices, and fleet data help companies reduce fuel cost, improve driver safety, and operate smarter across the region.',
    primaryText: 'View Case Studies',
    primaryLink: '/case-studies',
    secondaryText: 'Success Stories',
    secondaryLink: '/case-studies',
    img: globalCaseStudies,
  },
  {
    eyebrow: 'ADVANCED IOT HARDWARE',
    title: 'Devices Built For Gulf Operations.',
    desc: 'Explore GPS trackers, AI dashcams, asset trackers, CAN devices, fuel sensors, temperature monitoring, and smart accessories for demanding UAE and GCC environments.',
    primaryText: 'View Products',
    primaryLink: '/products',
    secondaryText: 'Request Quote',
    secondaryLink: '/contact',
    img: globalProducts,
  },
  {
    eyebrow: 'ABOUT TIMELINE MIDDLE EAST',
    title: 'Regional Expertise. Reliable Technology.',
    desc: 'We combine telematics, IoT hardware, fleet intelligence, and connected platforms to help Middle East businesses operate smarter across cities, borders, and industries.',
    primaryText: 'About Us',
    primaryLink: '/about',
    secondaryText: 'Contact Team',
    secondaryLink: '/contact',
    img: globalAbout,
  },
  {
    eyebrow: 'LET’S BUILD SMARTER FLEETS',
    title: 'Ready To Transform Your Fleet Visibility?' ,
    desc: 'Connect with Timeline Telematics Middle East to discuss your GPS tracking, fleet management, IoT, asset visibility, and enterprise mobility requirements.',
    primaryText: 'Contact Us',
    primaryLink: '/contact',
    secondaryText: 'Talk to Expert',
    secondaryLink: '/contact',
    img: globalContact,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx) => {
    setCurrent((idx + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section id="home" className="global-hero">
      {SLIDES.map((item, index) => (
        <div
          key={index}
          className={`global-hero-bg ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${item.img})` }}
        />
      ))}

      <div className="global-hero-overlay" />

      <div className="global-hero-content" key={current}>
        <p className="global-hero-eyebrow">{slide.eyebrow}</p>

        <h1 className="global-hero-title">
          {slide.title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== slide.title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

        <p className="global-hero-desc">{slide.desc}</p>

        <div className="global-hero-actions">
          <Link to={slide.primaryLink} className="global-hero-btn">
            {slide.primaryText}
          </Link>

          <Link to={slide.secondaryLink} className="global-hero-link">
            {slide.secondaryText}
          </Link>
        </div>

        <div className="global-hero-dots">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === current ? 'active' : ''}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;