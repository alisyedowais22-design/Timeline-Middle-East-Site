import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from './servicesData';

const AssetTrackingPage = () => (
  <ServicePageTemplate service={servicesData.assetTracking} />
);

export default AssetTrackingPage;