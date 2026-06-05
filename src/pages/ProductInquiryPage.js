import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const ProductInquiryPage = () => {
  const [searchParams] = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check if redirected back after successful submission
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true);
      
      // Auto-hide after 10 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
    }
  }, [searchParams]);

  return (
    <main className="inquiry-page">
      {/* Hero Section */}
      <section className="inquiry-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span> › </span>
            <Link to="/contact">Contact</Link>
            <span> › </span>
            <span>Product Inquiry</span>
          </div>
          <h1 className="inquiry-title">Product Inquiry</h1>
          <p className="inquiry-subtitle">
            Get in touch with our sales team for product information and quotes
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="inquiry-form-section">
        <div className="container">
          <div className="inquiry-grid">
            
            {/* Left: Form */}
            <div className="inquiry-form-wrapper">
              <div className="form-header">
                <h2>Drop us your inquiry</h2>
                <p>For general inquiries, please fill in the form below. Our representative will contact you within 24-48 hours.</p>
                <p className="form-note">
                  Already bought Timeline Telematics product? Need technical support? Visit <Link to="/technical-support">Technical Support</Link> page.
                </p>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <div className="alert alert-success-pro">
                  <div className="alert-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="alert-content">
                    <h3>Thank You for Your Inquiry!</h3>
                    <p>We've successfully received your message and will respond within 24-48 hours.</p>
                    <p className="alert-note">A confirmation email has been sent to your inbox.</p>
                  </div>
                  <button 
                    className="alert-close"
                    onClick={() => setShowSuccess(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              )}

              <form 
                action="https://formsubmit.co/mehmood.ayaz@teletix.me" 
                method="POST"
                className="inquiry-form"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="🔔 New Product Inquiry - Timeline Telematics" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_next" value={`${window.location.origin}/product-inquiry?success=true`} />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting Timeline Telematics! We've received your inquiry and will get back to you within 24-48 hours." />
                <input type="text" name="_honey" style={{display: 'none'}} />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="Company"
                      required
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="Phone"
                      required
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="Country"
                      required
                      placeholder="UAE"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quantity">Expected Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      name="Expected Quantity"
                      placeholder="e.g., 10-50 units"
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="interestedProducts">Interested Products</label>
                  <input
                    type="text"
                    id="interestedProducts"
                    name="Interested Products"
                    placeholder="e.g., Vehicle Trackers, Asset Trackers"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="Message"
                    required
                    rows="6"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-submit"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="inquiry-contact-info">
              <div className="info-card">
                <h3>Timeline Telematics</h3>
                <div className="info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:Info@teletix.me">Info@teletix.me</a>
                  </div>
                </div>

                <div className="info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div>
                    <strong>Phone</strong>
                    <span>+971 56 386 3615</span>
                  </div>
                </div>

                <div className="info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <strong>Address</strong>
                    <span>Dubai, UAE</span>
                  </div>
                </div>
              </div>

              <div className="info-card highlight">
                <h4>Response Time</h4>
                <p>We typically respond to all inquiries within <strong>24-48 hours</strong> during business days.</p>
              </div>

              <div className="info-card">
                <h4>Need Technical Support?</h4>
                <p>If you're an existing customer facing technical issues, please visit our dedicated support page.</p>
                <Link to="/technical-support" className="btn-link">
                  Technical Support →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductInquiryPage;