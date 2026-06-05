import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cable,
  Camera,
  Fuel,
  Cpu,
  Zap,
  ShieldCheck,
  SlidersHorizontal,
  Search,
  ChevronRight,
  X,
  CheckCircle,
  Thermometer,
  Radio,
} from 'lucide-react';

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RED = '#E8312A';
const NAVY = '#08142E';
const TEXT = '#5f6675';
const P = "'Poppins', sans-serif";

const CATEGORIES = ['All', 'Cable', 'Peripherals', 'Sensors'];

const ACCESSORIES = [
  {
    id: 'ci01',
    name: 'CI01',
    subtitle: 'Cabin-View Infrared Camera',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/ci01.png',
    tag: 'Cabin-View Infrared Camera',
    description:
      'Jimi Vehicle Cameras monitor your drivers to see how they behave behind the wheel, ensure cargoes arrive complete, and the fuel tank to prevent theft.',
    highlights: [
      'Cabin-View Infrared Camera',
      'Compatibility: JC400 and JC450 series',
      'FoV: 100° (H), 65° (V), 150° (D)',
      'Designed for cabin, cargo and in-vehicle monitoring',
    ],
    specs: [
      { label: 'Product Type', value: 'Cabin-View Infrared Camera' },
      { label: 'Compatibility', value: 'JC400 and JC450 series' },
      { label: 'FoV', value: '100° (H), 65° (V), 150° (D)' },
      { label: 'Category', value: 'Peripherals' },
    ],
  },
  {
    id: 'ci02',
    name: 'CI02',
    subtitle: 'Cabin-View USB Camera',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/ci02.png',
    tag: 'Cabin-View USB Camera',
    description:
      'The CI02 is a USB camera specially designed for the JC450 series. It can be perfectly mounted on the main unit, and the wide viewing angle can meet almost all monitoring requirements of the cabin.',
    highlights: [
      'Cabin-View USB Camera',
      'Compatibility: JC450 series',
      'FoV: 135° (H), 85° (V), 170° (D)',
      'Resolution: 1280*720',
      'Recommended install position: USB port on JC450',
    ],
    specs: [
      { label: 'Product Type', value: 'Cabin-View USB Camera' },
      { label: 'Compatibility', value: 'JC450 series' },
      { label: 'FoV', value: '135° (H), 85° (V), 170° (D)' },
      { label: 'Resolution', value: '1280*720' },
      { label: 'Color', value: 'Full color in daytime and monochrome in dim light' },
      { label: 'Night Vision', value: 'IR-940*2' },
    ],
  },
  {
    id: 'ci03',
    name: 'CI03',
    subtitle: 'Cabin-View Infrared Camera',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/ci03.png',
    tag: 'Cabin-View Infrared Camera',
    description:
      'The CI03 is a small factor infrared camera with adjustable angle of view. It can be mounted to various locations inside the vehicle, making it suitable for monitoring the area of interest in a more flexible way.',
    highlights: [
      'Small factor infrared camera',
      'Adjustable angle of view',
      'Compatibility: JC261, JC400, and JC450 series',
      'FoV: 119° (H), 70° (V), 152° (D)',
    ],
    specs: [
      { label: 'Product Type', value: 'Cabin-View Infrared Camera' },
      { label: 'Compatibility', value: 'JC261, JC400, and JC450 series' },
      { label: 'FoV', value: '119° (H), 70° (V), 152° (D)' },
      { label: 'Application', value: 'Monitor cabin or backseat area' },
    ],
  },
  {
    id: 'ci04',
    name: 'CI04',
    subtitle: 'Cabin-View Infrared Camera with IR-cut',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/ci04.png',
    tag: 'Cabin-View Infrared Camera with IR-cut',
    description: 'Cabin-View Infrared Camera with IR-cut.',
    highlights: [
      'Cabin-View Infrared Camera',
      'IR-cut',
      'Designed for cabin-view monitoring',
      'Suitable for in-vehicle monitoring',
    ],
    specs: [
      { label: 'Product Type', value: 'Cabin-View Infrared Camera with IR-cut' },
      { label: 'Feature', value: 'IR-cut' },
      { label: 'View', value: 'Cabin-View' },
      { label: 'Category', value: 'Peripherals' },
    ],
  },
  {
    id: 'ci05f',
    name: 'CI05F',
    subtitle: 'Cabin-View Full AHD Camera',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/ci05f.png',
    tag: 'Cabin-View Full AHD Camera',
    description: 'Cabin-View Full AHD Camera.',
    highlights: [
      'Cabin-View Full AHD Camera',
      'Monitor the cabin',
      'Compatibility: JC371',
      'Resolution: 1920*1080',
    ],
    specs: [
      { label: 'Product Type', value: 'Cabin-View Full AHD Camera' },
      { label: 'Compatibility', value: 'JC371' },
      { label: 'Resolution', value: '1920*1080' },
      { label: 'View', value: 'Cabin-View' },
    ],
  },
  {
    id: 'ci06f',
    name: 'CI06F',
    subtitle: 'Cabin-View Full AHD Camera',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/ci06f.png',
    tag: 'Cabin-View Full AHD Camera',
    description: 'Cabin-View Full AHD Camera.',
    highlights: [
      'Cabin-View Full AHD Camera',
      'Monitor the cabin',
      'Compatibility: JC371',
      'Resolution: 1920*1080',
    ],
    specs: [
      { label: 'Product Type', value: 'Cabin-View Full AHD Camera' },
      { label: 'Compatibility', value: 'JC371' },
      { label: 'Resolution', value: '1920*1080' },
      { label: 'View', value: 'Cabin-View' },
    ],
  },
  {
    id: 'cf01f',
    name: 'CF01F',
    subtitle: 'Road-facing Full AHD Camera',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/cf01f.png',
    tag: 'Road-facing Full AHD Camera',
    description: 'Road-facing Full AHD Camera.',
    highlights: [
      'Road-facing Full AHD Camera',
      'Monitor the road ahead',
      'Compatibility: JC451',
      'Resolution: 1920*1080',
    ],
    specs: [
      { label: 'Product Type', value: 'Road-facing Full AHD Camera' },
      { label: 'Compatibility', value: 'JC451' },
      { label: 'Resolution', value: '1920*1080' },
      { label: 'View', value: 'Road-facing' },
    ],
  },
  {
    id: 'cf02f',
    name: 'CF02F',
    subtitle: 'Road-facing Full AHD Camera',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/cf02f.png',
    tag: 'Road-facing Full AHD Camera',
    description: 'Road-facing Full AHD Camera.',
    highlights: [
      'Road-facing Full AHD Camera',
      'Monitor the road ahead',
      'Compatibility: JC451',
      'Resolution: 1920*1080',
    ],
    specs: [
      { label: 'Product Type', value: 'Road-facing Full AHD Camera' },
      { label: 'Compatibility', value: 'JC451' },
      { label: 'Resolution', value: '1920*1080' },
      { label: 'View', value: 'Road-facing' },
    ],
  },
  {
    id: 'ce01',
    name: 'CE01',
    subtitle: 'Rear-view Waterproof Camera',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/ce01.png',
    tag: 'Rear-view Waterproof Camera',
    description:
      'Rear-view waterproof camera designed to monitor the cargo in trailer, the rear, or the fuel tank.',
    highlights: [
      'Rear-view waterproof camera',
      'Compatibility: JC400 and JC450 series',
      'FoV: 100° (H), 65° (V), 150° (D)',
      'Designed for rear-view monitoring',
    ],
    specs: [
      { label: 'Product Type', value: 'Rear-view Waterproof Camera' },
      { label: 'Compatibility', value: 'JC400 and JC450 series' },
      { label: 'View', value: 'Rear-view' },
      { label: 'Category', value: 'Peripherals' },
    ],
  },
  {
    id: 'ce02',
    name: 'CE02',
    subtitle: 'Side-view Waterproof Camera',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/ce02.png',
    tag: 'IP67 Blindspot Camera II',
    description:
      'The CE02 is the second IP67-rated camera in Jimi IoT’s peripheral camera portfolio. Compared to the CE01, it has a stronger construction, making it tougher and more stable in extreme elements. It can be mounted on the side of a vehicle to minimize the blind spot area and provide drivers a more enhanced perspective of their immediate environment, making the road safer.',
    highlights: [
      'Application: Monitor the side or the rear of a vehicle',
      'Compatibility: JC261, JC400, and JC450 series',
      'FoV: 111°(H), 60°(V), 130°(D)',
      'Resolution: 1280*720',
      'Color: Full color',
      'Fixation: Fix with screws',
    ],
    specs: [
      { label: 'Product Type', value: 'IP67 Blindspot Camera II' },
      { label: 'Application', value: 'Monitor the side or the rear of a vehicle' },
      { label: 'Compatibility', value: 'JC261, JC400, and JC450 series' },
      { label: 'FoV', value: '111°(H), 60°(V), 130°(D)' },
      { label: 'Resolution', value: '1280*720' },
      { label: 'Operating Voltage', value: 'DC 4.2-5.5V' },
      { label: 'Dimensions', value: '73*43*56mm' },
      { label: 'Recommended Install Position', value: 'Left or right side-view mirror' },
    ],
  },
  {
    id: 'ce04',
    name: 'CE04',
    subtitle: 'Rear-view Waterproof Camera with Fill Light',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/ce04.png',
    tag: 'Rear-view Waterproof Camera with Fill Light',
    description: 'Rear-view waterproof camera with Fill light.',
    highlights: [
      'Rear-view waterproof camera',
      'Fill light',
      'Designed for rear-view monitoring',
      'Suitable for side or rear vehicle monitoring',
    ],
    specs: [
      { label: 'Product Type', value: 'Rear-view Waterproof Camera with Fill Light' },
      { label: 'Feature', value: 'Fill Light' },
      { label: 'View', value: 'Rear-view' },
      { label: 'Category', value: 'Peripherals' },
    ],
  },
  {
    id: 'cd02',
    name: 'CD02',
    subtitle: 'Driver-facing Infrared Camera',
    category: 'Peripherals',
    icon: Camera,
    image: '/accessories/cd02.png',
    tag: 'Driver-facing Infrared Camera',
    description: 'Driver-facing Infrared Camera.',
    highlights: [
      'Driver-facing Infrared Camera',
      'Monitor driver attentiveness',
      'Compatibility: JC450 series',
      'FoV: 56° (H), 31° (V), 65° (D)',
    ],
    specs: [
      { label: 'Product Type', value: 'Driver-facing Infrared Camera' },
      { label: 'Compatibility', value: 'JC450 series' },
      { label: 'FoV', value: '56° (H), 31° (V), 65° (D)' },
      { label: 'Category', value: 'Peripherals' },
    ],
  },
  {
    id: 'jcm0700',
    name: 'JCM0700',
    subtitle: 'Display Unit',
    category: 'Peripherals',
    icon: Cpu,
    image: '/accessories/jcm0700.png',
    tag: 'Display Unit for JC450 Pro or JC451',
    description:
      'The JCM0700 is a display unit designed to work with the JC450 Pro or JC451. It shows real-time footage from connected cameras and can also display time, device status and driving data.',
    highlights: [
      'Designed to work with the JC450 Pro or JC451',
      'Shows real-time footage from connected cameras',
      'Displays time and device status',
      'Displays driving data',
    ],
    specs: [
      { label: 'Product Type', value: 'Display Unit' },
      { label: 'Compatible Devices', value: 'JC450 Pro or JC451' },
      { label: 'Display Content', value: 'Real-time footage from connected cameras' },
      { label: 'Data Display', value: 'Time, device status and driving data' },
    ],
  },
  {
    id: 'kc208s',
    name: 'KC208S',
    subtitle: 'Remote Control',
    category: 'Peripherals',
    icon: Radio,
    image: '/accessories/kc208s.png',
    tag: 'Remote Control',
    description:
      'The KC208S remote control integrates seamlessly with the tracker to manage vehicle operations. Customizable button functions support flexible fleet control.',
    highlights: [
      'Remote Control',
      'Integrates seamlessly with the tracker',
      'Manage vehicle operations',
      'Customizable button functions',
      'Flexible fleet control',
    ],
    specs: [
      { label: 'Product Type', value: 'Remote Control' },
      { label: 'Function', value: 'Manage vehicle operations' },
      { label: 'Control', value: 'Customizable button functions' },
      { label: 'Category', value: 'Peripherals' },
    ],
  },
  {
    id: 'kj806',
    name: 'KJ806',
    subtitle: 'Extended Control Box',
    category: 'Cable',
    icon: Cable,
    image: '/accessories/kj806.png',
    tag: 'Multiple I/Os for Function Expansions',
    description:
      'Allows connection to various sensors (e.g., door status, fuel level, temperature) for real-time vehicle data.',
    highlights: [
      'Multiple I/Os for Function Expansions',
      'Allows connection to various sensors',
      'Door status sensor support',
      'Fuel level sensor support',
      'Temperature sensor support',
      'Real-time vehicle data',
    ],
    specs: [
      { label: 'Product Type', value: 'Extended Control Box' },
      { label: 'Function', value: 'Multiple I/Os for Function Expansions' },
      { label: 'Sensor Support', value: 'Door status, fuel level, temperature' },
      { label: 'Data', value: 'Real-time vehicle data' },
    ],
  },
  {
    id: 'kz081v',
    name: 'KZ081V',
    subtitle: 'DC-DC Converter',
    category: 'Cable',
    icon: Zap,
    image: '/accessories/kz081v.png',
    tag: 'Wide-Range Power Conversion',
    description:
      'KZ081V is a high-efficiency DC-DC converter. Designed with a replaceable adapter head that supports devices equipped with Micro-USB or Type-C interfaces.',
    highlights: [
      'DC-DC Converter',
      'Interchangeable Connector',
      'Wide-Range Power Conversion',
      'Optional Extension Cable',
      'Heavy-Duty Vehicle Support',
      'Equipped with overcurrent, overvoltage, and surge protection',
      'Compatible with 24V vehicle electrical systems',
    ],
    specs: [
      { label: 'Product Type', value: 'DC-DC Converter' },
      { label: 'Input', value: '9–33V' },
      { label: 'Output', value: 'Stable 5V' },
      { label: 'Interface', value: 'Micro-USB or Type-C' },
      { label: 'Adapter Head', value: 'Replaceable adapter head' },
      { label: 'Protection', value: 'Overcurrent, overvoltage, and surge protection' },
      { label: 'Compatibility', value: '24V vehicle electrical systems' },
    ],
  },
  {
    id: 'kf041s',
    name: 'KF041S',
    subtitle: 'Capacitive Fuel Level Sensor',
    category: 'Sensors',
    icon: Fuel,
    image: '/accessories/kf041s.png',
    tag: 'Precision Fuel Monitoring. Total Control.',
    description:
      'This series of fuel level sensor is designed for precision fuel monitoring and total control.',
    highlights: [
      'Precision Fuel Monitoring',
      'Total Control',
      'Adjustable Length',
      'The sensor length can be trimmed to fit different tank sizes',
      'Precise detection based on actual requirements',
    ],
    specs: [
      { label: 'Product Type', value: 'Capacitive Fuel Level Sensor' },
      { label: 'Function', value: 'Precision Fuel Monitoring' },
      { label: 'Control', value: 'Total Control' },
      { label: 'Length', value: 'Adjustable Length' },
    ],
  },
  {
    id: 'kf043u',
    name: 'KF043U',
    subtitle: 'Wireless BLE Ultrasonic Fuel Level Sensor',
    category: 'Sensors',
    icon: Fuel,
    image: '/accessories/kf043u.png',
    tag: 'Fuel Smarter. Fleet Safer.',
    description:
      'The KF043U is a wireless BLE ultrasonic fuel level sensor that provides precise and non-contact fuel measurement.',
    highlights: [
      'Fuel Smarter. Fleet Safer.',
      'Wireless BLE ultrasonic fuel level sensor',
      'Precise fuel measurement',
      'Non-contact fuel measurement',
      'Works reliably with diesel, gasoline, water, etc.',
      'Works with metal, plastic and other tank materials',
      'AI Anti-Theft Alarm',
    ],
    specs: [
      { label: 'Product Type', value: 'Wireless BLE Ultrasonic Fuel Level Sensor' },
      { label: 'Measurement', value: 'Precise and non-contact fuel measurement' },
      { label: 'Connectivity', value: 'Wireless BLE' },
      { label: 'Liquids', value: 'Diesel, gasoline, water, etc.' },
      { label: 'Tank Materials', value: 'Metal, plastic, etc.' },
      { label: 'Feature', value: 'AI Anti-Theft Alarm' },
    ],
  },
  {
    id: 'kf201s',
    name: 'KF201S',
    subtitle: 'Wireless Capacitive Fuel Sensor',
    category: 'Sensors',
    icon: Fuel,
    image: '/accessories/kf201s.png',
    tag: 'Fuel Smarter. Manage Easier.',
    description:
      'This series of fuel level sensors is designed for precise measurement and monitoring of liquids such as gasoline, diesel, lubricating oil, and coolant.',
    highlights: [
      'Fuel Smarter. Manage Easier.',
      'Wireless Capacitive Fuel Sensor',
      'Precise measurement and monitoring',
      'Supports gasoline, diesel, lubricating oil, and coolant',
      'Designed for fuel management and liquid monitoring',
    ],
    specs: [
      { label: 'Product Type', value: 'Wireless Capacitive Fuel Sensor' },
      { label: 'Measurement', value: 'Precise measurement and monitoring' },
      { label: 'Liquids', value: 'Gasoline, diesel, lubricating oil, and coolant' },
      { label: 'Category', value: 'Sensors' },
    ],
  },
  {
    id: 'kf281s',
    name: 'KF281S',
    subtitle: 'BLE Powered Fuel Level Sensor',
    category: 'Sensors',
    icon: Fuel,
    image: '/accessories/kf281s.png',
    tag: 'Know Your Fuel. Own Your Fleet.',
    description:
      'This series of fuel level sensors is designed for precise measurement and monitoring of liquids such as gasoline, diesel, lubricating oil, and coolant.',
    highlights: [
      'Know Your Fuel. Own Your Fleet.',
      'BLE Powered Fuel Level Sensor',
      'Precise measurement and monitoring',
      'Supports gasoline, diesel, lubricating oil, and coolant',
      'Reliable and durable fuel intelligence',
    ],
    specs: [
      { label: 'Product Type', value: 'BLE Powered Fuel Level Sensor' },
      { label: 'Measuring Medium', value: 'Gasoline / diesel / lubricating oil / coolant' },
      { label: 'Probe Length', value: '1000mm' },
      { label: 'Category', value: 'Sensors' },
    ],
  },
  {
    id: 'k7800p',
    name: 'K7800P',
    subtitle: 'Wireless Environment Sensor',
    category: 'Sensors',
    icon: Thermometer,
    image: '/accessories/k7800p.png',
    tag: 'Sense the Environment. Protect What Matters.',
    description:
      'The K7800P is a versatile sensor that uses Bluetooth communication technology to seamlessly interact with a paired mobile device or tracker.',
    highlights: [
      'Bluetooth Low Energy sensor',
      'Built-in temperature and humidity sensor',
      'Hall door magnetic sensor',
      'Light sensor',
      'Real-time temperature, humidity and door status monitoring',
    ],
    specs: [
      { label: 'Product Type', value: 'Wireless Environment Sensor' },
      { label: 'Communication', value: 'Bluetooth Low Energy' },
      { label: 'Sensors', value: 'Temperature, humidity, Hall door magnetic and light sensor' },
      { label: 'Protection Rating', value: 'IP65' },
      { label: 'Transmission Distance', value: '50m open area' },
      { label: 'Frequency', value: '2.4 GHz, supports BLE 4.2' },
    ],
  },
];

const AccessoriesPage = () => {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredAccessories = useMemo(() => {
    return ACCESSORIES.filter((item) => {
      const matchesCategory = active === 'All' || item.category === active;
      const q = query.toLowerCase().trim();

      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [active, query]);

  return (
    <div style={{ fontFamily: P, background: '#fff' }}>
      <TopBar />
      <Navbar />

      <main style={{ paddingTop: '112px' }}>
        <section
          style={{
            position: 'relative',
            minHeight: '445px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background:
              'linear-gradient(rgba(5, 8, 14, 0.70), rgba(5, 8, 14, 0.72)), url("/accessories/accessories-hero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            padding: '80px 24px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
             'linear-gradient(rgba(5, 8, 14, 0.28), rgba(5, 8, 14, 0.34)), url("/accessories/accessories-hero.jpg")',
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '120px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)',
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '980px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(232, 49, 42, 0.28)',
                color: '#fff',
                borderRadius: '999px',
                padding: '8px 22px',
                marginBottom: '24px',
                fontSize: '12px',
                fontWeight: 900,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                border: '1px solid rgba(232,49,42,0.22)',
                backdropFilter: 'blur(4px)',
              }}
            >
              Accessories
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(38px, 5vw, 64px)',
                lineHeight: 1.12,
                letterSpacing: '-1.5px',
                fontWeight: 900,
                color: '#fff',
              }}
            >
              Add-ons That Amplify <span style={{ color: RED }}>Performance</span>
            </h1>

            <p
              style={{
                margin: '24px auto 0',
                maxWidth: '720px',
                color: 'rgba(255,255,255,0.78)',
                fontSize: '17px',
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              Add-ons that amplify performance, security and reliability for smarter fleet operations.
            </p>
          </div>
        </section>

        <section id="accessories-list" style={{ padding: '82px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '24px',
                marginBottom: '34px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: RED,
                    fontSize: '10px',
                    fontWeight: 900,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  <SlidersHorizontal size={15} />
                  20 Accessories
                </div>

                <h2
                  style={{
                    margin: 0,
                    color: NAVY,
                    fontSize: 'clamp(28px, 3.5vw, 44px)',
                    fontWeight: 900,
                    letterSpacing: '-1.2px',
                  }}
                >
                  Accessories Portfolio
                </h2>
              </div>

              <div style={{ position: 'relative', width: 'min(360px, 100%)' }}>
                <Search
                  size={17}
                  color="#9ca3af"
                  style={{
                    position: 'absolute',
                    left: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search accessories..."
                  style={{
                    width: '100%',
                    height: '48px',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    padding: '0 16px 0 44px',
                    outline: 'none',
                    fontFamily: P,
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '34px',
              }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    border: active === cat ? `1px solid ${RED}` : '1px solid #e5e7eb',
                    background: active === cat ? RED : '#fff',
                    color: active === cat ? '#fff' : '#374151',
                    height: '42px',
                    padding: '0 18px',
                    borderRadius: '999px',
                    fontFamily: P,
                    fontSize: '13px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
              }}
              className="accessories-grid"
            >
              {filteredAccessories.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    style={{
                      border: '1px solid #e5e7eb',
                      borderRadius: '22px',
                      overflow: 'hidden',
                      background: '#fff',
                      boxShadow: '0 8px 30px rgba(8,20,46,0.06)',
                      transition: 'all 0.25s ease',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        height: '230px',
                        background: 'linear-gradient(145deg, #f8fafc 0%, #eef2f7 100%)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '18px',
                          left: '18px',
                          zIndex: 2,
                          background: '#fff',
                          color: RED,
                          border: '1px solid rgba(232,49,42,0.18)',
                          borderRadius: '999px',
                          padding: '6px 12px',
                          fontSize: '10px',
                          fontWeight: 900,
                          letterSpacing: '1.5px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.category}
                      </div>

                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          padding: '44px 34px 30px',
                          boxSizing: 'border-box',
                          position: 'relative',
                          zIndex: 1,
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />

                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          pointerEvents: 'none',
                        }}
                      >
                        <div
                          style={{
                            width: '78px',
                            height: '78px',
                            borderRadius: '20px',
                            background: 'rgba(232,49,42,0.10)',
                            color: RED,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon size={34} />
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: '24px' }}>
                      <div
                        style={{
                          color: RED,
                          fontSize: '10px',
                          fontWeight: 900,
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          marginBottom: '8px',
                        }}
                      >
                        {item.tag}
                      </div>

                      <h3
                        style={{
                          margin: '0 0 6px',
                          color: NAVY,
                          fontSize: '24px',
                          fontWeight: 900,
                          letterSpacing: '-0.5px',
                        }}
                      >
                        {item.name}
                      </h3>

                      <div
                        style={{
                          color: '#111827',
                          fontSize: '14px',
                          fontWeight: 800,
                          marginBottom: '12px',
                        }}
                      >
                        {item.subtitle}
                      </div>

                      <p
                        style={{
                          margin: '0 0 18px',
                          color: TEXT,
                          fontSize: '13.5px',
                          lineHeight: 1.75,
                        }}
                      >
                        {item.description}
                      </p>

                      <span
                        style={{
                          color: RED,
                          fontWeight: 900,
                          fontSize: '13px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        View Details <ChevronRight size={15} />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(3,7,18,0.72)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(980px, 100%)',
              maxHeight: '88vh',
              overflowY: 'auto',
              background: '#fff',
              borderRadius: '24px',
              boxShadow: '0 30px 90px rgba(0,0,0,0.35)',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'absolute',
                right: '18px',
                top: '18px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                background: '#fff',
                color: '#111827',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 3,
                boxShadow: '0 8px 22px rgba(0,0,0,0.16)',
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '0.9fr 1.1fr',
              }}
              className="modal-grid"
            >
              <div
                style={{
                  background: 'linear-gradient(145deg, #f8fafc 0%, #eef2f7 100%)',
                  padding: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '420px',
                  position: 'relative',
                }}
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  style={{
                    width: '100%',
                    maxHeight: '330px',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    borderRadius: '34px',
                    background: 'rgba(232,49,42,0.10)',
                    color: RED,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {React.createElement(selectedProduct.icon, { size: 58 })}
                </div>
              </div>

              <div style={{ padding: '44px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    color: RED,
                    background: 'rgba(232,49,42,0.08)',
                    border: '1px solid rgba(232,49,42,0.16)',
                    borderRadius: '999px',
                    padding: '7px 13px',
                    fontSize: '10px',
                    fontWeight: 900,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  {selectedProduct.category}
                </div>

                <h2
                  style={{
                    margin: 0,
                    color: NAVY,
                    fontSize: 'clamp(30px, 4vw, 46px)',
                    fontWeight: 900,
                    letterSpacing: '-1px',
                  }}
                >
                  {selectedProduct.name}
                </h2>

                <h3
                  style={{
                    margin: '8px 0 18px',
                    color: '#111827',
                    fontSize: '18px',
                    fontWeight: 800,
                    lineHeight: 1.4,
                  }}
                >
                  {selectedProduct.subtitle}
                </h3>

                <p
                  style={{
                    margin: '0 0 26px',
                    color: TEXT,
                    fontSize: '14.5px',
                    lineHeight: 1.8,
                  }}
                >
                  {selectedProduct.description}
                </p>

                <div style={{ marginBottom: '26px' }}>
                  <h4
                    style={{
                      margin: '0 0 14px',
                      color: NAVY,
                      fontSize: '16px',
                      fontWeight: 900,
                    }}
                  >
                    Key Highlights
                  </h4>

                  <div style={{ display: 'grid', gap: '10px' }}>
                    {selectedProduct.highlights.map((h) => (
                      <div
                        key={h}
                        style={{
                          display: 'flex',
                          gap: '10px',
                          alignItems: 'flex-start',
                          color: '#374151',
                          fontSize: '13.5px',
                          lineHeight: 1.55,
                        }}
                      >
                        <CheckCircle
                          size={16}
                          color={RED}
                          style={{ marginTop: '2px', flexShrink: 0 }}
                        />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4
                    style={{
                      margin: '0 0 14px',
                      color: NAVY,
                      fontSize: '16px',
                      fontWeight: 900,
                    }}
                  >
                    Specifications
                  </h4>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '10px',
                    }}
                    className="modal-spec-grid"
                  >
                    {selectedProduct.specs.map((spec) => (
                      <div
                        key={spec.label}
                        style={{
                          border: '1px solid #eef0f4',
                          borderRadius: '12px',
                          padding: '13px 14px',
                          background: '#fbfcfe',
                        }}
                      >
                        <div
                          style={{
                            color: '#9ca3af',
                            fontSize: '9.5px',
                            fontWeight: 900,
                            letterSpacing: '1.3px',
                            textTransform: 'uppercase',
                            marginBottom: '5px',
                          }}
                        >
                          {spec.label}
                        </div>

                        <div
                          style={{
                            color: '#111827',
                            fontSize: '13px',
                            fontWeight: 700,
                            lineHeight: 1.45,
                          }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  style={{
                    marginTop: '26px',
                    height: '48px',
                    padding: '0 24px',
                    borderRadius: '10px',
                    background: RED,
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 900,
                    boxShadow: '0 14px 34px rgba(232,49,42,0.24)',
                  }}
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .accessories-grid article:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 46px rgba(8,20,46,0.12) !important;
          border-color: rgba(232,49,42,0.35) !important;
        }

        @media (max-width: 980px) {
          .accessories-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .modal-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          main {
            padding-top: 110px !important;
          }

          .accessories-grid {
            grid-template-columns: 1fr !important;
          }

          .modal-spec-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AccessoriesPage;