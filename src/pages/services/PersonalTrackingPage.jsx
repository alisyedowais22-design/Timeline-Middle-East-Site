import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from './servicesData';

const PersonalTrackingPage = () => (
  <ServicePageTemplate service={servicesData.personalTracking} />
);

export default PersonalTrackingPage;