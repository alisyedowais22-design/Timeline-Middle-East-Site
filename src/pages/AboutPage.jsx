import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar    from '../components/TopBar';
import Navbar    from '../components/Navbar';
import About     from '../components/About';
import CTABanner from '../components/CTABanner';
import Footer    from '../components/Footer';

const PageHero = () => (
  <div style={{
    position: 'relative',
    width: '100%',
    height: '340px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {/* Background image */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.35)',
    }} />

    {/* Left red accent bar */}
    <div style={{
      position: 'absolute', left: 0, top: 0, bottom: 0,
      width: '5px', background: '#E8312A',
    }} />

    {/* Bottom red line */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: '3px', background: '#E8312A',
    }} />

    {/* Content */}
    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px' }}>

      {/* Breadcrumb */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '8px', marginBottom: '20px',
        fontSize: '12px', fontFamily: 'Poppins, sans-serif',
        fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase',
      }}>
        <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        >Home</Link>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
        <span style={{ color: '#E8312A' }}>About Us</span>
      </div>

      {/* Main Title */}
      <h1 style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: 'clamp(36px, 5vw, 60px)',
        fontWeight: '800',
        color: '#ffffff',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        margin: '0 0 16px',
      }}>
        About <span style={{ color: '#E8312A' }}>Us</span>
      </h1>

      {/* Subtitle */}
      <p style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '15px',
        color: 'rgba(255,255,255,0.55)',
        maxWidth: '480px',
        margin: '0 auto',
        lineHeight: 1.7,
      }}>
        Trusted fleet intelligence platform for Dubai, UAE, and GCC businesses.
      </p>

      {/* Decorative diamond divider */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: '12px', marginTop: '28px',
      }}>
        <div style={{ width: '48px', height: '2px', background: 'rgba(255,255,255,0.2)' }} />
        <div style={{ width: '8px', height: '8px', background: '#E8312A', transform: 'rotate(45deg)' }} />
        <div style={{ width: '48px', height: '2px', background: 'rgba(255,255,255,0.2)' }} />
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div>
      <TopBar />
      <Navbar />
      <main style={{ paddingTop: '112px' }}>
        <PageHero />
        <About />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;