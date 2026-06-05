import React from 'react';
import { Link, useParams } from 'react-router-dom';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RED = '#E8312A';
const NAVY = '#08142E';
const TEXT = '#5f6675';
const P = "'Poppins', sans-serif";

const INDUSTRIES = {
  logistics: {
    title: 'Logistics & Delivery',
    eyebrow: 'Logistics Fleet Intelligence',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop',
    intro:
      'Real-time GPS tracking and fleet visibility for delivery, transport, courier and logistics companies operating across Dubai, UAE and the Middle East.',
    desc:
      'Timeline Telematics helps logistics operators improve delivery visibility, reduce delays, monitor routes, optimize dispatch and keep every vehicle connected through one intelligent platform.',
    challenges: [
      'Delayed deliveries and poor route visibility',
      'High fuel cost and unauthorized vehicle usage',
      'Limited driver behavior monitoring',
      'Difficulty tracking multiple vehicles across routes',
    ],
    solutions: [
      'Live GPS vehicle tracking',
      'Route playback and trip history',
      'Driver behavior alerts',
      'Fuel monitoring and usage reports',
      'Geo-fence alerts for warehouses and customer zones',
      'Fleet performance reporting',
    ],
    benefits: [
      'Improve delivery performance',
      'Reduce fuel and operational cost',
      'Increase customer visibility',
      'Improve fleet accountability',
    ],
  },

  'public-transport': {
    title: 'Public Transport',
    eyebrow: 'Smart Passenger Mobility',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop',
    intro:
      'Fleet tracking solutions for buses, staff transport, passenger vehicles and public mobility operators across Dubai and regional routes.',
    desc:
      'Our public transport solutions provide live route visibility, driver monitoring, safety alerts and operational reporting to help transport operators improve reliability and passenger safety.',
    challenges: [
      'Route delays and unmanaged schedules',
      'Passenger safety concerns',
      'Limited visibility of bus movement',
      'Lack of driver performance data',
    ],
    solutions: [
      'Live bus and route tracking',
      'Trip history and schedule monitoring',
      'Driver behavior reporting',
      'Geo-fence alerts for terminals and stops',
      'Panic and safety alert support',
      'Daily movement reports',
    ],
    benefits: [
      'Improve passenger safety',
      'Increase route reliability',
      'Monitor driver activity',
      'Improve transport operations',
    ],
  },

  'oil-gas': {
    title: 'Oil & Gas Fleets',
    eyebrow: 'High-Security Fleet Monitoring',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1600&auto=format&fit=crop',
    intro:
      'Secure fleet tracking and monitoring for oilfield vehicles, fuel distribution fleets, energy operations and remote site movement.',
    desc:
      'Oil and gas fleets require strict safety, visibility and compliance. Timeline Telematics provides live tracking, route monitoring, fuel control and alerts for vehicles operating in demanding environments.',
    challenges: [
      'Remote route visibility',
      'Fuel theft and high consumption',
      'Unauthorized vehicle movement',
      'Safety risks in field operations',
    ],
    solutions: [
      'Real-time GPS tracking',
      'Fuel monitoring and theft alerts',
      'Route and geo-fence control',
      'Driver behavior monitoring',
      'Vehicle utilization reports',
      'Emergency and event alerts',
    ],
    benefits: [
      'Improve fleet security',
      'Reduce fuel losses',
      'Monitor remote operations',
      'Increase safety and control',
    ],
  },

  construction: {
    title: 'Construction Fleets',
    eyebrow: 'Construction Asset Control',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    intro:
      'Track construction vehicles, heavy machinery, site equipment and project assets with intelligent telematics and asset visibility.',
    desc:
      'Construction operations need visibility across sites, assets and vehicles. Timeline Telematics helps construction companies track movement, prevent misuse and monitor asset utilization.',
    challenges: [
      'Heavy equipment movement without visibility',
      'Unauthorized asset usage',
      'High equipment idle time',
      'Difficulty managing multiple project sites',
    ],
    solutions: [
      'Heavy equipment GPS tracking',
      'Site geo-fence alerts',
      'Asset utilization reports',
      'Unauthorized movement alerts',
      'Fuel monitoring for heavy vehicles',
      'Maintenance and usage visibility',
    ],
    benefits: [
      'Protect expensive equipment',
      'Improve site accountability',
      'Reduce idle time',
      'Increase asset utilization',
    ],
  },

  healthcare: {
    title: 'Cold Chain & Healthcare',
    eyebrow: 'Temperature-Sensitive Logistics',
    image:
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1600&auto=format&fit=crop',
    intro:
      'Temperature monitoring and delivery visibility for healthcare, pharma, food logistics and refrigerated fleet operations.',
    desc:
      'For healthcare and cold chain deliveries, temperature and timing matter. Timeline Telematics provides live vehicle visibility, temperature alerts and reporting to protect sensitive cargo.',
    challenges: [
      'Temperature-sensitive cargo risk',
      'Lack of delivery temperature history',
      'Delayed response to temperature changes',
      'Limited visibility of refrigerated vehicles',
    ],
    solutions: [
      'Live temperature monitoring',
      'Temperature threshold alerts',
      'Cold chain delivery reports',
      'Vehicle location tracking',
      'Route history and trip playback',
      'Sensor-based cargo visibility',
    ],
    benefits: [
      'Protect sensitive deliveries',
      'Improve cold chain compliance',
      'Reduce cargo loss risk',
      'Increase customer confidence',
    ],
  },

  government: {
    title: 'Government Fleets',
    eyebrow: 'Public Sector Fleet Control',
    image:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1600&auto=format&fit=crop',
    intro:
      'Centralized tracking, reporting and monitoring for municipal, public sector, security and government fleet operations.',
    desc:
      'Government fleets require transparency, accountability and operational control. Timeline Telematics helps public sector organizations monitor fleet usage, improve reporting and increase efficiency.',
    challenges: [
      'Limited vehicle usage accountability',
      'Manual reporting and poor visibility',
      'Unauthorized vehicle movement',
      'Difficulty managing multiple departments',
    ],
    solutions: [
      'Centralized fleet dashboard',
      'Live vehicle monitoring',
      'Usage and trip reporting',
      'Geo-fence alerts',
      'Driver behavior monitoring',
      'Department-level fleet visibility',
    ],
    benefits: [
      'Improve fleet accountability',
      'Increase transparency',
      'Reduce operational misuse',
      'Improve public sector efficiency',
    ],
  },

  agriculture: {
    title: 'Agriculture & Field Assets',
    eyebrow: 'Field Asset Visibility',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600&auto=format&fit=crop',
    intro:
      'GPS tracking for farm machinery, field vehicles, irrigation assets and remote agriculture operations.',
    desc:
      'Agriculture businesses can improve field visibility, monitor machinery movement, track remote assets and protect equipment through smart GPS and IoT tracking.',
    challenges: [
      'Remote machinery visibility',
      'Asset misuse and theft risk',
      'Limited field team tracking',
      'Difficult asset utilization reporting',
    ],
    solutions: [
      'Machinery GPS tracking',
      'Field asset monitoring',
      'Geo-fence alerts for farm zones',
      'Field team visibility',
      'Asset usage reports',
      'Movement and idle alerts',
    ],
    benefits: [
      'Protect field machinery',
      'Improve asset utilization',
      'Monitor remote operations',
      'Reduce theft risk',
    ],
  },

  'rental-leasing': {
    title: 'Rental & Leasing',
    eyebrow: 'Rental Fleet Control',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1600&auto=format&fit=crop',
    intro:
      'Vehicle tracking and fleet control solutions for rental companies, leasing operators, corporate mobility providers and managed vehicle fleets.',
    desc:
      'Rental and leasing businesses need complete visibility over vehicles that are constantly moving between customers, cities and contracts. Timeline Telematics helps operators monitor live location, trip history, geo-fence violations, vehicle misuse and fleet utilization through one centralized dashboard.',
    challenges: [
      'Vehicles used outside allowed zones',
      'Delayed return and misuse of rental vehicles',
      'Limited visibility after vehicle handover',
      'Difficulty monitoring vehicle condition and usage',
    ],
    solutions: [
      'Live rental vehicle tracking',
      'Geo-fence alerts for allowed areas',
      'Trip history and playback',
      'Unauthorized usage alerts',
      'Fleet utilization reporting',
      'Customer and contract-based vehicle visibility',
    ],
    benefits: [
      'Reduce vehicle misuse',
      'Improve rental fleet security',
      'Track vehicle usage by customer',
      'Increase fleet availability and control',
    ],
  },

  'waste-management': {
    title: 'Waste Management',
    eyebrow: 'Route & Collection Visibility',
    image:
      'https://images.unsplash.com/photo-1562077981-4d7eafd44932?q=80&w=1600&auto=format&fit=crop',
    intro:
      'Fleet tracking and route monitoring solutions for waste collection trucks, municipal service vehicles and environmental operations.',
    desc:
      'Waste management fleets need accurate route visibility, collection monitoring and operational efficiency. Timeline Telematics helps operators track trucks, verify route completion, monitor stops, reduce fuel waste and improve service accountability for municipal and private waste collection operations.',
    challenges: [
      'Missed or incomplete collection routes',
      'Limited visibility of waste collection trucks',
      'High fuel usage during route operations',
      'Difficulty verifying service completion',
    ],
    solutions: [
      'Live waste truck tracking',
      'Route completion monitoring',
      'Stop and idle time reports',
      'Geo-fence alerts for collection zones',
      'Driver behavior monitoring',
      'Daily route and service reports',
    ],
    benefits: [
      'Improve route completion visibility',
      'Reduce fuel and idle time',
      'Verify service performance',
      'Increase municipal fleet accountability',
    ],
  },
};

const IndustryDetailPage = () => {
  const { slug } = useParams();
  const industry = INDUSTRIES[slug] || INDUSTRIES.logistics;

  return (
    <div style={{ fontFamily: P, background: '#fff' }}>
      <TopBar />
      <Navbar />

      <main style={{ paddingTop: '112px' }}>
        <section
          style={{
            position: 'relative',
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            padding: '90px 24px',
            background: `linear-gradient(rgba(3,7,18,0.58), rgba(3,7,18,0.78)), url(${industry.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(8,20,46,0.86) 0%, rgba(8,20,46,0.48) 52%, rgba(3,7,18,0.72) 100%)',
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '980px',
              textAlign: 'center',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(232,49,42,0.22)',
                color: '#fff',
                borderRadius: '999px',
                padding: '8px 22px',
                marginBottom: '24px',
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                border: '1px solid rgba(232,49,42,0.28)',
              }}
            >
              {industry.eyebrow}
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(42px, 5vw, 72px)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-1.8px',
              }}
            >
              {industry.title}
            </h1>

            <p
              style={{
                margin: '24px auto 0',
                maxWidth: '760px',
                color: 'rgba(255,255,255,0.84)',
                fontSize: '17px',
                lineHeight: 1.8,
              }}
            >
              {industry.intro}
            </p>

            <div
              style={{
                marginTop: '34px',
                display: 'flex',
                justifyContent: 'center',
                gap: '14px',
                flexWrap: 'wrap',
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
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 900,
                }}
              >
                Book a Demo
              </Link>

              <Link
                to="/industries"
                style={{
                  height: '52px',
                  padding: '0 28px',
                  borderRadius: '8px',
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 900,
                  border: '1px solid rgba(255,255,255,0.24)',
                  background: 'rgba(255,255,255,0.08)',
                }}
              >
                View All Industries
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '86px 24px', background: '#fff' }}>
          <div
            style={{
              maxWidth: '1180px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '54px',
              alignItems: 'center',
            }}
            className="industry-overview-grid"
          >
            <div>
              <div
                style={{
                  color: RED,
                  fontSize: '11px',
                  fontWeight: 900,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                Industry Overview
              </div>

              <h2
                style={{
                  margin: '0 0 18px',
                  color: NAVY,
                  fontSize: 'clamp(30px, 4vw, 48px)',
                  fontWeight: 900,
                  lineHeight: 1.16,
                  letterSpacing: '-1.2px',
                }}
              >
                Smarter fleet visibility for {industry.title.toLowerCase()} operations.
              </h2>

              <p
                style={{
                  margin: 0,
                  color: TEXT,
                  fontSize: '15.5px',
                  lineHeight: 1.85,
                }}
              >
                {industry.desc}
              </p>
            </div>

            <div
              style={{
                borderRadius: '26px',
                overflow: 'hidden',
                minHeight: '430px',
                backgroundImage: `url(${industry.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 24px 60px rgba(8,20,46,0.16)',
              }}
            />
          </div>
        </section>

        <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
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
                Challenges & Solutions
              </div>

              <h2
                style={{
                  margin: 0,
                  color: NAVY,
                  fontSize: 'clamp(30px, 4vw, 46px)',
                  fontWeight: 900,
                  letterSpacing: '-1.2px',
                }}
              >
                Built to solve real operational problems
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '26px',
              }}
              className="industry-two-grid"
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: '22px',
                  padding: '34px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 10px 34px rgba(8,20,46,0.06)',
                }}
              >
                <h3
                  style={{
                    margin: '0 0 20px',
                    color: NAVY,
                    fontSize: '26px',
                    fontWeight: 900,
                  }}
                >
                  Common Challenges
                </h3>

                <div style={{ display: 'grid', gap: '14px' }}>
                  {industry.challenges.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        gap: '10px',
                        color: '#374151',
                        fontSize: '14px',
                        fontWeight: 700,
                        lineHeight: 1.55,
                      }}
                    >
                      <span style={{ color: RED, fontWeight: 900 }}>•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: NAVY,
                  color: '#fff',
                  borderRadius: '22px',
                  padding: '34px',
                  boxShadow: '0 10px 34px rgba(8,20,46,0.12)',
                }}
              >
                <h3
                  style={{
                    margin: '0 0 20px',
                    color: '#fff',
                    fontSize: '26px',
                    fontWeight: 900,
                  }}
                >
                  Timeline Solution
                </h3>

                <div style={{ display: 'grid', gap: '14px' }}>
                  {industry.solutions.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        gap: '10px',
                        color: 'rgba(255,255,255,0.82)',
                        fontSize: '14px',
                        fontWeight: 700,
                        lineHeight: 1.55,
                      }}
                    >
                      <span style={{ color: RED, fontWeight: 900 }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '42px' }}>
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
                Business Benefits
              </div>

              <h2
                style={{
                  margin: 0,
                  color: NAVY,
                  fontSize: 'clamp(30px, 4vw, 46px)',
                  fontWeight: 900,
                  letterSpacing: '-1.2px',
                }}
              >
                What your team gets
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '18px',
              }}
              className="industry-benefits-grid"
            >
              {industry.benefits.map((item, index) => (
                <div
                  key={item}
                  style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '18px',
                    padding: '24px',
                    background: '#fff',
                    boxShadow: '0 10px 30px rgba(8,20,46,0.06)',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(232,49,42,0.10)',
                      color: RED,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '15px',
                      fontWeight: 900,
                      marginBottom: '16px',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      color: NAVY,
                      fontSize: '17px',
                      fontWeight: 900,
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
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
                Ready to transform your fleet?
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  fontWeight: 900,
                  lineHeight: 1.18,
                }}
              >
                Get a tailored solution for your {industry.title.toLowerCase()} fleet.
              </h2>
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

        @media (max-width: 980px) {
          .industry-overview-grid,
          .industry-two-grid {
            grid-template-columns: 1fr !important;
          }

          .industry-benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          main {
            padding-top: 110px !important;
          }

          .industry-benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default IndustryDetailPage;