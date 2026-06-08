import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from './servicesData';

const TireManagementPage = () => (
  <ServicePageTemplate service={servicesData.tireManagement} />
);

export default TireManagementPage;