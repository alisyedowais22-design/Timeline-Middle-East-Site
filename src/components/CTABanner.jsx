import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => (
  <section style={{
    background: 'linear-gradient(135deg, #E8312A 0%, #c72a23 100%)',
    padding: '80px 24px', textAlign: 'center',
  }}>
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <h2 style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: '800',
        fontSize: 'clamp(28px, 4vw, 44px)', color: '#fff',
        lineHeight: 1.15, marginBottom: '16px',
      }}>
        Ready to Transform Your Fleet?
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.7', marginBottom: '32px', fontFamily: 'Poppins, sans-serif' }}>
        Join 25,000+ fleet operators who trust Timeline Telematics for real-time GPS tracking, fuel control, and driver safety.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/contact" style={{
          background: '#fff', color: '#E8312A', padding: '14px 32px',
          borderRadius: '10px', fontSize: '15px', fontWeight: '700',
          fontFamily: 'Poppins, sans-serif', textDecoration: 'none',
          transition: 'transform 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Get a Free Demo
        </Link>
        <Link to="/contact" style={{
          background: 'transparent', color: '#fff',
          padding: '14px 32px', borderRadius: '10px',
          fontSize: '15px', fontWeight: '700',
          border: '2px solid rgba(255,255,255,0.6)',
          fontFamily: 'Poppins, sans-serif', textDecoration: 'none',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; }}
        >
          Talk to an Expert
        </Link>
      </div>
    </div>
  </section>
);

export default CTABanner;
