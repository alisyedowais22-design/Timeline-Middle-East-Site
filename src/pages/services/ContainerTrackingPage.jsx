import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from './servicesData';

const ContainerTrackingPage = () => (
  <ServicePageTemplate service={servicesData.containerTracking} />
);

export default ContainerTrackingPage;