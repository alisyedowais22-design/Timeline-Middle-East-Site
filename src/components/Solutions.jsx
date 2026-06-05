import React from 'react';
import { Link } from 'react-router-dom';

const RED = '#E8312A';
const NAVY = '#08142E';
const TEXT = '#5f6675';
const P = "'Poppins', sans-serif";

const SERVICES = [
  {
    id: 'vehicle-tracking',
    title: 'Vehicle Tracking',
    eyebrow: 'Live GPS Visibility',
    image:
      'https://images.unsplash.com/photo-1733135029996-a447004b7bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc:
      'Real-time GPS tracking for cars, trucks, vans, buses and enterprise fleets across Dubai, UAE and the Middle East. Monitor location, trips, routes, stops and vehicle movement from one intelligent platform.',
    features: [
      'Real-time vehicle location',
      'Trip history and playback',
      'Geo-fence alerts',
      'Route and stop monitoring',
    ],
  },
  {
    id: 'asset-tracking-software',
    title: 'Asset Tracking Software',
    eyebrow: 'Asset Visibility',
    image:
      'https://images.unsplash.com/photo-1666281466686-e1ca45742499?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc:
      'Track valuable field assets, trailers, machinery, generators, containers and mobile equipment with smart IoT devices and a centralized asset monitoring dashboard.',
    features: [
      'Trailer and equipment tracking',
      'Unauthorized movement alerts',
      'Asset utilization insights',
      'Long-life tracking device support',
    ],
  },
  {
    id: 'fuel-monitoring',
    title: 'Fuel Monitoring',
    eyebrow: 'Fuel Intelligence',
    image:
      'https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc:
      'Control fuel cost with accurate fuel level visibility, refill reports, fuel theft alerts and consumption analysis for logistics, construction, oil & gas and heavy fleet operations.',
    features: [
      'Fuel theft alerts',
      'Refill and drain detection',
      'Consumption reports',
      'Fuel sensor integration',
    ],
  },
  {
    id: 'temperature-monitoring',
    title: 'Temperature Monitoring',
    eyebrow: 'Cold Chain Control',
    image:
      'https://images.unsplash.com/photo-1595508774032-4609924fbfe5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc:
      'Monitor temperature-sensitive deliveries for food, pharma, healthcare and cold chain logistics. Get instant alerts when temperature limits are crossed during transit.',
    features: [
      'Temperature threshold alerts',
      'Cold chain reporting',
      'Live vehicle and cargo visibility',
      'Healthcare and food logistics support',
    ],
  },
  {
    id: 'container-tracking',
    title: 'Container Tracking',
    eyebrow: 'Cargo & Container Visibility',
    image:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc:
      'Track containers, cargo units and logistics movement across ports, yards, warehouses and long-haul transport routes with reliable GPS and asset monitoring technology.',
    features: [
      'Container location tracking',
      'Port and yard visibility',
      'Movement alerts',
      'Cargo security support',
    ],
  },
  {
    id: 'tire-management',
    title: 'Tire Management System',
    eyebrow: 'Safety & Maintenance',
    image:
      'https://images.unsplash.com/photo-1645445522156-9ac06bc7a767?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc:
      'Improve fleet safety and reduce downtime with tire health monitoring, pressure visibility and maintenance alerts for trucks, buses and heavy vehicles.',
    features: [
      'Tire pressure monitoring',
      'Maintenance alerts',
      'Safety risk reduction',
      'Heavy fleet support',
    ],
  },
  {
    id: 'personal-tracking',
    title: 'Personal Tracking Software',
    eyebrow: 'People Safety',
    image:
      'https://plus.unsplash.com/premium_photo-1749115472028-fdd7199fbe1c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc:
      'Location visibility and safety monitoring for field staff, security teams, drivers, supervisors and mobile workforce operations across Dubai and regional routes.',
    features: [
      'Live staff location',
      'Emergency visibility',
      'Field team monitoring',
      'Mobile workforce support',
    ],
  },
  {
    id: 'portable-tracking-device',
    title: 'Portable Tracking Device',
    eyebrow: 'Flexible Tracking',
    image:
      'https://images.unsplash.com/photo-1736513963979-90b024508341?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc:
      'Compact and portable GPS tracking devices for temporary vehicles, rental assets, personal tracking, cargo movement and field operations that need flexible deployment.',
    features: [
      'Portable GPS device support',
      'Quick deployment',
      'Temporary asset monitoring',
      'Rechargeable tracking options',
    ],
  },
  {
    id: 'auto-conductor',
    title: 'Auto Conductor',
    eyebrow: 'Smart Vehicle Control',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc:
      'Smart automation and vehicle operation control for modern fleets. Connect devices, sensors and platform intelligence to create safer and more efficient mobility workflows.',
    features: [
      'Vehicle control workflows',
      'Device and sensor integration',
      'Automation-ready fleet operations',
      'Smart mobility support',
    ],
  },
];

const CHECK = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M20 6L9 17L4 12"
      stroke={RED}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ARROW = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14M13 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Solutions = () => {
  return (
    <section style={{ fontFamily: P, background: '#fff' }}>
      {/* Hero */}
      <div
        style={{
          position: 'relative',
          minHeight: '540px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '90px 24px',
          color: '#fff',
          background:
            'linear-gradient(rgba(3,7,18,0.54), rgba(3,7,18,0.74)), url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1800&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(8,20,46,0.82) 0%, rgba(8,20,46,0.50) 52%, rgba(3,7,18,0.75) 100%)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1000px',
            textAlign: 'center',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(232,49,42,0.20)',
              color: '#fff',
              borderRadius: '999px',
              padding: '8px 22px',
              marginBottom: '24px',
              fontSize: '11px',
              fontWeight: 900,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              border: '1px solid rgba(232,49,42,0.28)',
              backdropFilter: 'blur(4px)',
            }}
          >
            Fleet Services
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(40px, 5vw, 68px)',
              lineHeight: 1.12,
              letterSpacing: '-1.6px',
              fontWeight: 900,
            }}
          >
            Smart Telematics Services for{' '}
            <span style={{ color: RED }}>Middle East Fleets</span>
          </h1>

          <p
            style={{
              margin: '24px auto 0',
              maxWidth: '780px',
              color: 'rgba(255,255,255,0.84)',
              fontSize: '17px',
              lineHeight: 1.8,
            }}
          >
            Timeline Telematics delivers GPS tracking, fuel monitoring, asset visibility,
            temperature monitoring, AI dashcams and fleet intelligence services for Dubai,
            UAE and regional operations.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginTop: '34px',
            }}
          >
            <Link
              to="/contact"
              style={{
                height: '52px',
                padding: '0 30px',
                borderRadius: '8px',
                background: RED,
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 900,
                boxShadow: '0 18px 42px rgba(232,49,42,0.30)',
              }}
            >
              Book a Demo
            </Link>

            <a
              href="#services-grid"
              style={{
                height: '52px',
                padding: '0 28px',
                borderRadius: '8px',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 900,
                border: '1px solid rgba(255,255,255,0.24)',
                background: 'rgba(255,255,255,0.08)',
              }}
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Quick Services Navigation */}
      <div style={{ padding: '34px 24px', background: '#fff' }}>
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
          className="services-nav-grid"
        >
          {SERVICES.slice(0, 6).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                border: '1px solid #eef0f4',
                borderRadius: '16px',
                padding: '20px',
                background: '#fff',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(8,20,46,0.06)',
                transition: 'all 0.25s ease',
              }}
              className="service-nav-card"
            >
              <div
                style={{
                  color: RED,
                  fontSize: '10px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '7px',
                }}
              >
                {item.eyebrow}
              </div>

              <div
                style={{
                  color: NAVY,
                  fontSize: '18px',
                  fontWeight: 900,
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Services Intro */}
      <div id="services-grid" style={{ padding: '76px 24px 30px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              color: RED,
              fontSize: '11px',
              fontWeight: 900,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            What We Offer
          </div>

          <h2
            style={{
              margin: 0,
              color: NAVY,
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 900,
              letterSpacing: '-1.2px',
            }}
          >
            Complete Fleet Services Under One Platform
          </h2>

          <p
            style={{
              margin: '16px auto 0',
              maxWidth: '760px',
              color: TEXT,
              fontSize: '15.5px',
              lineHeight: 1.8,
            }}
          >
            Our services are designed for modern fleet operators who need real-time control,
            cost reduction, driver safety, asset protection and data-backed decision making.
          </p>
        </div>
      </div>

      {/* Service Rows */}
      <div style={{ padding: '34px 24px 90px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gap: '28px' }}>
          {SERVICES.map((service, index) => {
            const reverse = index % 2 !== 0;

            return (
              <article
                key={service.id}
                id={service.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: reverse ? '1fr 0.9fr' : '0.9fr 1fr',
                  gap: '0',
                  background: '#fff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 16px 45px rgba(8,20,46,0.08)',
                }}
                className="service-row"
              >
                {!reverse && (
                  <div
                    style={{
                      minHeight: '360px',
                      backgroundImage: `linear-gradient(rgba(8,20,46,0.10), rgba(8,20,46,0.28)), url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                )}

                <div
                  style={{
                    padding: '42px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      color: RED,
                      fontSize: '10px',
                      fontWeight: 900,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      marginBottom: '12px',
                    }}
                  >
                    {service.eyebrow}
                  </div>

                  <h3
                    style={{
                      margin: '0 0 16px',
                      color: NAVY,
                      fontSize: 'clamp(26px, 3vw, 38px)',
                      fontWeight: 900,
                      letterSpacing: '-1px',
                      lineHeight: 1.16,
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      margin: '0 0 24px',
                      color: TEXT,
                      fontSize: '15px',
                      lineHeight: 1.8,
                    }}
                  >
                    {service.desc}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }} className="service-feature-grid">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '9px',
                          color: '#374151',
                          fontSize: '13px',
                          fontWeight: 700,
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ marginTop: 2, flexShrink: 0 }}>{CHECK}</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    style={{
                      marginTop: '28px',
                      color: RED,
                      fontSize: '13px',
                      fontWeight: 900,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      width: 'fit-content',
                    }}
                  >
                    Request This Service {ARROW}
                  </Link>
                </div>

                {reverse && (
                  <div
                    style={{
                      minHeight: '360px',
                      backgroundImage: `linear-gradient(rgba(8,20,46,0.10), rgba(8,20,46,0.28)), url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          padding: '78px 24px',
          background: 'linear-gradient(135deg, #08142E 0%, #101827 55%, #1b0f12 100%)',
          color: '#fff',
        }}
      >
        <div
          style={{
            maxWidth: '1050px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '30px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                color: RED,
                fontSize: '10px',
                fontWeight: 900,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Need a tailored service package?
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 900,
                lineHeight: 1.18,
              }}
            >
              Let’s design the right fleet solution for your operation.
            </h2>

            <p
              style={{
                margin: '14px 0 0',
                maxWidth: '650px',
                color: 'rgba(255,255,255,0.72)',
                fontSize: '15px',
                lineHeight: 1.75,
              }}
            >
              Tell us your fleet size, industry, route network and operational challenges.
              Our team will recommend the right devices, platform features and deployment plan.
            </p>
          </div>

          <Link
            to="/contact"
            style={{
              height: '52px',
              padding: '0 30px',
              borderRadius: '10px',
              background: RED,
              color: '#fff',
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              fontWeight: 900,
              fontSize: '14px',
              boxShadow: '0 18px 44px rgba(232,49,42,0.30)',
            }}
          >
            Book a Demo
          </Link>
        </div>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .service-nav-card:hover {
          transform: translateY(-4px);
          border-color: rgba(232,49,42,0.30) !important;
          box-shadow: 0 18px 42px rgba(8,20,46,0.12) !important;
        }

        @media (max-width: 980px) {
          .services-nav-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .service-row {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .services-nav-grid {
            grid-template-columns: 1fr !important;
          }

          .service-feature-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Solutions;