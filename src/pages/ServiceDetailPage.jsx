import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  MapPin,
  Fuel,
  Thermometer,
  Package,
  ShieldCheck,
  Radio,
  Truck,
  Smartphone,
  Settings,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Bell,
  Route,
  Activity,
} from 'lucide-react';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RED = '#E8312A';
const NAVY = '#08142E';
const TEXT = '#5f6675';
const P = "'Poppins', sans-serif";

const SERVICES = {
  'vehicle-tracking': {
    title: 'Vehicle Tracking',
    eyebrow: 'Real-Time GPS Tracking',
    icon: MapPin,
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1800&auto=format&fit=crop',
    intro:
      'Track cars, trucks, vans, buses and enterprise fleets across Dubai, UAE and Middle East routes with accurate real-time GPS visibility.',
    description:
      'Timeline Telematics vehicle tracking gives fleet operators complete control over their moving assets. From live location to route playback, geo-fence alerts, driver behavior and trip reporting, our platform helps businesses reduce delays, improve safety and keep vehicles visible at all times.',
    features: [
      'Live GPS vehicle location',
      'Trip history and playback',
      'Geo-fence entry and exit alerts',
      'Route, stop and idle monitoring',
      'Driver behavior insights',
      'Daily, weekly and monthly reports',
    ],
    benefits: [
      'Reduce unauthorized vehicle usage',
      'Improve delivery and dispatch visibility',
      'Monitor route compliance',
      'Lower operational delays',
    ],
    useCases: [
      'Logistics and delivery fleets',
      'Corporate vehicle fleets',
      'Public transport and staff buses',
      'Rental and leasing companies',
    ],
  },

  'asset-tracking-software': {
    title: 'Asset Tracking Software',
    eyebrow: 'Field Asset Visibility',
    icon: Package,
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1800&auto=format&fit=crop',
    intro:
      'Track trailers, containers, generators, machinery, equipment and field assets with smart IoT devices and a centralized monitoring dashboard.',
    description:
      'Asset tracking software helps businesses protect valuable non-powered and powered assets. Whether your assets are at a construction site, warehouse, yard, port or moving between cities, Timeline Telematics provides location visibility, movement alerts and utilization insights.',
    features: [
      'Asset location monitoring',
      'Unauthorized movement alerts',
      'Long battery device support',
      'Geo-fence based asset control',
      'Asset utilization reporting',
      'Trailer and equipment visibility',
    ],
    benefits: [
      'Reduce asset loss and theft risk',
      'Improve field equipment utilization',
      'Track high-value assets across sites',
      'Improve operational accountability',
    ],
    useCases: [
      'Construction machinery',
      'Trailers and containers',
      'Generators and field equipment',
      'Warehouse and yard assets',
    ],
  },

  'fuel-monitoring': {
    title: 'Fuel Monitoring',
    eyebrow: 'Fuel Intelligence',
    icon: Fuel,
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1800&auto=format&fit=crop',
    intro:
      'Monitor fuel levels, detect theft, track refills and analyze consumption patterns for trucks, buses, construction fleets and heavy vehicles.',
    description:
      'Fuel is one of the biggest operating costs for fleets. Timeline Telematics fuel monitoring helps businesses detect fuel drain, compare consumption, identify abnormal usage and generate clear reports for management decisions.',
    features: [
      'Fuel level monitoring',
      'Fuel theft and drain alerts',
      'Refill detection',
      'Consumption trend reports',
      'Fuel sensor integration',
      'Driver and vehicle level analysis',
    ],
    benefits: [
      'Reduce fuel theft and wastage',
      'Improve fuel cost control',
      'Identify high consumption vehicles',
      'Create transparent fuel reporting',
    ],
    useCases: [
      'Logistics and transport fleets',
      'Oil and gas fleets',
      'Construction vehicles',
      'Heavy trucks and buses',
    ],
  },

  'temperature-monitoring': {
    title: 'Temperature Monitoring',
    eyebrow: 'Cold Chain Control',
    icon: Thermometer,
    image:
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1800&auto=format&fit=crop',
    intro:
      'Monitor temperature-sensitive goods for cold chain logistics, food delivery, healthcare, pharma and refrigerated transport operations.',
    description:
      'Timeline Telematics temperature monitoring gives fleet operators real-time visibility into cargo temperature. Businesses can set threshold alerts, track temperature history and protect sensitive shipments during transportation.',
    features: [
      'Live temperature monitoring',
      'High and low temperature alerts',
      'Cold chain reporting',
      'Refrigerated vehicle visibility',
      'Sensor-based monitoring',
      'Delivery route temperature history',
    ],
    benefits: [
      'Protect temperature-sensitive cargo',
      'Reduce spoilage and delivery risk',
      'Improve compliance reporting',
      'Increase customer confidence',
    ],
    useCases: [
      'Food and beverage logistics',
      'Pharma and healthcare delivery',
      'Cold chain transport',
      'Refrigerated truck fleets',
    ],
  },

  'container-tracking': {
    title: 'Container Tracking',
    eyebrow: 'Cargo Movement Visibility',
    icon: Truck,
    image:
      'https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1800&auto=format&fit=crop',
    intro:
      'Track containers, cargo units and logistics movement across ports, warehouses, yards and long-haul transport routes.',
    description:
      'Container tracking gives logistics companies better control over cargo movement. With GPS tracking, geo-fencing and movement alerts, businesses can monitor container location, reduce delays and improve shipment visibility.',
    features: [
      'Container location tracking',
      'Port and yard visibility',
      'Cargo movement alerts',
      'Geo-fence based monitoring',
      'Long-route shipment visibility',
      'Transport status reporting',
    ],
    benefits: [
      'Improve cargo security',
      'Reduce shipment uncertainty',
      'Monitor container movement',
      'Improve logistics coordination',
    ],
    useCases: [
      'Port logistics',
      'Container transport',
      'Warehouse movement',
      'Cross-border cargo operations',
    ],
  },

  'tire-management-system': {
    title: 'Tire Management System',
    eyebrow: 'Fleet Safety & Maintenance',
    icon: ShieldCheck,
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1800&auto=format&fit=crop',
    intro:
      'Improve fleet safety with tire pressure, tire condition and maintenance monitoring for trucks, buses and heavy vehicles.',
    description:
      'Tire issues can cause downtime, safety risks and unnecessary maintenance cost. Timeline Telematics tire management helps operators monitor tire health, receive alerts and maintain safer heavy fleet operations.',
    features: [
      'Tire pressure monitoring',
      'Tire health alerts',
      'Maintenance reminders',
      'Heavy vehicle support',
      'Safety risk visibility',
      'Fleet maintenance reporting',
    ],
    benefits: [
      'Reduce tire-related breakdowns',
      'Improve driver and road safety',
      'Lower maintenance surprises',
      'Improve vehicle uptime',
    ],
    useCases: [
      'Heavy trucks',
      'Buses and passenger fleets',
      'Construction fleets',
      'Long-haul transport vehicles',
    ],
  },

  'personal-tracking-software': {
    title: 'Personal Tracking Software',
    eyebrow: 'People Safety',
    icon: Smartphone,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop',
    intro:
      'Monitor field staff, mobile workers, drivers, supervisors and security teams with location visibility and safety-focused tracking.',
    description:
      'Personal tracking software supports organizations with field teams and mobile operations. It improves staff safety, route visibility and workforce accountability, especially for teams operating across multiple locations.',
    features: [
      'Live staff location visibility',
      'Field team tracking',
      'Emergency location support',
      'Route and visit history',
      'Mobile workforce monitoring',
      'Team accountability reporting',
    ],
    benefits: [
      'Improve field staff safety',
      'Monitor mobile operations',
      'Increase workforce accountability',
      'Support emergency response',
    ],
    useCases: [
      'Field service teams',
      'Security operations',
      'Delivery supervisors',
      'Remote workforce management',
    ],
  },

  'portable-tracking-device': {
    title: 'Portable Tracking Device',
    eyebrow: 'Flexible Tracking',
    icon: Radio,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1800&auto=format&fit=crop',
    intro:
      'Use compact portable GPS devices for temporary assets, rental vehicles, field equipment, cargo movement and mobile tracking needs.',
    description:
      'Portable tracking devices are ideal for businesses that need flexible deployment without fixed installation. They can be used for temporary monitoring, rental operations, cargo tracking and field asset protection.',
    features: [
      'Portable GPS tracking',
      'Quick deployment',
      'Rechargeable device support',
      'Temporary asset monitoring',
      'Compact tracking hardware',
      'Flexible location visibility',
    ],
    benefits: [
      'Track assets without permanent installation',
      'Support rental and temporary operations',
      'Improve cargo visibility',
      'Deploy tracking quickly',
    ],
    useCases: [
      'Rental assets',
      'Temporary vehicles',
      'Cargo movement',
      'Field operations',
    ],
  },

  'auto-conductor': {
    title: 'Auto Conductor',
    eyebrow: 'Smart Vehicle Control',
    icon: Settings,
    image:
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1800&auto=format&fit=crop',
    intro:
      'Smart automation and vehicle operation control for modern fleets using connected devices, sensors and platform intelligence.',
    description:
      'Auto Conductor helps fleet operators connect devices, sensors, automation workflows and vehicle control features. It supports smarter operations by combining telematics data with practical control and monitoring tools.',
    features: [
      'Smart vehicle operation workflows',
      'Device and sensor integration',
      'Automation-ready fleet control',
      'Event-based alerts',
      'Operational command support',
      'Fleet intelligence integration',
    ],
    benefits: [
      'Improve operational control',
      'Automate monitoring workflows',
      'Connect sensors and devices',
      'Support smart mobility operations',
    ],
    useCases: [
      'Enterprise fleets',
      'Smart mobility operators',
      'Vehicle control workflows',
      'Connected fleet operations',
    ],
  },
};

const PROCESS = [
  {
    icon: Activity,
    title: 'Analyze',
    text: 'We understand your fleet size, routes, industry and operational challenges.',
  },
  {
    icon: Settings,
    title: 'Deploy',
    text: 'We recommend the right hardware, sensors and platform setup for your use case.',
  },
  {
    icon: BarChart3,
    title: 'Optimize',
    text: 'You get live insights, alerts and reports to improve performance and reduce cost.',
  },
];

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = SERVICES[slug] || SERVICES['vehicle-tracking'];
  const Icon = service.icon;

  return (
    <div style={{ fontFamily: P, background: '#fff' }}>
      <TopBar />
      <Navbar />

      <main style={{ paddingTop: '112px' }}>
        {/* Hero */}
        <section
          style={{
            position: 'relative',
            minHeight: '540px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            color: '#fff',
            padding: '90px 24px',
            background: `linear-gradient(rgba(3,7,18,0.56), rgba(3,7,18,0.76)), url(${service.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(8,20,46,0.86) 0%, rgba(8,20,46,0.52) 52%, rgba(3,7,18,0.72) 100%)',
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '1050px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '22px',
                background: RED,
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '22px',
                boxShadow: '0 18px 44px rgba(232,49,42,0.34)',
              }}
            >
              <Icon size={34} />
            </div>

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
              {service.eyebrow}
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
              {service.title}
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
              {service.intro}
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
                to="/solutions"
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
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section style={{ padding: '86px 24px', background: '#fff' }}>
          <div
            style={{
              maxWidth: '1180px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '0.95fr 1.05fr',
              gap: '54px',
              alignItems: 'center',
            }}
            className="service-overview-grid"
          >
            <div
              style={{
                borderRadius: '26px',
                overflow: 'hidden',
                minHeight: '430px',
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 24px 60px rgba(8,20,46,0.16)',
              }}
            />

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
                Service Overview
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
                Built for smarter fleet control in Dubai and the Middle East.
              </h2>

              <p
                style={{
                  margin: 0,
                  color: TEXT,
                  fontSize: '15.5px',
                  lineHeight: 1.85,
                }}
              >
                {service.description}
              </p>

              <div
                style={{
                  marginTop: '28px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                }}
                className="service-feature-grid"
              >
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '9px',
                      color: '#374151',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckCircle size={16} color={RED} style={{ marginTop: 2, flexShrink: 0 }} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section style={{ padding: '76px 24px', background: '#f8fafc' }}>
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
                Key Benefits
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
                Why businesses choose this service
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '18px',
              }}
              className="service-benefits-grid"
            >
              {service.benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  style={{
                    background: '#fff',
                    borderRadius: '18px',
                    padding: '24px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 10px 34px rgba(8,20,46,0.06)',
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
                      marginBottom: '18px',
                      fontSize: '15px',
                      fontWeight: 900,
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
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases + process */}
        <section style={{ padding: '86px 24px', background: '#fff' }}>
          <div
            style={{
              maxWidth: '1180px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '34px',
            }}
            className="service-two-grid"
          >
            <div
              style={{
                borderRadius: '24px',
                background: NAVY,
                color: '#fff',
                padding: '38px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  right: '-70px',
                  top: '-70px',
                  width: '190px',
                  height: '190px',
                  borderRadius: '50%',
                  background: 'rgba(232,49,42,0.18)',
                }}
              />

              <h3
                style={{
                  margin: '0 0 18px',
                  fontSize: '30px',
                  fontWeight: 900,
                  letterSpacing: '-0.8px',
                }}
              >
                Best use cases
              </h3>

              <div style={{ display: 'grid', gap: '14px' }}>
                {service.useCases.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '11px',
                      color: 'rgba(255,255,255,0.82)',
                      fontSize: '15px',
                      fontWeight: 700,
                    }}
                  >
                    <Route size={18} color={RED} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: '24px',
                background: '#f8fafc',
                padding: '38px',
                border: '1px solid #e5e7eb',
              }}
            >
              <h3
                style={{
                  margin: '0 0 18px',
                  color: NAVY,
                  fontSize: '30px',
                  fontWeight: 900,
                  letterSpacing: '-0.8px',
                }}
              >
                How we deploy
              </h3>

              <div style={{ display: 'grid', gap: '18px' }}>
                {PROCESS.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div
                      key={step.title}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '13px',
                          background: RED,
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <StepIcon size={20} />
                      </div>

                      <div>
                        <div
                          style={{
                            color: NAVY,
                            fontSize: '16px',
                            fontWeight: 900,
                            marginBottom: '4px',
                          }}
                        >
                          {step.title}
                        </div>

                        <div
                          style={{
                            color: TEXT,
                            fontSize: '13.5px',
                            lineHeight: 1.65,
                          }}
                        >
                          {step.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Ready to deploy?
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  fontWeight: 900,
                  lineHeight: 1.18,
                }}
              >
                Get a tailored {service.title.toLowerCase()} solution for your fleet.
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
                Share your fleet size, vehicle type and operational needs. Our team will recommend
                the right devices, platform features and deployment approach.
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
                gap: '8px',
                textDecoration: 'none',
                fontWeight: 900,
                fontSize: '14px',
                boxShadow: '0 18px 44px rgba(232,49,42,0.30)',
              }}
            >
              Book a Demo <ArrowRight size={17} />
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
          .service-overview-grid,
          .service-two-grid {
            grid-template-columns: 1fr !important;
          }

          .service-benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          main {
            padding-top: 110px !important;
          }

          .service-feature-grid,
          .service-benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;