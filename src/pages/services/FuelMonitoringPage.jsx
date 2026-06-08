import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from './servicesData';

const FuelMonitoringPage = () => (
  <ServicePageTemplate service={servicesData.fuelMonitoring} />
);

export default FuelMonitoringPage;