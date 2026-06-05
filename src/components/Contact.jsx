import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react';

const OFFICES = [
  {
    region: 'Europe Office', code: 'EU', flag: '🇪🇺',
    address: 'Frankfurt am Main, Germany',
    phone: '+97 1563863615', email: 'info.eu@timelinetelematics.com',
    hours: 'Mon–Fri: 9:00 AM – 5:00 PM CET', color: '#003399',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
    tagline: 'European Regional Office',
  },
  {
    region: 'UAE Office', code: 'AE', flag: '🇦🇪',
    address: 'Business Bay, Dubai, United Arab Emirates',
    phone: '+97 1563863615', email: 'info.ae@timelinetelematics.com',
    hours: 'Mon–Fri: 9:00 AM – 6:00 PM GST', color: '#009A44',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    tagline: 'Middle East Regional Office',
  },
  {
    region: 'Pakistan', code: 'PK', flag: '🇵🇰',
    address: 'Khayaban e Jami. 18c DHA Karachi',
    phone: '+97 1563863615', email: 'info.pk@timelinetelematics.com',
    hours: 'Mon–Sat: 9:00 AM – 6:00 PM PKT', color: '#E8312A',
    image: 'https://images.unsplash.com/photo-1635016288720-c52507b9a717?q=80&w=435&auto=format&fit=crop',
    tagline: 'Regional Office',
  },
];

const SUBJECTS = ['Get a Demo','Sales Enquiry','Technical Support','Partnership / Reseller','Media / Press','General Enquiry'];

const inputBase = {
  width: '100%', padding: '13px 16px',
  fontFamily: 'Poppins, sans-serif', fontSize: '14px',
  border: '1.5px solid #e5e7eb', borderRadius: '10px',
  outline: 'none', background: '#fff', color: '#111',
  transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box',
};

const Field = ({ label, name, type = 'text', placeholder, required, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: '600', color: '#374151' }}>
        {label} {required && <span style={{ color: '#E8312A' }}>*</span>}
      </label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ ...inputBase, borderColor: error ? '#ef4444' : focused ? '#E8312A' : '#e5e7eb', boxShadow: focused ? '0 0 0 3px rgba(232,49,42,0.1)' : 'none' }}
      />
      {error && <span style={{ color: '#ef4444', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>{error}</span>}
    </div>
  );
};

const useVisible = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const FadeIn = ({ children, delay = 0, style = {} }) => {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(22px)', transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`, ...style }}>{children}</div>
  );
};

const OfficeCard = ({ office, index }) => {
  const [ref, visible] = useVisible();
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '20px', overflow: 'hidden', border: '1px solid #e5e7eb', background: '#fff',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index*0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index*0.12}s, box-shadow 0.3s ease`,
        boxShadow: hovered ? '0 20px 48px rgba(0,0,0,0.14)' : '0 4px 16px rgba(0,0,0,0.06)',
      }}
    >
      <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${office.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 100%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: office.color }} />
        <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '22px', filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.4))' }}>{office.flag}</span>
          <div style={{ background: office.color, color: '#fff', fontSize: '10px', fontWeight: '800', padding: '3px 10px', borderRadius: '999px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Poppins, sans-serif' }}>{office.code}</div>
        </div>
        <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '18px', color: '#fff', lineHeight: 1.1 }}>{office.region}</div>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '3px' }}>{office.tagline}</div>
        </div>
      </div>
      <div style={{ padding: '24px' }}>
        {[
          { Icon: MapPin, text: office.address, href: null },
          { Icon: Phone,  text: office.phone,   href: `tel:${office.phone.replace(/\s/g,'')}` },
          { Icon: Mail,   text: office.email,   href: `mailto:${office.email}` },
          { Icon: Clock,  text: office.hours,   href: null },
        ].map(({ Icon, text, href }) => (
          <div key={text} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${office.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={14} color={office.color} />
            </div>
            {href
              ? <a href={href} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13.5px', color: '#4b5563', textDecoration: 'none', lineHeight: '1.5', marginTop: '7px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = office.color}
                  onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}
                >{text}</a>
              : <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13.5px', color: '#4b5563', lineHeight: '1.5', marginTop: '7px' }}>{text}</span>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  const [form, setForm]           = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [subjectFocused, setSubjectFocused] = useState(false);
  const [msgFocused, setMsgFocused]         = useState(false);

  const set = (field) => (e) => { setForm(f => ({ ...f, [field]: e.target.value })); setErrors(er => ({ ...er, [field]: null })); };

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject)        e.subject = 'Please select a subject';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const subject = encodeURIComponent(`[Website Enquiry] ${form.subject} — ${form.name}`);
    const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone||'Not provided'}\nCompany: ${form.company||'Not provided'}\nSubject: ${form.subject}\n\nMessage:\n${form.message}\n\n---\nSent from Timeline Telematics website`);
    window.location.href = `mailto:info@timelinetelematics.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ background: '#fff' }}>


      {/* Form + Sidebar */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '56px', alignItems: 'start' }} className="contact-grid">

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <FadeIn>
              <div>
                <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '26px', color: '#111', marginBottom: '10px' }}>We'd love to hear from you</h2>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14.5px', color: '#6b7280', lineHeight: '1.75' }}>Fill in the form and our team will get back to you within one business day.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { Icon: Phone, label: 'Call Us',       value: '+971563863615',             href: 'tel:+971563863615' },
                  { Icon: Mail,  label: 'Email Us',      value: 'info@timelinetelematics.com', href: 'mailto:info@timelinetelematics.com' },
                  { Icon: Clock, label: 'Response Time', value: 'Within 24 hours',             href: null },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#fef2f2', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={18} color="#E8312A" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: '600', color: '#9ca3af', letterSpacing: '0.8px', textTransform: 'uppercase' }}>{label}</div>
                      {href
                        ? <a href={href} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '14.5px', color: '#111', textDecoration: 'none' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#E8312A'}
                            onMouseLeave={e => e.currentTarget.style.color = '#111'}
                          >{value}</a>
                        : <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '14.5px', color: '#111' }}>{value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <a href="https://wa.me/971563863615" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#25D366', color: '#fff', padding: '14px 20px', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.25s', boxShadow: '0 4px 16px rgba(37,211,102,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.3)'; }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '14px' }}>Chat on WhatsApp</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', opacity: 0.85 }}>Usually replies in minutes</div>
                </div>
              </a>
            </FadeIn>
          </div>

          {/* Form */}
          <FadeIn delay={0.1}>
            {submitted ? (
              <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '20px', padding: '56px 40px', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle size={32} color="#fff" />
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '22px', color: '#111', marginBottom: '10px' }}>Email App Opened!</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14.5px', color: '#6b7280', lineHeight: '1.7', marginBottom: '28px' }}>
                  Your message is ready to send. Just click Send in your email app and we'll get back to you within 24 hours.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',company:'',subject:'',message:'' }); }}
                  style={{ background: '#E8312A', color: '#fff', border: 'none', padding: '11px 24px', borderRadius: '8px', fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: '20px', padding: '36px', boxShadow: '0 8px 40px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800', fontSize: '20px', color: '#111', marginBottom: '4px' }}>Send us a message</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <Field label="Full Name"     placeholder="John Doe"         required value={form.name}    onChange={set('name')}    error={errors.name} />
                  <Field label="Email Address" placeholder="john@company.com" required type="email" value={form.email} onChange={set('email')} error={errors.email} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <Field label="Phone Number" placeholder="+971 00 0000000" value={form.phone}   onChange={set('phone')}   error={errors.phone} />
                  <Field label="Company"      placeholder="Your Company"    value={form.company} onChange={set('company')} error={errors.company} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: '600', color: '#374151' }}>Subject <span style={{ color: '#E8312A' }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <select value={form.subject} onChange={set('subject')} onFocus={() => setSubjectFocused(true)} onBlur={() => setSubjectFocused(false)}
                      style={{ ...inputBase, appearance: 'none', cursor: 'pointer', borderColor: errors.subject ? '#ef4444' : subjectFocused ? '#E8312A' : '#e5e7eb', boxShadow: subjectFocused ? '0 0 0 3px rgba(232,49,42,0.1)' : 'none' }}>
                      <option value="">Select a subject...</option>
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown size={16} color="#9ca3af" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                  {errors.subject && <span style={{ color: '#ef4444', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>{errors.subject}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: '600', color: '#374151' }}>Message <span style={{ color: '#E8312A' }}>*</span></label>
                  <textarea placeholder="Tell us about your fleet size, requirements, or any questions..." value={form.message} rows={5}
                    onChange={set('message')} onFocus={() => setMsgFocused(true)} onBlur={() => setMsgFocused(false)}
                    style={{ ...inputBase, resize: 'vertical', minHeight: '120px', borderColor: errors.message ? '#ef4444' : msgFocused ? '#E8312A' : '#e5e7eb', boxShadow: msgFocused ? '0 0 0 3px rgba(232,49,42,0.1)' : 'none' }}
                  />
                  {errors.message && <span style={{ color: '#ef4444', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>{errors.message}</span>}
                </div>
                <button type="submit" style={{ background: '#E8312A', color: '#fff', border: 'none', padding: '14px', borderRadius: '10px', fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 4px 16px rgba(232,49,42,0.25)', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#c72a23'}
                  onMouseLeave={e => e.currentTarget.style.background = '#E8312A'}
                >
                  <Send size={16} /> Send Message
                </button>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#9ca3af', textAlign: 'center', marginTop: '-8px' }}>
                  Clicking Send will open your email app with message pre-filled.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>

      {/* Offices */}
      <div style={{ background: '#fffefe', padding: '100px 24px', borderTop: '1px solid #ff0000' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(232,49,42,0.15)', color: '#E8312A', fontSize: '10px', fontWeight: '700', padding: '5px 16px', borderRadius: '999px', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>Locations</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '900', fontSize: 'clamp(28px, 4vw, 44px)', color: '#000', lineHeight: 1.1, margin: '0 0 16px' }}>
              Our <span style={{ color: '#E8312A' }}>Offices</span>
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: '#767c85', maxWidth: '440px', margin: '0 auto', lineHeight: '1.7' }}>
              Three regional offices, one unified platform — delivering local support with global standards.
            </p>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {OFFICES.map((office, i) => <OfficeCard key={office.code} office={office} index={i} />)}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
