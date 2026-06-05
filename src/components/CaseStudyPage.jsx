import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { getCaseStudyById } from '../data/caseStudiesData';

const CaseStudyPage = ({ id }) => {
  const navigate = useNavigate();
  const data     = getCaseStudyById(id);

  if (!data) return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
      <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#111827' }}>Case Study Not Found</h2>
      <button onClick={() => navigate('/case-studies')} style={{ background: '#E8312A', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
        Back to Case Studies
      </button>
    </div>
  );

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>

      {/* Back */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px 0' }}>
        <button onClick={() => navigate('/case-studies')} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'none', border: '1.5px solid #e5e7eb', borderRadius: 8,
          padding: '8px 16px', fontSize: 14, fontWeight: 600, color: '#374151',
          cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Poppins, sans-serif',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = data.color; e.currentTarget.style.color = data.color; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#374151'; }}
        >
          <ArrowLeft size={16} /> Back to Case Studies
        </button>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #fff 100%)', borderBottom: '1px solid #e5e7eb', padding: '60px 24px 64px', marginTop: 24 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 28, flexWrap: 'wrap' }}>
            <div style={{
              width: 80, height: 80, borderRadius: 16, background: '#fff',
              border: `2px solid ${data.color}20`, display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0, fontSize: '40px',
              boxShadow: `0 4px 20px ${data.color}15`,
            }}>
              {data.flag}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <span style={{
                display: 'inline-block', background: `${data.color}15`, color: data.color,
                fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 999,
                letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 14,
              }}>
                {data.tag}
              </span>
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: 10 }}>
                {data.company}
              </h1>
              <p style={{ fontSize: 16, color: data.color, fontWeight: 600, marginBottom: 12 }}>{data.industry}</p>
              <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.7, maxWidth: 640 }}>{data.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 72 }}>
          {data.stats.map((s, i) => (
            <div key={i} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, padding: '24px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: s.color, fontFamily: 'Poppins, sans-serif', lineHeight: 1.1, marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#6b7280', fontWeight: 600, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Challenge */}
        <div style={{ marginBottom: 56, background: '#fef2f2', borderLeft: `4px solid ${data.color}`, borderRadius: '0 12px 12px 0', padding: '28px 32px' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 12 }}>The Challenge</h2>
          <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.75 }}>{data.challenge}</p>
        </div>

        {/* Features */}
        <div style={{ marginBottom: 72 }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#111827', marginBottom: 32, textAlign: 'center' }}>
            What We Deployed
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {data.features.map((f, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '22px' }}>
                <div style={{ fontSize: '28px', marginBottom: 12 }}>{f.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 8, fontFamily: 'Poppins, sans-serif' }}>{f.title}</h4>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div style={{ marginBottom: 72 }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#111827', marginBottom: 32, textAlign: 'center' }}>
            The Results
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {data.results.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 10, padding: '16px 20px' }}>
                <CheckCircle size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: 1 }} />
                <p style={{ fontSize: 14.5, color: '#166534', lineHeight: 1.65, margin: 0, fontFamily: 'Poppins, sans-serif' }}>{r}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        {data.quote && (
          <div style={{ background: NAVY, borderRadius: 16, padding: '40px 48px', marginBottom: 64, position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '80px', lineHeight: 0.8, color: '#fff', opacity: 0.1, position: 'absolute', top: 20, left: 32 }}>"</div>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, fontWeight: 600, color: '#fff', lineHeight: 1.6, marginBottom: 20, position: 'relative', zIndex: 1 }}>
              "{data.quote}"
            </p>
            <p style={{ fontSize: 13, color: '#94a3b8', fontFamily: 'Poppins, sans-serif', position: 'relative', zIndex: 1 }}>{data.quoteRole}</p>
          </div>
        )}

        {/* Tech tags */}
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 14, fontFamily: 'Poppins, sans-serif' }}>
            Technologies Used
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {data.tech.map((t, i) => (
              <span key={i} style={{ fontSize: 13, fontWeight: 600, color: '#374151', background: '#f3f4f6', border: '1px solid #e5e7eb', padding: '6px 14px', borderRadius: 999 }}>{t}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${data.color} 0%, ${data.color}cc 100%)`, borderRadius: 20, padding: '48px 40px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Ready to See Similar Results?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 28, fontFamily: 'Poppins, sans-serif' }}>
            Get a free consultation tailored to your fleet.
          </p>
          <button onClick={() => navigate('/contact')} style={{
            background: '#fff', color: data.color, border: 'none',
            padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'Poppins, sans-serif', transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

const NAVY = '#0f172a';
export default CaseStudyPage;
