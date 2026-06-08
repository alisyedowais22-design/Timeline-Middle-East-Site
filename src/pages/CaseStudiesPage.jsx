import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import CaseStudies from '../components/CaseStudies';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const RED = '#E8312A';
const P = "'Poppins', sans-serif";

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TopBar />
      <Navbar />

      <main style={{ paddingTop: 112 }}>
        {/* Page Hero */}
        <section
          style={{
            position: 'relative',
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            color: '#fff',
            backgroundImage: `
              linear-gradient(90deg, rgba(8,20,46,0.94) 0%, rgba(8,20,46,0.82) 45%, rgba(8,20,46,0.55) 100%),
              url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1800&auto=format&fit=crop')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Left red accent */}
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

          {/* Red glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 20% 32%, rgba(232,49,42,0.30), transparent 34%)',
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div
            style={{
              maxWidth: '1180px',
              width: '100%',
              margin: '0 auto',
              padding: '95px 24px',
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
            }}
          >
            {/* Breadcrumb / badge */}
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

              <span style={{ color: RED }}>Success Stories</span>
            </div>

            <h1
              style={{
                maxWidth: '900px',
                margin: '0 auto',
                fontFamily: P,
                fontSize: 'clamp(44px, 5vw, 76px)',
                lineHeight: 1.05,
                letterSpacing: '-2px',
                fontWeight: 900,
                color: '#fff',
              }}
            >
              Real Results for <span style={{ color: RED }}>Real Fleets</span>
            </h1>

            <p
              style={{
                maxWidth: '760px',
                margin: '24px auto 0',
                fontFamily: P,
                fontSize: '17px',
                lineHeight: 1.85,
                color: 'rgba(255,255,255,0.78)',
              }}
            >
              From Dubai to Abu Dhabi to Riyadh — see how Timeline Telematics
              transforms fleet operations for businesses across UAE, GCC and the
              wider Middle East.
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '14px',
                marginTop: '36px',
              }}
            >
              {['Fleet Safety', 'Fuel Savings', 'Live Visibility', 'Operational Control'].map(
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

        <CaseStudies />
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

export default CaseStudiesPage;