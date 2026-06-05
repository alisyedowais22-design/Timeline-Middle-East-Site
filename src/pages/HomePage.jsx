import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar      from '../components/TopBar';
import Navbar      from '../components/Navbar';
import Hero        from '../components/Hero';
import Industries  from '../components/Industries';
import CaseStudies from '../components/CaseStudies';
import CTABanner   from '../components/CTABanner';
import Footer      from '../components/Footer';

const RED  = '#C8102E';
const NAVY = '#08142E';
const P    = "'Poppins', sans-serif";

const useReveal = (threshold = 0.12) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
};

const Reveal = ({ children, direction = 'up', delay = 0, style = {} }) => {
  const [ref, visible] = useReveal();

  const T = {
    up: 'translateY(32px)',
    left: 'translateX(-32px)',
    right: 'translateX(32px)',
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : T[direction],
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const Eyebrow = ({ children }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: RED,
      marginBottom: '16px',
      fontFamily: P,
    }}
  >
    <span
      style={{
        display: 'inline-block',
        width: '24px',
        height: '2px',
        background: RED,
      }}
    />
    {children}
  </div>
);

const TICKER_ITEMS = [
  'Dubai Fleet Intelligence',
  'GPS Fleet Management',
  'UAE · Saudi Arabia · Qatar · Oman · Kuwait',
  '99.9% Uptime SLA',
  '30% Fuel Cost Reduction',
  'Middle East Operations · Dubai',
  '50M+ Daily Data Points',
  'AI-Powered Telematics',
];

const Ticker = () => (
  <div style={{ background: RED, padding: '10px 0', overflow: 'hidden' }}>
    <div
      style={{
        display: 'flex',
        width: 'max-content',
        animation: 'tickerMove 55s linear infinite',
      }}
    >
      {[...TICKER_ITEMS, ...TICKER_ITEMS].map((txt, i) => (
        <span
          key={i}
          style={{
            whiteSpace: 'nowrap',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#fff',
            padding: '0 40px',
            fontFamily: P,
          }}
        >
          {txt}
          <span style={{ color: 'rgba(255,255,255,0.35)', margin: '0 8px' }}>
            ·
          </span>
        </span>
      ))}
    </div>
  </div>
);

const STATS = [
  {
    body: '12',
    accent: '+',
    name: 'Years in Business',
    hint: 'Regional operations based in Dubai',
  },
  {
    body: '25K',
    accent: '+',
    name: 'Regional Fleet Capacity',
    hint: 'Built for UAE and GCC operations',
  },
  {
    body: '50M',
    accent: '+',
    name: 'Data Points Daily',
    hint: 'Real-time processing capacity',
  },
  {
    body: '200',
    accent: '+',
    name: 'Team Members',
    hint: 'Engineers & logistics specialists',
  },
];

const StatsSection = () => (
  <div style={{ background: '#0f2044', padding: '64px 56px' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div
              style={{
                padding: '32px 24px',
                borderRight:
                  i < STATS.length - 1
                    ? '1px solid rgba(255,255,255,0.07)'
                    : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: P,
                  fontSize: '44px',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  marginBottom: '8px',
                }}
              >
                {s.body}
                <span style={{ color: RED }}>{s.accent}</span>
              </div>

              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.75)',
                  marginBottom: '4px',
                  fontFamily: P,
                }}
              >
                {s.name}
              </div>

              <div
                style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.3)',
                  fontFamily: P,
                }}
              >
                {s.hint}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          marginTop: '32px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          fontSize: '11px',
          color: 'rgba(255,255,255,0.35)',
          fontFamily: P,
        }}
      >
        <div
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#22c55e',
            flexShrink: 0,
            boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
          }}
        />
        Platform live · 99.9% uptime SLA active
      </div>
    </div>
  </div>
);

const CEOSection = () => (
  <div
    style={{
      background: 'linear-gradient(135deg, #f8f9fc 0%, #eef1f7 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '-80px',
        right: '-80px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(200,16,46,0.04)',
        pointerEvents: 'none',
      }}
    />

    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px' }}>
      <Reveal style={{ textAlign: 'center', marginBottom: '64px' }}>
        <Eyebrow>Leadership</Eyebrow>
        <h2
          style={{
            fontFamily: P,
            fontSize: 'clamp(22px,2.8vw,36px)',
            fontWeight: 800,
            color: NAVY,
            marginTop: '8px',
          }}
        >
          Message from our{' '}
          <em style={{ fontStyle: 'normal', color: RED }}>Founder & CEO</em>
        </h2>
      </Reveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '72px',
          alignItems: 'center',
        }}
      >
        <Reveal direction="left" delay={0.05}>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '-16px',
                width: '100%',
                height: '100%',
                background: RED,
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                background: NAVY,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '340px',
                  overflow: 'hidden',
                  background: `linear-gradient(160deg,#1a2f5a,${NAVY})`,
                }}
              >
                <img
                  src="/M,AhsanNaeem.jpg"
                  alt="Muhammad Ahsan Naeem"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    background: `linear-gradient(to top, ${NAVY}, transparent)`,
                  }}
                />
              </div>

              <div style={{ padding: '20px 28px 24px', borderTop: `3px solid ${RED}` }}>
                <div
                  style={{
                    fontFamily: P,
                    fontWeight: 700,
                    fontSize: '16px',
                    color: '#fff',
                    marginBottom: '4px',
                  }}
                >
                  Muhammad Ahsan Naeem
                </div>

                <div
                  style={{
                    fontSize: '11px',
                    color: RED,
                    fontWeight: 600,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontFamily: P,
                  }}
                >
                  Founder & CEO
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.12}>
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '100px',
              lineHeight: 0.8,
              color: RED,
              opacity: 0.12,
              marginBottom: '12px',
              userSelect: 'none',
            }}
          >
            "
          </div>

          <h3
            style={{
              fontFamily: P,
              fontSize: 'clamp(17px,1.9vw,24px)',
              fontWeight: 700,
              color: NAVY,
              lineHeight: 1.45,
              marginBottom: '24px',
              marginTop: '-12px',
            }}
          >
            We started with a simple belief —{' '}
            <em style={{ fontStyle: 'normal', color: RED }}>
              every fleet deserves to be smarter.
            </em>
          </h3>

          <p
            style={{
              fontSize: '14px',
              color: '#4a5568',
              lineHeight: 1.85,
              margin: '0 0 16px',
              fontFamily: P,
            }}
          >
            When I founded Timeline Telematics in 2012, the fleet management
            fleet industry was still operating on paper logs, phone calls, and delayed reports.
            Drivers were invisible once they left the depot. Fuel was leaking out
            of every operation.
          </p>

          <p
            style={{
              fontSize: '14px',
              color: '#4a5568',
              lineHeight: 1.85,
              margin: 0,
              fontFamily: P,
            }}
          >
            Today, with regional teams supporting operators across
            Dubai, UAE, Saudi Arabia, Qatar, Oman, and Kuwait, I'm proud of what we've built. But this is
            just the beginning — the future of fleet management is intelligent,
            predictive, and connected.
          </p>

          <div
            style={{
              marginTop: '28px',
              paddingTop: '20px',
              borderTop: '1px solid #dde3ee',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div style={{ width: '36px', height: '3px', background: RED, flexShrink: 0 }} />

            <div>
              <div style={{ fontFamily: P, fontWeight: 700, fontSize: '14px', color: NAVY }}>
                Muhammad Ahsan Naeem
              </div>
              <div
                style={{
                  fontFamily: P,
                  fontSize: '11px',
                  color: '#8892A4',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}
              >
                Founder & CEO · Timeline Telematics
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
);

const TIMELINE = [
  {
    year: '2012',
    label: 'Founded',
    title: 'The Beginning',
    desc: 'Timeline Telematics began with a clear mission: to give fleet operators enterprise-grade GPS visibility, reliable control, and smarter operational intelligence.',
  },
  {
    year: '2015',
    label: 'Milestone',
    title: 'First 1,000 Fleet Customers',
    desc: 'Deep customer research phase — riding routes, visiting depots, interviewing 500+ drivers. Launched specialized fuel monitoring and passenger transport modules. 1,000 active fleet customers reached.',
  },
  {
    year: '2018',
    label: 'Gulf Expansion',
    title: 'UAE & Gulf Launch',
    desc: 'Middle East operations expanded from Dubai with regional support for UAE and GCC fleets, Arabic-ready workflows, and hardware built for Gulf operating conditions.',
  },
  {
    year: '2021',
    label: 'Europe',
    title: 'European Market Entry',
    desc: 'Cross-border GCC use cases expanded across logistics, oil & gas, construction, cold chain, rental fleets, and enterprise mobility operations.',
  },
  {
    year: '2023',
    label: 'Scale',
    title: '25,000+ Fleets Milestone',
    desc: 'High-volume fleet intelligence, real-time dashboards, AI dashcams, and IoT devices now support smarter operations across Dubai and the wider Middle East.',
  },
  {
    year: '2024',
    label: 'AI Era',
    title: 'AI-Native Platform Launch',
    desc: 'Next-generation AI platform: predictive breakdown detection, intelligent driver coaching, natural language reporting. ML models trained on 1B+ km of real road data.',
  },
];

const TimelineSlider = () => {
  const [cur, setCur] = useState(0);
  const [autoFill, setAutoFill] = useState(false);

  const goTo = useCallback((n) => {
    setCur((n + TIMELINE.length) % TIMELINE.length);
    setAutoFill(false);
    setTimeout(() => setAutoFill(true), 50);
  }, []);

  useEffect(() => {
    setAutoFill(true);
    const t = setInterval(() => goTo(cur + 1), 5000);
    return () => clearInterval(t);
  }, [cur, goTo]);

  return (
    <div style={{ background: NAVY, padding: '100px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px' }}>
        <Reveal style={{ marginBottom: '64px' }}>
          <Eyebrow>Our Journey</Eyebrow>
          <h2
            style={{
              fontFamily: P,
              fontSize: 'clamp(26px,3.2vw,42px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.15,
              marginTop: '14px',
            }}
          >
            12 Years of <em style={{ fontStyle: 'normal', color: RED }}>Building Trust</em>
          </h2>
        </Reveal>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            {TIMELINE.map((_, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                style={{
                  height: '4px',
                  width: i === cur ? '40px' : '28px',
                  background: i === cur ? RED : 'rgba(255,255,255,0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '1px',
                fontFamily: P,
              }}
            >
              {String(cur + 1).padStart(2, '0')} / {String(TIMELINE.length).padStart(2, '0')}
            </span>

            {['←', '→'].map((arrow, i) => (
              <button
                key={i}
                onClick={() => goTo(cur + (i === 0 ? -1 : 1))}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'transparent',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = RED;
                  e.currentTarget.style.borderColor = RED;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                }}
              >
                {arrow}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            height: '2px',
            background: 'rgba(255,255,255,0.08)',
            marginBottom: '48px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              background: RED,
              width: `${((cur + 1) / TIMELINE.length) * 100}%`,
              transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        </div>

        <div
          key={cur}
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            animation: 'fadeIn 0.4s ease',
          }}
        >
          <div
            style={{
              background: RED,
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: '160px',
            }}
          >
            <div
              style={{
                fontFamily: P,
                fontSize: '54px',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1,
                letterSpacing: '-0.03em',
              }}
            >
              {TIMELINE[cur].year}
            </div>

            <div
              style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                marginTop: '8px',
                fontFamily: P,
              }}
            >
              {TIMELINE[cur].label}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderLeft: 'none',
              padding: '36px 44px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontFamily: P,
                fontSize: '18px',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '12px',
              }}
            >
              {TIMELINE[cur].title}
            </div>

            <p
              style={{
                fontSize: '13.5px',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.8,
                margin: 0,
                fontFamily: P,
              }}
            >
              {TIMELINE[cur].desc}
            </p>
          </div>
        </div>

        <div
          style={{
            height: '2px',
            background: 'rgba(255,255,255,0.06)',
            marginTop: '24px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              background: RED,
              width: autoFill ? '100%' : '0',
              transition: autoFill ? 'width 4.8s linear' : 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};

const MetricBar = ({ label, pct, val, sub, delay }) => {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        padding: '32px',
        border: '1px solid #E2E6ED',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      <div
        style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#8892A4',
          marginBottom: '12px',
          fontFamily: P,
        }}
      >
        {label}
      </div>

      <div style={{ height: '4px', background: '#E2E6ED', marginBottom: '14px', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            background: RED,
            width: visible ? pct : '0',
            transition: visible
              ? 'width 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s'
              : 'none',
          }}
        />
      </div>

      <div
        style={{
          fontFamily: P,
          fontSize: '34px',
          fontWeight: 800,
          color: NAVY,
          lineHeight: 1,
        }}
      >
        {val}
      </div>

      <div
        style={{
          fontSize: '12px',
          color: '#8892A4',
          marginTop: '6px',
          fontFamily: P,
        }}
      >
        {sub}
      </div>
    </div>
  );
};

const VALUES = [
  {
    icon: '🛡️',
    title: 'Reliability',
    desc: '99.9% uptime. Redundant infrastructure. 24/7 operations team. When your driver needs support at 2am, we are there.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'Proprietary AI models trained on 1 billion+ km of real road data. We invest in R&D to keep our customers ahead.',
  },
  {
    icon: '👥',
    title: 'Customer First',
    desc: 'Every feature we build starts with a real customer problem. Open product roadmap. Monthly on-site visits by our product team.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    desc: 'We never sell customer data. Transparent pricing. No hidden charges. When we make a mistake, we own it and fix it.',
  },
];

const ValCard = ({ icon, title, desc }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        background: hover ? NAVY : '#fff',
        padding: '36px 28px',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'all 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          background: hover ? 'rgba(200,16,46,0.18)' : 'rgba(200,16,46,0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          fontSize: '22px',
          transition: 'background 0.25s',
        }}
      >
        {icon}
      </div>

      <div
        style={{
          fontFamily: P,
          fontSize: '15px',
          fontWeight: 700,
          color: hover ? '#fff' : NAVY,
          marginBottom: '10px',
          transition: 'color 0.25s',
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: '13px',
          color: hover ? 'rgba(255,255,255,0.5)' : '#6b7280',
          lineHeight: 1.7,
          transition: 'color 0.25s',
          fontFamily: P,
        }}
      >
        {desc}
      </div>
    </div>
  );
};

const REGIONS = [
  {
    code: 'PK',
    name: 'United Arab Emirates',
    flag: '🇵🇰',
    offices: 'Dubai · Abu Dhabi · Sharjah',
    status: 'live',
    img: 'https://images.unsplash.com/photo-1608020932658-d0e19a69580b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    code: 'AE',
    name: 'Middle East',
    flag: '🇦🇪',
    offices: 'Dubai · Abu Dhabi',
    status: 'live',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
  },
  {
    code: 'EU',
    name: 'Europe',
    flag: '🇪🇺',
    offices: 'Frankfurt · 12 countries',
    status: 'coming',
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
  },
];

const RegionsSection = () => (
  <div style={{ background: '#fff', padding: '80px 0' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px' }}>
      <Reveal style={{ marginBottom: '48px', textAlign: 'center' }}>
        <Eyebrow>Middle East Presence</Eyebrow>
        <h2
          style={{
            fontFamily: P,
            fontSize: 'clamp(22px,2.8vw,36px)',
            fontWeight: 800,
            color: NAVY,
            marginTop: '12px',
          }}
        >
          Operating Across <em style={{ fontStyle: 'normal', color: RED }}>3 Continents</em>
        </h2>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
        {REGIONS.map((r, i) => (
          <Reveal key={r.code} delay={i * 0.1}>
            <div
              style={{
                border: '1px solid rgba(200,16,46,0.25)',
                padding: '40px 32px',
                textAlign: 'center',
                transition: 'box-shadow 0.2s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(200,16,46,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${r.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.28,
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: '52px', display: 'block', marginBottom: '16px' }}>
                  {r.flag}
                </span>

                <div
                  style={{
                    fontFamily: P,
                    fontSize: '42px',
                    fontWeight: 800,
                    color: NAVY,
                    letterSpacing: '4px',
                    marginBottom: '14px',
                  }}
                >
                  {r.code}
                </div>

                <h3
                  style={{
                    fontFamily: P,
                    fontWeight: 700,
                    fontSize: '20px',
                    color: NAVY,
                    marginBottom: '8px',
                  }}
                >
                  {r.name}
                </h3>

                <p
                  style={{
                    fontSize: '12px',
                    color: '#000000',
                    fontFamily: P,
                    marginBottom: '16px',
                  }}
                >
                  {r.offices}
                </p>

                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '4px 14px',
                    letterSpacing: '1px',
                    background:
                      r.status === 'live'
                        ? 'rgba(34,197,94,0.10)'
                        : 'rgba(200,16,46,0.08)',
                    color: r.status === 'live' ? '#16a34a' : RED,
                    textTransform: 'uppercase',
                    fontFamily: P,
                  }}
                >
                  {r.status === 'live' ? '● Live' : '● Coming Soon'}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
);

const HomePage = () => {
  useEffect(() => {
    if (!document.getElementById('homepage-kf')) {
      const s = document.createElement('style');
      s.id = 'homepage-kf';
      s.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        @keyframes tickerMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div>
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <Industries />
        <CaseStudies />

        <Ticker />
        <StatsSection />
        <CEOSection />
        <TimelineSlider />

        <div style={{ background: '#fff', padding: '80px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px' }}>
            <Reveal style={{ marginBottom: '48px' }}>
              <Eyebrow>Performance Metrics</Eyebrow>
              <h2
                style={{
                  fontFamily: P,
                  fontSize: 'clamp(22px,2.8vw,36px)',
                  fontWeight: 800,
                  color: NAVY,
                  marginTop: '12px',
                }}
              >
                Platform Built for{' '}
                <em style={{ fontStyle: 'normal', color: RED }}>Results</em>
              </h2>
            </Reveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              <MetricBar
                label="Fuel Cost Reduction"
                pct="30%"
                val="30%"
                sub="Average across all active fleets"
                delay={0.05}
              />
              <MetricBar
                label="Platform Uptime"
                pct="99.9%"
                val="99.9%"
                sub="Guaranteed SLA, redundant infrastructure"
                delay={0.1}
              />
              <MetricBar
                label="Days to ROI"
                pct="85%"
                val="60–90"
                sub="Days to full investment recovery"
                delay={0.15}
              />
            </div>
          </div>
        </div>

        <div style={{ background: '#F6F7FA', padding: '80px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px' }}>
            <Reveal style={{ marginBottom: '48px' }}>
              <Eyebrow>Our Values</Eyebrow>
              <h2
                style={{
                  fontFamily: P,
                  fontSize: 'clamp(22px,2.8vw,36px)',
                  fontWeight: 800,
                  color: NAVY,
                  marginTop: '12px',
                }}
              >
                What Drives{' '}
                <em style={{ fontStyle: 'normal', color: RED }}>Us Forward</em>
              </h2>
            </Reveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4,1fr)',
                gap: '1px',
                background: '#E2E6ED',
                border: '1px solid #E2E6ED',
              }}
            >
              {VALUES.map((v, i) => (
                <ValCard key={i} {...v} />
              ))}
            </div>
          </div>
        </div>

        <RegionsSection />
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;