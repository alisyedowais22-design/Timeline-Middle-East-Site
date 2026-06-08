import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from './servicesData';

const PortableTrackingPage = () => (
  <ServicePageTemplate service={servicesData.portableTracking} />
);

export default PortableTrackingPage;