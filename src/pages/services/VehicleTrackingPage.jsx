import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from './servicesData';

const VehicleTrackingPage = () => (
  <ServicePageTemplate service={servicesData.vehicleTracking} />
);

export default VehicleTrackingPage;