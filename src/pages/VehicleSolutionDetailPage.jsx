import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Video,
  Monitor,
  Gauge,
  RadioTower,
} from 'lucide-react';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { vehicleSolutions, vehicleSolutionsBySlug } from '../data/vehicleSolutionsData';
import './VehicleSolutionsPage.css';

const iconList = [Video, Cpu, ShieldCheck, Monitor, Gauge, RadioTower];

const architectureContent = {
  'bus-monitoring-solution': {
    eyebrow: 'Bus Fleet Intelligence',
    title: 'AI-Powered Bus Monitoring Ecosystem',
    text:
      'Timeline Telematics delivers an intelligent bus monitoring solution designed for passenger safety, driver visibility, route control and real-time video evidence across city, staff and shuttle transport operations.',
  },
  'cargo-truck-solution': {
    eyebrow: 'Cargo Fleet Protection',
    title: 'Smart Cargo Truck Visibility System',
    text:
      'A professional cargo truck monitoring setup built to improve road safety, driver awareness, cargo accountability and incident recording for logistics, distribution and freight operations.',
  },
  'oil-truck-solution': {
    eyebrow: 'Hazardous Fleet Safety',
    title: 'Secure Oil Truck Monitoring Architecture',
    text:
      'Timeline Telematics supports oil and fuel transport fleets with safety-focused monitoring, anti-explosive camera options, fuel level visibility, driver monitoring and reliable video recording for high-risk operations.',
  },
  'school-bus-solution': {
    eyebrow: 'Student Transport Safety',
    title: 'Connected School Bus Safety System',
    text:
      'A complete student transport solution designed to protect children, verify movement, monitor cabin activity and give schools full visibility over routes, attendance, driver behavior and safety events.',
  },
  'train-monitoring-solution': {
    eyebrow: 'Rail Video Intelligence',
    title: 'Advanced Train Monitoring Solution',
    text:
      'Timeline Telematics provides rail monitoring architecture for safer journeys, onboard video recording, passenger area visibility and centralized incident review across train and metro operations.',
  },
  'police-car-solution': {
    eyebrow: 'Law Enforcement Mobility',
    title: 'Intelligent Police Vehicle Monitoring',
    text:
      'A connected police vehicle solution designed for field evidence, officer safety, patrol visibility and real-time fleet monitoring with AI DVR, body camera and multi-camera support.',
  },
  'police-car-system': {
    eyebrow: 'Command Center Integration',
    title: 'End-to-End Police Vehicle System',
    text:
      'Timeline Telematics enables police vehicles to connect onboard cameras, AI DVR, license plate recognition, tablet monitoring, CMSV6 platform and customer server workflows into one secure public safety architecture.',
  },
  'private-car-suv-solution': {
    eyebrow: 'Executive Vehicle Security',
    title: 'Private Car & SUV Protection System',
    text:
      'A compact and professional monitoring solution for private cars, SUVs, executive fleets and VIP vehicles with secure recording, rear visibility and AI-powered safety support.',
  },
  'motorcycle-solution': {
    eyebrow: 'Two-Wheeler Telematics',
    title: 'Compact Motorcycle Video Monitoring',
    text:
      'A lightweight motorcycle monitoring solution built for delivery riders, patrol bikes and two-wheeler fleets with front/rear camera visibility and compact mobile DVR recording.',
  },
  'military-vehicle-solution': {
    eyebrow: 'Tactical Fleet Intelligence',
    title: 'Rugged Military Vehicle Monitoring',
    text:
      'Timeline Telematics supports tactical and defense vehicles with rugged video intelligence, thermal imaging, body camera support, multi-camera coverage and reliable field monitoring.',
  },
  'fire-truck-solution': {
    eyebrow: 'Emergency Fleet Visibility',
    title: 'Fire & Rescue Vehicle Monitoring System',
    text:
      'A professional fire truck monitoring solution created for emergency response visibility, driver safety, fuel monitoring, incident evidence and secure video recording during critical operations.',
  },
};

const VehicleSolutionDetailPage = () => {
  const { slug } = useParams();
  const solution = vehicleSolutionsBySlug[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!solution) {
    return <Navigate to="/vehicle-solutions" replace />;
  }

  const architecture = architectureContent[solution.slug] || {
    eyebrow: 'Timeline Telematics Solution',
    title: `${solution.title} Architecture`,
    text:
      'A professional Timeline Telematics solution designed to connect vehicle hardware, video intelligence, safety monitoring and fleet visibility into one reliable operational system.',
  };

  const relatedSolutions = vehicleSolutions
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <div className="vehicle-solution-page">
      <TopBar />
      <Navbar />

      <main className="vehicle-main-offset">
        <section className="vehicle-detail-hero">
          <div
            className="vehicle-hero-bg"
            style={{ backgroundImage: `url(${solution.image})` }}
          />
          <div className="vehicle-hero-overlay" />

          <div className="vehicle-container vehicle-hero-grid">
            <div className="vehicle-hero-content">
              <span className="vehicle-eyebrow">{solution.eyebrow}</span>
              <h1>{solution.title}</h1>
              <p>{solution.summary}</p>

              <div className="vehicle-hero-actions">
                <Link to="/contact" className="vehicle-primary-btn">
                  Request Solution <ArrowRight size={17} />
                </Link>

                <a href="#architecture" className="vehicle-secondary-btn">
                  View Solution
                </a>
              </div>
            </div>

            <div className="vehicle-hero-card">
              <div className="vehicle-hero-card-label">
                Timeline AI Video Telematics
              </div>

              <div className="vehicle-hero-metrics">
                {solution.highlights.map((item) => (
                  <div key={item}>
                    <strong>{item}</strong>
                    <span>System Capability</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="architecture" className="vehicle-architecture-section">
          <div className="vehicle-container">
            <div className="vehicle-section-head centered">
              <span>{architecture.eyebrow}</span>
              <h2>{architecture.title}</h2>
              <p>{architecture.text}</p>
            </div>

            <div className="vehicle-architecture-card">
              <img
                src={solution.image}
                alt={`${solution.title} system`}
              />
            </div>
          </div>
        </section>

        <section className="vehicle-overview-section">
          <div className="vehicle-container vehicle-two-col">
            <div>
              <span className="vehicle-mini-label">Overview</span>
              <h2>{solution.title} for Modern Fleet Operations</h2>
              <p>{solution.overview}</p>

              <div className="vehicle-suitable-box">
                <h3>Suitable For</h3>

                <div className="vehicle-tags">
                  {solution.suitableFor.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="vehicle-benefits-card">
              <h3>Business Benefits</h3>

              {solution.benefits.map((item) => (
                <div className="vehicle-benefit-row" key={item}>
                  <CheckCircle2 size={19} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vehicle-modules-section">
          <div className="vehicle-container">
            <div className="vehicle-section-head">
              <span>System Modules</span>
              <h2>Integrated Devices & Components</h2>
              <p>
                Each device is selected to support reliable video evidence,
                real-time visibility, driver safety and smarter fleet operations
                under the Timeline Telematics solution ecosystem.
              </p>
            </div>

            <div className="vehicle-modules-grid">
              {solution.modules.map((module, index) => {
                const Icon = iconList[index % iconList.length];

                return (
                  <div className="vehicle-module-card" key={module}>
                    <div className="vehicle-module-icon">
                      <Icon size={22} />
                    </div>

                    <h3>{module}</h3>
                    <p>
                      Configured for reliable field visibility, video evidence,
                      safety alerts and fleet monitoring workflows.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="vehicle-workflow-section">
          <div className="vehicle-container vehicle-workflow-grid">
            <div className="vehicle-section-head light">
              <span>Deployment Workflow</span>
              <h2>From Vehicle Hardware to Fleet Intelligence</h2>
              <p>
                Timeline Telematics connects onboard cameras, DVR/NVR,
                sensors and monitoring platforms into one complete solution for
                safer, smarter and more accountable fleet operations.
              </p>
            </div>

            <div className="vehicle-workflow-steps">
              {[
                'Vehicle survey and hardware planning',
                'Camera, sensor and DVR/NVR installation',
                'Platform configuration and live testing',
                'Monitoring, reporting and support handover',
              ].map((item, index) => (
                <div className="vehicle-step" key={item}>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vehicle-related-section">
          <div className="vehicle-container">
            <div className="vehicle-section-head centered">
              <span>Explore More</span>
              <h2>Related Vehicle Solutions</h2>
            </div>

            <div className="vehicle-related-grid">
              {relatedSolutions.map((item) => (
                <Link
                  to={`/vehicle-solutions/${item.slug}`}
                  className="vehicle-related-card"
                  key={item.slug}
                >
                  <img src={item.image} alt={item.title} />

                  <div>
                    <span>{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="vehicle-cta-section">
          <div className="vehicle-container vehicle-cta-card">
            <div>
              <span>Need This Solution?</span>
              <h2>Build a Custom Monitoring System for Your Fleet</h2>
              <p>
                Share your vehicle type, number of units and required
                camera/sensor setup. Timeline Telematics can prepare the right
                hardware and software configuration for your operation.
              </p>
            </div>

            <Link to="/contact" className="vehicle-primary-btn dark">
              Contact Team <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VehicleSolutionDetailPage;