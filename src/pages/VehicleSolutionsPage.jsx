import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, MonitorCheck, ShieldCheck, RadioTower } from 'lucide-react';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { vehicleSolutions } from '../data/vehicleSolutionsData';
import './VehicleSolutionsPage.css';

const VehicleSolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vehicle-solution-page">
      <TopBar />
      <Navbar />

      <main className="vehicle-main-offset">
        <section className="vehicle-list-hero">
          <img
            src="/vehicle-solutions/vehicle-solutions-hero-bg.png"
            alt="Vehicle Monitoring Solutions"
            className="vehicle-list-hero-img"
          />

          <div className="vehicle-list-hero-overlay" />

          <div className="vehicle-container vehicle-list-hero-content">
            <span className="vehicle-eyebrow">AI Video Telematics Solutions</span>

            <h1>
              Vehicle-Specific Monitoring <span>Solutions</span>
            </h1>

            <p>
              Professional bus, truck, school bus, train, police, private vehicle,
              motorcycle, military and emergency fleet monitoring solutions for
              safer, smarter and more connected operations.
            </p>

            <div className="vehicle-hero-actions">
              <a href="#vehicle-solutions-grid" className="vehicle-primary-btn">
                View All Systems <ArrowRight size={17} />
              </a>

              <Link to="/contact" className="vehicle-secondary-btn">
                Request Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="vehicle-capability-strip">
          <div className="vehicle-container vehicle-capability-grid">
            {[
              {
                icon: Camera,
                title: 'Multi-Camera Coverage',
                text: 'Front, rear, side, dome, DMS and specialty cameras.',
              },
              {
                icon: MonitorCheck,
                title: 'DVR/NVR Integration',
                text: 'Hybrid AI Mobile DVR and NVR system workflows.',
              },
              {
                icon: ShieldCheck,
                title: 'Safety Monitoring',
                text: 'ADAS, DMS, BSD, evidence video and driver safety support.',
              },
              {
                icon: RadioTower,
                title: 'Platform Ready',
                text: 'CMS, server, API and control room integration options.',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div className="vehicle-capability-card" key={item.title}>
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="vehicle-solutions-grid" className="vehicle-list-section">
          <div className="vehicle-container">
            <div className="vehicle-section-head centered">
              <span>Solution Pages</span>
              <h2>Choose Your Vehicle Monitoring System</h2>
              <p>
                Every solution page includes professional architecture visuals,
                system modules, business benefits and Timeline Telematics service flow.
              </p>
            </div>

            <div className="vehicle-list-grid">
              {vehicleSolutions.map((item) => (
                <Link
                  to={`/vehicle-solutions/${item.slug}`}
                  className="vehicle-list-card"
                  key={item.slug}
                >
                  <div className="vehicle-list-img-wrap">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="vehicle-list-card-body">
                    <span>{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>

                    <div className="vehicle-card-link">
                      View Solution <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VehicleSolutionsPage;