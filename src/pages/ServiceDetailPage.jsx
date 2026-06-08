import React, { useEffect, useRef, useState } from 'react';
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

const SERVICE_IMAGE_BASE = '/images/services';

const SERVICES = {
  'vehicle-tracking': {
    title: 'Vehicle Tracking',
    eyebrow: 'Real-Time GPS Tracking',
    icon: MapPin,
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1800&auto=format&fit=crop',
    visual: `${SERVICE_IMAGE_BASE}/vehicle-tracking.png`,
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
    visual: `${SERVICE_IMAGE_BASE}/asset-tracking-software.png`,
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
    visual: `${SERVICE_IMAGE_BASE}/fuel-monitoring.png`,
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
      'https://images.unsplash.com/photo-1595508774032-4609924fbfe5?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1595508774032-4609924fbfe5?q=80&w=1800&auto=format&fit=crop',
    visual: `${SERVICE_IMAGE_BASE}/temperature-monitoring.png`,
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
      'Refrigerated trucks and vans',
    ],
  },

  'container-tracking': {
    title: 'Container Tracking',
    eyebrow: 'Cargo Security Intelligence',
    icon: Truck,
    image:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1800&auto=format&fit=crop',
    visual: `${SERVICE_IMAGE_BASE}/container-tracking.png`,
    intro:
      'Track containers, cargo movement and high-value shipments with live visibility, route alerts and security-focused monitoring.',
    description:
      'Container tracking helps logistics and shipping businesses secure cargo from origin to destination. With location visibility, movement alerts, geo-fencing and route history, businesses can reduce risk and improve shipment accountability.',
    features: [
      'Live container location',
      'Geo-fence security alerts',
      'Route deviation monitoring',
      'Cargo movement history',
      'Unauthorized movement alerts',
      'Shipment visibility reports',
    ],
    benefits: [
      'Improve cargo security',
      'Reduce shipment visibility gaps',
      'Monitor route compliance',
      'Protect high-value goods',
    ],
    useCases: [
      'Shipping and logistics companies',
      'Import and export operations',
      'Container yards and ports',
      'High-value cargo transport',
    ],
  },

  'tire-management-system': {
    title: 'Tire Management System',
    eyebrow: 'Fleet Maintenance Intelligence',
    icon: Settings,
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1800&auto=format&fit=crop',
    visual: `${SERVICE_IMAGE_BASE}/tire-management-system.png`,
    intro:
      'Improve fleet safety and reduce breakdowns with tire monitoring, maintenance visibility and condition-based fleet insights.',
    description:
      'Tire management helps fleet operators monitor tire condition, reduce unexpected failures and manage maintenance cycles. It supports safer driving, better fuel efficiency and reduced downtime for heavy commercial fleets.',
    features: [
      'Tire health monitoring',
      'Pressure and condition visibility',
      'Maintenance reminders',
      'Tire lifecycle tracking',
      'Breakdown risk reduction',
      'Fleet maintenance reporting',
    ],
    benefits: [
      'Reduce tire-related downtime',
      'Improve road safety',
      'Extend tire lifecycle',
      'Lower maintenance cost',
    ],
    useCases: [
      'Heavy trucks and trailers',
      'Long-haul transport fleets',
      'Bus and staff transport fleets',
      'Construction and logistics vehicles',
    ],
  },

  'personal-tracking-software': {
    title: 'Personal Tracking Software',
    eyebrow: 'Workforce Safety Tracking',
    icon: Smartphone,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop',
    visual: `${SERVICE_IMAGE_BASE}/personal-tracking-software.png`,
    intro:
      'Track field teams, mobile staff, security personnel and lone workers with live location, emergency alerts and movement visibility.',
    description:
      'Personal tracking software is designed for businesses that manage staff outside office locations. It improves safety, attendance visibility, route monitoring and emergency response for field operations.',
    features: [
      'Live staff location',
      'SOS emergency alerts',
      'Route and movement history',
      'Geo-fence attendance support',
      'Mobile workforce visibility',
      'Daily activity reporting',
    ],
    benefits: [
      'Improve field staff safety',
      'Increase operational accountability',
      'Support emergency response',
      'Track workforce movement',
    ],
    useCases: [
      'Field sales teams',
      'Security staff',
      'Delivery riders',
      'Remote workers and lone workers',
    ],
  },

  'portable-tracking-device': {
    title: 'Portable Tracking Device',
    eyebrow: 'Flexible GPS Tracking',
    icon: Radio,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1800&auto=format&fit=crop',
    visual: `${SERVICE_IMAGE_BASE}/portable-tracking-device.png`,
    intro:
      'Use compact portable GPS tracking devices for temporary vehicles, assets, containers, personal safety and flexible tracking needs.',
    description:
      'Portable tracking devices are ideal when fixed installation is not required. They help businesses track valuable assets, temporary shipments, rental vehicles and mobile teams using flexible GPS monitoring.',
    features: [
      'Portable GPS tracking',
      'Long battery support',
      'Motion detection alerts',
      'Geo-fence monitoring',
      'Compact device design',
      'Real-time location reporting',
    ],
    benefits: [
      'Flexible tracking without wiring',
      'Protect temporary assets',
      'Quick deployment',
      'Improve asset visibility',
    ],
    useCases: [
      'Temporary vehicle tracking',
      'Rental assets',
      'Cargo and equipment',
      'Personal safety applications',
    ],
  },

  'auto-conductor': {
    title: 'Auto Conductor',
    eyebrow: 'Passenger Fleet Automation',
    icon: ShieldCheck,
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1800&auto=format&fit=crop',
    hero:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1800&auto=format&fit=crop',
    visual: `${SERVICE_IMAGE_BASE}/auto-conductor.png`,
    intro:
      'Digitize passenger transport operations with smart route visibility, trip monitoring, passenger flow and fleet accountability.',
    description:
      'Auto Conductor solutions help public transport, staff transport and passenger fleet operators manage routes, trips and vehicle activity with better visibility. It improves operational control and passenger mobility management.',
    features: [
      'Route and trip monitoring',
      'Passenger operation visibility',
      'Fleet activity reports',
      'Driver and vehicle accountability',
      'Schedule visibility',
      'Transport operation analytics',
    ],
    benefits: [
      'Improve passenger transport control',
      'Increase route accountability',
      'Monitor vehicle activity',
      'Digitize transport operations',
    ],
    useCases: [
      'Public transport fleets',
      'Staff transport buses',
      'School bus operations',
      'Passenger shuttle services',
    ],
  },
};

const PROCESS = [
  {
    icon: Activity,
    title: 'Analyze',
    text: 'We understand your fleet size, routes, industry, vehicles and daily operational challenges.',
  },
  {
    icon: Settings,
    title: 'Deploy',
    text: 'We recommend the right hardware, sensors and platform setup according to your business use case.',
  },
  {
    icon: BarChart3,
    title: 'Optimize',
    text: 'You get live insights, alerts and reports to improve performance, safety and operating cost.',
  },
];

const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
};

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`sd-reveal ${visible ? 'show' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const DetailSlider = ({ items }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!items?.length) return undefined;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3600);

    return () => clearInterval(timer);
  }, [items]);

  if (!items?.length) return null;

  const goNext = () => setActive((prev) => (prev + 1) % items.length);
  const goPrev = () => setActive((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="sd-slider">
      <button className="sd-slider-btn sd-slider-prev" onClick={goPrev} type="button">
        ‹
      </button>

      <div className="sd-slider-stage">
        {items.map((item, index) => (
          <article key={item} className={`sd-slide ${active === index ? 'active' : ''}`}>
            <span className="sd-slide-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{item}</h3>
            <p>
              Smart fleet intelligence designed to help your team monitor, control
              and improve daily operations with complete visibility.
            </p>
          </article>
        ))}
      </div>

      <button className="sd-slider-btn sd-slider-next" onClick={goNext} type="button">
        ›
      </button>

      <div className="sd-slider-dots">
        {items.map((item, index) => (
          <button
            key={item}
            type="button"
            className={active === index ? 'active' : ''}
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = SERVICES[slug] || SERVICES['vehicle-tracking'];
  const Icon = service.icon;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="sd-page">
      <TopBar />
      <Navbar />

      <main className="sd-main">
        <section
          className="sd-hero"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(8,20,46,0.92) 0%, rgba(8,20,46,0.74) 48%, rgba(3,7,18,0.84) 100%),
              url(${service.hero})
            `,
          }}
        >
          <div className="sd-hero-red-line" />

          <div className="sd-container">
            <Reveal>
              <div className="sd-breadcrumb">
                <Link to="/">Home</Link>
                <span>›</span>
                <Link to="/solutions">Solutions</Link>
                <span>›</span>
                <strong>{service.title}</strong>
              </div>

              <div className="sd-hero-icon">
                <Icon size={34} />
              </div>

              <div className="sd-eyebrow">{service.eyebrow}</div>

              <h1>
                {service.title}
                <span>.</span>
              </h1>

              <p>{service.intro}</p>

              <div className="sd-hero-actions">
                <Link to="/contact" className="sd-btn sd-btn-red">
                  Book a Demo <ArrowRight size={17} />
                </Link>

                <a href="#features" className="sd-btn sd-btn-ghost">
                  Explore Features
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="sd-section sd-white">
          <div className="sd-container sd-overview-grid">
            <Reveal>
              <div className="sd-image-card">
                <img src={service.image} alt={service.title} />

                <div className="sd-image-badge">
                  <Bell size={18} />
                  Live Alerts Enabled
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="sd-copy">
                <div className="sd-eyebrow dark">Service Overview</div>
                <h2>Built for smarter fleet control in Dubai and the Middle East.</h2>
                <p>{service.description}</p>

                <div className="sd-quick-grid">
                  {service.features.slice(0, 4).map((feature) => (
                    <div className="sd-quick-item" key={feature}>
                      <CheckCircle size={17} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="features" className="sd-section sd-light">
          <div className="sd-container">
            <Reveal className="sd-heading">
              <div className="sd-eyebrow dark">Core Capabilities</div>
              <h2>Professional tools for real fleet operations</h2>
              <p>
                A complete solution designed for live visibility, reporting,
                alerts, safety and business control.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <DetailSlider items={service.features} />
            </Reveal>
          </div>
        </section>

        <section className="sd-section sd-white">
          <div className="sd-container sd-dashboard-grid">
            <Reveal>
              <div className="sd-copy">
                <div className="sd-eyebrow dark">Service Experience</div>
                <h2>Everything visible from one command center.</h2>
                <p>
                  Monitor live movement, check alerts, view activity reports and
                  understand performance without switching between multiple tools.
                </p>

                <div className="sd-dashboard-points">
                  <div>
                    <BarChart3 size={21} />
                    <span>Real-time analytics</span>
                  </div>

                  <div>
                    <Route size={21} />
                    <span>Route & trip visibility</span>
                  </div>

                  <div>
                    <Bell size={21} />
                    <span>Instant event alerts</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="sd-service-visual-card">
                <img src={service.visual} alt={service.title} />

                <div className="sd-service-visual-overlay">
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>
                </div>

                <div className="sd-service-floating-box box-one">
                  <strong>Live Status</strong>
                  <span>Monitoring Active</span>
                </div>

                <div className="sd-service-floating-box box-two">
                  <strong>Smart Alerts</strong>
                  <span>Instant Notifications</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="sd-section sd-light">
          <div className="sd-container">
            <Reveal className="sd-heading">
              <div className="sd-eyebrow dark">Key Benefits</div>
              <h2>Why businesses choose this solution</h2>
            </Reveal>

            <div className="sd-benefits-grid">
              {service.benefits.map((benefit, index) => (
                <Reveal key={benefit} delay={index * 0.08}>
                  <article className="sd-benefit-card">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{benefit}</h3>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="sd-section sd-white">
          <div className="sd-container sd-two-grid">
            <Reveal>
              <div className="sd-dark-card">
                <div className="sd-eyebrow light">Best Use Cases</div>
                <h2>Where this solution works best</h2>

                <div className="sd-list">
                  {service.useCases.map((item) => (
                    <div key={item}>
                      <Route size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="sd-process-card">
                <div className="sd-eyebrow dark">Deployment Flow</div>
                <h2>How we deploy</h2>

                <div className="sd-process-list">
                  {PROCESS.map((step) => {
                    const StepIcon = step.icon;

                    return (
                      <div className="sd-process-item" key={step.title}>
                        <div className="sd-process-icon">
                          <StepIcon size={20} />
                        </div>

                        <div>
                          <h3>{step.title}</h3>
                          <p>{step.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="sd-cta">
          <div className="sd-container sd-cta-inner">
            <div>
              <div className="sd-eyebrow light">Ready to deploy?</div>
              <h2>Get a tailored {service.title.toLowerCase()} solution for your fleet.</h2>
              <p>
                Share your fleet size, vehicle type and operational needs.
                Our team will recommend the right devices, platform features
                and deployment approach.
              </p>
            </div>

            <Link to="/contact" className="sd-btn sd-btn-red">
              Request a Quote <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .sd-page {
          font-family: ${P};
          background: #fff;
          color: #111827;
        }

        .sd-main {
          padding-top: 116px;
        }

        .sd-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .sd-hero {
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: center;
          background-size: cover;
          background-position: center;
          color: #fff;
          overflow: hidden;
          padding: 95px 0;
        }

        .sd-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 15% 25%, rgba(232,49,42,0.22), transparent 28%),
            linear-gradient(to top, rgba(0,0,0,0.35), transparent 45%);
          z-index: 1;
        }

        .sd-hero .sd-container {
          position: relative;
          z-index: 2;
        }

        .sd-hero-red-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5px;
          background: ${RED};
          z-index: 3;
        }

        .sd-breadcrumb {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          margin-bottom: 24px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          flex-wrap: wrap;
        }

        .sd-breadcrumb a {
          color: rgba(255,255,255,0.55);
          text-decoration: none;
        }

        .sd-breadcrumb a:hover,
        .sd-breadcrumb strong {
          color: ${RED};
        }

        .sd-hero-icon {
          width: 78px;
          height: 78px;
          margin: 0 auto 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background: ${RED};
          color: #fff;
          box-shadow: 0 22px 50px rgba(232,49,42,0.34);
        }

        .sd-eyebrow {
          text-align: center;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${RED};
          margin-bottom: 14px;
        }

        .sd-eyebrow.dark {
          color: ${RED};
          text-align: left;
        }

        .sd-heading .sd-eyebrow.dark {
          text-align: center;
        }

        .sd-eyebrow.light {
          color: rgba(255,255,255,0.72);
          text-align: left;
        }

        .sd-hero h1 {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
          font-size: clamp(42px, 5vw, 74px);
          font-weight: 900;
          line-height: 1.07;
          letter-spacing: -1.8px;
        }

        .sd-hero h1 span {
          color: ${RED};
        }

        .sd-hero p {
          max-width: 780px;
          margin: 24px auto 0;
          text-align: center;
          color: rgba(255,255,255,0.82);
          font-size: 17px;
          line-height: 1.85;
        }

        .sd-hero-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .sd-btn {
          min-height: 52px;
          padding: 0 28px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 900;
          transition: 0.25s ease;
        }

        .sd-btn-red {
          background: ${RED};
          color: #fff;
          box-shadow: 0 18px 42px rgba(232,49,42,0.28);
        }

        .sd-btn-red:hover {
          transform: translateY(-3px);
          background: #c41020;
        }

        .sd-btn-ghost {
          color: #fff;
          border: 1px solid rgba(255,255,255,0.24);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
        }

        .sd-btn-ghost:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-3px);
        }

        .sd-section {
          padding: 86px 0;
        }

        .sd-white {
          background: #fff;
        }

        .sd-light {
          background: #f8fafc;
        }

        .sd-overview-grid,
        .sd-dashboard-grid,
        .sd-two-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 54px;
          align-items: center;
        }

        .sd-image-card {
          position: relative;
          min-height: 430px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(8,20,46,0.16);
          background: #f3f4f6;
        }

        .sd-image-card img {
          width: 100%;
          height: 430px;
          object-fit: cover;
          display: block;
          transition: 0.5s ease;
        }

        .sd-image-card:hover img {
          transform: scale(1.04);
        }

        .sd-image-badge {
          position: absolute;
          left: 22px;
          bottom: 22px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.92);
          color: ${NAVY};
          font-size: 13px;
          font-weight: 900;
          box-shadow: 0 16px 34px rgba(0,0,0,0.16);
          backdrop-filter: blur(8px);
        }

        .sd-copy h2,
        .sd-heading h2,
        .sd-dark-card h2,
        .sd-process-card h2,
        .sd-cta h2 {
          margin: 0 0 18px;
          color: ${NAVY};
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -1.2px;
        }

        .sd-copy p,
        .sd-heading p {
          margin: 0;
          color: ${TEXT};
          font-size: 15.5px;
          line-height: 1.85;
        }

        .sd-quick-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 28px;
        }

        .sd-quick-item {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          color: #374151;
          font-size: 13.5px;
          font-weight: 800;
          line-height: 1.5;
        }

        .sd-quick-item svg {
          color: ${RED};
          flex-shrink: 0;
          margin-top: 2px;
        }

        .sd-heading {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 46px;
        }

        .sd-slider {
          position: relative;
          max-width: 940px;
          margin: 0 auto;
          padding: 0 70px 42px;
        }

        .sd-slider-stage {
          position: relative;
          min-height: 265px;
        }

        .sd-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
          transform: translateX(34px) scale(0.97);
          transition: 0.5s ease;
          padding: 40px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 24px 60px rgba(8,20,46,0.10);
        }

        .sd-slide.active {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0) scale(1);
        }

        .sd-slide-number {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(232,49,42,0.10);
          color: ${RED};
          display: grid;
          place-items: center;
          font-weight: 900;
          margin-bottom: 22px;
        }

        .sd-slide h3 {
          margin: 0 0 12px;
          color: ${NAVY};
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -0.7px;
        }

        .sd-slide p {
          max-width: 700px;
          margin: 0;
          color: ${TEXT};
          font-size: 15px;
          line-height: 1.8;
        }

        .sd-slider-btn {
          position: absolute;
          top: 88px;
          z-index: 3;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background: ${NAVY};
          color: #fff;
          font-size: 36px;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .sd-slider-btn:hover {
          background: ${RED};
          transform: translateY(-3px);
        }

        .sd-slider-prev {
          left: 0;
        }

        .sd-slider-next {
          right: 0;
        }

        .sd-slider-dots {
          display: flex;
          justify-content: center;
          gap: 9px;
          margin-top: 24px;
        }

        .sd-slider-dots button {
          width: 9px;
          height: 9px;
          border: none;
          border-radius: 999px;
          background: rgba(8,20,46,0.22);
          cursor: pointer;
          transition: 0.25s ease;
        }

        .sd-slider-dots button.active {
          width: 32px;
          background: ${RED};
        }

        .sd-dashboard-points {
          display: grid;
          gap: 14px;
          margin-top: 28px;
        }

        .sd-dashboard-points div {
          display: flex;
          align-items: center;
          gap: 11px;
          color: ${NAVY};
          font-size: 14px;
          font-weight: 900;
        }

        .sd-dashboard-points svg {
          color: ${RED};
        }

        .sd-service-visual-card {
          position: relative;
          min-height: 430px;
          border-radius: 22px;
          overflow: hidden;
          background: ${NAVY};
          box-shadow: 0 24px 70px rgba(8,20,46,0.16);
        }

        .sd-service-visual-card img {
          width: 100%;
          height: 430px;
          object-fit: cover;
          display: block;
          transition: 0.55s ease;
        }

        .sd-service-visual-card:hover img {
          transform: scale(1.05);
        }

        .sd-service-visual-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(8,20,46,0.88) 0%, rgba(8,20,46,0.45) 55%, rgba(8,20,46,0.18) 100%),
            radial-gradient(circle at 20% 20%, rgba(232,49,42,0.28), transparent 34%);
          z-index: 1;
        }

        .sd-service-visual-overlay {
          position: absolute;
          left: 34px;
          bottom: 34px;
          right: 34px;
          z-index: 2;
        }

        .sd-service-visual-overlay span {
          display: block;
          color: ${RED};
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2.8px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .sd-service-visual-overlay h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 34px;
          line-height: 1.12;
          font-weight: 900;
          letter-spacing: -0.8px;
        }

        .sd-service-visual-overlay p {
          max-width: 520px;
          margin: 0;
          color: rgba(255,255,255,0.82);
          font-size: 14px;
          line-height: 1.75;
        }

        .sd-service-floating-box {
          position: absolute;
          z-index: 3;
          width: 190px;
          padding: 16px 18px;
          border-radius: 14px;
          background: rgba(255,255,255,0.94);
          box-shadow: 0 18px 45px rgba(8,20,46,0.20);
          backdrop-filter: blur(10px);
        }

        .sd-service-floating-box strong {
          display: block;
          color: ${NAVY};
          font-size: 13.5px;
          font-weight: 900;
          margin-bottom: 5px;
        }

        .sd-service-floating-box span {
          display: block;
          color: ${TEXT};
          font-size: 12px;
          font-weight: 700;
        }

        .sd-service-floating-box.box-one {
          top: 26px;
          right: 26px;
        }

        .sd-service-floating-box.box-two {
          right: 26px;
          bottom: 26px;
        }

        .sd-benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .sd-benefit-card {
          min-height: 170px;
          padding: 26px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 14px 38px rgba(8,20,46,0.07);
          transition: 0.25s ease;
        }

        .sd-benefit-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 24px 60px rgba(8,20,46,0.12);
        }

        .sd-benefit-card span {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          background: rgba(232,49,42,0.10);
          color: ${RED};
          font-weight: 900;
          margin-bottom: 18px;
        }

        .sd-benefit-card h3 {
          margin: 0;
          color: ${NAVY};
          font-size: 17px;
          line-height: 1.45;
          font-weight: 900;
        }

        .sd-dark-card,
        .sd-process-card {
          min-height: 420px;
          border-radius: 24px;
          padding: 38px;
        }

        .sd-dark-card {
          position: relative;
          overflow: hidden;
          background: ${NAVY};
          color: #fff;
        }

        .sd-dark-card::after {
          content: '';
          position: absolute;
          right: -90px;
          top: -90px;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: rgba(232,49,42,0.20);
        }

        .sd-dark-card h2 {
          color: #fff;
          position: relative;
          z-index: 2;
        }

        .sd-list {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 16px;
          margin-top: 24px;
        }

        .sd-list div {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,0.84);
          font-size: 15px;
          font-weight: 800;
        }

        .sd-list svg {
          color: ${RED};
          flex-shrink: 0;
        }

        .sd-process-card {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
        }

        .sd-process-list {
          display: grid;
          gap: 20px;
          margin-top: 24px;
        }

        .sd-process-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .sd-process-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: ${RED};
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sd-process-item h3 {
          margin: 0 0 5px;
          color: ${NAVY};
          font-size: 17px;
          font-weight: 900;
        }

        .sd-process-item p {
          margin: 0;
          color: ${TEXT};
          font-size: 13.5px;
          line-height: 1.7;
        }

        .sd-cta {
          padding: 78px 0;
          background: linear-gradient(135deg, #08142E 0%, #101827 58%, #1b0f12 100%);
          color: #fff;
        }

        .sd-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 34px;
        }

        .sd-cta h2 {
          color: #fff;
          max-width: 760px;
        }

        .sd-cta p {
          max-width: 720px;
          margin: 0;
          color: rgba(255,255,255,0.72);
          font-size: 15px;
          line-height: 1.75;
        }

        .sd-reveal {
          opacity: 0;
          transform: translateY(34px);
          transition:
            opacity 0.7s cubic-bezier(0.16,1,0.3,1),
            transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }

        .sd-reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 980px) {
          .sd-overview-grid,
          .sd-dashboard-grid,
          .sd-two-grid {
            grid-template-columns: 1fr;
          }

          .sd-benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sd-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 720px) {
          .sd-main {
            padding-top: 74px;
          }

          .sd-hero {
            min-height: 520px;
            padding: 78px 0;
          }

          .sd-hero h1 {
            font-size: 38px;
          }

          .sd-hero p {
            font-size: 15px;
          }

          .sd-quick-grid,
          .sd-benefits-grid {
            grid-template-columns: 1fr;
          }

          .sd-image-card,
          .sd-image-card img {
            min-height: 320px;
            height: 320px;
          }

          .sd-slider {
            padding-left: 0;
            padding-right: 0;
          }

          .sd-slider-btn {
            display: none;
          }

          .sd-slider-stage {
            min-height: 340px;
          }

          .sd-slide {
            padding: 30px 24px;
          }

          .sd-slide h3 {
            font-size: 24px;
          }

          .sd-service-visual-card {
            min-height: 330px;
            border-radius: 18px;
          }

          .sd-service-visual-card img {
            height: 330px;
          }

          .sd-service-visual-overlay {
            left: 22px;
            right: 22px;
            bottom: 24px;
          }

          .sd-service-visual-overlay h3 {
            font-size: 26px;
          }

          .sd-service-visual-overlay p {
            font-size: 13px;
          }

          .sd-service-floating-box {
            display: none;
          }

          .sd-dark-card,
          .sd-process-card {
            padding: 28px 22px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;