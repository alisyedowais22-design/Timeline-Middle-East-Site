import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from './servicesData';

const TemperatureMonitoringPage = () => (
  <ServicePageTemplate service={servicesData.temperatureMonitoring} />
);

export default TemperatureMonitoringPage;