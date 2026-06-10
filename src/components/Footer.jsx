import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from 'lucide-react';

const RED = '#E52B2E';
const DARK = '#111827';
const TEXT = '#9CA3AF';
const MUTED = '#6B7280';
const P = "'Poppins', sans-serif";

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const PRODUCT_LINKS = [
  { label: 'Fleet GPS Trackers', to: '/products' },
  { label: 'AI Dashcams', to: '/products' },
  { label: 'Asset Trackers', to: '/products' },
  { label: 'CAN & OBD Trackers', to: '/products' },
  { label: 'Sensors & Accessories', to: '/products' },
];

const SOCIALS = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

const FooterHeading = ({ children }) => (
  <h4
    style={{
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: 900,
      letterSpacing: '3.2px',
      textTransform: 'uppercase',
      margin: '0 0 22px',
      paddingBottom: '14px',
      borderBottom: `1px solid rgba(229,43,46,0.55)`,
      fontFamily: P,
    }}
  >
    {children}
  </h4>
);

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      display: 'block',
      color: TEXT,
      fontSize: '14px',
      fontWeight: 400,
      padding: '6px 0',
      lineHeight: '1.55',
      textDecoration: 'none',
      transition: 'all 0.25s ease',
      fontFamily: P,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = RED;
      e.currentTarget.style.transform = 'translateX(4px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = TEXT;
      e.currentTarget.style.transform = 'translateX(0)';
    }}
  >
    {children}
  </Link>
);

const ContactItem = ({ Icon, label, children, href }) => {
  const content = (
    <>
      <div
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '9px',
          background: 'rgba(229,43,46,0.13)',
          color: RED,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={15} />
      </div>

      <div>
        <div
          style={{
            color: MUTED,
            fontSize: '9.5px',
            fontWeight: 900,
            letterSpacing: '2.1px',
            textTransform: 'uppercase',
            marginBottom: '4px',
            fontFamily: P,
          }}
        >
          {label}
        </div>

        <div
          style={{
            color: '#E5E7EB',
            fontSize: '13.5px',
            fontWeight: 600,
            lineHeight: '1.55',
            fontFamily: P,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          textDecoration: 'none',
          marginBottom: '16px',
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        marginBottom: '16px',
      }}
    >
      {content}
    </div>
  );
};

const Footer = () => (
  <footer
    style={{
      background: DARK,
      color: TEXT,
      fontFamily: P,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        height: '8px',
        background: RED,
      }}
    />

    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '72px 32px 28px',
      }}
    >
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.12fr 0.85fr 0.95fr 1.25fr',
          gap: '52px',
          alignItems: 'start',
        }}
      >
        {/* Brand */}
        <div>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              marginBottom: '34px',
              width: '198px',
              overflow: 'visible',
            }}
          >
            <img
              src="/TimelineLogoWhite.png"
              alt="Timeline Telematics"
              style={{
                width: '198px',
                height: 'auto',
                display: 'block',
                transform: 'scale(1.35)',
                transformOrigin: 'left center',
              }}
            />
          </Link>

          <p
            style={{
              color: TEXT,
              fontSize: '13.8px',
              lineHeight: '1.8',
              margin: '0 0 24px',
              maxWidth: '315px',
              fontFamily: P,
            }}
          >
            Middle East fleet intelligence platform delivering GPS tracking,
            AI dashcams, fuel monitoring, asset visibility, and smart telematics
            solutions for Dubai, UAE, and GCC operations.
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  width: '37px',
                  height: '37px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.11)',
                  color: '#D1D5DB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(229,43,46,0.18)';
                  e.currentTarget.style.borderColor = 'rgba(229,43,46,0.5)';
                  e.currentTarget.style.color = RED;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.11)';
                  e.currentTarget.style.color = '#D1D5DB';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <FooterHeading>Quick Links</FooterHeading>
          {QUICK_LINKS.map((item) => (
            <FooterLink key={item.label} to={item.to}>
              {item.label}
            </FooterLink>
          ))}
        </div>

        {/* Products */}
        <div>
          <FooterHeading>Products</FooterHeading>
          {PRODUCT_LINKS.map((item) => (
            <FooterLink key={item.label} to={item.to}>
              {item.label}
            </FooterLink>
          ))}
        </div>

        {/* Contact */}
        <div>
          <FooterHeading>Middle East Office</FooterHeading>

          <ContactItem
            Icon={Mail}
            label="Email"
            href="mailto:info@timelinetelematics.com"
          >
            info@timelinetelematics.com
          </ContactItem>

          <ContactItem Icon={Phone} label="Phone" href="tel:+971563863615">
            +971 56 386 3615
          </ContactItem>

          <ContactItem
            Icon={MessageCircle}
            label="WhatsApp"
            href="https://wa.me/971563863615"
          >
            Chat Now
          </ContactItem>

          <ContactItem Icon={MapPin} label="Dubai Office">
            Dubai Silicon Oasis, Dubai, United Arab Emirates
          </ContactItem>

          <div style={{ marginTop: '18px' }}>
            <FooterHeading>Regional Sites</FooterHeading>

            <div style={{ display: 'grid', gap: '8px' }}>
              <a
                href="https://website.teletix.pk/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  color: '#D1D5DB',
                  fontSize: '13px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontFamily: P,
                }}
              >
                🇵🇰 Pakistan <span style={{ color: '#22C55E' }}>● Live</span>
              </a>

              <a
                href="https://global.timelinetelematics.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  color: '#D1D5DB',
                  fontSize: '13px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontFamily: P,
                }}
              >
                🇦🇪 Middle East <span style={{ color: '#22C55E' }}>● Active</span>
              </a>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  color: MUTED,
                  fontSize: '13px',
                  fontWeight: 700,
                  fontFamily: P,
                }}
              >
                🇪🇺 Europe <span style={{ color: '#FBBF24' }}>● Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: '52px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.10)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '18px',
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            margin: 0,
            color: MUTED,
            fontSize: '13px',
            fontFamily: P,
          }}
        >
          © {new Date().getFullYear()} Timeline Telematics Middle East. All rights reserved.
        </p>

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a
            href="#"
            style={{
              color: MUTED,
              fontSize: '13px',
              textDecoration: 'none',
              fontFamily: P,
            }}
          >
            Privacy Policy
          </a>

          <a
            href="#"
            style={{
              color: MUTED,
              fontSize: '13px',
              textDecoration: 'none',
              fontFamily: P,
            }}
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 1050px) {
        .footer-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }

      @media (max-width: 640px) {
        .footer-grid {
          grid-template-columns: 1fr !important;
          gap: 38px !important;
        }
      }
    `}</style>
  </footer>
);

export default Footer;