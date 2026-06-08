import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import About from '../components/About';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const RED = '#E8312A';
const NAVY = '#08142E';
const P = "'Poppins', sans-serif";

const PageHero = () => (
  <section
    style={{
      position: 'relative',
      width: '100%',
      minHeight: '520px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1800&q=80&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'scale(1.04)',
      }}
    />

    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(90deg, rgba(8,20,46,0.94) 0%, rgba(8,20,46,0.82) 45%, rgba(8,20,46,0.58) 100%)',
      }}
    />

    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(circle at 20% 35%, rgba(232,49,42,0.28), transparent 34%)',
      }}
    />

    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '6px',
        background: RED,
        zIndex: 3,
      }}
    />

    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: RED,
        zIndex: 3,
      }}
    />

    <div
      style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1180px',
        margin: '0 auto',
        padding: '95px 24px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '9px',
          padding: '8px 14px',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.10)',
          border: '1px solid rgba(255,255,255,0.18)',
          backdropFilter: 'blur(8px)',
          marginBottom: '24px',
          fontFamily: P,
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.82)',
        }}
      >
        <Link
          to="/"
          style={{
            color: 'rgba(255,255,255,0.62)',
            textDecoration: 'none',
          }}
        >
          Home
        </Link>

        <span style={{ color: 'rgba(255,255,255,0.38)' }}>›</span>

        <span style={{ color: RED }}>About Us</span>
      </div>

      <h1
        style={{
          fontFamily: P,
          fontSize: 'clamp(46px, 6vw, 78px)',
          fontWeight: 900,
          color: '#ffffff',
          lineHeight: 1.05,
          letterSpacing: '-2px',
          margin: '0 0 22px',
        }}
      >
        About <span style={{ color: RED }}>Us</span>
      </h1>

      <p
        style={{
          fontFamily: P,
          fontSize: '17px',
          color: 'rgba(255,255,255,0.78)',
          maxWidth: '680px',
          margin: '0 auto',
          lineHeight: 1.85,
        }}
      >
        Trusted fleet intelligence platform for Dubai, UAE, and GCC businesses —
        delivering GPS tracking, smart telematics, asset visibility and operational
        control.
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          marginTop: '34px',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '2px',
            background: 'rgba(255,255,255,0.24)',
          }}
        />

        <div
          style={{
            width: '10px',
            height: '10px',
            background: RED,
            transform: 'rotate(45deg)',
          }}
        />

        <div
          style={{
            width: '56px',
            height: '2px',
            background: 'rgba(255,255,255,0.24)',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          marginTop: '36px',
        }}
      >
        {['GPS Fleet Management', 'UAE · GCC Coverage', '24/7 Fleet Visibility'].map(
          (item) => (
            <div
              key={item}
              style={{
                padding: '11px 18px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.16)',
                color: 'rgba(255,255,255,0.82)',
                fontFamily: P,
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.5px',
              }}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  </section>
);

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TopBar />
      <Navbar />

      <main style={{ paddingTop: 112 }}>
        <PageHero />
        <About />
        <CTABanner />
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          main {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;