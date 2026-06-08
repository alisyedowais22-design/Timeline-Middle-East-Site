import './ProductsPage.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Package, ShieldCheck } from 'lucide-react';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RED = '#E8312A';
const P = "'Poppins', sans-serif";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [activeFilters, setActiveFilters] = useState([]);

  const categories = [
    {
      id: 'vehicle',
      label: 'Vehicle Trackers',
      desc: 'Real-time GPS trackers for all vehicle types',
      products: [
        { id: 'gt06n-4g', model: 'GT06N 4G', image: '/products/GT06N 4G.png', name: 'Classic, Reimagined in 4G' },
        { id: 'vg03', model: 'VG03', image: '/products/VG03.png', name: 'Discreet Tracking' },
        { id: 'vl103d', model: 'VL103D', image: '/products/VL103D.png', name: 'Tiny Device' },
        { id: 'vl103m', model: 'VL103M', image: '/products/VL103M.png', name: 'Minimal Form' },
        { id: 'vl110c', model: 'VL110C', image: '/products/VL110C.png', name: 'Any Vehicle' },
        { id: 'vl802', model: 'VL802', image: '/products/VL802.png', name: 'More Visibility' },
        { id: 'vl808', model: 'VL808', image: '/products/VL808.png', name: 'Intelligent Tracking' },
        { id: 'x3', model: 'X3', image: '/products/X3.png', name: 'Voice Tracker' },
        { id: 'gt06n', model: 'GT06N', image: '/products/GT06N.png', name: 'The Classic' },
      ],
    },
    {
      id: 'can_obd',
      label: 'CAN & OBD Trackers',
      desc: 'Deep vehicle data via CAN bus integration',
      products: [
        { id: 'vl502', model: 'VL502', image: '/products/VL502.png', name: 'Fleet CAN Tracker' },
      ],
    },
    {
      id: 'asset',
      label: 'Asset Trackers',
      desc: 'Long-life battery trackers for valuable assets',
      products: [
        { id: 'll303pro', model: 'LL303PRO', image: '/products/LL303PRO.png', name: '5 Years Battery' },
        { id: 'll301', model: 'LL301', image: '/products/LL301.png', name: 'Silent Protector' },
      ],
    },
    {
      id: 'personal',
      label: 'Personal Trackers',
      desc: 'Discreet safety trackers for individuals',
      products: [
        { id: 'pl200', model: 'PL200', image: '/products/PL200.png', name: 'Silent Guardian' },
      ],
    },
    {
      id: 'dashcam',
      label: 'AI Dashcams',
      desc: 'ADAS & DMS AI-powered dashcams for fleet safety',
      products: [
        { id: 'jc371', model: 'JC371', image: '/products/jc371.png', name: 'AI Dashcam with ADAS' },
        { id: 'jc450', model: 'JC450', image: '/products/jc450.png', name: 'Multi-Channel AI Dashcam' },
        { id: 'jc261', model: 'JC261', image: '/products/jc261.png', name: 'Dual Camera AI Dashcam' },
        { id: 'jc261p', model: 'JC261P', image: '/products/jc261p.png', name: 'Pro AI Dashcam' },
        { id: 'jc400d', model: 'JC400D', image: '/products/jc400d.png', name: '4G AI Dashcam' },
      ],
    },
    {
      id: 'nonAidashcam',
      label: 'Non-AI Dashcams',
      desc: 'Reliable standalone dashcams for basic recording',
      products: [
        { id: 'jc181', model: 'JC181', image: '/products/jc181.png', name: 'Basic Dashcam' },
      ],
    },
  ];

  const toggleFilter = (id) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const visibleCategories =
    activeFilters.length === 0
      ? categories
      : categories.filter((c) => activeFilters.includes(c.id));

  return (
    <div className="products-page">
      <TopBar />
      <Navbar />

      <main style={{ paddingTop: 0 }}>
        <section
          className="products-hero"
          style={{
            position: 'relative',
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            color: '#fff',
            backgroundImage: `
              linear-gradient(90deg, rgba(8,20,46,0.94) 0%, rgba(8,20,46,0.82) 45%, rgba(8,20,46,0.55) 100%),
              url('https://images.unsplash.com/photo-1602526432604-029a709e131c?q=80&w=1800&auto=format&fit=crop')
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
              Fleet Hardware Portfolio
            </div>

            <h1
              style={{
                maxWidth: '900px',
                margin: '0 auto',
                fontFamily: P,
                fontSize: 'clamp(44px, 5vw, 76px)',
                lineHeight: 1.05,
                letterSpacing: '-2px',
                fontWeight: 900,
                color: '#fff',
              }}
            >
              Fleet Hardware for <span style={{ color: RED }}>UAE & GCC</span>
            </h1>

            <p
              style={{
                maxWidth: '780px',
                margin: '24px auto 0',
                fontFamily: P,
                fontSize: '17px',
                lineHeight: 1.85,
                color: 'rgba(255,255,255,0.78)',
              }}
            >
              Timeline provides complete hardware solutions for Dubai and Middle East fleets —
              real-time GPS tracking, vehicle security, asset monitoring, AI dashcams, fuel
              sensors and accessories.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '14px',
                marginTop: '34px',
              }}
            >
              <a
                href="#products-list"
                style={{
                  minHeight: '52px',
                  padding: '0 28px',
                  borderRadius: '10px',
                  background: RED,
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '9px',
                  fontFamily: P,
                  fontSize: '14px',
                  fontWeight: 900,
                  boxShadow: '0 18px 42px rgba(232,49,42,0.35)',
                }}
              >
                Explore Products <ArrowRight size={17} />
              </a>

              <Link
                to="/contact"
                style={{
                  minHeight: '52px',
                  padding: '0 28px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '9px',
                  fontFamily: P,
                  fontSize: '14px',
                  fontWeight: 900,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <ShieldCheck size={17} /> Get Recommendation
              </Link>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '14px',
                marginTop: '38px',
              }}
            >
              {['GPS Trackers', 'AI Dashcams', 'Asset Trackers', 'Fuel Sensors'].map((item) => (
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
                    fontFamily: P,
                    fontSize: '12px',
                    fontWeight: 800,
                  }}
                >
                  <Package size={14} color={RED} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="products-filter-bar">
          <div className="container">
            <div className="filter-bar-inner">
              <span className="filter-bar-label">Filter by:</span>

              <div className="filter-bar-pills">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`filter-pill ${activeFilters.includes(cat.id) ? 'active' : ''}`}
                    onClick={() => toggleFilter(cat.id)}
                    type="button"
                  >
                    {cat.label}
                  </button>
                ))}

                {activeFilters.length > 0 && (
                  <button
                    className="filter-pill filter-pill-reset"
                    onClick={() => setActiveFilters([])}
                    type="button"
                  >
                    ✕ Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <section className="products-main" id="products-list">
          <div className="container">
            {visibleCategories.map((cat) => (
              <div key={cat.id} className="products-category-group">
                <div className="products-category-header">
                  <div>
                    <h2 className="products-category-title">{cat.label}</h2>
                    <p className="products-category-desc">{cat.desc}</p>
                  </div>

                  <span className="products-category-count">
                    {cat.products.length} Product{cat.products.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="products-grid">
                  {cat.products.map((product) => (
                    <div
                      key={product.id}
                      className="product-card"
                      onClick={() => navigate(`/products/${product.id}`)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') navigate(`/products/${product.id}`);
                      }}
                    >
                      <div className="product-image-wrapper">
                        <img
                          src={product.image}
                          alt={product.model}
                          className="product-image"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>

                      <div className="product-info">
                        <h3 className="product-model">{product.model}</h3>
                        <p className="product-name-tag">{product.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="products-cta">
          <div className="container">
            <div className="cta-box">
              <h2 className="cta-title">Get Solution Now!</h2>
              <p className="cta-text">
                Contact us today to find the perfect GPS tracking solution for your fleet
              </p>
              <Link to="/contact" className="cta-btn">
                Contact Us →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .products-hero {
            min-height: 520px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;