import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { QOHO_PRODUCT_DETAILS } from '../data/qohoProductDetails';

const Icons = {
  gps: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /><circle cx="12" cy="12" r="9" strokeDasharray="4 2" /></svg>,
  lte: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1.5 8.5c5.5-5.5 14.5-5.5 21 0" /><path d="M5 12c3.9-3.9 10.1-3.9 14 0" /><path d="M8.5 15.5c2.2-2.2 5.8-2.2 7 0" /><circle cx="12" cy="19" r="1" fill="currentColor" /></svg>,
  camera: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7 16 12 23 17z" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>,
  adas: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s3-7 11-7 11 7 11 7-3 7-11 7-11-7-11-7z" /><circle cx="12" cy="12" r="3" /></svg>,
  battery: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="16" height="10" rx="2" /><path d="M22 11v2" /><path d="M6 11v2M10 11v2" /></svg>,
  ignition: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>,
  geo: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>,
  speed: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 18 0A9 9 0 0 0 3 12z" /><path d="M12 7v5l3 2" /></svg>,
  cloud: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>,
  water: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2s-7 9-7 13a7 7 0 0 0 14 0c0-4-7-13-7-13z" /></svg>,
  motion: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>,
  crash: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 2 19h20z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
  sd: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 2H9L3 8v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" /><polyline points="9 2 9 8 3 8" /></svg>,
  night: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>,
  power: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>,
  serial: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="2" /><circle cx="8" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="16" cy="12" r="1" /></svg>,
  fuel: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="22" x2="15" y2="22" /><line x1="4" y1="9" x2="14" y2="9" /><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" /></svg>,
  sos: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
  route: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></svg>,
};

const productDetails = {
  jc181: {
    model: 'JC181',
    name: 'Compact Dual-Channel DashCam',
    image: '/products/jc181.png',
    category: 'Dashcam',
    tagline: 'Modest in Form, Mighty in Proof.',
    description:
      'Smarter vision for safer roads. JC181 is a compact dual-channel dashcam that fits behind the rearview mirror, keeps the driver view clear, records the road ahead and cabin inside, and provides reliable evidence through live video, playback, real-time tracking, and route review.',
    features: [
      { icon: 'camera', label: 'Video Surveillance' },
      { icon: 'camera', label: 'Dual-Channel Recording' },
      { icon: 'gps', label: 'Built-in GPS Logger' },
      { icon: 'camera', label: 'Compact Size' },
      { icon: 'power', label: 'Remote Vehicle Immobilization' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'Compact Dual-Channel DashCam',
          Tagline: 'Modest in Form, Mighty in Proof.',
          'Main Purpose': 'Front and inside vehicle video evidence',
        },
      },
      video: {
        label: 'Video Surveillance',
        items: {
          Monitoring: "Live monitoring of the vehicle's interior and exterior via online platform",
          Playback: 'Critical video clips support on-demand playback from anywhere, at any time',
          Evidence: 'Reliable footage for road and cabin incidents',
        },
      },
      recording: {
        label: 'Recording & GPS',
        items: {
          Recording: 'Dual-channel recording',
          'Camera View': 'Road ahead and cabin inside',
          'GPS Logger': 'Built-in GPS logger',
          'Data Stamp': 'Vehicle speed, coordinates, time and more',
        },
      },
      installation: {
        label: 'Installation & Control',
        items: {
          Installation: 'Fits behind the rearview mirror without blocking driver view',
          Mounting: 'Adjustable and stable on every road',
          Upgrade: 'Upgrade with Type-C support',
          Immobilization: 'Fuel / power cut-off under 20km/h via tracking platform',
        },
      },
    },
    applications: [
      { title: 'Fleet Safety', desc: 'Capture key moments from the road and cabin to support safer fleet operations.' },
      { title: 'Incident Evidence', desc: 'Reliable footage stays available even when road conditions are not ideal.' },
      { title: 'Live Tracking & Playback', desc: 'Stream live footage, replay historical video, track vehicles in real time, and review past routes.' },
    ],
    accessories: [
      { label: 'Type-C Upgrade Support' },
      { label: 'Tracking Platform' },
      { label: 'Online Monitoring Platform' },
    ],
  },

  jc371: {
    model: 'JC371',
    name: 'Multi-Channel AI DashCam',
    image: '/products/jc371.png',
    category: 'AI Dashcam',
    tagline: 'Next-Gen AI for Safety. Reimagined.',
    description:
      'JC371 empowers safer fleets with multi-channel 1080P HD recording, optional STARVIS low-light clarity, visual AI algorithms, expanded storage, and multiple interfaces for deeper fleet control.',
    features: [
      { icon: 'camera', label: 'Video Surveillance' },
      { icon: 'camera', label: '3-Channel 1080P HD Recording' },
      { icon: 'adas', label: 'Visual AI Algorithms' },
      { icon: 'crash', label: 'Multiple Alerts' },
      { icon: 'sd', label: 'Expanded Storage' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'Multi-Channel AI DashCam',
          Tagline: 'Next-Gen AI for Safety. Reimagined.',
          'Main Purpose': 'AI video safety and fleet monitoring',
        },
      },
      video: {
        label: 'Video & Camera',
        items: {
          'Camera Channels': 'Up to 3 cameras',
          'Video Quality': '1080P HD',
          'Low Light': 'STARVIS technology available as optional configuration',
          Configuration: 'Tamper-resistant cover, cabin-view USB camera, and external cameras supported',
        },
      },
      ai: {
        label: 'AI Safety Suite',
        items: {
          DMS: 'Fatigue, phone use, smoking and risky behavior detection',
          ADAS: 'Forward collision risk and lane drift alerts',
          'Seatbelt Detection': 'Checks seatbelt status',
          'Face Recognition': 'Identifies the driver and alerts on mismatch',
        },
      },
      storage: {
        label: 'Storage',
        items: {
          'Built-in Storage': '128GB eMMC',
          'Optional eMMC': '64 / 128 / 256GB',
          'TF Card': 'Up to 512GB for continuous driving footage',
          Reliability: 'Fast read/write speed, privacy protection, and long lifespan',
        },
      },
      interfaces: {
        label: 'Interfaces',
        items: {
          Ports: 'TTL, INPUT, RELAY',
          Accessories: 'Supports accessories for customized management',
          Alerts: 'Customizable events such as speeding and SOS button activation',
        },
      },
    },
    applications: [
      { title: 'Fleet Safety', desc: 'Use AI video and multi-angle recording to improve driver and road safety.' },
      { title: 'Driver Compliance', desc: 'Monitor fatigue, phone use, smoking, seatbelt usage, and driver identity.' },
      { title: 'Evidence & Review', desc: 'Store critical events safely for incident review, analysis, and evidence.' },
    ],
    accessories: [
      { label: 'Tamper-Resistant Cover' },
      { label: 'Cabin-View USB Camera' },
      { label: 'External Cameras' },
      { label: 'SOS Button' },
    ],
  },

  jc450: {
    model: 'JC450',
    name: 'Multi-Channel AI DashCam',
    image: '/products/jc450.png',
    category: 'AI Dashcam',
    tagline: 'Intelligence That Protects.',
    description:
      'From capture to sense to safeguard, JC450 enhances safety with full coverage and AI. It does not just record; it interprets, warns, and protects with five-channel coverage, AI safety features, blind spot display, and expanded storage.',
    features: [
      { icon: 'camera', label: 'Video Surveillance' },
      { icon: 'camera', label: 'Multi-Channel Recording' },
      { icon: 'adas', label: 'Visual AI Algorithms' },
      { icon: 'gps', label: 'Dual Mode Positioning' },
      { icon: 'crash', label: 'Multiple Alerts' },
      { icon: 'power', label: 'Vehicle Immobilization' },
      { icon: 'serial', label: 'Extension Interface' },
      { icon: 'sd', label: 'Expanded Storage' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'Multi-Channel AI DashCam',
          Tagline: 'Intelligence That Protects',
          'Main Purpose': 'Full-coverage AI fleet video safety',
        },
      },
      video: {
        label: 'Video & Display',
        items: {
          'Camera Channels': '5 channels',
          Coverage: 'Front, rear, sides, and cabin',
          'Blind Spot Display': 'External monitor displays live footage',
          'Auto View Switching': 'View switches automatically as the vehicle turns',
        },
      },
      ai: {
        label: 'AI Safety Suite',
        items: {
          ADAS: 'Forward collision risk and lane drift alerts',
          DMS: 'Optional fatigue, phone use, smoking, and risky behavior detection',
          'Seatbelt Detection': 'Optional seatbelt status checking',
          'Face Recognition': 'Optional driver identification and mismatch alert',
        },
      },
      storage: {
        label: 'Storage',
        items: {
          'Storage Type': 'Dual TF card slots',
          'Maximum Capacity': '512GB total',
          'Recording Duration': 'Up to 7 days with 5 cameras simultaneously',
        },
      },
      interfaces: {
        label: 'Interfaces',
        items: {
          Ports: 'TTL, RS232, INPUT, RELAY',
          'Optional Sensors': 'Temperature, fuel, and driver authentication accessories',
          Positioning: 'GPS and BDS dual mode positioning',
          Immobilization: 'Fuel / power cut-off under 20km/h via tracking platform',
        },
      },
    },
    applications: [
      { title: 'Full Vehicle Coverage', desc: 'Capture front, rear, side, and cabin views for one clear story.' },
      { title: 'Blind Spot Safety', desc: 'Display live camera views on an external monitor and switch views automatically while turning.' },
      { title: 'Fleet Control Hub', desc: 'Connect fuel, temperature, and driver authentication accessories for deeper operational insight.' },
    ],
    accessories: [
      { label: 'External Monitor' },
      { label: 'Fuel Sensor' },
      { label: 'Temperature Sensor' },
      { label: 'Driver Authentication Accessory' },
    ],
  },

  jc182: {
    model: 'JC182',
    name: '4G Mini DashCam',
    image: '/products/jc182.png',
    category: 'Dashcam',
    tagline: 'Tiny but Mighty. Made for Every Journey.',
    description:
      'JC182 is a 4G mini dashcam built for smart protection from parked to driving. It offers 2K Quad HD clarity, OBD plug-and-play installation, parking monitoring, snapshot capture, and reliable protection for different vehicle types.',
    features: [
      { icon: 'camera', label: '2K Quad HD Camera' },
      { icon: 'battery', label: 'Built-in SuperCapacitor' },
      { icon: 'camera', label: 'Time Lapse Recording' },
      { icon: 'crash', label: 'Collision Alert' },
      { icon: 'power', label: 'Compatible with Various Vehicle Types' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': '4G Mini DashCam',
          Tagline: 'Tiny but Mighty. Made for Every Journey.',
          'Main Purpose': 'Smart protection from parked to driving',
        },
      },
      video: {
        label: 'Video',
        items: {
          Camera: '2K Quad HD camera',
          Clarity: 'Sharp and vibrant video on the road or while parked',
          'Recording Mode': 'Time lapse recording supported',
          Snapshot: 'Snapshot button for important moments',
        },
      },
      installation: {
        label: 'Installation & Power',
        items: {
          Installation: 'OBD plug-and-play',
          'Backup Power': 'Built-in SuperCapacitor',
          'Power Loss': 'Alarm triggering and recording after power loss',
        },
      },
      safety: {
        label: 'Safety',
        items: {
          'Parking Protection': 'Monitoring while parked and unattended',
          'Collision Alert': '5 seconds pre-recording and 5 seconds post-recording',
          'Vehicle Compatibility': 'Fuel-powered and new energy vehicles',
        },
      },
    },
    applications: [
      { title: 'Parked Vehicle Protection', desc: 'Monitor the vehicle even when parked and unattended.' },
      { title: 'Driving Evidence', desc: 'Capture road moments in 2K Quad HD clarity.' },
      { title: 'Fast Deployment', desc: 'OBD plug-and-play installation makes setup quick and simple.' },
    ],
    accessories: [
      { label: 'OBD Plug-and-Play Connection' },
      { label: 'Snapshot Button' },
      { label: 'Software Platform Experience' },
    ],
  },

  ll303pro: {
    model: 'LL303PRO',
    name: 'LTE Solar Powered GNSS Tracker',
    image: '/products/LL303PRO.png',
    category: 'Asset Tracker',
    tagline: 'Smart asset Tracking starts now.',
    description:
      'LL303PRO is an LTE solar powered GNSS tracker designed for smart, self-sustaining asset tracking. It supports LTE and GSM communication, GPS/BDS/LBS positioning, solar and magnetic charging, IP67 durability, working modes, Bluetooth accessories, and optional RFID broadcast.',
    features: [
      { icon: 'lte', label: 'LTE & GSM Network' },
      { icon: 'gps', label: 'GPS & BDS & LBS Positioning' },
      { icon: 'battery', label: 'Solar & Magnetic Charging' },
      { icon: 'water', label: 'IP67 Dust & Water Resistance' },
      { icon: 'crash', label: 'Multiple Alerts' },
      { icon: 'cloud', label: 'Multiple Working Modes' },
      { icon: 'lte', label: 'Bluetooth Accessory Compatibility (Optional)' },
      { icon: 'lte', label: 'RFID Broadcast (Optional)' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'LTE Solar Powered GNSS Tracker',
          Purpose: 'Self-sustaining asset tracking',
          Charging: 'Solar and magnetic charging',
        },
      },
      network: {
        label: 'Network & Positioning',
        items: {
          Network: '4G LTE with 2G GSM fallback',
          Positioning: 'GPS, BDS, and LBS',
          Platform: 'Cloud platform location display',
        },
      },
      durability: {
        label: 'Durability & Alerts',
        items: {
          Protection: 'IP67 dust and water resistance',
          Alerts: 'Device removal, abnormal vibration, abnormal temperature and humidity',
          Modes: 'Multiple configurable working modes',
        },
      },
      expansion: {
        label: 'Expansion',
        items: {
          'Bluetooth Accessories': 'Optional environmental sensor and other Bluetooth accessories',
          Monitoring: 'Temperature, humidity, doors, light, fuel consumption, door status',
          RFID: 'Optional active RFID broadcast',
        },
      },
    },
    applications: [
      { title: 'Asset Tracking', desc: 'Track assets with self-sustaining power and durable installation.' },
      { title: 'Environmental Monitoring', desc: 'Pair with Bluetooth sensors to monitor temperature, humidity, doors, and light.' },
      { title: 'Logistics & Inventory', desc: 'Optional RFID broadcast supports smoother logistics, warehouse flow, and inventory management.' },
    ],
    accessories: [
      { label: 'Magnetic Charger' },
      { label: 'Environmental Sensor' },
      { label: 'Bluetooth Accessories' },
      { label: 'Active RFID Reader' },
    ],
  },

  vl103d: {
    model: 'VL103D',
    name: 'LTE GNSS Terminal',
    image: '/products/VL103D.png',
    category: 'Vehicle Tracker',
    tagline: 'Tiny Device. Expanded Control.',
    description:
      'VL103D is an LTE GNSS terminal that unlocks fleet intelligence through 4G LTE with 2G fallback, configurable input/output, RS485 expansion, IP66 durability, jamming alerts, driving behavior analysis, and vehicle battery protection.',
    features: [
      { icon: 'lte', label: 'LTE & GSM Network' },
      { icon: 'serial', label: 'Configurable Input/Output' },
      { icon: 'battery', label: 'Car Battery Protection' },
      { icon: 'water', label: 'IP66 Dust & Water Resistance' },
      { icon: 'serial', label: 'RS485 Interface' },
      { icon: 'speed', label: 'Driving Behavior Analysis (Basic)' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'LTE GNSS Terminal',
          Tagline: 'Tiny Device. Expanded Control.',
          Purpose: 'Fleet intelligence and vehicle protection',
        },
      },
      network: {
        label: 'Network & Expansion',
        items: {
          Network: '4G LTE with 2G GSM fallback',
          Expansion: 'RS485 and Bluetooth support',
          Accessories: 'Fuel sensors, temperature sensors, RFID reader, remote control',
        },
      },
      safety: {
        label: 'Safety & Alerts',
        items: {
          'Jamming Detection': 'GNSS / LTE jamming alerts',
          'Remote Cut-Off': 'Fuel or power cutoff support',
          Alerts: 'Vibration, speeding, impounding, and more',
        },
      },
      essentials: {
        label: 'Essentials',
        items: {
          'Ignition Detection': 'Supported',
          'Geo-Fence': 'Entry / exit notifications',
          'Battery Protection': 'Switch to internal power when vehicle battery dips',
          'Driving Behavior': 'Harsh acceleration, sharp braking, sudden turns, collisions',
        },
      },
    },
    applications: [
      { title: 'Fleet Tracking', desc: 'Track, protect, and manage vehicles with real-time visibility.' },
      { title: 'Cold Chain & Fuel Insight', desc: 'Use RS485 and Bluetooth accessories for temperature and fuel monitoring.' },
      { title: 'Theft Protection', desc: 'Detect GNSS/LTE jamming and use remote fuel or power cutoff.' },
    ],
    accessories: [
      { label: 'Fuel Sensor' },
      { label: 'Temperature Sensor' },
      { label: 'RFID Reader' },
      { label: 'Remote Control' },
    ],
  },

  vl103m: {
    model: 'VL103M',
    name: 'LTE GNSS Terminal',
    image: '/products/VL103M.png',
    category: 'Vehicle Tracker',
    tagline: 'Minimal Form. Complete Control.',
    description:
      'VL103M is an LTE GNSS terminal designed to manage smarter and protect stronger. It supports GPS/BDS/LBS positioning, Bluetooth accessories, external buzzer/horn, remote listen-in, low voltage alerts, multiple alerts, and IP66 durability.',
    features: [
      { icon: 'gps', label: 'GPS & BDS & LBS Positioning' },
      { icon: 'lte', label: 'External Buzzer/Horn Supported' },
      { icon: 'battery', label: 'Low Voltage Alert' },
      { icon: 'crash', label: 'Multiple Alerts' },
      { icon: 'sos', label: 'Remote Listen-In' },
      { icon: 'water', label: 'IP66 Dust & Water Resistance' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'LTE GNSS Terminal',
          Tagline: 'Minimal Form. Complete Control.',
          Purpose: 'Smarter fleet management and protection',
        },
      },
      positioning: {
        label: 'Positioning & Connectivity',
        items: {
          Positioning: 'GPS, BDS, and LBS',
          'Bluetooth Accessories': 'Environmental sensors, fuel monitoring, remote control support',
          'Sensor Use': 'Temperature, humidity, and door status monitoring',
        },
      },
      safety: {
        label: 'Safety',
        items: {
          'Panic Button': 'Drivers can call for help immediately',
          'Remote Listen-In': 'Audio monitoring around the vehicle',
          'Jamming Detection': 'GNSS / LTE jamming alerts with buzz and cutoff support',
        },
      },
      essentials: {
        label: 'Essentials',
        items: {
          'Ignition Detection': 'Supported',
          'Remote Cut-Off': 'Fuel / power cutoff support',
          'Geo-Fence': 'Entry / exit notifications',
          'Vehicle Battery Protection': 'Internal power switch when vehicle battery dips',
        },
      },
    },
    applications: [
      { title: 'Motorcycle Tracking', desc: 'Compact tracking with low voltage alerts for motorcycle batteries.' },
      { title: 'Driver Safety', desc: 'Panic button, buzzer/horn, and remote listen-in support emergency awareness.' },
      { title: 'Cold Chain & Fuel Monitoring', desc: 'Bluetooth accessories help monitor environment, door status, and fuel.' },
    ],
    accessories: [
      { label: 'Panic Button' },
      { label: 'External Buzzer / Horn' },
      { label: 'Bluetooth Environmental Sensor' },
      { label: 'Microphone' },
    ],
  },

  vl808: {
    model: 'VL808',
    name: 'LTE Vehicle GNSS Terminal',
    image: '/products/VL808.png',
    category: 'Vehicle Tracker',
    tagline: 'Intelligent Tracking Meets Expanded Fleet Control.',
    description:
      'VL808 unlocks fleet intelligence with LTE/GSM communication, 1-Wire peripheral support, multiple I/Os, remote fuel/power cut-off, Bluetooth accessory support, vehicle battery protection, and IP67 water and dust resistance.',
    features: [
      { icon: 'lte', label: 'LTE & GSM Network' },
      { icon: 'serial', label: '1-Wire Peripheral Support' },
      { icon: 'serial', label: 'Multiple I/Os for Function Expansion' },
      { icon: 'power', label: 'Remote Cut-Off (Fuel/Power)' },
      { icon: 'lte', label: 'Bluetooth Accessory Support' },
      { icon: 'battery', label: 'Vehicle Battery Protection' },
      { icon: 'water', label: 'IP67 Water & Dust Resistance' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'LTE Vehicle GNSS Terminal',
          Tagline: 'Intelligent Tracking Meets Expanded Fleet Control',
          Purpose: 'Expanded fleet monitoring and control',
        },
      },
      connectivity: {
        label: 'Connectivity',
        items: {
          Network: '4G and 2G network data transmission',
          '1-Wire': 'Temperature sensor and iButton reader support',
          Bluetooth: 'iBeacon and Bluetooth accessory support',
        },
      },
      interfaces: {
        label: 'Interfaces',
        items: {
          'Digital Outputs': '3',
          'Digital Inputs': '4, including one multiplexed with TTL-RX',
          'Analog I/Os': '2, multiplexed with digital I/Os',
          'Use Cases': 'ACC, door status, SOS alert, buzzer, fuel/power cut-off',
        },
      },
      protection: {
        label: 'Protection',
        items: {
          'Remote Cut-Off': 'External relay fuel / power immobilization',
          'Vehicle Battery Protection': 'Auto-disconnect at critical voltage',
          'Ingress Protection': 'IP67 water and dust resistance',
        },
      },
    },
    applications: [
      { title: 'Fleet Control', desc: 'Use multiple I/Os to control and monitor vehicle signals.' },
      { title: 'Cold Chain & Driver ID', desc: '1-Wire interface supports temperature sensors and iButton driver identification.' },
      { title: 'Bluetooth Fleet Intelligence', desc: 'Connect iBeacon and Bluetooth accessories for expanded monitoring.' },
    ],
    accessories: [
      { label: '1-Wire Temperature Sensor' },
      { label: 'iButton Reader' },
      { label: 'iBeacon' },
      { label: 'External Relay' },
    ],
  },

  vl110c: {
    model: 'VL110C',
    name: 'LTE Vehicle Terminal',
    image: '/products/VL110C.png',
    category: 'Vehicle Tracker',
    tagline: 'One tracker. Any Vehicle. Total safety.',
    description:
      'VL110C is a small and easy-to-hide LTE vehicle terminal designed for many vehicle types. It provides LTE/GSM connectivity, remote fuel/power cut-off, 9-90V wide operating voltage, battery protection, IP65 resistance, and GNSS/LTE jamming detection.',
    features: [
      { icon: 'lte', label: 'LTE & GSM Network' },
      { icon: 'power', label: 'Remote Cut-Off (Fuel/Power)' },
      { icon: 'battery', label: '9-90V Operating Voltage' },
      { icon: 'battery', label: 'Vehicle Battery Protection' },
      { icon: 'water', label: 'IP65 Water & Dust Resistance' },
      { icon: 'lte', label: 'GNSS/LTE Jamming Detection' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'LTE Vehicle Terminal',
          Tagline: 'One tracker. Any Vehicle. Total safety.',
          Purpose: 'Simple tracking with built-in protection',
        },
      },
      network: {
        label: 'Network & Power',
        items: {
          Network: '4G LTE with 2G GSM fallback',
          'Operating Voltage': '9-90V',
          'Vehicle Support': 'Industrial equipment, scooters, golf carts, and more',
        },
      },
      safety: {
        label: 'Safety & Protection',
        items: {
          'Remote Cut-Off': 'Fuel / power cut-off via installed relay',
          'Battery Protection': 'Internal battery operation at critical vehicle battery level',
          'Jamming Detection': 'GNSS / LTE alarm and relay trigger',
        },
      },
      durability: {
        label: 'Durability',
        items: {
          Protection: 'IP65 water and dust resistance',
          Design: 'Small, hidden, and anti-theft oriented',
          Alerts: 'Ignition, vibration, speeding, impounding, geo-fence, driving behavior',
        },
      },
    },
    applications: [
      { title: 'Any Vehicle Tracking', desc: 'Wide 9-90V operating voltage supports many vehicle types.' },
      { title: 'Anti-Theft Control', desc: 'Remote cutoff and jamming detection help prevent theft attempts.' },
      { title: 'Simple Fleet Protection', desc: 'Precise location visibility with built-in protection and instant alerts.' },
    ],
    accessories: [
      { label: 'Installed Relay' },
      { label: 'Tracking Platform' },
      { label: 'Remote Cut-Off Control' },
    ],
  },

  vl111: {
    model: 'VL111',
    name: 'LTE Vehicle Terminal',
    image: '/products/VL111.png',
    category: 'Vehicle Tracker',
    tagline: 'When your fleet hits the road, control should not stay behind.',
    description:
      'VL111 is an LTE vehicle terminal built for real-time vehicle tracking and instant action. With a built-in relay, compact motorcycle-friendly design, GNSS/LTE jamming detection, positioning support, battery protection, and IP66 durability, it puts fleet safety and control at your fingertips.',
    features: [
      { icon: 'lte', label: 'LTE & GSM Network' },
      { icon: 'gps', label: 'GPS/BDS/GLONASS & LBS Positioning' },
      { icon: 'power', label: 'Remote Cut-Off (Fuel/Power)' },
      { icon: 'battery', label: 'Vehicle Battery Protection' },
      { icon: 'lte', label: 'GNSS/LTE Jamming Detection' },
      { icon: 'water', label: 'IP66 Water & Dust Resistance' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'LTE Vehicle Terminal',
          'Vehicle Fit': 'Compact design crafted for motorcycles',
          'Main Control': 'Built-in relay for remote fuel and power cutoff',
        },
      },
      network: {
        label: 'Network & Positioning',
        items: {
          Network: '4G LTE with 2G GSM fallback',
          Positioning: 'GPS, BDS, GLONASS, and LBS',
          Platform: 'Cloud platform location display',
        },
      },
      control: {
        label: 'Control & Safety',
        items: {
          'Built-In Relay': 'Remote fuel and power cutoff',
          'Relay Capacity': 'Safely handles up to 2A',
          'Jamming Response': 'Alarm, buzzer, and relay trigger after GNSS/LTE jamming detection',
        },
      },
      protection: {
        label: 'Protection',
        items: {
          'Battery Protection': 'Internal battery operation at critical vehicle battery level',
          'Ingress Protection': 'IP66 water and dust resistance',
          Alerts: 'Ignition, remote cutoff, multiple alerts, geo-fence, battery protection',
        },
      },
    },
    applications: [
      { title: 'Motorcycle Fleet Tracking', desc: 'Compact design fits motorcycles and keeps vehicles connected.' },
      { title: 'Remote Vehicle Control', desc: 'Built-in relay enables instant fuel and power cutoff.' },
      { title: 'Anti-Jamming Protection', desc: 'Detects interference and responds with alerts, buzzer, and relay control.' },
    ],
    accessories: [
      { label: 'Built-In PCB Relay' },
      { label: 'Buzzer Alert Support' },
      { label: 'Cloud Tracking Platform' },
    ],
  },

  ll301: {
    model: 'LL301',
    name: 'Stilled Watcher, Silent Protector',
    image: '/products/LL301.png',
    category: 'Asset Tracker',
    tagline: 'Stilled Watcher, Silent Protector.',
    description:
      'LL301 is a compact asset tracker with industry-leading battery life, dual-network communication, zero-barrier deployment, powerful security, Bluetooth setup, and all-weather durability for fleet management, logistics, and asset protection.',
    features: [
      { icon: 'gps', label: 'GPS & BDS & LBS Positioning' },
      { icon: 'lte', label: 'LTE & GSM Network' },
      { icon: 'battery', label: '10,000mAh Rechargeable Battery' },
      { icon: 'sos', label: 'Remote Listen-in (VoLTE)' },
      { icon: 'crash', label: 'Multiple Alerts' },
      { icon: 'cloud', label: 'Multiple Working Modes' },
      { icon: 'battery', label: 'Strong Magnetic Base' },
      { icon: 'lte', label: 'Bluetooth Configuration' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'Asset Tracker',
          Tagline: 'Stilled Watcher, Silent Protector',
          Purpose: 'Fleet management, logistics, and asset protection',
        },
      },
      battery: {
        label: 'Battery & Deployment',
        items: {
          'Battery Capacity': '10,000mAh rechargeable battery',
          'Battery Life': '7 days to 2 years depending on scenario',
          Installation: 'Strong magnetic base and double-sided adhesive',
        },
      },
      network: {
        label: 'Network & Positioning',
        items: {
          Positioning: 'GPS, BDS, and LBS',
          Accuracy: '<2.5m accuracy',
          Network: '4G LTE and 2G GSM dual-network connectivity',
        },
      },
      safety: {
        label: 'Security & Durability',
        items: {
          Alerts: 'Tamper, vibration, low battery, cover removal, device removal',
          Configuration: 'BLE 5.0 and mobile app configuration',
          'Water Resistance': 'IPX5',
          'Operating Temperature': '-20°C to +70°C',
        },
      },
    },
    applications: [
      { title: 'Fleet Management', desc: 'Track valuable mobile assets with long battery life and dual-network coverage.' },
      { title: 'Logistics Protection', desc: 'Use discreet magnetic deployment for cargo and logistics assets.' },
      { title: 'Asset Security', desc: 'Real-time tamper, vibration, and low-battery alerts support immediate response.' },
    ],
    accessories: [
      { label: 'Strong Magnetic Base' },
      { label: 'Double-Sided Adhesive' },
      { label: 'Mobile App Configuration' },
      { label: 'BLE 5.0 Configuration' },
    ],
  },

  pl200: {
    model: 'PL200',
    name: 'Silent no more, always in focus',
    image: '/products/PL200.png',
    category: 'Personal Tracker',
    tagline: 'Silent no more, always in focus.',
    description:
      'PL200 is a personal safety tracker designed for reliable outdoor mobile work environments. It supports LTE Cat 1 with GSM fallback, GPS/BDS/GLONASS positioning, two-way communication, step counter, panic button, remote listen-in, multiple working modes, and multiple alerts.',
    features: [
      { icon: 'sos', label: 'Two-Way Communication' },
      { icon: 'lte', label: 'LTE & GSM Network' },
      { icon: 'gps', label: 'GPS & BDS & GLONASS Positioning' },
      { icon: 'motion', label: 'Step Counter' },
      { icon: 'cloud', label: 'Multiple Working Modes' },
      { icon: 'sos', label: 'Panic Button' },
      { icon: 'sos', label: 'Remote Listen-in' },
      { icon: 'crash', label: 'Multiple Alerts' },
    ],
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'Personal Tracker',
          Tagline: 'Silent no more, always in focus',
          Purpose: 'Worker safety and outdoor mobile tracking',
        },
      },
      network: {
        label: 'Network & Positioning',
        items: {
          Network: 'LTE 4G Cat 1 with GSM 2G fallback',
          'Network Switch': 'Primary and backup network switch',
          Positioning: 'GPS, BDS, and GLONASS',
        },
      },
      battery: {
        label: 'Battery & Modes',
        items: {
          Standby: 'Up to 5 days',
          'Power Strategy': 'Step-triggered and timed mode switching',
          'Working Modes': 'Configurable according to actual demands',
        },
      },
      safety: {
        label: 'Safety',
        items: {
          Communication: 'Two-way communication with speed-dials to two contacts',
          'Panic Button': 'Single-press emergency help',
          'Remote Listen-in': 'Audio monitoring around the device',
          Alerts: 'Power-on/off, low battery, SIM card change, and more',
        },
      },
    },
    applications: [
      { title: 'Worker Safety', desc: 'Designed for outdoor mobile work environments and worker protection.' },
      { title: 'Emergency Response', desc: 'Panic button and two-way communication help workers request immediate support.' },
      { title: 'Outdoor Tracking', desc: 'Reliable positioning and dual-network fallback help maintain tracking in remote areas.' },
    ],
    accessories: [
      { label: 'Speed-Dial Contact Setup' },
      { label: 'Cloud Platform' },
      { label: 'Remote Listen-in Support' },
    ],
  },
};

const allProductDetails = {
  ...productDetails,
  ...QOHO_PRODUCT_DETAILS,
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [activeTab, setActiveTab] = useState('features');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    quantity: '',
    requirement: '',
  });

  const product = allProductDetails[productId];

  const allRelated = Object.entries(allProductDetails)
    .filter(([id]) => id !== productId)
    .map(([id, p]) => ({
      id,
      model: p.model,
      image: p.image,
      category: p.category,
      name: p.name,
    }));

  const related = [
    ...allRelated.filter((p) => p.category === product?.category),
    ...allRelated.filter((p) => p.category !== product?.category),
  ].slice(0, 4);

  const handleQuoteChange = (e) => {
    setQuoteData({ ...quoteData, [e.target.name]: e.target.value });
  };

  const handleQuoteSubmit = () => {
    if (!quoteData.name || !quoteData.email) {
      alert('Please fill in Name and Email.');
      return;
    }

    const subject = encodeURIComponent(
      `Quote Request: ${product.model} — ${quoteData.company || 'Timeline Telematics'}`
    );

    const body = encodeURIComponent(
      `Quote Request — ${product.model}

Name: ${quoteData.name}
Email: ${quoteData.email}
Company: ${quoteData.company}
Phone: ${quoteData.phone}
Country: ${quoteData.country}
Quantity: ${quoteData.quantity}

Requirements:
${quoteData.requirement}

---
Sent from Timeline Telematics Product Page`
    );

    window.location.href = `mailto:info@teletix.me?subject=${subject}&body=${body}`;
    setQuoteOpen(false);
  };

  if (!product) {
    return (
      <div className="pdp-not-found">
        <h2>Product Not Found</h2>
        <Link to="/products" className="pdp-btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  const tabs = [
    { key: 'features', label: 'Features' },
    { key: 'specifications', label: 'Specifications' },
    { key: 'applications', label: 'Applications' },
  ];

  return (
    <div className="pdp-wrapper">
      <TopBar />
      <Navbar />

      <div className="pdp-breadcrumb">
        <div className="pdp-container">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/products">Products</Link>
          <span>›</span>
          <span className="pdp-breadcrumb-active">{product.model}</span>
        </div>
      </div>

      <section className="pdp-hero">
        <div className="pdp-container">
          <div className="pdp-hero-grid">
            <div className="pdp-hero-image-col">
              <div className="pdp-image-main">
                <img
                  src={product.image}
                  alt={product.model}
                  className="pdp-product-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="pdp-hero-info-col">
              <span className="pdp-category-badge">{product.category}</span>
              <h1 className="pdp-model-title">{product.model}</h1>
              <h2 className="pdp-model-subtitle">{product.name}</h2>
              <p className="pdp-tagline">
                <em>{product.tagline}</em>
              </p>
              <p className="pdp-description">{product.description}</p>

              <ul className="pdp-quick-features">
                {product.features.slice(0, 5).map((f, i) => (
                  <li key={i}>
                    <svg
                      className="pdp-li-check"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f.label}
                  </li>
                ))}
              </ul>

              <div className="pdp-hero-actions">
                <button className="pdp-btn-primary" onClick={() => setQuoteOpen(true)}>
                  Get a Quote
                </button>
                <a href="tel:+971563863615" className="pdp-btn-outline">
                  Call Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pdp-tabs-section">
        <div className="pdp-container">
          <div className="pdp-tabs-nav">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`pdp-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pdp-tab-content">
            {activeTab === 'features' && (
              <div className="pdp-features-grid">
                {product.features.map((f, i) => (
                  <div key={i} className="pdp-feature-card">
                    <div className="pdp-feature-icon-wrap">{Icons[f.icon] || Icons.gps}</div>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="pdp-specs-grouped">
                {Object.values(product.specs).map((group, gi) => (
                  <div key={gi} className="pdp-spec-group">
                    <h4 className="pdp-spec-group-title">{group.label}</h4>
                    <div className="pdp-spec-group-body">
                      {Object.entries(group.items).map(([key, val]) => (
                        <div key={key} className="pdp-spec-row">
                          <span className="pdp-spec-key">{key} :</span>
                          <span className="pdp-spec-val">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="pdp-applications-grid">
                {product.applications.map((app, i) => (
                  <div key={i} className="pdp-app-card">
                    <div className="pdp-app-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="pdp-app-body">
                      <h4>{app.title}</h4>
                      <p>{app.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pdp-related-section">
        <div className="pdp-container">
          <h2 className="pdp-section-heading">Related Products</h2>
          <div className="pdp-related-grid">
            {related.map((p) => (
              <Link to={`/products/${p.id}`} key={p.id} className="pdp-related-card">
                <div className="pdp-related-img-box">
                  <img
                    src={p.image}
                    alt={p.model}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="pdp-related-info">
                  <strong>{p.model}</strong>
                  <span className="pdp-related-sublabel">{p.name}</span>
                  <span className="pdp-related-cat">{p.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pdp-cta-strip">
        <div className="pdp-container">
          <div className="pdp-cta-strip-inner">
            <div>
              <h3>Interested in {product.model}?</h3>
              <p>Get pricing, specs, and availability from our sales team.</p>
            </div>
            <div className="pdp-cta-strip-actions">
              <button className="pdp-btn-primary" onClick={() => setQuoteOpen(true)}>
                Get a Quote
              </button>
              <a href="tel:+971563863615" className="pdp-btn-outline">
                +971 56 386 3615
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {quoteOpen && (
        <div
          className="pdp-modal-overlay"
          onClick={(e) => {
            if (e.target.classList.contains('pdp-modal-overlay')) setQuoteOpen(false);
          }}
        >
          <div className="pdp-modal">
            <div className="pdp-modal-header">
              <div className="pdp-modal-header-left">
                <h3>Get a Quote</h3>
                <p>Fill in your details and we'll get back to you shortly</p>
              </div>
              <button className="pdp-modal-close" onClick={() => setQuoteOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="pdp-modal-body">
              <div className="pdp-modal-product-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Requesting quote for: <strong>{product.model}</strong>
              </div>

              <div className="pdp-modal-row">
                <div className="pdp-modal-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={quoteData.name} onChange={handleQuoteChange} placeholder="Your name" />
                </div>
                <div className="pdp-modal-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={quoteData.email} onChange={handleQuoteChange} placeholder="your@email.com" />
                </div>
              </div>

              <div className="pdp-modal-row">
                <div className="pdp-modal-group">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={quoteData.phone} onChange={handleQuoteChange} placeholder="+971 56 386 3615" />
                </div>
                <div className="pdp-modal-group">
                  <label>Company</label>
                  <input type="text" name="company" value={quoteData.company} onChange={handleQuoteChange} placeholder="Company name" />
                </div>
              </div>

              <div className="pdp-modal-row">
                <div className="pdp-modal-group">
                  <label>Country</label>
                  <select name="country" value={quoteData.country} onChange={handleQuoteChange}>
                    <option value="">Select country</option>
                    <option>UAE</option>
                    <option>United Arab Emirates</option>
                    <option>Saudi Arabia</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="pdp-modal-group">
                  <label>Expected Quantity</label>
                  <input type="text" name="quantity" value={quoteData.quantity} onChange={handleQuoteChange} placeholder="e.g. 10-50 units" />
                </div>
              </div>

              <div className="pdp-modal-row">
                <div className="pdp-modal-group full">
                  <label>Your Requirement *</label>
                  <textarea
                    name="requirement"
                    value={quoteData.requirement}
                    onChange={handleQuoteChange}
                    placeholder="Describe your requirements, use case, or questions about this product..."
                  />
                </div>
              </div>

              <div className="pdp-modal-footer">
                <button className="pdp-modal-cancel" onClick={() => setQuoteOpen(false)}>
                  Cancel
                </button>
                <button className="pdp-modal-submit" onClick={handleQuoteSubmit}>
                  Send Quote Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;