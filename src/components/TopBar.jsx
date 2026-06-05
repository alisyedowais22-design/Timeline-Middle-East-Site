import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Search } from 'lucide-react';

const SOCIALS = [
  { Icon: Linkedin, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Facebook, href: '#' },
  { Icon: Youtube, href: '#' },
  { Icon: Instagram, href: '#' },
];

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const iconStyle = {
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af',
    borderRadius: '4px',
    transition: 'color 0.2s ease, background 0.2s ease',
    textDecoration: 'none',
  };

  return (
    <div
      style={{
        background: '#1a1a1a',
        borderBottom: '1px solid #2a2a2a',
        height: scrolled ? '0px' : '40px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1002,
        transition: 'height 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <div
          style={{
            color: '#cbd5e1',
            fontSize: '12px',
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            whiteSpace: 'nowrap',
          }}
        >
          Dubai, UAE • Middle East Fleet Intelligence • +971 56 386 3615
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
          }}
        >
          {SOCIALS.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              style={iconStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <Icon size={15} />
            </a>
          ))}

          <div
            style={{
              width: '1px',
              height: '16px',
              background: '#3a3a3a',
              margin: '0 4px',
            }}
          />

          <a
            href="#"
            style={iconStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9ca3af';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Search size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;