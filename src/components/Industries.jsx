import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const INDUSTRIES = [
  { name: 'Logistics &\nCourier',  slug: 'logistics', img: '/courierandlogistics.jpg', desc: 'Maximize The Efficiency & Profitability Of Your Fleet' },
  { name: 'Public\nTransport',     slug: 'public-transport',  img: '/publictransport.jpg',      desc: 'Maximize The Efficiency & Profitability Of Your Fleet' },
  { name: 'Oil &\nGas',            slug: 'oil-gas',           img: '/oilandgas.jpg',            desc: 'Maximize The Efficiency & Profitability Of Your Fleet' },
  { name: 'Construction',          slug: 'construction',      img: '/construction.jpg',         desc: 'Maximize The Efficiency & Profitability Of Your Fleet' },
  { name: 'Healthcare',            slug: 'healthcare',        img: '/healthcare.jpg',           desc: 'Maximize The Efficiency & Profitability Of Your Fleet' },
  { name: 'Government',            slug: 'government',        img: '/government.jpg',           desc: 'Maximize The Efficiency & Profitability Of Your Fleet' },
  { name: 'Agriculture',           slug: 'agriculture',       img: '/agriculture.jpg',          desc: 'Maximize The Efficiency & Profitability Of Your Fleet' },
];

const ICONS = {
  'Logistics &\nCourier': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <rect x="2" y="12" width="24" height="16" rx="2" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M26 18h6l4 5v5h-10V18z" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="9" cy="30" r="3" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="31" cy="30" r="3" stroke="#fff" strokeWidth="1.8" fill="none"/>
    </svg>
  ),
  'Public\nTransport': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="8" width="32" height="22" rx="3" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <line x1="4" y1="18" x2="36" y2="18" stroke="#fff" strokeWidth="1.8"/>
      <line x1="20" y1="8" x2="20" y2="30" stroke="#fff" strokeWidth="1.4"/>
      <circle cx="11" cy="32" r="2.5" stroke="#fff" strokeWidth="1.6" fill="none"/>
      <circle cx="29" cy="32" r="2.5" stroke="#fff" strokeWidth="1.6" fill="none"/>
    </svg>
  ),
  'Oil &\nGas': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <rect x="14" y="4" width="8" height="32" rx="1.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M14 14H6V34H14" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <path d="M22 14h8v20h-8" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <line x1="6" y1="34" x2="34" y2="34" stroke="#fff" strokeWidth="1.8"/>
    </svg>
  ),
  'Construction': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <line x1="20" y1="2" x2="20" y2="38" stroke="#fff" strokeWidth="1.8"/>
      <line x1="2" y1="38" x2="38" y2="38" stroke="#fff" strokeWidth="1.8"/>
      <line x1="20" y1="2" x2="8" y2="38" stroke="#fff" strokeWidth="1.8"/>
      <line x1="20" y1="2" x2="32" y2="38" stroke="#fff" strokeWidth="1.8"/>
      <line x1="12" y1="18" x2="28" y2="18" stroke="#fff" strokeWidth="1.6"/>
    </svg>
  ),
  'Healthcare': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="6" width="24" height="30" rx="2" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <rect x="16" y="2" width="8" height="8" rx="1" stroke="#fff" strokeWidth="1.6" fill="none"/>
      <line x1="20" y1="21" x2="20" y2="25" stroke="#fff" strokeWidth="2"/>
      <line x1="18" y1="23" x2="22" y2="23" stroke="#fff" strokeWidth="2"/>
    </svg>
  ),
  'Government': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <line x1="2" y1="38" x2="38" y2="38" stroke="#fff" strokeWidth="1.8"/>
      <line x1="2" y1="14" x2="38" y2="14" stroke="#fff" strokeWidth="1.8"/>
      <line x1="4" y1="14" x2="4" y2="38" stroke="#fff" strokeWidth="1.6"/>
      <line x1="36" y1="14" x2="36" y2="38" stroke="#fff" strokeWidth="1.6"/>
      <path d="M20 2L38 14H2L20 2Z" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <rect x="9" y="20" width="5" height="9" rx="1" stroke="#fff" strokeWidth="1.4" fill="none"/>
      <rect x="18" y="20" width="5" height="9" rx="1" stroke="#fff" strokeWidth="1.4" fill="none"/>
      <rect x="27" y="20" width="5" height="9" rx="1" stroke="#fff" strokeWidth="1.4" fill="none"/>
    </svg>
  ),
  'Agriculture': (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <circle cx="10" cy="28" r="8" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <circle cx="30" cy="30" r="6" stroke="#fff" strokeWidth="1.8" fill="none"/>
      <line x1="10" y1="28" x2="10" y2="12" stroke="#fff" strokeWidth="1.8"/>
      <line x1="30" y1="30" x2="30" y2="16" stroke="#fff" strokeWidth="1.8"/>
      <path d="M10 18 C14 14 20 14 22 18" stroke="#fff" strokeWidth="1.6" fill="none"/>
      <line x1="2" y1="36" x2="38" y2="36" stroke="#fff" strokeWidth="1.8"/>
    </svg>
  ),
};

const Industries = () => {
  const navigate  = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="industries" style={{ background: '#111', overflow: 'hidden' }}>

      {/* Section header */}
      <div style={{ textAlign: 'center', padding: '60px 24px 40px', background: '#fff' }}>
        <div style={{
          display: 'inline-block', background: '#fef2f2', color: '#E8312A',
          fontSize: '12px', fontWeight: '700', padding: '4px 14px', borderRadius: '999px',
          letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px',
          fontFamily: 'Poppins, sans-serif',
        }}>
          Industries
        </div>
        <h2 style={{
          fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)',
          fontWeight: '700', color: '#111827', textTransform: 'uppercase', letterSpacing: '1px',
        }}>
          Industries We Serve
        </h2>
      </div>

      {/* ── Accordion strip — flex, hovered item grows ── */}
      <div style={{
        display: 'flex',
        height: '460px',
        overflow: 'hidden',
      }}>
        {INDUSTRIES.map((ind, i) => {
          const isHovered = hovered === i;
          return (
            <div
              key={i}
              onClick={() => navigate(`/industries/${ind.slug}`)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                /* flex-grow: hovered item takes much more space */
                flex: isHovered ? '4 1 0%' : '1 1 0%',
                transition: 'flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRight: i < INDUSTRIES.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              {/* Background image */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${ind.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s ease',
                backgroundColor: '#222',
              }} />

              {/* Dark overlay — lighter on hover */}
              <div style={{
                position: 'absolute', inset: 0,
                background: isHovered ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.58)',
                transition: 'background 0.4s ease',
              }} />

              {/* Red bottom accent on hover */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '3px',
                background: '#E8312A',
                transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.4s ease',
                transformOrigin: 'left',
              }} />

              {/* Content */}
              <div style={{
                position: 'relative', zIndex: 2,
                padding: '28px 20px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: '100%',
              }}>
                {/* Icon circle */}
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  border: `1.5px solid ${isHovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                  background: isHovered ? 'rgba(232,49,42,0.25)' : 'rgba(255,255,255,0.08)',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}>
                  {ICONS[ind.name]}
                </div>

                {/* Name */}
                <h3 style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: isHovered ? '22px' : '16px',
                  fontWeight: '700',
                  color: '#fff',
                  textTransform: 'uppercase',
                  lineHeight: 1.15,
                  marginBottom: 8,
                  whiteSpace: 'pre-line',
                  transition: 'font-size 0.3s ease',
                }}>
                  {ind.name}
                </h3>

                {/* Desc — only visible on hover */}
                <p style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.6,
                  marginBottom: 18,
                  maxWidth: '320px',
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s',
                }}>
                  {ind.desc}
                </p>

                {/* Learn More — only on hover */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: '#fff',
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  borderBottom: '1.5px solid rgba(255,255,255,0.6)',
                  paddingBottom: 3,
                  width: 'fit-content',
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.35s ease 0.18s, transform 0.35s ease 0.18s',
                }}>
                  LEARN MORE
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default Industries;