import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { INDUSTRY_DETAILS } from '../data/industryData';

const IndustryPage = ({ slug }) => {
  const navigate = useNavigate();
  const data     = INDUSTRY_DETAILS[slug];

  if (!data) return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
      <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#111827' }}>Industry Not Found</h2>
      <button onClick={() => navigate('/')} style={{ background: '#E8312A', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
        Back to Home
      </button>
    </div>
  );

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>

      {/* Back */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px 0' }}>
        <button onClick={() => navigate(-1)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'none', border: '1.5px solid #e5e7eb', borderRadius: 8,
          padding: '8px 16px', fontSize: 14, fontWeight: 600, color: '#374151',
          cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Poppins, sans-serif',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = data.color; e.currentTarget.style.color = data.color; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#374151'; }}
        >
          <ArrowLeft size={16} /> Back to Industries
        </button>
      </div>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #f9fafb 0%, #fff 100%)',
        borderBottom: '1px solid #e5e7eb',
        padding: '60px 24px 64px', marginTop: 24,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 28, flexWrap: 'wrap' }}>
            <div style={{
              width: 80, height: 80, borderRadius: 16, background: '#fff',
              border: `2px solid ${data.color}20`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, boxShadow: `0 4px 20px ${data.color}15`,
            }}>
              <span style={{ fontSize: '40px' }}>
                {slug === 'logistics-courier' ? '🚛' : slug === 'public-transport' ? '🚌' : slug === 'oil-gas' ? '⛽' : slug === 'construction' ? '🏗️' : slug === 'healthcare' ? '🏥' : slug === 'government' ? '🏛️' : '🌾'}
              </span>
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <span style={{
                display: 'inline-block', background: `${data.color}15`, color: data.color,
                fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 999,
                letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 14,
              }}>
                Industry Solution
              </span>
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: 14 }}>
                {data.name}
              </h1>
              <p style={{ fontSize: 18, color: data.color, fontWeight: 600, marginBottom: 12 }}>{data.tagline}</p>
              <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.7, maxWidth: 640 }}>{data.heroDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 72 }}>
          {data.stats.map((s, i) => (
            <div key={i} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, padding: '24px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: data.color, fontFamily: 'Poppins, sans-serif', lineHeight: 1.1, marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#6b7280', fontWeight: 600, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Challenges */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ marginBottom: 36, textAlign: 'center' }}>
            <span style={{
              display: 'inline-block', background: '#fef2f2', color: '#E8312A',
              fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 999,
              letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12,
            }}>
              Challenges
            </span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 800, color: '#111827' }}>
              What This Industry Faces
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {data.challenges.map((c, i) => (
              <div key={i} style={{
                background: '#fff', border: '1px solid #e5e7eb',
                borderLeft: '4px solid #E8312A', borderRadius: '0 12px 12px 0', padding: '20px 22px',
              }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>{c.title}</h4>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ marginBottom: 36, textAlign: 'center' }}>
            <span style={{
              display: 'inline-block', background: `${data.color}15`, color: data.color,
              fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 999,
              letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12,
            }}>
              Our Solutions
            </span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 800, color: '#111827' }}>
              How Timeline Telematics Helps
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {data.solutions.map((s, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '22px', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = data.color + '60'; e.currentTarget.style.boxShadow = `0 8px 24px ${data.color}12`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 8, background: `${data.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <CheckCircle size={18} color={data.color} />
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>{s.title}</h4>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16, padding: '32px', marginBottom: 64, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 10, fontFamily: 'Poppins, sans-serif' }}>
              Trusted By
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {data.clients.map((c, i) => (
                <span key={i} style={{ fontSize: 13, fontWeight: 700, color: '#374151', background: '#fff', border: '1px solid #e5e7eb', padding: '6px 14px', borderRadius: 999 }}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${data.color} 0%, ${data.color}cc 100%)`, borderRadius: 20, padding: '48px 40px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Ready to Transform Your {data.name} Operations?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 28, fontFamily: 'Poppins, sans-serif' }}>
            Get a free consultation and live demo tailored to your fleet.
          </p>
          <button onClick={() => navigate('/contact')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: data.color, border: 'none',
            padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'Poppins, sans-serif', transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Talk to an Expert <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;
