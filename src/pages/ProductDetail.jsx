import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─────────────────────────────────────────────────────────────
   SVG ICON LIBRARY
───────────────────────────────────────────────────────────── */
const Icons = {
  gps:      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="9" strokeDasharray="4 2"/></svg>,
  signal:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6c1.5-1.5 3.5-2.5 6-3M17 3c2.5.5 4.5 1.5 6 3"/><path d="M4 9.5C5.5 8 7.5 7 10 6.5M14 6.5c2.5.5 4.5 1.5 6 3"/><path d="M7 13c1-1.5 2.8-2.5 5-2.5s4 1 5 2.5"/><circle cx="12" cy="17" r="2" fill="currentColor"/></svg>,
  ignition: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/><path d="M9.5 4.5 12 7l2.5-2.5"/></svg>,
  power:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>,
  serial:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><circle cx="8" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="16" cy="12" r="1" fill="currentColor"/></svg>,
  wire:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6s-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6z"/><circle cx="9" cy="12" r="1.5" fill="currentColor"/><circle cx="15" cy="12" r="1.5" fill="currentColor"/></svg>,
  ble:      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M12 12l7-7-7 7"/><path d="M5 5l7 7-7 7"/></svg>,
  antenna:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="12" x2="12" y2="22"/><path d="M5 5l2 2M17 5l-2 2M2 2l3 3M19 2l-3 3"/><circle cx="12" cy="9" r="3"/></svg>,
  geo:      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>,
  speed:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0A9 9 0 0 0 3 12z"/><path d="M12 7v5l3 2"/></svg>,
  cloud:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  battery:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/><path d="M6 11v2M10 11v2"/></svg>,
  crash:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 L2 19h20z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  water:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c0 0-7 9-7 13a7 7 0 0 0 14 0c0-4-7-13-7-13z"/></svg>,
  fota:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.18-4.96"/></svg>,
  upload:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>,
  fuel:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="15" y2="22"/><line x1="4" y1="9" x2="14" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2"/></svg>,
  driver:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  camera:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7 16 12 23 17z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
  adas:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s3-7 11-7 11 7 11 7-3 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/><path d="M12 5v2M12 17v2M5 12H7M17 12h2"/></svg>,
  motion:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>,
  lte:      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1.5 8.5c5.5-5.5 14.5-5.5 21 0"/><path d="M5 12c3.9-3.9 10.1-3.9 14 0"/><path d="M8.5 15.5c2.2-2.2 5.8-2.2 7 0"/><circle cx="12" cy="19" r="1" fill="currentColor"/></svg>,
  course:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  smalltrk: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="8" width="14" height="10" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
  magnetic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15V9a6 6 0 0 1 12 0v6"/><path d="M3 15h6M15 15h6"/></svg>,
  night:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  sd:       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 2H9L3 8v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><polyline points="9 2 9 8 3 8"/></svg>,
  mic:      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  temp:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>,
  sos:      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  route:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>,
};

/* ─────────────────────────────────────────────────────────────
   PRODUCT DATABASE
───────────────────────────────────────────────────────────── */
const productDetails = {
  'gt06n-4g': {
    model: 'GT06N 4G', name: 'Classic, Reimagined in 4G', image: '/products/GT06N 4G.png',
    category: 'Vehicle Tracker', tagline: 'One device, multiple possibilities.',
    description: 'The legendary GT06N upgraded to 4G LTE. Best-selling tracker for vehicles and motorcycles with remote fuel cutoff and voice monitoring.',
    features: [
      { icon: 'lte',      label: '4G LTE CAT1 / 2G Connectivity' },
      { icon: 'gps',      label: 'AGPS 32 Channel High Sensitive GPS' },
      { icon: 'ignition', label: 'Ignition Input & Starter Block' },
      { icon: 'antenna',  label: 'Built-in Cellular & GPS Antenna' },
      { icon: 'wire',     label: '1-Wire Interface for Sensors' },
      { icon: 'serial',   label: 'Serial Port (UART/RS232)' },
      { icon: 'course',   label: 'Change Course & Time Upload Modes' },
      { icon: 'water',    label: 'Water Resistant IP65 Design' },
      { icon: 'crash',    label: 'Crash Data Recording 10Hz' },
    ],
    specs: {
      general:   { label: 'General',   items: { 'Communication Modes': 'LTE/GPRS and TCP/SMS', 'Location Technology': '32 Channels GPS', 'Operating Voltage': '12 and 24 Volt Vehicle Systems' } },
      electrical:{ label: 'Electrical',items: { 'Operating Voltage': '9-36V DC', 'Power Consumption': '4mA 12V (Sleep), 25mA 12V (Active Tracking)', 'Backup Battery': 'LI-ON 220mAh, 0 to +45°C charging' } },
      gps:       { label: 'GPS',       items: { 'Location Technology': '32 Channel GPS + GLONASS', 'Accuracy': 'SBAS 10.0m CEP', 'Tracking Sensitivity': '-162dBm', 'Antenna': 'Patch Internal', 'Assist GPS': 'Supported' } },
      physical:  { label: 'Physical',  items: { 'Dimensions': '85 x 54 x 24mm', 'Operating Temp': '-20°C to +70°C', 'Protection': 'IP65' } },
      cellular:  { label: 'Cellular',  items: { 'Data Support': 'SMS, TCP', '4G LTE Bands': 'B1/B2/B3/B4/B5/B7/B8/B20/B28', '2G GSM Bands': '850/900/1800/1900 MHz', 'SIM Card': 'Internal (4FF Nano)' } },
      io:        { label: 'Input / Output', items: { 'Ignition Sense': 'One Dedicated Wire for Ignition', 'Digital Input': '1 Digital Input', 'Analog Input': '1 Analog Input', '1-Wire': 'Driver ID and Temp. Sensor', 'Serial Port': 'UART/RS232', 'Digital Output': '2 x Open Drain, 300mA max' } },
    },
    applications: [
      { title: 'Small & Midsize Fleets', desc: 'Cost-effective tracking for businesses managing multiple vehicles.' },
      { title: 'Rental Companies', desc: 'Monitor usage, location, and unauthorized movement in real-time.' },
      { title: 'Motorcycle Tracking', desc: 'Compact design fits all motorcycle types with minimal wiring.' },
      { title: 'Logistics & Delivery', desc: 'Route optimization and driver behavior monitoring.' },
    ],
    accessories: [
      { label: 'Backup Battery Pack',   comment: '/* Add <img> here */' },
      { label: 'External GPS Antenna',  comment: '/* Add <img> here */' },
      { label: 'Driver ID Tag (RFID)',   comment: '/* Add <img> here */' },
      { label: '1-Wire Temp Sensor',    comment: '/* Add <img> here */' },
    ],
  },

  'vg03': {
    model: 'VG03', name: 'Discreet Tracking', image: '/products/VG03.png',
    category: 'Vehicle Tracker', tagline: 'Small size, big intelligence.',
    description: 'Compact GPS tracker with perfect balance between size and functionality for discreet vehicle monitoring.',
    features: [
      { icon: 'lte',      label: '4G LTE Connectivity' },
      { icon: 'gps',      label: 'High-Sensitivity 32-Channel GPS' },
      { icon: 'ignition', label: 'Ignition Detection' },
      { icon: 'geo',      label: 'Geofence Alerts' },
      { icon: 'route',    label: 'Route Replay' },
      { icon: 'battery',  label: 'Power-Saving Modes' },
      { icon: 'crash',    label: 'Crash Detection' },
      { icon: 'water',    label: 'Compact Waterproof Design' },
    ],
    specs: {
      general:  { label: 'General',  items: { 'Communication': 'LTE/GPRS, TCP/UDP/SMS', 'Operating Voltage': '9-36V DC' } },
      gps:      { label: 'GPS',      items: { 'GPS Accuracy': '5 meters CEP', 'Tracking Sensitivity': '-162dBm', 'Antenna': 'Internal' } },
      physical: { label: 'Physical', items: { 'Dimensions': '75 x 48 x 20mm', 'Operating Temp': '-20°C to +70°C' } },
      cellular: { label: 'Cellular', items: { 'Network': '4G LTE CAT1 / 2G', 'GSM': '850/900/1800/1900 MHz', 'SIM Card': '4FF Nano' } },
    },
    applications: [
      { title: 'Passenger Cars',   desc: 'Discreet installation for personal and business vehicles.' },
      { title: 'Motorcycles',      desc: 'Ultra-compact size fits perfectly on any motorcycle.' },
      { title: 'Fleet Management', desc: 'Economical tracking for small to mid-size fleets.' },
      { title: 'Vehicle Recovery', desc: 'Hidden placement aids in stolen vehicle recovery.' },
    ],
    accessories: [
      { label: 'Wiring Harness',   comment: '/* Add <img> here */' },
      { label: 'Mounting Bracket', comment: '/* Add <img> here */' },
    ],
  },

  'vl103d': {
    model: 'VL103D', name: 'Tiny Device', image: '/products/VL103D.png',
    category: 'Vehicle Tracker', tagline: 'Smallest size, biggest performance.',
    description: 'Miniature GPS tracker delivering professional-grade tracking in the smallest possible form factor.',
    features: [
      { icon: 'lte',      label: '4G LTE Connectivity' },
      { icon: 'gps',      label: 'High-Sensitivity 32-Channel GPS' },
      { icon: 'ignition', label: 'Ignition Detection' },
      { icon: 'geo',      label: 'Geofence Protection' },
      { icon: 'battery',  label: 'Ultra-Low Power Mode' },
      { icon: 'water',    label: 'Waterproof Design' },
      { icon: 'antenna',  label: 'Built-in Antenna' },
      { icon: 'course',   label: 'Configurable Upload Modes' },
    ],
    specs: {
      general:  { label: 'General',  items: { 'Communication': 'LTE/GPRS, TCP/UDP/SMS', 'Operating Voltage': '9-36V DC' } },
      gps:      { label: 'GPS',      items: { 'GPS Accuracy': '5 meters', 'Channels': '32 Channel GPS + GLONASS', 'Antenna': 'Internal Patch' } },
      physical: { label: 'Physical', items: { 'Dimensions': '50 x 35 x 15mm', 'Operating Temp': '-20°C to +70°C' } },
      cellular: { label: 'Cellular', items: { 'Network': '4G LTE CAT1 / 2G Fallback', 'GSM': '850/900/1800/1900 MHz', 'SIM Card': '4FF Nano' } },
      io:       { label: 'Input / Output', items: { 'Ignition Sense': 'Dedicated Input', 'Digital Input': '1', 'Digital Output': '1' } },
    },
    applications: [
      { title: 'Motorcycles',       desc: 'Ultra-small footprint fits anywhere on a motorcycle frame.' },
      { title: 'Passenger Cars',    desc: 'Hidden installation for covert vehicle tracking.' },
      { title: 'Light Vehicles',    desc: 'Ideal for taxis and small fleet operators.' },
      { title: 'Asset Protection',  desc: 'Concealed placement for high-value vehicle security.' },
    ],
    accessories: [
      { label: 'Mini Wiring Harness', comment: '/* Add <img> here */' },
      { label: 'Adhesive Mount Kit',  comment: '/* Add <img> here */' },
    ],
  },

  'vl103m': {
    model: 'VL103M', name: 'Minimal Form', image: '/products/VL103M.png',
    category: 'Vehicle Tracker', tagline: 'Slim profile, full power.',
    description: 'Minimalist design with maximum functionality for modern vehicles. Slim form factor with complete fleet management features.',
    features: [
      { icon: 'lte',      label: '4G LTE Connectivity' },
      { icon: 'gps',      label: 'Real-Time GPS Tracking' },
      { icon: 'ignition', label: 'Ignition Detection' },
      { icon: 'geo',      label: 'Geofence & Multiple Alerts' },
      { icon: 'route',    label: 'Route History Replay' },
      { icon: 'serial',   label: 'Serial Port Interface' },
      { icon: 'battery',  label: 'Low Power Consumption' },
      { icon: 'antenna',  label: 'Built-in Antennas' },
    ],
    specs: {
      general:  { label: 'General',  items: { 'Communication': 'LTE/GPRS, TCP/UDP/SMS', 'Operating Voltage': '9-36V DC' } },
      gps:      { label: 'GPS',      items: { 'GPS Accuracy': '5 meters', 'Channels': '32 Channel GPS + GLONASS', 'Antenna': 'Internal' } },
      physical: { label: 'Physical', items: { 'Dimensions': '60 x 40 x 16mm', 'Operating Temp': '-20°C to +70°C' } },
      cellular: { label: 'Cellular', items: { 'Network': '4G LTE CAT1 / 2G', 'SIM Card': '4FF Nano' } },
    },
    applications: [
      { title: 'Sedans & SUVs',     desc: 'Sleek design blends into modern vehicle interiors.' },
      { title: 'Small Fleets',      desc: 'Affordable tracking for small business fleets.' },
      { title: 'Rental Cars',       desc: 'Monitor rental vehicle usage and location.' },
      { title: 'Driver Monitoring', desc: 'Track driver behavior and route compliance.' },
    ],
    accessories: [
      { label: 'OBD Power Cable', comment: '/* Add <img> here */' },
      { label: 'Mounting Clip',   comment: '/* Add <img> here */' },
    ],
  },

  'vl110c': {
    model: 'VL110C', name: 'Any Vehicle', image: '/products/VL110C.png',
    category: 'Vehicle Tracker', tagline: 'One tracker for every vehicle type.',
    description: 'Universal tracker compatible with all vehicle types from motorcycles to heavy trucks with wide 9-90V voltage range.',
    features: [
      { icon: 'lte',      label: '4G LTE CAT1 Connectivity' },
      { icon: 'gps',      label: '32-Channel High-Sensitivity GPS' },
      { icon: 'power',    label: 'Wide Voltage 9-90V DC (Auto-Adaptive)' },
      { icon: 'ignition', label: 'Ignition Input & Relay Output' },
      { icon: 'fuel',     label: 'Fuel Monitoring Support' },
      { icon: 'serial',   label: 'RS232 / RS485 Serial Port' },
      { icon: 'wire',     label: '1-Wire Interface' },
      { icon: 'water',    label: 'Waterproof IP67' },
    ],
    specs: {
      general:   { label: 'General',   items: { 'Communication': 'LTE/GPRS, TCP/UDP/SMS', 'Vehicle Support': 'Motorcycles, Cars, Trucks, Buses, Heavy Equipment' } },
      electrical:{ label: 'Electrical',items: { 'Operating Voltage': '9-90V DC', 'Power Consumption': 'Low Power Sleep Mode', 'Backup Battery': 'Internal' } },
      gps:       { label: 'GPS',       items: { 'GPS Accuracy': '3 meters', 'Channels': '32 Channel GPS + GLONASS + BeiDou', 'Antenna': 'Internal' } },
      physical:  { label: 'Physical',  items: { 'Dimensions': '95 x 65 x 26mm', 'Operating Temp': '-30°C to +80°C', 'Protection': 'IP67' } },
      cellular:  { label: 'Cellular',  items: { 'Network': '4G LTE CAT1 / 2G Fallback', 'SIM Card': '4FF Nano' } },
      io:        { label: 'Input / Output', items: { 'Digital Inputs': '2', 'Digital Outputs': '2 (Relay / Fuel Cutoff)', 'Analog Inputs': '1', 'Serial Port': 'RS232 / RS485' } },
    },
    applications: [
      { title: 'Heavy Trucks',          desc: 'Wide voltage range supports 24V heavy truck systems.' },
      { title: 'Construction Equipment',desc: 'Track machinery across job sites reliably.' },
      { title: 'Buses & Transit',       desc: 'Fleet management for public transport operators.' },
      { title: 'Agricultural Vehicles', desc: 'Monitor tractors and farm equipment in remote areas.' },
    ],
    accessories: [
      { label: 'External Power Relay',    comment: '/* Add <img> here */' },
      { label: 'Fuel Sensor Adapter',     comment: '/* Add <img> here */' },
      { label: 'RS485 Temperature Probe', comment: '/* Add <img> here */' },
    ],
  },

  'vl802': {
    model: 'VL802', name: 'More Visibility', image: '/products/VL802.png',
    category: 'Vehicle Tracker', tagline: 'Total fleet visibility, total control.',
    description: 'Advanced fleet tracker with enhanced visibility, driver behavior scoring, fuel analytics, and comprehensive reporting.',
    features: [
      { icon: 'lte',     label: '4G LTE CAT1 Connectivity' },
      { icon: 'gps',     label: 'High-Accuracy GPS (2.5m)' },
      { icon: 'driver',  label: 'Driver Behavior Scoring' },
      { icon: 'fuel',    label: 'Fuel Efficiency Monitoring' },
      { icon: 'course',  label: 'Route Optimization & Replay' },
      { icon: 'serial',  label: 'RS232 / RS485 Multi-Interface' },
      { icon: 'fota',    label: 'FOTA Firmware Update OTA' },
      { icon: 'cloud',   label: 'Fleet Analytics Platform' },
    ],
    specs: {
      general:  { label: 'General',  items: { 'Communication': 'LTE/GPRS, TCP/UDP/SMS', 'Operating Voltage': '9-36V DC' } },
      gps:      { label: 'GPS',      items: { 'GPS Accuracy': '2.5 meters', 'Channels': '56 Channel Multi-GNSS', 'Antenna': 'Internal' } },
      physical: { label: 'Physical', items: { 'Dimensions': '100 x 68 x 27mm', 'Operating Temp': '-30°C to +75°C' } },
      cellular: { label: 'Cellular', items: { 'Network': '4G LTE CAT1 / 2G', 'SIM Card': '4FF Nano' } },
      io:       { label: 'Input / Output', items: { 'Digital Inputs': '3', 'Digital Outputs': '2', 'Analog Inputs': '2', 'Serial': 'RS232 + RS485', '1-Wire': 'Temp / Driver ID' } },
    },
    applications: [
      { title: 'Mid-Size Fleets',    desc: 'Comprehensive analytics for growing fleet operations.' },
      { title: 'Logistics Companies',desc: 'Route and fuel optimization for delivery fleets.' },
      { title: 'Corporate Fleets',   desc: 'Driver scoring and compliance reporting.' },
      { title: 'Transport Operators',desc: 'Full visibility across all vehicles and routes.' },
    ],
    accessories: [
      { label: 'Fuel Level Sensor',  comment: '/* Add <img> here */' },
      { label: 'Driver ID Reader',   comment: '/* Add <img> here */' },
      { label: 'Temperature Probe',  comment: '/* Add <img> here */' },
    ],
  },

  'vl808': {
    model: 'VL808', name: 'Intelligent Tracking', image: '/products/VL808.png',
    category: 'Vehicle Tracker', tagline: 'Intelligence that drives smarter decisions.',
    description: 'AI-powered tracker with predictive analytics, smart power management, and cloud-based intelligence for enterprise fleets.',
    features: [
      { icon: 'lte',     label: '4G LTE CAT-1 Connectivity' },
      { icon: 'gps',     label: 'Ultra-High Accuracy GPS (1.5m)' },
      { icon: 'driver',  label: 'AI-Powered Predictive Maintenance' },
      { icon: 'battery', label: 'Smart Power Management' },
      { icon: 'course',  label: 'Adaptive Tracking Updates' },
      { icon: 'cloud',   label: 'Cloud AI Analytics' },
      { icon: 'fota',    label: 'FOTA Firmware Update OTA' },
      { icon: 'serial',  label: 'Multi-Interface (RS232 + RS485 + CAN)' },
    ],
    specs: {
      general:  { label: 'General',  items: { 'Communication': 'LTE/GPRS, TCP/UDP/SMS', 'Operating Voltage': '9-36V DC' } },
      gps:      { label: 'GPS',      items: { 'GPS Accuracy': '1.5 meters', 'Channels': '56 Channel Multi-GNSS', 'Tracking Sensitivity': '-162dBm' } },
      physical: { label: 'Physical', items: { 'Dimensions': '105 x 72 x 28mm', 'Operating Temp': '-30°C to +80°C' } },
      cellular: { label: 'Cellular', items: { 'Network': '4G LTE CAT-1', '2G Fallback': 'GSM 850/900/1800/1900 MHz', 'SIM Card': '4FF Nano' } },
      io:       { label: 'Input / Output', items: { 'Digital Inputs': '4', 'Digital Outputs': '2', 'Analog Inputs': '2', 'CAN Bus': 'Optional Module', 'Serial': 'RS232 + RS485' } },
    },
    applications: [
      { title: 'Enterprise Fleets',    desc: 'Scalable AI tracking for large enterprise operations.' },
      { title: 'Smart Logistics',      desc: 'AI-driven route and fuel cost optimization.' },
      { title: 'Insurance Telematics', desc: 'Driving behavior data for UBI programs.' },
      { title: 'Government Fleets',    desc: 'Compliance and accountability monitoring.' },
    ],
    accessories: [
      { label: 'CAN Bus Interface Module', comment: '/* Add <img> here */' },
      { label: 'External Antenna Kit',     comment: '/* Add <img> here */' },
    ],
  },

  'x3': {
    model: 'X3', name: 'Voice Tracker', image: '/products/X3.png',
    category: 'Vehicle Tracker', tagline: 'Track it. Hear it. Secure it.',
    description: 'Vehicle tracker with built-in voice monitoring and two-way communication for enhanced security and driver oversight.',
    features: [
      { icon: 'mic',      label: 'Voice Monitoring (Remote Listening)' },
      { icon: 'mic',      label: 'Two-Way Communication' },
      { icon: 'gps',      label: 'Real-Time GPS Tracking' },
      { icon: 'sos',      label: 'SOS Emergency Alert' },
      { icon: 'geo',      label: 'Geofence Alerts' },
      { icon: 'ignition', label: 'Ignition Detection & Remote Cutoff' },
      { icon: 'signal',   label: '2G/3G Connectivity' },
      { icon: 'antenna',  label: 'Built-in GSM & GPS Antenna' },
    ],
    specs: {
      general:  { label: 'General',  items: { 'Communication': 'GPRS, TCP/UDP/SMS', 'Operating Voltage': '9-36V DC' } },
      gps:      { label: 'GPS',      items: { 'GPS Accuracy': '5 meters', 'Antenna': 'Internal' } },
      physical: { label: 'Physical', items: { 'Dimensions': '88 x 56 x 23mm', 'Operating Temp': '-20°C to +70°C' } },
      cellular: { label: 'Cellular', items: { 'Network': '2G/3G GSM', 'Bands': '850/900/1800/1900 MHz', 'SIM Card': 'Internal' } },
      io:       { label: 'Input / Output', items: { 'Ignition Input': '1', 'Digital Output': '1 (Fuel Cutoff)', 'Microphone': 'Built-in', 'Speaker': 'Built-in' } },
    },
    applications: [
      { title: 'High-Value Vehicles', desc: 'Voice monitoring adds an extra security layer.' },
      { title: 'Driver Safety',       desc: 'Two-way communication for emergency situations.' },
      { title: 'Security Fleets',     desc: 'Remote listening for security patrol vehicles.' },
      { title: 'Personal Vehicles',   desc: 'SOS alerts for personal safety on the road.' },
    ],
    accessories: [
      { label: 'External Microphone', comment: '/* Add <img> here */' },
      { label: 'SOS Panic Button',    comment: '/* Add <img> here */' },
    ],
  },

  'gt06n': {
    model: 'GT06N', name: 'The Classic', image: '/products/GT06N.png',
    category: 'Vehicle Tracker', tagline: 'Proven. Reliable. Trusted.',
    description: 'The original GT06N — the world\'s most widely deployed GPS tracker with proven reliability over years of global service.',
    features: [
      { icon: 'signal',   label: '2G/3G Connectivity' },
      { icon: 'gps',      label: 'Real-Time GPS Tracking' },
      { icon: 'ignition', label: 'Ignition Input & Remote Fuel Cutoff' },
      { icon: 'mic',      label: 'Voice Monitoring' },
      { icon: 'geo',      label: 'Geofence Alerts' },
      { icon: 'antenna',  label: 'Built-in Cellular & GPS Antenna' },
      { icon: 'power',    label: 'Wide Voltage Range 9-36V' },
      { icon: 'smalltrk', label: 'Easy Installation' },
    ],
    specs: {
      general:  { label: 'General',  items: { 'Communication': 'GPRS, TCP/UDP/SMS', 'Operating Voltage': '9-36V DC' } },
      gps:      { label: 'GPS',      items: { 'GPS Accuracy': '5-10 meters', 'Antenna': 'Internal' } },
      physical: { label: 'Physical', items: { 'Dimensions': '85 x 54 x 24mm', 'Operating Temp': '-20°C to +70°C' } },
      cellular: { label: 'Cellular', items: { 'Network': '2G GSM / 3G', 'Bands': '850/900/1800/1900 MHz', 'SIM Card': 'Internal' } },
    },
    applications: [
      { title: 'Budget Fleets',    desc: 'Cost-effective tracking for price-sensitive operators.' },
      { title: 'Motorcycles',      desc: 'Simple and reliable tracking for two-wheelers.' },
      { title: 'Small Businesses', desc: 'Affordable entry-level fleet management.' },
      { title: 'Personal Vehicles',desc: 'Basic GPS tracking and vehicle security.' },
    ],
    accessories: [
      { label: 'Relay Fuel Cutoff',   comment: '/* Add <img> here */' },
      { label: 'External SOS Button', comment: '/* Add <img> here */' },
    ],
  },

  'vl502': {
    model: 'VL502', name: 'Fleet CAN Tracker', image: '/products/VL502.png',
    category: 'CAN/OBD Tracker', tagline: 'Deep vehicle data. Smarter fleet decisions.',
    description: 'Professional CAN bus tracker that reads engine data directly from the vehicle ECU for comprehensive fleet analytics.',
    features: [
      { icon: 'lte',     label: '4G LTE CAT1 Connectivity' },
      { icon: 'gps',     label: 'High-Accuracy GPS (2.5m)' },
      { icon: 'wire',    label: 'CAN Bus J1939 / J1708 Interface' },
      { icon: 'fuel',    label: 'Real-Time Fuel Monitoring from ECU' },
      { icon: 'driver',  label: 'Driver Behavior Analysis' },
      { icon: 'serial',  label: 'RS232 / RS485 Interface' },
      { icon: 'fota',    label: 'FOTA Firmware Update OTA' },
      { icon: 'cloud',   label: 'Fleet Management Platform' },
    ],
    specs: {
      general:  { label: 'General',  items: { 'Communication': 'LTE/GPRS, TCP/UDP/SMS', 'Operating Voltage': '9-36V DC', 'CAN Protocol': 'J1939, J1708, OBD-II' } },
      gps:      { label: 'GPS',      items: { 'GPS Accuracy': '2.5 meters', 'Channels': '56 Channel Multi-GNSS', 'Antenna': 'Internal' } },
      physical: { label: 'Physical', items: { 'Dimensions': '95 x 65 x 25mm', 'Operating Temp': '-30°C to +75°C' } },
      cellular: { label: 'Cellular', items: { 'Network': '4G LTE CAT1 / 2G', 'SIM Card': '4FF Nano' } },
      io:       { label: 'CAN / Input / Output', items: { 'CAN Bus': 'J1939 / J1708', 'Digital Inputs': '2', 'Digital Outputs': '2', 'Analog Inputs': '1', 'Serial': 'RS232 + RS485' } },
    },
    applications: [
      { title: 'Commercial Trucks',  desc: 'CAN bus reads engine data, RPM, and fuel directly from ECU.' },
      { title: 'Bus Fleets',         desc: 'Passenger transport with deep vehicle diagnostics.' },
      { title: 'Heavy Equipment',    desc: 'Track machinery usage and engine health data.' },
      { title: 'Enterprise Fleets',  desc: 'Rich telemetry for large fleet cost management.' },
    ],
    accessories: [
      { label: 'CAN Bus Splitter Cable', comment: '/* Add <img> here */' },
      { label: 'J1939 Adapter Harness',  comment: '/* Add <img> here */' },
      { label: 'OBD-II Adapter',         comment: '/* Add <img> here */' },
    ],
  },

  'pl200': {
    model: 'PL200', name: 'Silent Guardian', image: '/products/PL200.png',
    category: 'Personal Tracker', tagline: 'Protect what matters most.',
    description: 'Discreet personal safety tracker with silent SOS alerts, long battery life, and real-time location sharing.',
    features: [
      { icon: 'lte',     label: '4G LTE Connectivity' },
      { icon: 'gps',     label: 'Real-Time GPS + LBS + WiFi Hybrid Positioning' },
      { icon: 'sos',     label: 'Silent SOS Emergency Alert' },
      { icon: 'geo',     label: 'Geofence Alerts' },
      { icon: 'motion',  label: 'Motion Detection' },
      { icon: 'battery', label: 'Long-Life 1500mAh Battery' },
      { icon: 'cloud',   label: 'Real-Time Location Sharing App' },
      { icon: 'water',   label: 'Compact 45g Lightweight Design' },
    ],
    specs: {
      general:  { label: 'General',  items: { 'Communication': 'LTE/GPRS, TCP/UDP/SMS', 'Battery': '1500mAh Li-Ion' } },
      gps:      { label: 'GPS',      items: { 'GPS Accuracy': '5 meters', 'Positioning': 'GPS + LBS + WiFi (Hybrid)' } },
      physical: { label: 'Physical', items: { 'Dimensions': '68 x 42 x 16mm', 'Weight': '45g', 'Operating Temp': '-10°C to +50°C' } },
      cellular: { label: 'Cellular', items: { 'Network': '4G LTE CAT1', 'SIM Card': '4FF Nano' } },
      io:       { label: 'Input / Output', items: { 'SOS Button': 'Physical Button', 'Charging': 'Micro USB', 'LED Indicator': 'Power & GPS Status' } },
    },
    applications: [
      { title: 'Child Safety',    desc: 'Keep track of children with silent geofence alerts.' },
      { title: 'Elderly Care',    desc: 'Monitor seniors with discreet SOS functionality.' },
      { title: 'Personal Security',desc: 'Carry-on tracker for personal safety anywhere.' },
      { title: 'Pet Tracking',    desc: 'Attach to pet collar for real-time location updates.' },
    ],
    accessories: [
      { label: 'Lanyard Carry Case', comment: '/* Add <img> here */' },
      { label: 'Pet Collar Clip',    comment: '/* Add <img> here */' },
      { label: 'Belt Clip Holster',  comment: '/* Add <img> here */' },
    ],
  },

  'll303pro': {
    model: 'LL303PRO', name: '5 Years Battery', image: '/products/LL303PRO.png',
    category: 'Asset Tracker', tagline: 'Set it. Forget it. Track it.',
    description: 'Ultra-long battery life asset tracker with up to 5 years operation, IP67 waterproofing, and magnetic mounting.',
    features: [
      { icon: 'battery',  label: 'Up to 5 Years Battery Life (19000mAh)' },
      { icon: 'lte',      label: '4G LTE CAT-M / NB-IoT Connectivity' },
      { icon: 'gps',      label: 'High-Sensitivity GPS + GLONASS + BeiDou' },
      { icon: 'magnetic', label: 'Strong Magnetic Mounting' },
      { icon: 'motion',   label: 'Motion & Tamper Detection' },
      { icon: 'water',    label: 'IP67 Waterproof & Dustproof' },
      { icon: 'temp',     label: 'Temperature Monitoring' },
      { icon: 'cloud',    label: 'Global Coverage' },
    ],
    specs: {
      general:  { label: 'General',  items: { 'Communication': 'LTE CAT-M1 / NB-IoT / 2G', 'Battery': '19000mAh Industrial Li-SOCl2' } },
      gps:      { label: 'GPS',      items: { 'GPS Accuracy': '5 meters CEP', 'GNSS': 'GPS + GLONASS + BeiDou', 'Antenna': 'Internal' } },
      physical: { label: 'Physical', items: { 'Dimensions': '135 x 85 x 40mm', 'Weight': '~380g', 'Operating Temp': '-40°C to +85°C', 'Protection': 'IP67' } },
      cellular: { label: 'Cellular', items: { 'Network': '4G LTE CAT-M / NB-IoT / 2G', 'SIM Card': '4FF Nano' } },
      sensors:  { label: 'Sensors',  items: { '3-Axis Accelerometer': 'Motion / Shock Detection', 'Temperature Sensor': 'Internal', 'Magnetic Mount': '20kg+ hold force' } },
    },
    applications: [
      { title: 'Container Tracking',  desc: 'Magnetic attach to shipping containers for years of tracking.' },
      { title: 'Equipment Monitoring',desc: 'Monitor valuable assets across remote locations.' },
      { title: 'Cold Chain Logistics',desc: 'Track refrigerated cargo with temperature monitoring.' },
      { title: 'Anti-Theft Protection',desc:'Covert placement on vehicles for recovery operations.' },
    ],
    accessories: [
      { label: 'Heavy-Duty Magnet Base',       comment: '/* Add <img> here */' },
      { label: 'Screw Mount Bracket',          comment: '/* Add <img> here */' },
      { label: 'External Temperature Probe',   comment: '/* Add <img> here */' },
    ],
  },

  'll301': {
    model: 'LL301', name: 'Silent Protector', image: '/products/LL301.png',
    category: 'Asset Tracker', tagline: 'Invisible protection for your assets.',
    description: 'Covert long-life asset tracker with silent operation, IP67 waterproofing, and motion-triggered alerts.',
    features: [
      { icon: 'battery',  label: 'Long Battery Life (10000mAh)' },
      { icon: 'lte',      label: '4G LTE Connectivity' },
      { icon: 'gps',      label: 'Real-Time GPS + GLONASS' },
      { icon: 'motion',   label: 'Motion & Tamper Detection' },
      { icon: 'temp',     label: 'Temperature Sensor' },
      { icon: 'water',    label: 'IP67 Waterproof & Dustproof' },
      { icon: 'magnetic', label: 'Magnetic Mounting Option' },
      { icon: 'sos',      label: 'Covert Silent Operation' },
    ],
    specs: {
      general:  { label: 'General',  items: { 'Communication': 'LTE/GPRS, TCP/UDP/SMS', 'Battery': '10000mAh Li-Ion' } },
      gps:      { label: 'GPS',      items: { 'GPS Accuracy': '5 meters', 'GNSS': 'GPS + GLONASS', 'Antenna': 'Internal' } },
      physical: { label: 'Physical', items: { 'Dimensions': '110 x 72 x 34mm', 'Operating Temp': '-30°C to +70°C', 'Protection': 'IP67' } },
      cellular: { label: 'Cellular', items: { 'Network': '4G LTE CAT1 / 2G', 'SIM Card': '4FF Nano' } },
      sensors:  { label: 'Sensors',  items: { '3-Axis Accelerometer': 'Motion / Shock Detection', 'Temperature Sensor': 'Internal', 'Status LED': 'Hidden / Silent Mode' } },
    },
    applications: [
      { title: 'Cargo Tracking',     desc: 'Monitor shipments covertly without detection.' },
      { title: 'Equipment Security', desc: 'Protect construction equipment from theft.' },
      { title: 'Cold Chain',         desc: 'Temperature monitoring for sensitive cargo shipments.' },
      { title: 'Vehicle Recovery',   desc: 'Hidden tracker for stolen vehicle recovery operations.' },
    ],
    accessories: [
      { label: 'Magnetic Mount Bracket',    comment: '/* Add <img> here */' },
      { label: 'Waterproof Cable Extension',comment: '/* Add <img> here */' },
    ],
  },

  'jc371': {
    model: 'JC371', name: 'AI Dashcam with ADAS', image: '/products/jc371.png',
    category: 'AI Dashcam', tagline: 'See everything. Miss nothing.',
    description: 'Powerful remote video monitoring terminal supporting up to 3 cameras with ADAS and DMS visual AI algorithms for commercial fleets.',
    features: [
      { icon: 'adas',   label: 'Advanced ADAS Visual AI Algorithms' },
      { icon: 'adas',   label: 'DMS Driver Monitoring System' },
      { icon: 'camera', label: 'Supports Up to 3 Cameras' },
      { icon: 'night',  label: 'Night Vision with IR Cut Filter' },
      { icon: 'lte',    label: '4G LTE Live Video Streaming' },
      { icon: 'sos',    label: 'Panic Button & Emergency Cloud Upload' },
      { icon: 'cloud',  label: 'Cloud Video Storage' },
      { icon: 'antenna',label: 'Built-in Antenna System (Simplified Wiring)' },
    ],
    specs: {
      general:  { label: 'General',   items: { 'Main Camera': '1080P Full HD', 'Peripheral Cameras': 'Up to 2 Additional', 'GPS': 'Built-in', 'Network': '4G LTE' } },
      camera:   { label: 'Camera',    items: { 'Main Resolution': '1080P Full HD', 'Cabin Camera': '720P Optional', 'FOV': '120° Wide-Angle', 'Night Vision': 'IR Cut Filter' } },
      storage:  { label: 'Storage',   items: { 'SD Card': 'Up to 256GB', 'Cloud Storage': 'Event-Triggered Upload', 'Loop Recording': 'Supported' } },
      physical: { label: 'Physical',  items: { 'Screen': '2.4 inch LCD', 'Power': '12-24V DC', 'Operating Temp': '-20°C to +70°C' } },
      ai:       { label: 'AI Features',items: { 'ADAS': 'FCW, LDW, Headway Monitoring', 'DMS': 'Fatigue, Distraction, Phone Use, Seatbelt Detection', 'Alert Type': 'In-Cab Audio + Visual + Platform Push' } },
    },
    applications: [
      { title: 'Public Transportation',desc: 'Monitor driver attentiveness across bus and transit fleets.' },
      { title: 'Logistics & Delivery', desc: 'ADAS warnings reduce collision risk for delivery drivers.' },
      { title: 'Hazardous Materials',  desc: 'Enhanced monitoring for high-risk cargo transport.' },
      { title: 'Ride-Sharing Services',desc: 'Driver and cabin monitoring for passenger safety.' },
    ],
    accessories: [
      { label: 'IR Inward-Facing Cabin Camera',    comment: '/* Add <img> here */' },
      { label: 'Rear View Camera',                 comment: '/* Add <img> here */' },
      { label: 'External GPS Antenna',             comment: '/* Add <img> here */' },
    ],
  },

  'jc450': {
    model: 'JC450', name: 'Multi-Channel AI Dashcam', image: '/products/jc450.png',
    category: 'AI Dashcam', tagline: 'Professional safety. Zero compromises.',
    description: 'LTE dashcam system recording 4/5 channels simultaneously with ADAS and DMS for commercial vehicles.',
    features: [
      { icon: 'adas',   label: 'ADAS + DMS Dual AI Systems' },
      { icon: 'camera', label: '4 / 5 Channel Simultaneous Recording' },
      { icon: 'lte',    label: '4G LTE Live Streaming + WiFi' },
      { icon: 'sd',     label: 'Dual SD Slot — Up to 512GB' },
      { icon: 'sos',    label: 'In-Cab SOS Button' },
      { icon: 'cloud',  label: 'Cloud Video Backup' },
      { icon: 'crash',  label: 'G-Sensor Incident Detection & Lock' },
      { icon: 'gps',    label: 'Built-in GPS Tracking' },
    ],
    specs: {
      general:  { label: 'General',   items: { 'Main Camera': '720P (default) or 1080P', 'Remote Cameras': 'Up to 4 Additional', 'GPS': 'Built-in', 'Network': '4G LTE' } },
      camera:   { label: 'Camera',    items: { 'Channels': '4 or 5 Simultaneous', 'Main Resolution': '720P / 1080P Optional', 'Remote Cameras': 'Cabin, Sides, Rear, DMS', 'Night Vision': 'IR Supported' } },
      storage:  { label: 'Storage',   items: { 'SD Slots': '2 x MicroSD', 'Max Storage': '512GB', 'Cloud': 'Event-Triggered Upload' } },
      physical: { label: 'Physical',  items: { 'Screen': '3.0 inch IPS', 'Power': '12-36V DC', 'Operating Temp': '-30°C to +70°C' } },
      ai:       { label: 'AI Features',items: { 'ADAS': 'FCW, LDW, Pedestrian Detection Warning', 'DMS': 'Fatigue, Distraction, Phone Use Detection', 'Alerts': 'Real-time In-Cab + Cloud Push' } },
    },
    applications: [
      { title: 'Commercial Fleets',  desc: 'Multi-channel recording for complete fleet accountability.' },
      { title: 'Long-Haul Trucks',  desc: 'Side and rear cameras eliminate blind spots on highways.' },
      { title: 'Public Transport',   desc: 'Inside and outside monitoring for passenger buses.' },
      { title: 'Driver Training',    desc: 'Video evidence for coaching and performance reviews.' },
    ],
    accessories: [
      { label: 'Cabin-View USB Camera',  comment: '/* Add <img> here */' },
      { label: 'IP67 Blindspot Camera',  comment: '/* Add <img> here */' },
      { label: 'Mini IR DMS Camera',     comment: '/* Add <img> here */' },
      { label: 'In-Cab SOS Button',      comment: '/* Add <img> here */' },
    ],
  },

  'jc261': {
    model: 'JC261', name: 'Dual Camera AI Dashcam', image: '/products/jc261.png',
    category: 'AI Dashcam', tagline: 'Watch the road. Watch the cabin.',
    description: 'Upgrade of JC400 — 4G AI dash camera with optional secondary camera (driver-facing, cabin, or rear) plus ADAS and DMS.',
    features: [
      { icon: 'adas',   label: 'ADAS: FCW, LDW, Headway Monitoring' },
      { icon: 'adas',   label: 'DMS: Fatigue, Distraction, Phone Use' },
      { icon: 'camera', label: 'Dual Camera (Front + Optional Cabin / Rear)' },
      { icon: 'lte',    label: '4G Live Video Streaming' },
      { icon: 'route',  label: 'Route Replay & Video History Playback' },
      { icon: 'mic',    label: 'Live Audio Alerts' },
      { icon: 'cloud',  label: 'Cloud Storage & Platform Integration' },
      { icon: 'gps',    label: 'Built-in GPS Tracking' },
    ],
    specs: {
      general:  { label: 'General',   items: { 'Main Camera': '1080P Full HD', 'Secondary Camera': 'Optional (Driver / Cabin / Rear)', 'GPS': 'Built-in', 'Network': '4G LTE' } },
      camera:   { label: 'Camera',    items: { 'Front Resolution': '1080P Full HD', 'Cabin Resolution': '720P or 1080P', 'FOV': '120° Wide-Angle Front', 'Night Vision': 'IR Supported' } },
      storage:  { label: 'Storage',   items: { 'SD Card': 'Up to 256GB', 'Cloud': 'Event-Triggered Upload' } },
      physical: { label: 'Physical',  items: { 'Screen': '2.5 inch LCD', 'Power': '12-24V DC', 'Operating Temp': '-20°C to +65°C' } },
      ai:       { label: 'AI Features',items: { 'ADAS': 'FCW, LDW, Headway Monitoring', 'DMS': 'Drowsiness, Distraction, Phone, Seatbelt', 'Exception Alerts': 'Speeding, Harsh Braking, Sharp Turn' } },
    },
    applications: [
      { title: 'Taxi Services',      desc: 'Cabin camera ensures passenger and driver accountability.' },
      { title: 'Ride-Share Platforms',desc: 'Video evidence protects drivers from false claims.' },
      { title: 'Logistics Fleets',   desc: 'Driver coaching based on real AI-scored events.' },
      { title: 'Government Vehicles',desc: 'Compliance monitoring and incident documentation.' },
    ],
    accessories: [
      { label: 'IR Inward-Facing Camera',  comment: '/* Add <img> here */' },
      { label: 'Cabin-View USB Camera',    comment: '/* Add <img> here */' },
    ],
  },

  'jc261p': {
    model: 'JC261P', name: 'Pro AI Dashcam', image: '/products/jc261p.png',
    category: 'AI Dashcam', tagline: 'Pro-grade safety for serious fleets.',
    description: 'Professional AI dashcam with enhanced driver scoring, touchscreen interface, and full cloud fleet management integration.',
    features: [
      { icon: 'adas',   label: 'Advanced ADAS + DMS AI Algorithms' },
      { icon: 'driver', label: 'AI Driver Behavior Scoring' },
      { icon: 'camera', label: 'Professional Dual 1080P Camera' },
      { icon: 'lte',    label: '4G LTE CAT-1 Live Streaming' },
      { icon: 'cloud',  label: 'Cloud Video Backup & Analytics' },
      { icon: 'sd',     label: 'Up to 512GB SD Storage' },
      { icon: 'sos',    label: 'Fatigue & Distraction Real-Time Alerts' },
      { icon: 'gps',    label: 'Integrated GPS Tracking' },
    ],
    specs: {
      general:  { label: 'General',   items: { 'Main Camera': '1080P Full HD', 'Secondary Camera': 'Optional 1080P', 'GPS': 'Built-in', 'Network': '4G LTE CAT-1' } },
      camera:   { label: 'Camera',    items: { 'Front Resolution': '1080P', 'Cabin Resolution': '1080P', 'FOV': '120° Front + 90° Cabin', 'Night Vision': 'IR Supported' } },
      storage:  { label: 'Storage',   items: { 'SD Card': 'Up to 512GB', 'Cloud': 'Automatic Event Upload' } },
      physical: { label: 'Physical',  items: { 'Screen': '3.0 inch Touchscreen', 'Power': '12-36V DC', 'Operating Temp': '-30°C to +70°C' } },
      ai:       { label: 'AI Features',items: { 'ADAS': 'FCW, LDW, Tailgating, Pedestrian Warning', 'DMS': 'Fatigue, Distraction, Smoking, Phone, Seatbelt', 'Driver Score': 'Per-Driver AI Safety Score' } },
    },
    applications: [
      { title: 'Fleet Safety Programs', desc: 'AI scoring drives measurable driver behavior improvement.' },
      { title: 'Driver Training',       desc: 'Event video for targeted coaching sessions.' },
      { title: 'Insurance Telematics',  desc: 'Scored driving data for premium reduction programs.' },
      { title: 'Enterprise Fleets',     desc: 'Cloud backup and platform integration for large operations.' },
    ],
    accessories: [
      { label: 'Cabin-View USB Camera',  comment: '/* Add <img> here */' },
      { label: 'External GPS Antenna',   comment: '/* Add <img> here */' },
    ],
  },

  'jc400d': {
    model: 'JC400D', name: '4G AI Dashcam', image: '/products/jc400d.png',
    category: 'AI Dashcam', tagline: 'Always connected. Always protected.',
    description: '4G-enabled AI dashcam with DMS driver monitoring, ADAS safety alerts, and real-time fleet monitoring. (Successor: JC261)',
    features: [
      { icon: 'adas',   label: 'DMS: Drowsy / Distracted Driver Detection' },
      { icon: 'adas',   label: 'ADAS: Forward Collision & Lane Warning' },
      { icon: 'camera', label: 'Dual Channel 1080P + DMS IR Camera' },
      { icon: 'lte',    label: '4G Real-Time Live Streaming' },
      { icon: 'gps',    label: 'Built-in GPS Tracking' },
      { icon: 'cloud',  label: 'Cloud Video Upload on Event' },
      { icon: 'crash',  label: 'G-Sensor Incident Lock' },
      { icon: 'route',  label: 'Remote Video Playback' },
    ],
    specs: {
      general:  { label: 'General',   items: { 'Main Camera': '1080P Full HD', 'DMS Camera': 'Built-in Driver-Facing IR', 'GPS': 'Built-in', 'Network': '4G LTE' } },
      camera:   { label: 'Camera',    items: { 'Front Resolution': '1080P', 'DMS Camera': '720P Driver-Facing IR', 'Front FOV': '120°', 'Driver FOV': '90°', 'Night Vision': 'IR Infrared' } },
      storage:  { label: 'Storage',   items: { 'SD Card': 'Up to 256GB', 'Cloud': 'DMS Event Auto-Upload' } },
      physical: { label: 'Physical',  items: { 'Power': '12-24V DC', 'Operating Temp': '-20°C to +70°C' } },
      ai:       { label: 'AI Features',items: { 'DMS': 'Drowsy Driving, Yawning, Phone Use, Distraction', 'ADAS': 'FCW, LDW', 'Push Alerts': 'Audible In-Cab + Platform Push Notification' } },
    },
    applications: [
      { title: 'Delivery Fleets',  desc: 'DMS monitoring keeps tired delivery drivers alert and safe.' },
      { title: 'Public Transport', desc: 'Driver vigilance alerts protect passengers on every trip.' },
      { title: 'Remote Monitoring',desc: 'Live stream and playback from anywhere via platform.' },
      { title: 'Mixed Fleets',     desc: 'Consistent monitoring across cars, vans, and light trucks.' },
    ],
    accessories: [
      { label: 'Replacement DMS Camera',  comment: '/* Add <img> here */' },
      { label: 'Windshield Mount Kit',    comment: '/* Add <img> here */' },
    ],
  },

  'jc181': {
    model: 'JC181', name: 'Basic Dashcam', image: '/products/jc181.png',
    category: 'Dashcam', tagline: 'Simple recording. Solid protection.',
    description: 'Reliable standalone 1080P dashcam with night vision and parking mode — no SIM or subscription required.',
    features: [
      { icon: 'camera',   label: '1080P Full HD Recording' },
      { icon: 'camera',   label: 'Loop Recording (Auto-Overwrite)' },
      { icon: 'crash',    label: 'G-Sensor Emergency Lock' },
      { icon: 'night',    label: 'Night Vision IR Array' },
      { icon: 'motion',   label: 'Motion Detection Parking Mode' },
      { icon: 'sd',       label: 'SD Card Storage Up to 128GB' },
      { icon: 'power',    label: '12V Direct Wire or USB Power' },
      { icon: 'smalltrk', label: 'Standalone — No SIM Required' },
    ],
    specs: {
      general:  { label: 'General', items: { 'Type': 'Standalone Dashcam (No SIM / No 4G)', 'Recording': '1080P Full HD Loop', 'Power': '12V DC' } },
      camera:   { label: 'Camera',  items: { 'Resolution': '1080P Full HD', 'FOV': '140° Wide-Angle', 'Night Vision': 'IR LED Array', 'Screen': '2.0 inch LCD' } },
      storage:  { label: 'Storage', items: { 'SD Card': 'Up to 128GB MicroSD', 'Loop Recording': 'Automatic Overwrite When Full', 'G-Sensor Lock': 'Protect Event Footage' } },
      physical: { label: 'Physical',items: { 'Power': '12V DC (Cigarette Socket / Hardwire)', 'Operating Temp': '-10°C to +60°C' } },
    },
    applications: [
      { title: 'Budget Fleet Recording', desc: 'Affordable video evidence for small fleet operators.' },
      { title: 'Personal Vehicles',      desc: 'Simple plug-and-play dashcam for personal use.' },
      { title: 'Insurance Evidence',     desc: 'HD footage protects against fraudulent accident claims.' },
      { title: 'Parking Security',       desc: 'Motion-triggered recording while vehicle is parked.' },
    ],
    accessories: [
      { label: 'Hardwire Kit (Parking Mode)', comment: '/* Add <img> here */' },
      { label: '128GB MicroSD Card',          comment: '/* Add <img> here */' },
    ],
  },
};

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('features');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteData, setQuoteData] = useState({
    name: '', email: '', company: '', phone: '', country: '', quantity: '', requirement: ''
  });

  const product = productDetails[productId];

  const allRelated = Object.entries(productDetails)
    .filter(([id]) => id !== productId)
    .map(([id, p]) => ({ id, model: p.model, image: p.image, category: p.category, name: p.name }));
  const related = [
    ...allRelated.filter(p => p.category === product?.category),
    ...allRelated.filter(p => p.category !== product?.category)
  ].slice(0, 4);

  const handleQuoteChange = e => setQuoteData({ ...quoteData, [e.target.name]: e.target.value });

  const handleQuoteSubmit = () => {
    if (!quoteData.name || !quoteData.email) {
      alert('Please fill in Name and Email.');
      return;
    }
    const subject = encodeURIComponent(`Quote Request: ${product.model} — ${quoteData.company || 'Timeline Telematics'}`);
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
        <Link to="/products" className="pdp-btn-primary">Browse Products</Link>
      </div>
    );
  }

  const tabs = [
    { key: 'features',      label: 'Features' },
    { key: 'specifications',label: 'Specifications' },
    { key: 'applications',  label: 'Applications' },
    { key: 'accessories',   label: 'Accessories' },
  ];

  return (
    <div className="pdp-wrapper">
      <TopBar />
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="pdp-breadcrumb">
        <div className="pdp-container">
          <Link to="/">Home</Link><span>›</span>
          <Link to="/products">Products</Link><span>›</span>
          <span className="pdp-breadcrumb-active">{product.model}</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="pdp-hero">
        <div className="pdp-container">
          <div className="pdp-hero-grid">
            <div className="pdp-hero-image-col">
              <div className="pdp-image-main">
                <img src={product.image} alt={product.model} className="pdp-product-img"
                  onError={e => { e.target.src = '/placeholder.png'; }} />
              </div>
            </div>
            <div className="pdp-hero-info-col">
              <span className="pdp-category-badge">{product.category}</span>
              <h1 className="pdp-model-title">{product.model}</h1>
              <h2 className="pdp-model-subtitle">{product.name}</h2>
              <p className="pdp-tagline"><em>{product.tagline}</em></p>
              <p className="pdp-description">{product.description}</p>
              <ul className="pdp-quick-features">
                {product.features.slice(0, 5).map((f, i) => (
                  <li key={i}>
                    <svg className="pdp-li-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f.label}
                  </li>
                ))}
              </ul>
              <div className="pdp-hero-actions">
                <button className="pdp-btn-primary" onClick={() => setQuoteOpen(true)}>Get a Quote</button>
                <a href="tel:+971563863615" className="pdp-btn-outline">Call Sales</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs ── */}
      <section className="pdp-tabs-section">
        <div className="pdp-container">
          <div className="pdp-tabs-nav">
            {tabs.map(tab => (
              <button key={tab.key}
                className={`pdp-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pdp-tab-content">

            {/* ─ FEATURES ─ */}
            {activeTab === 'features' && (
              <div className="pdp-features-grid">
                {product.features.map((f, i) => (
                  <div key={i} className="pdp-feature-card">
                    <div className="pdp-feature-icon-wrap">
                      {Icons[f.icon] || Icons.gps}
                    </div>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* ─ SPECIFICATIONS ─ */}
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

            {/* ─ APPLICATIONS ─ */}
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

            {/* ─ ACCESSORIES ─ */}
            {activeTab === 'accessories' && (
              <div className="pdp-accessories-grid">
                {product.accessories.map((acc, i) => (
                  <div key={i} className="pdp-acc-card">
                    <div className="pdp-acc-img-placeholder">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </div>
                    <p className="pdp-acc-label">{acc.label}</p>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      <section className="pdp-related-section">
        <div className="pdp-container">
          <h2 className="pdp-section-heading">Related Products</h2>
          <div className="pdp-related-grid">
            {related.map(p => (
              <Link to={`/products/${p.id}`} key={p.id} className="pdp-related-card">
                <div className="pdp-related-img-box">
                  <img src={p.image} alt={p.model}
                    onError={e => { e.target.src = '/placeholder.png'; }} />
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

      {/* ── CTA Strip ── */}
      <section className="pdp-cta-strip">
        <div className="pdp-container">
          <div className="pdp-cta-strip-inner">
            <div>
              <h3>Interested in {product.model}?</h3>
              <p>Get pricing, specs, and availability from our sales team.</p>
            </div>
            <div className="pdp-cta-strip-actions">
              <button className="pdp-btn-primary" onClick={() => setQuoteOpen(true)}>Get a Quote</button>
              <a href="tel:+971563863615" className="pdp-btn-outline">+971 56 386 3615</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── Quote Modal ── */}
      {quoteOpen && (
        <div className="pdp-modal-overlay" onClick={e => { if (e.target.classList.contains('pdp-modal-overlay')) setQuoteOpen(false); }}>
          <div className="pdp-modal">
            <div className="pdp-modal-header">
              <div className="pdp-modal-header-left">
                <h3>Get a Quote</h3>
                <p>Fill in your details and we'll get back to you shortly</p>
              </div>
              <button className="pdp-modal-close" onClick={() => setQuoteOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <div className="pdp-modal-body">
              <div className="pdp-modal-product-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
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
                  <textarea name="requirement" value={quoteData.requirement} onChange={handleQuoteChange} placeholder="Describe your requirements, use case, or questions about this product..." />
                </div>
              </div>

              <div className="pdp-modal-footer">
                <button className="pdp-modal-cancel" onClick={() => setQuoteOpen(false)}>Cancel</button>
                <button className="pdp-modal-submit" onClick={handleQuoteSubmit}>Send Quote Request</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;