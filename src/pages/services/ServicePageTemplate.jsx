import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import TopBar from '../../components/TopBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './ServicePageTemplate.css';

const RED = '#E8312A';

const useReveal = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, show];
};

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, show] = useReveal();

  return (
    <div
      ref={ref}
      className={`svc-reveal ${show ? 'show' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const Slider = ({ items = [] }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!items.length) return undefined;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3600);

    return () => clearInterval(timer);
  }, [items.length]);

  if (!items.length) return null;

  const next = () => setActive((prev) => (prev + 1) % items.length);
  const prev = () => setActive((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="svc-slider">
      <button className="svc-slider-btn prev" onClick={prev} type="button">
        ‹
      </button>

      <div className="svc-slider-stage">
        {items.map((item, index) => (
          <article
            key={item.title || item}
            className={`svc-slide ${active === index ? 'active' : ''}`}
          >
            <span className="svc-slide-num">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{item.title || item}</h3>

            <p>
              {item.text ||
                'Smart fleet intelligence designed to improve visibility, reporting, alerts and operational control.'}
            </p>
          </article>
        ))}
      </div>

      <button className="svc-slider-btn next" onClick={next} type="button">
        ›
      </button>

      <div className="svc-slider-dots">
        {items.map((item, index) => (
          <button
            key={item.title || item}
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

const ServicePageTemplate = ({ service }) => {
  const featureSlides = service.features.map((feature) => ({
    title: feature.title,
    text: feature.text,
  }));

  return (
    <div className="svc-page">
      <TopBar />
      <Navbar />

      <main className="svc-main">
        {/* HERO */}
        <section
          className="svc-hero"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(8,20,46,0.94) 0%, rgba(8,20,46,0.80) 48%, rgba(8,20,46,0.86) 100%),
              url(${service.heroImage})
            `,
          }}
        >
          <div className="svc-hero-line" />

          <div className="svc-container">
            <Reveal>
              <div className="svc-breadcrumb">
                <Link to="/">Home</Link>
                <span>›</span>
                <Link to="/services">Services</Link>
                <span>›</span>
                <strong>{service.shortTitle}</strong>
              </div>

              <div className="svc-eyebrow center">{service.eyebrow}</div>

              <h1>
                {service.title}
                <span>.</span>
              </h1>

              <p>{service.intro}</p>

              <div className="svc-hero-actions">
                <Link to="/contact" className="svc-btn svc-btn-red">
                  Request a Quote
                </Link>

                <a href="#features" className="svc-btn svc-btn-ghost">
                  Explore Features
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="svc-section svc-white">
          <div className="svc-container svc-overview-grid">
            <Reveal>
              <div className="svc-image-card">
                <img
                  src={service.heroImage}
                  alt={service.shortTitle}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                <div className="svc-image-fallback">
                  <span>{service.shortTitle}</span>
                </div>

                <div className="svc-image-badge">
                  <span className="svc-live-dot" />
                  Live Monitoring Active
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="svc-copy">
                <div className="svc-eyebrow">Service Overview</div>
                <h2>Built for smarter fleet control across UAE and GCC operations.</h2>
                <p>{service.midText}</p>

                <div className="svc-stat-grid">
                  {service.stats.map((stat) => (
                    <div className="svc-stat-card" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* KEY ADVANTAGES SLIDER */}
        <section className="svc-section svc-light">
          <div className="svc-container">
            <Reveal className="svc-heading">
              <div className="svc-eyebrow center">Key Advantages</div>
              <h2>Professional tools for real fleet operations</h2>
              <p>
                A clean and powerful solution designed for tracking, visibility,
                reporting, safety and business control.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <Slider items={service.heroCards} />
            </Reveal>
          </div>
        </section>

        {/* DASHBOARD */}
        <section className="svc-section svc-white">
          <div className="svc-container svc-dashboard-grid">
            <Reveal>
              <div className="svc-copy">
                <div className="svc-eyebrow">Dashboard Experience</div>
                <h2>{service.midTitle}</h2>
                <p>{service.midText}</p>

                <div className="svc-check-list">
                  <div>
                    <span>✓</span>
                    Real-time fleet visibility
                  </div>
                  <div>
                    <span>✓</span>
                    Smart alerts and reports
                  </div>
                  <div>
                    <span>✓</span>
                    Route, trip and driver insights
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="svc-dashboard">
                <div className="svc-dashboard-top">
                  <strong>Fleet Dashboard</strong>
                  <i />
                  <i />
                  <i />
                </div>

                <div className="svc-dashboard-body">
                  <div className="svc-sidebar">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="svc-map">
                    <div className="svc-route" />
                    <div className="svc-pin pin-a" />
                    <div className="svc-pin pin-b" />
                    <div className="svc-pin pin-c" />

                    <div className="svc-widget widget-a">
                      <strong>Fleet Status</strong>
                      <div className="svc-donut" />
                    </div>

                    <div className="svc-widget widget-b">
                      <strong>Alerts</strong>
                      <div className="svc-bars">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className="svc-widget widget-c">
                      <strong>Reports</strong>
                      <p>Live activity, trips, stops and exceptions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="svc-section svc-light">
          <div className="svc-container">
            <Reveal className="svc-heading">
              <div className="svc-eyebrow center">How It Works</div>
              <h2>Your fleet journey, redefined</h2>
              <p>
                From deployment to live monitoring, every movement becomes
                visible, measurable and easier to manage.
              </p>
            </Reveal>

            <div className="svc-journey">
              {service.features.slice(0, 3).map((feature, index) => (
                <Reveal delay={index * 0.1} key={feature.title}>
                  <div className={`svc-journey-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="svc-journey-dot" />

                    <article className="svc-journey-card">
                      <span>Step {String(index + 1).padStart(2, '0')}</span>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </article>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="svc-section svc-white">
          <div className="svc-container">
            <Reveal className="svc-heading">
              <div className="svc-eyebrow center">Core Features</div>
              <h2>{service.featuresTitle}</h2>
              <p>
                Built for practical business usage with reliable monitoring,
                clean reports and a professional user experience.
              </p>
            </Reveal>

            <div className="svc-features-grid">
              {service.features.map((feature, index) => (
                <Reveal delay={index * 0.08} key={feature.title}>
                  <article className="svc-feature-card">
                    <div className="svc-feature-num">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>

                    <ul>
                      {feature.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE SLIDER */}
        <section className="svc-section svc-light">
          <div className="svc-container svc-feature-slider-grid">
            <Reveal>
              <div className="svc-copy">
                <div className="svc-eyebrow">Operational Benefits</div>
                <h2>Everything your team needs in one place.</h2>
                <p>
                  Monitor activity, reduce manual work, respond quickly to alerts
                  and make better decisions using reliable fleet data.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <Slider items={featureSlides} />
            </Reveal>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="svc-section svc-white">
          <div className="svc-container">
            <Reveal className="svc-heading">
              <div className="svc-eyebrow center">Industries</div>
              <h2>Enhanced by our technology</h2>
            </Reveal>

            <div className="svc-industries-grid">
              {service.industries.map((industry, index) => (
                <Reveal delay={index * 0.06} key={industry}>
                  <div className="svc-industry-card">
                    <span>{industry}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="svc-section svc-light">
          <div className="svc-container svc-faq-grid">
            <Reveal>
              <div className="svc-copy">
                <div className="svc-eyebrow">FAQ</div>
                <h2>Questions about {service.shortTitle}</h2>
                <p>
                  Quick answers for businesses planning to upgrade their tracking
                  and fleet management operations.
                </p>
              </div>
            </Reveal>

            <div className="svc-faq-list">
              {service.faqs.map((faq, index) => (
                <Reveal delay={index * 0.08} key={faq.q}>
                  <details className="svc-faq-item">
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="svc-cta">
          <div className="svc-container svc-cta-inner">
            <div>
              <div className="svc-eyebrow light">Ready to deploy?</div>
              <h2>Get a tailored {service.shortTitle.toLowerCase()} solution for your fleet.</h2>
              <p>
                Share your fleet size, vehicle type and operational needs.
                Our team will recommend the right devices, platform features
                and deployment approach.
              </p>
            </div>

            <Link to="/contact" className="svc-btn svc-btn-red">
              Request a Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;