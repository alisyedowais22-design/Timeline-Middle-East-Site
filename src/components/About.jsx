import React, { useEffect, useRef, useState, useCallback } from 'react';

const RED  = '#C8102E';
const NAVY = '#08142E';
const P    = "'Poppins', sans-serif";

const TIMELINE = [
  { year: '2012', label: 'Founded',        title: 'The Beginning',                desc: 'Timeline Telematics was founded in Karachi. First 12 vehicles tracked. Platform built from scratch by our local engineering team with a single conviction: every Pakistani fleet operator deserves enterprise-grade GPS tracking.' },
  { year: '2015', label: 'Milestone',      title: 'First 1,000 Fleet Customers',  desc: 'Deep customer research phase — riding routes, visiting depots, interviewing 500+ drivers. Launched specialized fuel monitoring and passenger transport modules. 1,000 active fleet customers reached.' },
  { year: '2018', label: 'Gulf Expansion', title: 'UAE & Gulf Launch',             desc: 'Dubai office opened. Arabic language support and UAE RTA integration launched. Hardware certified for Gulf heat extremes (−40°C to +85°C). First enterprise contracts with major Gulf logistics operators.' },
  { year: '2021', label: 'Europe',         title: 'European Market Entry',         desc: 'Frankfurt office established. EU tachograph compliance, Working Time Directive, and full GDPR infrastructure built. Now serving cross-border logistics operators across 12 European countries.' },
  { year: '2023', label: 'Scale',          title: '25,000+ Fleets Milestone',      desc: '25,000+ active fleet operators globally. 50M+ daily data points. Forbes Middle East recognition. Three continental offices fully operational with local language support and regulatory expertise.' },
  { year: '2024', label: 'AI Era',         title: 'AI-Native Platform Launch',     desc: 'Next-generation AI platform: predictive breakdown detection, intelligent driver coaching, natural language reporting. ML models trained on 1B+ km of real road data.' },
];

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconBulb = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/>
  </svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

const VALUES = [
  { Icon: IconShield, title: 'Reliability',    desc: '99.9% uptime. Redundant infrastructure. 24/7 operations team. When your driver needs support at 2am, we are there.' },
  { Icon: IconBulb,   title: 'Innovation',     desc: 'Proprietary AI models trained on 1 billion+ km of real road data. We invest in R&D to keep our customers ahead of the market.' },
  { Icon: IconUsers,  title: 'Customer First', desc: 'Every feature we build starts with a real customer problem. Open product roadmap. Monthly on-site visits by our product team.' },
  { Icon: IconHeart,  title: 'Integrity',      desc: 'We never sell customer data. Transparent pricing. No hidden charges. When we make a mistake, we own it and fix it.' },
];

const TICKER_ITEMS = [
  '25,000+ Active Fleets','GPS Fleet Management','UAE · Saudi Arabia · Qatar · Oman · Kuwait',
  '99.9% Uptime SLA','30% Fuel Cost Reduction','Middle East Operations · Dubai',
  '50M+ Daily Data Points','AI-Powered Telematics',
];

const STATS = [
  { body: '12',  accent: '+', name: 'Years in Business',      hint: 'Regional operations based in Dubai' },
  { body: '25K', accent: '+', name: 'Active Fleet Operators',  hint: 'Built for UAE and GCC operations' },
  { body: '50M', accent: '+', name: 'Data Points Daily',       hint: 'Real-time processing capacity' },
  { body: '200', accent: '+', name: 'Team Members',            hint: 'Engineers & logistics specialists' },
];

const useReveal = (threshold = 0.12) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const Reveal = ({ children, direction = 'up', delay = 0, style = {} }) => {
  const [ref, visible] = useReveal();
  const T = { up: 'translateY(32px)', left: 'translateX(-32px)', right: 'translateX(32px)' };
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : T[direction], transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`, ...style }}>
      {children}
    </div>
  );
};

const Eyebrow = ({ children, light = false }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '10px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: light ? 'rgba(200,16,46,0.9)' : RED, marginBottom: '16px', fontFamily: P }}>
    <span style={{ display: 'inline-block', width: '24px', height: '2px', background: RED }} />
    {children}
  </div>
);

const Ticker = () => (
  <div style={{ background: RED, padding: '10px 0', overflow: 'hidden' }}>
    <div style={{ display: 'flex', width: 'max-content', animation: 'tickerMove 55s linear infinite' }}>
      {[...TICKER_ITEMS, ...TICKER_ITEMS].map((txt, i) => (
        <span key={i} style={{ whiteSpace: 'nowrap', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', padding: '0 40px', fontFamily: P }}>
          {txt}<span style={{ color: 'rgba(255,255,255,0.35)', margin: '0 8px' }}>·</span>
        </span>
      ))}
    </div>
  </div>
);

const HeroSection = () => (
  <div style={{ background: NAVY }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '480px' }}>
      <Reveal direction="left" style={{ padding: '72px 56px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
        {[['-60px','-60px','320px'],['-10px','-10px','180px']].map(([t,r,s], i) => (
          <div key={i} style={{ position: 'absolute', top: t, right: r, width: s, height: s, borderRadius: '50%', border: `1px solid rgba(200,16,46,${i===0?0.2:0.1})`, pointerEvents: 'none' }} />
        ))}
        <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '240px', height: '240px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '10px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: RED, background: 'rgba(200,16,46,0.12)', padding: '6px 16px', borderLeft: `3px solid ${RED}`, marginBottom: '24px', fontFamily: P }}>
            About Timeline Telematics
          </div>
          <h1 style={{ fontFamily: P, fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 20px' }}>
            Moving the World.<br />
            <em style={{ fontStyle: 'normal', color: RED }}>Smarter Every Day.</em>
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '380px', margin: '0 0 36px', fontFamily: P, fontWeight: 400 }}>
            Since 2012, we have been the trusted fleet management partner for operators who demand real-time GPS visibility, fuel control, driver safety, and operational intelligence — from Dubai to Abu Dhabi to Riyadh.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ height: '1px', width: '48px', background: RED }} />
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: P }}>Middle East Operations · Dubai, UAE</span>
          </div>
        </div>
      </Reveal>

      <Reveal direction="right" style={{ background: '#0f2044', padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
            <div style={{ fontFamily: P, fontSize: '40px', fontWeight: 800, color: '#fff', lineHeight: 1, minWidth: '110px', letterSpacing: '-0.02em' }}>
              {s.body}<span style={{ color: RED }}>{s.accent}</span>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: '3px', fontFamily: P }}>{s.name}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontFamily: P }}>{s.hint}</div>
            </div>
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: P }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', flexShrink: 0, boxShadow: '0 0 0 3px rgba(34,197,94,0.2)' }} />
          Platform live · 99.9% uptime SLA active
        </div>
      </Reveal>
    </div>
  </div>
);

const CEO = () => (
  <div style={{ background: 'linear-gradient(135deg, #f8f9fc 0%, #eef1f7 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(200,16,46,0.04)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: '-60px', left: '5%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(8,20,46,0.04)', pointerEvents: 'none' }} />
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px' }}>
      <Reveal style={{ textAlign: 'center', marginBottom: '64px' }}>
        <Eyebrow>Leadership</Eyebrow>
        <h2 style={{ fontFamily: P, fontSize: 'clamp(22px,2.8vw,36px)', fontWeight: 800, color: NAVY, marginTop: '8px' }}>
          Message from our <em style={{ fontStyle: 'normal', color: RED }}>Founder & CEO</em>
        </h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '72px', alignItems: 'center' }}>
        <Reveal direction="left" delay={0.05}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16px', left: '-16px', width: '100%', height: '100%', background: RED, zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, background: NAVY, overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '380px', overflow: 'hidden', background: `linear-gradient(160deg,#1a2f5a,${NAVY})` }}>
                <img src="/M,AhsanNaeem.jpg" alt="Muhammad Ahsan Naeem"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: `linear-gradient(to top, ${NAVY}, transparent)` }} />
              </div>
              <div style={{ padding: '20px 28px 24px', borderTop: `3px solid ${RED}` }}>
                <div style={{ fontFamily: P, fontWeight: 700, fontSize: '17px', color: '#fff', marginBottom: '4px' }}>Muhammad Ahsan Naeem</div>
                <div style={{ fontSize: '11px', color: RED, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontFamily: P }}>Founder & CEO</div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.12}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '100px', lineHeight: 0.8, color: RED, opacity: 0.12, marginBottom: '12px', userSelect: 'none' }}>"</div>
          <h2 style={{ fontFamily: P, fontSize: 'clamp(17px,1.9vw,25px)', fontWeight: 700, color: NAVY, lineHeight: 1.45, marginBottom: '28px', marginTop: '-12px' }}>
            We started with a simple belief —{' '}
            <em style={{ fontStyle: 'normal', color: RED }}>every fleet deserves to be smarter.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              "When I founded Timeline Telematics in 2012, the fleet management industry in fleet operations were still relying on paper logs, phone calls, and delayed reporting. Drivers were invisible once they left the depot. Fuel was leaking out of every operation. Safety was an afterthought.",
              "I knew technology could change this — across Dubai, the UAE, and the wider GCC region. Our mission was to build a platform powerful enough for enterprise fleets, yet simple enough for a Dubai logistics operator, construction fleet, cold-chain business, or regional enterprise.",
              "Today, with regional operators trusting our platform across the UAE and GCC, I'm proud of what we've built. But this is just the beginning — the future of fleet management is intelligent, predictive, and connected.",
            ].map((text, i) => (
              <p key={i} style={{ fontSize: '14px', color: '#4a5568', lineHeight: 1.85, margin: 0, fontFamily: P, fontWeight: 400 }}>{text}</p>
            ))}
          </div>
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #dde3ee', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '36px', height: '3px', background: RED, flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: P, fontWeight: 700, fontSize: '14px', color: NAVY }}>Muhammad Ahsan Naeem</div>
              <div style={{ fontFamily: P, fontSize: '11px', color: '#8892A4', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '2px' }}>Founder & CEO · Timeline Telematics</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
);

const TimelineSlider = () => {
  const [cur, setCur]         = useState(0);
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
          <Eyebrow light>Our Journey</Eyebrow>
          <h2 style={{ fontFamily: P, fontSize: 'clamp(26px,3.2vw,42px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginTop: '14px' }}>
            12 Years of <em style={{ fontStyle: 'normal', color: RED }}>Building Trust</em>
          </h2>
        </Reveal>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            {TIMELINE.map((_, i) => (
              <div key={i} onClick={() => goTo(i)} style={{ height: '4px', width: i === cur ? '40px' : '28px', background: i === cur ? RED : 'rgba(255,255,255,0.15)', cursor: 'pointer', transition: 'all 0.3s' }} />
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '1px', fontFamily: P }}>
              {String(cur+1).padStart(2,'0')} / {String(TIMELINE.length).padStart(2,'0')}
            </span>
            {['←','→'].map((arrow, i) => (
              <button key={i} onClick={() => goTo(cur+(i===0?-1:1))}
                style={{ width:'40px',height:'40px',border:'1px solid rgba(255,255,255,0.15)',background:'transparent',color:'#fff',cursor:'pointer',fontSize:'16px',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.25s',fontFamily:P }}
                onMouseEnter={e=>{e.currentTarget.style.background=RED;e.currentTarget.style.borderColor=RED;}}
                onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor='rgba(255,255,255,0.15)';}}
              >{arrow}</button>
            ))}
          </div>
        </div>

        <div style={{ height:'2px',background:'rgba(255,255,255,0.08)',marginBottom:'48px',overflow:'hidden' }}>
          <div style={{ height:'100%',background:RED,width:`${(cur+1)/TIMELINE.length*100}%`,transition:'width 0.5s cubic-bezier(0.4,0,0.2,1)' }} />
        </div>

        <div key={cur} style={{ display:'grid',gridTemplateColumns:'200px 1fr',animation:'fadeIn 0.4s ease' }}>
          <div style={{ background:RED,padding:'32px 24px',display:'flex',flexDirection:'column',justifyContent:'flex-end',overflow:'hidden',minHeight:'160px' }}>
            <div style={{ fontFamily:P,fontSize:'54px',fontWeight:800,color:'#fff',lineHeight:1,letterSpacing:'-0.03em' }}>{TIMELINE[cur].year}</div>
            <div style={{ fontSize:'9px',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',color:'rgba(255,255,255,0.6)',marginTop:'8px',fontFamily:P }}>{TIMELINE[cur].label}</div>
          </div>
          <div style={{ background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderLeft:'none',padding:'36px 44px',display:'flex',flexDirection:'column',justifyContent:'center' }}>
            <div style={{ fontFamily:P,fontSize:'18px',fontWeight:700,color:'#fff',marginBottom:'12px' }}>{TIMELINE[cur].title}</div>
            <p style={{ fontSize:'13.5px',color:'rgba(255,255,255,0.55)',lineHeight:1.8,margin:0,fontFamily:P,fontWeight:400 }}>{TIMELINE[cur].desc}</p>
          </div>
        </div>

        <div style={{ height:'2px',background:'rgba(255,255,255,0.06)',marginTop:'24px',overflow:'hidden' }}>
          <div style={{ height:'100%',background:RED,width:autoFill?'100%':'0',transition:autoFill?'width 4.8s linear':'none' }} />
        </div>
      </div>
    </div>
  );
};

const MetricBar = ({ label, pct, val, sub, delay }) => {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{ padding:'32px',border:'1px solid #E2E6ED',opacity:visible?1:0,transform:visible?'none':'translateY(20px)',transition:`all 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s` }}>
      <div style={{ fontSize:'10px',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#8892A4',marginBottom:'12px',fontFamily:P }}>{label}</div>
      <div style={{ height:'4px',background:'#E2E6ED',marginBottom:'14px',overflow:'hidden' }}>
        <div style={{ height:'100%',background:RED,width:visible?pct:'0',transition:visible?'width 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s':'none' }} />
      </div>
      <div style={{ fontFamily:P,fontSize:'34px',fontWeight:800,color:NAVY,lineHeight:1 }}>{val}</div>
      <div style={{ fontSize:'12px',color:'#8892A4',marginTop:'6px',fontFamily:P }}>{sub}</div>
    </div>
  );
};

const ValCard = ({ Icon, title, desc }) => {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ background:hover?NAVY:'#fff',padding:'36px 28px',transform:hover?'translateY(-4px)':'none',transition:'all 0.25s',cursor:'default' }}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
      <div style={{ width:'48px',height:'48px',background:hover?'rgba(200,16,46,0.18)':'rgba(200,16,46,0.07)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px',transition:'background 0.25s' }}>
        <Icon />
      </div>
      <div style={{ fontFamily:P,fontSize:'15px',fontWeight:700,color:hover?'#fff':NAVY,marginBottom:'10px',transition:'color 0.25s' }}>{title}</div>
      <div style={{ fontSize:'13px',color:hover?'rgba(255,255,255,0.5)':'#6b7280',lineHeight:1.7,transition:'color 0.25s',fontFamily:P,fontWeight:400 }}>{desc}</div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    if (!document.getElementById('about-kf')) {
      const s = document.createElement('style');
      s.id = 'about-kf';
      s.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        @keyframes tickerMove{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      `;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section id="about" style={{ fontFamily: P, background: '#fff' }}>
      <Ticker />
      <HeroSection />
      <CEO />
      <TimelineSlider />

      {/* Metrics */}
      <div style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px' }}>
          <Reveal style={{ marginBottom: '48px' }}>
            <Eyebrow>Performance Metrics</Eyebrow>
            <h2 style={{ fontFamily: P, fontSize: 'clamp(22px,2.8vw,36px)', fontWeight: 800, color: NAVY, marginTop: '12px' }}>
              Platform Built for <em style={{ fontStyle: 'normal', color: RED }}>Results</em>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            <MetricBar label="Fuel Cost Reduction" pct="30%"   val="30%"    sub="Average across all active fleets"         delay={0.05} />
            <MetricBar label="Platform Uptime"      pct="99.9%" val="99.9%"  sub="Guaranteed SLA, redundant infrastructure" delay={0.1}  />
            <MetricBar label="Days to ROI"          pct="85%"   val="60–90"  sub="Days to full investment recovery"         delay={0.15} />
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{ background: '#F6F7FA', padding: '80px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 56px' }}>
          <Reveal style={{ marginBottom: '48px' }}>
            <Eyebrow>Our Values</Eyebrow>
            <h2 style={{ fontFamily: P, fontSize: 'clamp(22px,2.8vw,36px)', fontWeight: 800, color: NAVY, marginTop: '12px' }}>
              What Drives <em style={{ fontStyle: 'normal', color: RED }}>Us Forward</em>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: '#E2E6ED', border: '1px solid #E2E6ED' }}>
            {VALUES.map((v, i) => <ValCard key={i} {...v} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
