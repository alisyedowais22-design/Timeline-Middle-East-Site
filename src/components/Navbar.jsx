import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MenuIcon = () => <span style={{ fontSize: '24px', lineHeight: 1 }}>☰</span>;
const CloseIcon = () => <span style={{ fontSize: '24px', lineHeight: 1 }}>✕</span>;
const ChevronDown = () => <span style={{ fontSize: '12px', marginLeft: '4px' }}>▼</span>;

const DEVICES = [
  {
    category: 'Vehicle Trackers',
    items: [
      { label: 'GT06N 4G', desc: 'Classic Upgraded', to: '/products/gt06n-4g' },
      { label: 'VG03', desc: 'Discreet Tracking', to: '/products/vg03' },
      { label: 'VL103D', desc: 'Tiny Device', to: '/products/vl103d' },
      { label: 'VL103M', desc: 'Minimal Form', to: '/products/vl103m' },
      { label: 'VL110C', desc: 'Any Vehicle', to: '/products/vl110c' },
      { label: 'VL802', desc: 'More Visibility', to: '/products/vl802' },
      { label: 'VL808', desc: 'Intelligent Tracking', to: '/products/vl808' },
      { label: 'X3', desc: 'Voice Tracker', to: '/products/x3' },
      { label: 'GT06N', desc: 'The Classic', to: '/products/gt06n' },
    ],
  },
  {
    category: 'AI Dashcams',
    items: [
      { label: 'JC371', desc: 'AI Dashcam with ADAS', to: '/products/jc371' },
      { label: 'JC450', desc: 'Multi-Channel AI Dashcam', to: '/products/jc450' },
      { label: 'JC261', desc: 'Dual Camera AI Dashcam', to: '/products/jc261' },
      { label: 'JC261P', desc: 'Pro AI Dashcam', to: '/products/jc261p' },
      { label: 'JC400D', desc: '4G AI Dashcam', to: '/products/jc400d' },
    ],
  },
  {
    category: 'CAN & OBD',
    items: [{ label: 'VL502', desc: 'Fleet CAN Tracker', to: '/products/vl502' }],
  },
  {
    category: 'Asset Trackers',
    items: [
      { label: 'LL303PRO', desc: '5 Years Battery', to: '/products/ll303pro' },
      { label: 'LL301', desc: 'Silent Protector', to: '/products/ll301' },
    ],
  },
  {
    category: 'Personal Trackers',
    items: [{ label: 'PL200', desc: 'Silent Guardian', to: '/products/pl200' }],
  },
  {
    category: 'Non-AI Dashcams',
    items: [{ label: 'JC181', desc: 'Basic Dashcam', to: '/products/jc181' }],
  },
  {
    category: 'Accessories',
    items: [{ label: 'All Accessories', desc: 'Cables, Cameras & Sensors', to: '/accessories' }],
  },
];

const SERVICES = [
  { label: 'Vehicle Tracking', desc: 'Real-time GPS tracking for cars, trucks and fleets', to: '/services/vehicle-tracking' },
  { label: 'Asset Tracking Software', desc: 'Track trailers, containers, equipment and field assets', to: '/services/asset-tracking-software' },
  { label: 'Fuel Monitoring', desc: 'Fuel level visibility, theft alerts and usage reports', to: '/services/fuel-monitoring' },
  { label: 'Temperature Monitoring', desc: 'Cold chain monitoring for food, pharma and healthcare', to: '/services/temperature-monitoring' },
  { label: 'Container Tracking', desc: 'Visibility for containers, cargo and logistics movement', to: '/services/container-tracking' },
  { label: 'Tire Management System', desc: 'Improve safety with tire pressure and health monitoring', to: '/services/tire-management-system' },
  { label: 'Personal Tracking Software', desc: 'Safety and location visibility for staff and field teams', to: '/services/personal-tracking-software' },
  { label: 'Portable Tracking Device', desc: 'Compact tracking for temporary assets and mobile use', to: '/services/portable-tracking-device' },
  { label: 'Auto Conductor', desc: 'Smart automation and control for vehicle operations', to: '/services/auto-conductor' },
];

const INDUSTRIES = [
  { label: 'Logistics & Delivery', desc: 'Fleet visibility for delivery and transport companies', slug: 'logistics' },
  { label: 'Public Transport', desc: 'Smart mobility for buses and passenger fleets', slug: 'public-transport' },
  { label: 'Oil & Gas Fleets', desc: 'High-security monitoring for field operations', slug: 'oil-gas' },
  { label: 'Construction Fleets', desc: 'Equipment, vehicle and site tracking', slug: 'construction' },
  { label: 'Cold Chain & Healthcare', desc: 'Temperature visibility for critical deliveries', slug: 'healthcare' },
  { label: 'Government Fleets', desc: 'Accountable operations and fleet control', slug: 'government' },
  { label: 'Agriculture & Field Assets', desc: 'Track field teams, machinery and assets', slug: 'agriculture' },
  { label: 'Rental & Leasing', desc: 'Vehicle control for rental and leasing fleets', slug: 'rental-leasing' },
  { label: 'Waste Management', desc: 'Route visibility for waste collection fleets', slug: 'waste-management' },
];

const HoverDropdown = ({ label, to, active, children }) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const show = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };

  const hide = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div style={{ position: 'relative' }} onMouseEnter={show} onMouseLeave={hide}>
      <button
        onClick={() => {
          setOpen(false);
          navigate(to);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '7px 14px',
          fontSize: '13.5px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          color: open || active ? '#E8312A' : '#374151',
          borderRadius: '7px',
          background: 'none',
          border: 'none',
          borderBottom: active ? '2px solid #E8312A' : '2px solid transparent',
          cursor: 'pointer',
          transition: 'color 0.2s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {label} <ChevronDown />
      </button>

      {open && (
        <div
          onMouseEnter={show}
          onMouseLeave={hide}
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#fff',
            borderRadius: '14px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
            border: '1px solid #f0f0f0',
            zIndex: 9999,
            animation: 'fadeDown 0.15s ease',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileProdOpen, setMobileProdOpen] = useState(false);

  const location = useLocation();

  const isActive = (to) => location.pathname === to;
  const isPrefixActive = (prefix) => location.pathname.startsWith(prefix);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    setMobileProdOpen(false);
  }, [location.pathname]);

  const linkStyle = (to) => ({
    padding: '7px 14px',
    fontSize: '13.5px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    color: isActive(to) ? '#E8312A' : '#374151',
    borderRadius: '7px',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    borderBottom: isActive(to) ? '2px solid #E8312A' : '2px solid transparent',
    whiteSpace: 'nowrap',
  });

  const mobileMainLinkStyle = (to) => ({
    display: 'block',
    padding: '11px 0',
    fontSize: '15px',
    fontWeight: 600,
    fontFamily: 'Poppins, sans-serif',
    color: isActive(to) ? '#E8312A' : '#374151',
    borderBottom: '1px solid #f3f4f6',
    textDecoration: 'none',
  });

  const dropdownItemStyle = {
    display: 'block',
    padding: '9px 10px',
    borderRadius: 8,
    textDecoration: 'none',
    transition: 'background 0.15s ease',
  };

  const itemTitleStyle = {
    fontSize: '13px',
    fontWeight: 700,
    color: '#111827',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: 1.3,
  };

  const itemDescStyle = {
    fontSize: '10.5px',
    color: '#9ca3af',
    marginTop: 2,
    lineHeight: 1.3,
    fontFamily: 'Poppins, sans-serif',
  };

  const onItemEnter = (e) => {
    e.currentTarget.style.background = '#fef2f2';
  };

  const onItemLeave = (e) => {
    e.currentTarget.style.background = 'transparent';
  };

  return (
    <>
      <nav
        className="site-navbar"
        style={{
          background: '#fff',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
          position: 'fixed',
          top: scrolled ? '0' : '40px',
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="navbar-inner"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          <Link
            to="/"
            className="navbar-logo-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              textDecoration: 'none',
              height: '72px',
              width: '245px',
              flexShrink: 0,
              padding: 0,
              margin: 0,
              overflow: 'visible',
            }}
          >
            <img
              src="/TimelineLogo.png"
              alt="Timeline Telematics"
              className="navbar-logo-img"
              style={{
                width: '245px',
                height: 'auto',
                maxHeight: '58px',
                display: 'block',
                objectFit: 'contain',
                margin: 0,
                padding: 0,
                transform: 'scale(1.45)',
                transformOrigin: 'left center',
              }}
            />
          </Link>

          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <Link to="/" style={linkStyle('/')}>Home</Link>

            <HoverDropdown label="Services" to="/solutions" active={isActive('/solutions') || isPrefixActive('/services')}>
              <div style={{ padding: '14px 18px', width: 560, maxWidth: '92vw' }}>
                <div style={{
                  fontSize: '10.5px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#9ca3af',
                  fontFamily: 'Poppins, sans-serif',
                  textTransform: 'uppercase',
                  paddingBottom: 8,
                  marginBottom: 10,
                  borderBottom: '1px solid #f3f4f6',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span>Fleet Tracking Services</span>
                  <Link to="/solutions" style={{ fontSize: '12.5px', fontWeight: 800, color: '#E8312A', textDecoration: 'none', textTransform: 'none', letterSpacing: 0 }}>
                    View All →
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '6px 12px' }}>
                  {SERVICES.map((item) => (
                    <Link key={item.label} to={item.to} style={dropdownItemStyle} onMouseEnter={onItemEnter} onMouseLeave={onItemLeave}>
                      <div style={itemTitleStyle}>{item.label}</div>
                      <div style={itemDescStyle}>{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </HoverDropdown>

            <HoverDropdown label="Industries" to="/industries" active={isPrefixActive('/industries')}>
              <div style={{ padding: '14px 18px', width: 560, maxWidth: '92vw' }}>
                <div style={{
                  fontSize: '10.5px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#9ca3af',
                  fontFamily: 'Poppins, sans-serif',
                  textTransform: 'uppercase',
                  paddingBottom: 8,
                  marginBottom: 10,
                  borderBottom: '1px solid #f3f4f6',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span>Industries We Serve</span>
                  <Link to="/industries" style={{ fontSize: '12.5px', fontWeight: 800, color: '#E8312A', textDecoration: 'none', textTransform: 'none', letterSpacing: 0 }}>
                    View All →
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '6px 12px' }}>
                  {INDUSTRIES.map((ind) => (
                    <Link key={ind.slug} to={`/industries/${ind.slug}`} style={dropdownItemStyle} onMouseEnter={onItemEnter} onMouseLeave={onItemLeave}>
                      <div style={itemTitleStyle}>{ind.label}</div>
                      <div style={itemDescStyle}>{ind.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </HoverDropdown>

            <Link to="/case-studies" style={linkStyle('/case-studies')}>Case Studies</Link>

            <HoverDropdown label="Products" to="/products" active={isPrefixActive('/products') || isActive('/accessories')}>
              <div style={{ padding: '12px 16px', width: 1040, maxWidth: '92vw' }}>
                <div style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#9ca3af',
                  fontFamily: 'Poppins, sans-serif',
                  textTransform: 'uppercase',
                  paddingBottom: 8,
                  marginBottom: 10,
                  borderBottom: '1px solid #f3f4f6',
                }}>
                  Fleet Hardware & Accessories
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px 12px' }}>
                  {DEVICES.map((cat) => (
                    <div key={cat.category}>
                      <div style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        color: '#E8312A',
                        fontFamily: 'Poppins, sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: 4,
                        paddingBottom: 4,
                        borderBottom: '2px solid #fef2f2',
                      }}>
                        {cat.category}
                      </div>

                      {cat.items.map((item) => (
                        <Link key={item.label} to={item.to} style={{ display: 'block', padding: '3px 5px', borderRadius: 6, textDecoration: 'none', transition: 'background 0.15s' }} onMouseEnter={onItemEnter} onMouseLeave={onItemLeave}>
                          <div style={{ fontSize: '12px', fontWeight: 600, color: '#111827', fontFamily: 'Poppins, sans-serif', lineHeight: '1.3' }}>
                            {item.label}
                          </div>
                          <div style={{ fontSize: '10.5px', color: '#9ca3af', marginTop: 1, lineHeight: '1.2' }}>
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid #f3f4f6', textAlign: 'center' }}>
                  <Link to="/products" style={{ fontSize: '13px', fontWeight: 700, color: '#E8312A', fontFamily: 'Poppins, sans-serif', textDecoration: 'none' }}>
                    View All Products →
                  </Link>
                </div>
              </div>
            </HoverDropdown>

            <Link to="/about" style={linkStyle('/about')}>About</Link>
            <Link to="/contact" style={linkStyle('/contact')}>Contact</Link>
          </div>

          <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link
              to="/contact"
              className="navbar-demo-btn"
              style={{
                background: '#E8312A',
                color: '#fff',
                padding: '9px 20px',
                borderRadius: '8px',
                fontSize: '13.5px',
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                textDecoration: 'none',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              Book a Demo
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mob-btn"
              type="button"
              aria-label="Toggle menu"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#374151',
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-menu" style={{ background: '#fff', borderTop: '1px solid #f3f4f6', padding: '12px 24px 20px' }}>
            <Link to="/" style={mobileMainLinkStyle('/')}>Home</Link>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '11px 0',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#374151',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #f3f4f6',
                  cursor: 'pointer',
                }}
              >
                Services <ChevronDown />
              </button>

              {mobileServicesOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  <Link to="/solutions" style={{ display: 'block', padding: '10px 0', fontSize: '13px', fontWeight: 700, color: '#E8312A', textDecoration: 'none', borderBottom: '1px solid #f9fafb' }}>
                    View All Services →
                  </Link>
                  {SERVICES.map((item) => (
                    <Link key={item.label} to={item.to} style={{ display: 'block', padding: '9px 0', fontSize: '13.5px', fontWeight: 600, color: '#374151', borderBottom: '1px solid #f9fafb', textDecoration: 'none' }}>
                      <div>{item.label}</div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: 2 }}>{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '11px 0',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#374151',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #f3f4f6',
                  cursor: 'pointer',
                }}
              >
                Industries <ChevronDown />
              </button>

              {mobileIndustriesOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  <Link to="/industries" style={{ display: 'block', padding: '10px 0', fontSize: '13px', fontWeight: 700, color: '#E8312A', textDecoration: 'none', borderBottom: '1px solid #f9fafb' }}>
                    View All Industries →
                  </Link>
                  {INDUSTRIES.map((ind) => (
                    <Link key={ind.slug} to={`/industries/${ind.slug}`} style={{ display: 'block', padding: '9px 0', fontSize: '13.5px', fontWeight: 600, color: '#374151', borderBottom: '1px solid #f9fafb', textDecoration: 'none' }}>
                      <div>{ind.label}</div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: 2 }}>{ind.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/case-studies" style={mobileMainLinkStyle('/case-studies')}>Case Studies</Link>

            <div>
              <button
                onClick={() => setMobileProdOpen(!mobileProdOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '11px 0',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#374151',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #f3f4f6',
                  cursor: 'pointer',
                }}
              >
                Products <ChevronDown />
              </button>

              {mobileProdOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  {DEVICES.map((cat) => (
                    <div key={cat.category} style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#E8312A', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '8px 0 4px' }}>
                        {cat.category}
                      </div>
                      {cat.items.map((item) => (
                        <Link key={item.label} to={item.to} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f9fafb', textDecoration: 'none' }}>
                          <div>
                            <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#111827' }}>{item.label}</div>
                            <div style={{ fontSize: '11px', color: '#9ca3af' }}>{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}

                  <Link to="/products" style={{ display: 'block', padding: '10px 0', fontSize: '13px', fontWeight: 700, color: '#E8312A', textDecoration: 'none' }}>
                    View All Products →
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" style={mobileMainLinkStyle('/about')}>About</Link>
            <Link to="/contact" style={mobileMainLinkStyle('/contact')}>Contact</Link>
          </div>
        )}

        <style>{`
          @media(max-width: 900px) {
            .site-navbar {
              top: 0 !important;
            }

            .navbar-inner {
              height: 74px !important;
              min-height: 74px !important;
              padding: 0 18px !important;
              display: flex !important;
              align-items: center !important;
            }

            .desktop-nav {
              display: none !important;
            }

            .navbar-logo-link {
              height: 74px !important;
              width: 175px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: flex-start !important;
              padding: 0 !important;
              margin: 0 !important;
              overflow: visible !important;
            }

            .navbar-logo-img {
              width: 175px !important;
              max-width: 175px !important;
              max-height: 52px !important;
              height: auto !important;
              display: block !important;
              object-fit: contain !important;
              margin: 0 !important;
              padding: 0 !important;
              transform: scale(1.22) !important;
              transform-origin: left center !important;
            }

            .navbar-demo-btn {
              display: none !important;
            }

            .mob-btn {
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              width: 46px !important;
              height: 46px !important;
              padding: 0 !important;
              margin: 0 !important;
              border-radius: 12px !important;
              background: #f9fafb !important;
              border: 1px solid #e5e7eb !important;
              flex-shrink: 0 !important;
            }

            .mobile-menu {
              max-height: calc(100vh - 74px) !important;
              overflow-y: auto !important;
              padding: 12px 20px 22px !important;
            }
          }

          @media(max-width: 420px) {
            .navbar-inner {
              height: 72px !important;
              min-height: 72px !important;
              padding: 0 16px !important;
            }

            .navbar-logo-link {
              height: 72px !important;
              width: 165px !important;
            }

            .navbar-logo-img {
              width: 165px !important;
              max-width: 165px !important;
              max-height: 50px !important;
              transform: scale(1.18) !important;
              transform-origin: left center !important;
            }

            .mobile-menu {
              max-height: calc(100vh - 72px) !important;
            }
          }

          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(-6px);
            }

            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;