import React from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  Bus,
  Fuel,
  Building2,
  Landmark,
  Tractor,
  Car,
  Trash2,
  Snowflake,
  ArrowRight,
  CheckCircle,
  BriefcaseBusiness,
} from 'lucide-react';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RED = '#E8312A';
const NAVY = '#08142E';
const P = "'Poppins', sans-serif";

const INDUSTRIES = [
  {
    title: 'Logistics & Delivery',
    slug: 'logistics',
    icon: Truck,
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop',
    desc:
      'Real-time fleet visibility for logistics, courier, e-commerce delivery and transport companies operating across Dubai, UAE and the Middle East.',
    points: ['Live vehicle tracking', 'Route visibility', 'Delivery performance', 'Driver behavior monitoring'],
  },
  {
    title: 'Public Transport',
    slug: 'public-transport',
    icon: Bus,
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1400&auto=format&fit=crop',
    desc:
      'Smart mobility and GPS tracking solutions for buses, staff transport, passenger vehicles and route-based public transport operations.',
    points: ['Route monitoring', 'Passenger safety', 'Driver alerts', 'Trip history reports'],
  },
  {
    title: 'Oil & Gas Fleets',
    slug: 'oil-gas',
    icon: Fuel,
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1400&auto=format&fit=crop',
    desc:
      'High-security fleet tracking for oilfield, fuel distribution, energy operations and remote site vehicles across demanding GCC environments.',
    points: ['Remote fleet monitoring', 'Geo-fencing', 'Fuel monitoring', 'Harsh-route visibility'],
  },
  {
    title: 'Construction Fleets',
    slug: 'construction',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop',
    desc:
      'Track construction vehicles, heavy equipment, site assets and field teams with intelligent telematics built for project-based operations.',
    points: ['Equipment tracking', 'Site visibility', 'Asset utilization', 'Unauthorized movement alerts'],
  },
  {
    title: 'Cold Chain & Healthcare',
    slug: 'healthcare',
    icon: Snowflake,
    image:
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1400&auto=format&fit=crop',
    desc:
      'Temperature-sensitive fleet monitoring for healthcare logistics, pharma delivery, food transport and refrigerated vehicles.',
    points: ['Temperature monitoring', 'Cold chain visibility', 'Delivery alerts', 'Compliance reporting'],
  },
  {
    title: 'Government Fleets',
    slug: 'government',
    icon: Landmark,
    image:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1400&auto=format&fit=crop',
    desc:
      'Centralized fleet visibility for municipal, public sector, security and government vehicle operations.',
    points: ['Fleet accountability', 'Central monitoring', 'Operational reports', 'Vehicle usage control'],
  },
  {
    title: 'Agriculture & Field Assets',
    slug: 'agriculture',
    icon: Tractor,
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1400&auto=format&fit=crop',
    desc:
      'GPS tracking for farm machinery, field vehicles, irrigation assets and remote agricultural operations.',
    points: ['Machinery tracking', 'Field team visibility', 'Asset protection', 'Usage monitoring'],
  },
  {
    title: 'Rental & Leasing',
    slug: 'rental-leasing',
    icon: Car,
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1400&auto=format&fit=crop',
    desc:
      'Vehicle tracking and fleet control for rental companies, leasing operators and corporate vehicle fleets.',
    points: ['Vehicle security', 'Trip history', 'Geo-fence alerts', 'Customer usage visibility'],
  },
  {
    title: 'Waste Management',
    slug: 'waste-management',
    icon: Trash2,
    image:
      'https://images.unsplash.com/photo-1562077981-4d7eafd44932?q=80&w=1400&auto=format&fit=crop',
    desc:
      'Fleet monitoring for waste collection trucks, route operations and municipal service vehicles.',
    points: ['Route completion', 'Vehicle tracking', 'Stop monitoring', 'Operational efficiency'],
  },
];

const STATS = [
  { value: '24/7', label: 'Fleet Visibility' },
  { value: 'UAE', label: 'Dubai Focused' },
  { value: 'GCC', label: 'Regional Ready' },
  { value: 'IoT', label: 'Smart Hardware' },
];

const IndustriesPage = () => {
  return (
    <div style={{ fontFamily: P, background: '#fff' }}>
      <TopBar />
      <Navbar />

      <main style={{ paddingTop: 112 }}>
        {/* Hero */}
        <section
          style={{
            position: 'relative',
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            color: '#fff',
            backgroundImage: `
              linear-gradient(90deg, rgba(8,20,46,0.94) 0%, rgba(8,20,46,0.82) 45%, rgba(8,20,46,0.55) 100%),
              url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '6px',
              background: RED,
              zIndex: 3,
            }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 20% 32%, rgba(232,49,42,0.30), transparent 34%)',
              zIndex: 1,
            }}
          />

          <div
            style={{
              maxWidth: '1180px',
              width: '100%',
              margin: '0 auto',
              padding: '95px 24px',
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '8px 14px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(8px)',
                marginBottom: '24px',
                fontFamily: P,
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.82)',
              }}
            >
              <span style={{ width: '28px', height: '2px', background: RED }} />
              Industries We Serve
            </div>

            <h1
              style={{
                maxWidth: '920px',
                margin: '0 auto',
                fontFamily: P,
                fontSize: 'clamp(44px, 5vw, 76px)',
                lineHeight: 1.05,
                letterSpacing: '-2px',
                fontWeight: 900,
                color: '#fff',
              }}
            >
              Smart Fleet Solutions for{' '}
              <span style={{ color: RED }}>Every Industry</span>
            </h1>

            <p
              style={{
                maxWidth: '790px',
                margin: '24px auto 0',
                fontFamily: P,
                fontSize: '17px',
                lineHeight: 1.85,
                color: 'rgba(255,255,255,0.78)',
              }}
            >
              From Dubai logistics and construction fleets to oil & gas, public
              transport, cold chain and government operations — Timeline Telematics
              helps every sector move smarter with real-time GPS tracking and fleet
              intelligence.
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
                  minHeight: '52px',
                  padding: '0 30px',
                  borderRadius: '10px',
                  background: RED,
                  color: '#fff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 900,
                  boxShadow: '0 18px 42px rgba(232,49,42,0.35)',
                }}
              >
                Book a Demo <ArrowRight size={17} style={{ marginLeft: 8 }} />
              </Link>

              <a
                href="#industry-grid"
                style={{
                  minHeight: '52px',
                  padding: '0 28px',
                  borderRadius: '10px',
                  color: '#fff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 900,
                  border: '1px solid rgba(255,255,255,0.24)',
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Explore Industries
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '14px',
                marginTop: '38px',
              }}
            >
              {['Logistics', 'Construction', 'Oil & Gas', 'Cold Chain'].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.10)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: 'rgba(255,255,255,0.82)',
                    fontSize: '12px',
                    fontWeight: 800,
                  }}
                >
                  <BriefcaseBusiness size={14} color={RED} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '38px 24px', background: '#fff' }}>
          <div
            style={{
              maxWidth: '1180px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '18px',
            }}
            className="industry-stats-grid"
          >
            {STATS.map((item) => (
              <div
                key={item.label}
                style={{
                  border: '1px solid #eef0f4',
                  borderRadius: '18px',
                  padding: '24px',
                  background: '#fff',
                  boxShadow: '0 10px 30px rgba(8,20,46,0.06)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    color: RED,
                    fontSize: '30px',
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    color: '#5f6675',
                    fontSize: '13px',
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Grid */}
        <section id="industry-grid" style={{ padding: '72px 24px 90px', background: '#f8fafc' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '46px' }}>
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
                Industry-Specific Fleet Intelligence
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
                Built for Dubai, UAE & Middle East Operations
              </h2>

              <p
                style={{
                  margin: '16px auto 0',
                  maxWidth: '760px',
                  color: '#5f6675',
                  fontSize: '15.5px',
                  lineHeight: 1.8,
                }}
              >
                Every industry has different fleet challenges. Our solutions combine GPS tracking,
                AI dashcams, fuel monitoring, driver analytics and IoT sensors to deliver complete
                operational visibility.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
              }}
              className="industries-page-grid"
            >
              {INDUSTRIES.map((industry) => {
                const Icon = industry.icon;

                return (
                  <article
                    key={industry.slug}
                    style={{
                      background: '#fff',
                      borderRadius: '22px',
                      overflow: 'hidden',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 10px 34px rgba(8,20,46,0.07)',
                      transition: 'all 0.25s ease',
                    }}
                    className="industry-card"
                  >
                    <div
                      style={{
                        height: '210px',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundImage: `linear-gradient(rgba(8,20,46,0.15), rgba(8,20,46,0.35)), url(${industry.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          left: '18px',
                          bottom: '18px',
                          width: '56px',
                          height: '56px',
                          borderRadius: '16px',
                          background: RED,
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 14px 30px rgba(232,49,42,0.34)',
                        }}
                      >
                        <Icon size={26} />
                      </div>
                    </div>

                    <div style={{ padding: '24px' }}>
                      <h3
                        style={{
                          margin: '0 0 10px',
                          color: NAVY,
                          fontSize: '22px',
                          fontWeight: 900,
                          letterSpacing: '-0.4px',
                        }}
                      >
                        {industry.title}
                      </h3>

                      <p
                        style={{
                          margin: '0 0 18px',
                          color: '#5f6675',
                          fontSize: '13.8px',
                          lineHeight: 1.75,
                        }}
                      >
                        {industry.desc}
                      </p>

                      <div style={{ display: 'grid', gap: '9px', marginBottom: '20px' }}>
                        {industry.points.map((point) => (
                          <div
                            key={point}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '9px',
                              color: '#374151',
                              fontSize: '13px',
                              fontWeight: 600,
                            }}
                          >
                            <CheckCircle
                              size={15}
                              color={RED}
                              style={{ marginTop: '2px', flexShrink: 0 }}
                            />
                            {point}
                          </div>
                        ))}
                      </div>

                      <Link
                        to={`/industries/${industry.slug}`}
                        style={{
                          color: RED,
                          fontSize: '13px',
                          fontWeight: 900,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        View Industry Solution <ArrowRight size={15} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: '76px 24px',
            background:
              'linear-gradient(135deg, #08142E 0%, #101827 55%, #1b0f12 100%)',
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
                Need a custom solution?
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  fontWeight: 900,
                  lineHeight: 1.18,
                }}
              >
                Let’s build smarter fleet operations for your industry.
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
                Tell us your fleet size, industry and operational challenges. Our team will
                recommend the right devices, platform features and deployment approach.
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
        </section>
      </main>

      <Footer />

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .industry-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 48px rgba(8,20,46,0.13) !important;
          border-color: rgba(232,49,42,0.30) !important;
        }

        @media (max-width: 980px) {
          .industries-page-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .industry-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          main {
            padding-top: 0 !important;
          }

          .industries-page-grid {
            grid-template-columns: 1fr !important;
          }

          .industry-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default IndustriesPage;