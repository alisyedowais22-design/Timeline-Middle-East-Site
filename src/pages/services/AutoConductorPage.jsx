import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from './servicesData';

const AutoConductorPage = () => (
  <ServicePageTemplate service={servicesData.autoConductor} />
);

export default AutoConductorPage;