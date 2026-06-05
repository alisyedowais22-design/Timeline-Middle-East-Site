import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getLiveCaseStudies } from '../data/caseStudiesData';

const CaseStudies = () => {
  const navigate = useNavigate();
  const studies  = getLiveCaseStudies();

  return (
    <section id="case-studies" style={{ background: '#fff', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block', background: '#fef2f2', color: '#E8312A',
            fontSize: '12px', fontWeight: '700', padding: '4px 14px', borderRadius: '999px',
            letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Success Stories
          </div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: '800', color: '#111827', marginBottom: '16px',
          }}>
            Real Results for Real Fleets
          </h2>
          <p style={{ color: '#6b7280', fontSize: '16px', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
            From Karachi to Dubai to Frankfurt — see how we've transformed fleet operations globally.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {studies.map((cs) => (
            <div key={cs.id}
              onClick={() => navigate(`/case-studies/${cs.id}`)}
              style={{
                background: '#fff', borderRadius: '16px', overflow: 'hidden',
                border: '1px solid #e5e7eb', cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Top accent */}
              <div style={{ height: '4px', background: cs.color }} />

              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '22px' }}>{cs.flag}</span>
                  <span style={{
                    fontSize: '11px', fontWeight: '700', letterSpacing: '1px',
                    textTransform: 'uppercase', background: `${cs.color}15`, color: cs.color,
                    padding: '3px 10px', borderRadius: '999px',
                  }}>{cs.tag}</span>
                </div>

                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '17px', color: '#111827', marginBottom: '6px' }}>
                  {cs.company}
                </h3>
                <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '14px', fontFamily: 'Poppins, sans-serif' }}>
                  {cs.industry}
                </p>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.65', marginBottom: '20px' }}>
                  {cs.desc}
                </p>

                {/* Stats row */}
                <div style={{ display: 'flex', gap: '20px', paddingTop: '16px', borderTop: '1px solid #f3f4f6', marginBottom: '20px' }}>
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '26px', color: cs.color, lineHeight: 1 }}>
                      {cs.result}
                    </div>
                    <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>{cs.resultLabel}</div>
                  </div>
                  <div style={{ width: '1px', background: '#f3f4f6' }} />
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '14px', color: '#374151' }}>
                      {cs.metric}
                    </div>
                    <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>{cs.region}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: cs.color, fontWeight: '700', fontSize: '13.5px', fontFamily: 'Poppins, sans-serif' }}>
                  Read Case Study <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
