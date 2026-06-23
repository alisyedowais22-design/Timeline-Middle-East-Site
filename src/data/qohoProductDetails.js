import { QOHO_PRODUCT_CATEGORIES } from './qohoProductsData';

const qohoFlatProducts = QOHO_PRODUCT_CATEGORIES.flatMap((cat) =>
  cat.products.map((product) => ({
    ...product,
    categoryId: cat.id,
    categoryLabel: cat.label,
    categoryDesc: cat.desc,
  }))
);

const makeFeatures = (items) => items.map((item) => ({ icon: item.icon || 'camera', label: item.label }));

const categoryApplications = [
  {
    title: 'Fleet Safety',
    desc: 'Supports safer vehicle operations with video evidence, monitoring and incident visibility.',
  },
  {
    title: 'Commercial Vehicles',
    desc: 'Suitable for buses, trucks, taxis, emergency fleets, logistics vehicles and specialty vehicles.',
  },
  {
    title: 'Control Room Monitoring',
    desc: 'Helps operations teams monitor vehicle activity, driver behaviour, live video and alerts.',
  },
  {
    title: 'Driver & Passenger Protection',
    desc: 'Improves visibility, accountability and risk control during daily vehicle operations.',
  },
];

const categoryAccessories = [
  { label: 'Fleet Monitoring Platform' },
  { label: 'Vehicle Camera Integration' },
  { label: 'Professional Installation Support' },
];

const aiDvrNvrDetail = (product) => ({
  tagline: `${product.model} for intelligent mobile video recording and fleet control.`,
  description: `${product.model} is a professional mobile DVR/NVR solution designed for vehicle video surveillance, real-time monitoring, GPS tracking, driver safety, event recording and fleet operation control.`,
  features: makeFeatures([
    { icon: 'camera', label: 'Multi-channel video recording' },
    { icon: 'lte', label: '4G/5G fleet connectivity support' },
    { icon: 'gps', label: 'GPS positioning and route visibility' },
    { icon: 'sd', label: 'Local storage and event recording' },
    { icon: 'adas', label: 'AI camera and safety algorithm support' },
    { icon: 'cloud', label: 'Remote monitoring platform support' },
    { icon: 'crash', label: 'Alarm and incident evidence capture' },
    { icon: 'power', label: 'Wide vehicle power compatibility' },
  ]),
  specs: {
    overview: {
      label: 'Overview',
      items: {
        'Product Type': product.categoryLabel,
        Model: product.model,
        Purpose: 'Mobile DVR/NVR recording, live video and fleet monitoring',
      },
    },
    video: {
      label: 'Video & Recording',
      items: {
        Recording: 'Supports multi-channel vehicle video recording',
        'Camera Support': 'AHD / IP camera support depending on configuration',
        Compression: 'Efficient video compression for storage and remote viewing',
        Evidence: 'Useful for accident review, driver monitoring and route incidents',
      },
    },
    connectivity: {
      label: 'Connectivity & Positioning',
      items: {
        Network: '4G / 5G / WiFi support depending on model',
        Positioning: 'GPS location tracking and route playback support',
        Platform: 'Remote monitoring, live view and historical video playback',
        Integration: 'Can be integrated into fleet monitoring and control room workflows',
      },
    },
    safety: {
      label: 'Safety & Alerts',
      items: {
        Alerts: 'Overspeed, emergency, video loss, storage and event alarm support',
        AI: 'ADAS, DMS, BSD and intelligent camera linkage support depending on model',
        Storage: 'SD / HDD / SSD storage options depending on model',
        Application: 'Buses, trucks, oil tankers, police vehicles and commercial fleets',
      },
    },
  },
  applications: categoryApplications,
  accessories: categoryAccessories,
});

const aiCameraDetail = (product) => ({
  tagline: `${product.model} for intelligent driver, passenger and road safety monitoring.`,
  description: `${product.model} is an AI camera solution designed for smart vehicle monitoring, driver safety, passenger visibility, people counting, recognition, blind spot awareness and advanced fleet safety workflows.`,
  features: makeFeatures([
    { icon: 'adas', label: 'AI detection and smart monitoring' },
    { icon: 'camera', label: 'High-definition video capture' },
    { icon: 'sos', label: 'Driver and passenger safety support' },
    { icon: 'crash', label: 'Event alarm linkage' },
    { icon: 'cloud', label: 'Platform monitoring support' },
    { icon: 'night', label: 'Day and night monitoring capability' },
    { icon: 'serial', label: 'MDVR/NVR integration support' },
    { icon: 'geo', label: 'Fleet operation visibility' },
  ]),
  specs: {
    overview: {
      label: 'Overview',
      items: {
        'Product Type': product.categoryLabel,
        Model: product.model,
        Purpose: 'AI video monitoring, safety detection and fleet intelligence',
      },
    },
    ai: {
      label: 'AI Capabilities',
      items: {
        Detection: 'Supports intelligent detection depending on camera type',
        Monitoring: 'Driver behaviour, passenger flow, recognition or blind spot monitoring',
        Alerts: 'Can trigger warnings and upload events to the monitoring platform',
        Evidence: 'Supports visual evidence for safety review and operational analysis',
      },
    },
    video: {
      label: 'Video & Installation',
      items: {
        Video: 'High-definition vehicle camera monitoring',
        Installation: 'Designed for in-vehicle installation and commercial use',
        Integration: 'Works with compatible MDVR/NVR and fleet monitoring systems',
        Application: 'Driver cabin, passenger area, road view, side view or special safety zones',
      },
    },
    operations: {
      label: 'Fleet Operations',
      items: {
        Use: 'Useful for buses, taxis, ride-hailing, logistics, oil/gas and passenger fleets',
        Benefit: 'Improves safety compliance, monitoring accuracy and incident response',
        Management: 'Supports control room monitoring and fleet safety workflows',
      },
    },
  },
  applications: categoryApplications,
  accessories: categoryAccessories,
});

const bodyCameraDetail = (product) => ({
  tagline: `${product.model} for portable field security and live evidence capture.`,
  description: `${product.model} is a portable body camera designed for field teams, security staff, enforcement units and emergency response operations where live recording, accountability and mobile evidence are required.`,
  features: makeFeatures([
    { icon: 'camera', label: 'Portable video recording' },
    { icon: 'lte', label: '4G/5G connectivity support depending on model' },
    { icon: 'gps', label: 'Location positioning support' },
    { icon: 'sd', label: 'Local storage support' },
    { icon: 'battery', label: 'Rechargeable battery operation' },
    { icon: 'sos', label: 'Emergency and field safety use' },
    { icon: 'cloud', label: 'Remote platform monitoring support' },
    { icon: 'crash', label: 'Incident evidence recording' },
  ]),
  specs: {
    overview: {
      label: 'Overview',
      items: {
        'Product Type': product.categoryLabel,
        Model: product.model,
        Purpose: 'Portable body-worn recording and field safety monitoring',
      },
    },
    recording: {
      label: 'Recording & Evidence',
      items: {
        Video: 'Body-worn video evidence capture',
        Audio: 'Audio recording support depending on configuration',
        Storage: 'Local video storage for incident review',
        Evidence: 'Useful for field inspection, security and enforcement operations',
      },
    },
    connectivity: {
      label: 'Connectivity & Control',
      items: {
        Network: '4G / 5G live transmission support depending on model',
        Positioning: 'GPS location visibility for field teams',
        Platform: 'Remote command center monitoring support',
        Alerts: 'Emergency event and live response support',
      },
    },
    application: {
      label: 'Application',
      items: {
        Teams: 'Security teams, police units, field inspectors and emergency staff',
        Benefit: 'Improves accountability, transparency and incident response',
        Deployment: 'Portable use without fixed vehicle installation',
      },
    },
  },
  applications: [
    {
      title: 'Field Security',
      desc: 'Helps field staff record incidents and maintain accountability during operations.',
    },
    {
      title: 'Law Enforcement',
      desc: 'Useful for patrol teams, inspection units and public safety operations.',
    },
    {
      title: 'Remote Monitoring',
      desc: 'Supports command center visibility for mobile teams in the field.',
    },
    {
      title: 'Evidence Management',
      desc: 'Captures important video evidence for review and reporting.',
    },
  ],
  accessories: [
    { label: 'Charging Dock' },
    { label: 'Mounting Clip' },
    { label: 'Remote Monitoring Platform' },
  ],
});

const vehicleCameraDetail = (product) => ({
  tagline: `${product.model} for professional vehicle video monitoring and blind spot visibility.`,
  description: `${product.model} is a vehicle camera designed for road, cabin, side, rear, dome or special-purpose monitoring in commercial fleets. It helps improve visibility, evidence capture and vehicle safety.`,
  features: makeFeatures([
    { icon: 'camera', label: 'Vehicle camera monitoring' },
    { icon: 'night', label: 'Day and night visibility support' },
    { icon: 'water', label: 'Commercial vehicle installation support' },
    { icon: 'adas', label: 'Blind spot and safety zone monitoring' },
    { icon: 'crash', label: 'Incident evidence capture' },
    { icon: 'serial', label: 'MDVR/NVR integration support' },
    { icon: 'cloud', label: 'Fleet monitoring platform support' },
    { icon: 'geo', label: 'Operational visibility improvement' },
  ]),
  specs: {
    overview: {
      label: 'Overview',
      items: {
        'Product Type': product.categoryLabel,
        Model: product.model,
        Purpose: 'Vehicle video monitoring and fleet safety visibility',
      },
    },
    video: {
      label: 'Video Monitoring',
      items: {
        View: 'Supports vehicle front, side, rear, cabin or dome monitoring depending on camera type',
        Recording: 'Works with compatible DVR/NVR recording systems',
        Evidence: 'Provides video evidence for accident, blind spot and road incident review',
        Visibility: 'Improves driver awareness and control room monitoring',
      },
    },
    installation: {
      label: 'Installation & Compatibility',
      items: {
        Installation: 'Designed for commercial vehicle installation',
        Compatibility: 'Can be connected with compatible mobile DVR/NVR systems',
        Vehicles: 'Suitable for buses, trucks, tankers, vans and specialty vehicles',
        Environment: 'Supports vehicle operation in demanding fleet environments',
      },
    },
    operations: {
      label: 'Operational Value',
      items: {
        Safety: 'Reduces blind spots and improves vehicle surroundings visibility',
        Monitoring: 'Supports remote video monitoring and event review',
        Compliance: 'Useful for safety compliance and incident accountability',
      },
    },
  },
  applications: categoryApplications,
  accessories: [
    { label: 'Mobile DVR/NVR' },
    { label: 'Vehicle Camera Cable' },
    { label: 'Display Monitor' },
    { label: 'Professional Installation Kit' },
  ],
});

const bsdSystemDetail = (product) => ({
  tagline: `${product.model} for 360° vehicle safety and blind spot protection.`,
  description: `${product.model} is a 360° / BSD safety system designed to improve vehicle surroundings visibility, reduce blind spots and support safer movement for trucks, buses, logistics vehicles and special fleets.`,
  features: makeFeatures([
    { icon: 'adas', label: 'Blind spot detection support' },
    { icon: 'camera', label: '360° vehicle view monitoring' },
    { icon: 'crash', label: 'Safety warning and alert support' },
    { icon: 'motion', label: 'Turning and reversing assistance' },
    { icon: 'cloud', label: 'Fleet safety workflow support' },
    { icon: 'serial', label: 'Monitor and camera integration' },
    { icon: 'water', label: 'Commercial vehicle installation' },
    { icon: 'geo', label: 'Operational safety improvement' },
  ]),
  specs: {
    overview: {
      label: 'Overview',
      items: {
        'Product Type': product.categoryLabel,
        Model: product.model,
        Purpose: '360° view, blind spot monitoring and driving assistance',
      },
    },
    safety: {
      label: 'Safety Capabilities',
      items: {
        'Blind Spot': 'Helps detect risky zones around large vehicles',
        'Surround View': 'Supports multi-camera surroundings visibility',
        Warning: 'Provides safety warning support depending on configuration',
        Assistance: 'Useful during turning, reversing, parking and low-speed movement',
      },
    },
    integration: {
      label: 'System Integration',
      items: {
        Display: 'Can work with in-vehicle monitor systems',
        Cameras: 'Supports side, rear and surrounding camera setup depending on system',
        Installation: 'Designed for trucks, buses and specialty commercial vehicles',
        Monitoring: 'Can support fleet safety review and control room workflows',
      },
    },
    value: {
      label: 'Business Value',
      items: {
        Safety: 'Reduces accident risk from blind spots',
        Efficiency: 'Improves driver confidence in complex road environments',
        Use: 'Ideal for large vehicles, city fleets, logistics and construction vehicles',
      },
    },
  },
  applications: categoryApplications,
  accessories: [
    { label: 'Vehicle Monitor' },
    { label: 'Side Cameras' },
    { label: 'Rear Camera' },
    { label: 'Radar / BSD Sensor Support' },
  ],
});

const monitorDetail = (product) => ({
  tagline: `${product.model} for in-vehicle display and live camera viewing.`,
  description: `${product.model} is an on-board monitor solution designed for displaying live camera views, assisting drivers with visibility and supporting safer vehicle operation in commercial fleets.`,
  features: makeFeatures([
    { icon: 'camera', label: 'Live camera display support' },
    { icon: 'power', label: 'Vehicle power installation' },
    { icon: 'serial', label: 'Multi-camera input support depending on model' },
    { icon: 'motion', label: 'Driving assistance display' },
    { icon: 'water', label: 'Commercial vehicle use' },
    { icon: 'crash', label: 'Safety visibility improvement' },
    { icon: 'cloud', label: 'Fleet operation support' },
    { icon: 'adas', label: 'BSD / rear view usage support' },
  ]),
  specs: {
    overview: {
      label: 'Overview',
      items: {
        'Product Type': product.categoryLabel,
        Model: product.model,
        Purpose: 'In-vehicle display for live camera view and driver assistance',
      },
    },
    display: {
      label: 'Display & Viewing',
      items: {
        View: 'Displays live vehicle camera feeds',
        Use: 'Useful for reverse view, side view, blind spot view and cabin monitoring',
        Operation: 'Supports safer driving and easier vehicle manoeuvring',
        Evidence: 'Helps drivers react faster to surrounding risks',
      },
    },
    installation: {
      label: 'Installation',
      items: {
        Mounting: 'Designed for vehicle dashboard or cabin installation',
        Compatibility: 'Works with compatible cameras and video systems',
        Vehicles: 'Suitable for trucks, buses, vans and commercial fleets',
      },
    },
    value: {
      label: 'Operational Value',
      items: {
        Safety: 'Improves driver visibility around the vehicle',
        Productivity: 'Reduces blind spot risk during daily operations',
        Application: 'Ideal for logistics, public transport and heavy-duty vehicles',
      },
    },
  },
  applications: categoryApplications,
  accessories: [
    { label: 'Vehicle Cameras' },
    { label: 'Video Cable Kit' },
    { label: 'Mounting Bracket' },
  ],
});

const ptzDetail = (product) => ({
  tagline: `${product.model} for advanced surveillance, thermal monitoring and vehicle safety.`,
  description: `${product.model} is a professional PTZ / peripheral product designed for advanced vehicle surveillance, thermal imaging, long-range monitoring, backup power or tire pressure safety depending on configuration.`,
  features: makeFeatures([
    { icon: 'camera', label: 'Advanced surveillance support' },
    { icon: 'night', label: 'Low-light / thermal monitoring support' },
    { icon: 'motion', label: 'PTZ movement and wide monitoring use' },
    { icon: 'battery', label: 'Power or safety support depending on model' },
    { icon: 'crash', label: 'Safety alarm workflow support' },
    { icon: 'cloud', label: 'Control room monitoring support' },
    { icon: 'water', label: 'Commercial vehicle application' },
    { icon: 'geo', label: 'Special fleet operation support' },
  ]),
  specs: {
    overview: {
      label: 'Overview',
      items: {
        'Product Type': product.categoryLabel,
        Model: product.model,
        Purpose: 'Advanced vehicle surveillance, safety monitoring or peripheral support',
      },
    },
    function: {
      label: 'Core Function',
      items: {
        Monitoring: 'Supports advanced video, thermal, power or safety monitoring depending on model',
        Integration: 'Can be integrated with vehicle surveillance and fleet safety systems',
        Operation: 'Designed for professional commercial fleet environments',
        Visibility: 'Improves monitoring of critical vehicle or field operation areas',
      },
    },
    deployment: {
      label: 'Deployment',
      items: {
        Vehicles: 'Suitable for trucks, buses, emergency fleets, field vehicles and special operations',
        Setup: 'Professional installation recommended',
        Platform: 'Can support control room and vehicle monitoring workflows',
      },
    },
    value: {
      label: 'Business Value',
      items: {
        Safety: 'Improves risk awareness and operational monitoring',
        Control: 'Supports better response to incidents and vehicle conditions',
        Use: 'Best for high-value fleets, emergency operations and critical monitoring scenarios',
      },
    },
  },
  applications: categoryApplications,
  accessories: [
    { label: 'Surveillance System Integration' },
    { label: 'Vehicle Power Integration' },
    { label: 'Professional Installation Support' },
  ],
});

const templates = {
  'AI DVR / NVR Systems': aiDvrNvrDetail,
  'AI Cameras': aiCameraDetail,
  'Body Cameras': bodyCameraDetail,
  'Vehicle Cameras': vehicleCameraDetail,
  '360° / BSD Systems': bsdSystemDetail,
  'On-board Monitors': monitorDetail,
  'PTZ & Peripherals': ptzDetail,
};

const specificProductDetails = {
  'qh-mc810ip': {
    tagline: 'AI people counting and child safety monitoring for smart vehicles.',
    description:
      'QH-MC810IP is an AI smart IP people counting camera designed for passenger counting, child safety monitoring, passenger-left-behind detection and MDVR alarm linkage in buses, vans and passenger fleets.',
    features: makeFeatures([
      { icon: 'adas', label: 'AI people counting' },
      { icon: 'sos', label: 'Passenger-left-behind detection' },
      { icon: 'camera', label: 'Smart IP camera monitoring' },
      { icon: 'crash', label: 'MDVR alarm linkage' },
      { icon: 'cloud', label: 'Remote notification support' },
      { icon: 'geo', label: 'Passenger fleet safety visibility' },
      { icon: 'night', label: 'In-vehicle monitoring support' },
      { icon: 'serial', label: 'System integration support' },
    ]),
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'AI Smart IP People Counting Camera',
          Model: 'QH-MC810IP',
          Purpose: 'Passenger counting, child safety and smart vehicle monitoring',
        },
      },
      ai: {
        label: 'AI Capabilities',
        items: {
          Counting: 'Real-time people counting support',
          Safety: 'Passenger-left-behind and child safety monitoring',
          Alerts: 'Alarm linkage with compatible MDVR systems',
          Notification: 'Remote notification support through monitoring platform',
        },
      },
      installation: {
        label: 'Installation & Use',
        items: {
          Application: 'Buses, school buses, vans, passenger fleets and ride-hailing vehicles',
          Integration: 'Compatible with vehicle video monitoring workflows',
          Benefit: 'Improves passenger visibility, accountability and safety response',
        },
      },
    },
  },

  'qh-ai-4g-dash-camera': {
    tagline: 'All-in-one AI 4G dash camera with ADAS, DMS, GPS and WiFi.',
    description:
      'AI 4G Dash Camera is a compact mobile video solution with 2CH/4CH 1080P camera support, built-in 4G, GPS, WiFi, ADAS, DMS and platform connectivity for modern fleet safety.',
    features: makeFeatures([
      { icon: 'camera', label: '2CH/4CH 1080P AI camera support' },
      { icon: 'lte', label: 'Built-in 4G GPS WiFi' },
      { icon: 'adas', label: 'ADAS road safety support' },
      { icon: 'sos', label: 'DMS driver monitoring support' },
      { icon: 'sd', label: 'TF card storage support' },
      { icon: 'cloud', label: 'Remote monitoring platform support' },
      { icon: 'crash', label: 'Event alarm and evidence recording' },
      { icon: 'geo', label: 'Fleet route visibility' },
    ]),
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'AI 4G Dash Camera',
          Model: 'AI 4G Dash Camera',
          Purpose: 'AI dashcam, driver monitoring and fleet video safety',
        },
      },
      video: {
        label: 'Video & AI',
        items: {
          Channels: '2CH / 4CH 1080P camera support',
          ADAS: 'Road safety warning support',
          DMS: 'Driver behaviour monitoring support',
          Storage: 'TF card storage support depending on configuration',
        },
      },
      connectivity: {
        label: 'Connectivity',
        items: {
          Network: 'Built-in 4G communication',
          Positioning: 'GPS location tracking support',
          WiFi: 'WiFi connectivity support',
          Platform: 'Fleet monitoring and live video platform support',
        },
      },
    },
  },

  'qh-mdvr8101s': {
    tagline: 'Compact 1080P mobile DVR camera with 4G, WiFi and GPS.',
    description:
      'MDVR8101S is a compact mobile DVR system designed for 1080P vehicle recording, integrated 4G communication, WiFi, GPS/BeiDou positioning, G-sensor alerts and dual TF card storage.',
    features: makeFeatures([
      { icon: 'camera', label: '1080P mobile video recording' },
      { icon: 'lte', label: 'Integrated 4G connectivity' },
      { icon: 'gps', label: 'GPS / BeiDou positioning' },
      { icon: 'sd', label: 'Dual TF card storage' },
      { icon: 'crash', label: 'G-Sensor safety alarms' },
      { icon: 'cloud', label: 'Remote playback support' },
      { icon: 'power', label: 'Vehicle power installation' },
      { icon: 'serial', label: 'Expandable video inputs' },
    ]),
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': '1080P Mobile DVR Camera',
          Model: 'MDVR8101S',
          Purpose: 'Compact mobile DVR recording and fleet monitoring',
        },
      },
      recording: {
        label: 'Recording',
        items: {
          Video: '1080P vehicle video recording',
          Storage: 'Dual TF card storage support',
          Sensor: 'G-Sensor alarm support',
          Playback: 'Remote video review support',
        },
      },
      connectivity: {
        label: 'Connectivity',
        items: {
          Network: '4G connectivity support',
          WiFi: '2.4G WiFi support',
          Positioning: 'GPS / BeiDou positioning support',
          Application: 'Commercial vehicle fleet monitoring',
        },
      },
    },
  },

  'qh-mdvr101n': {
    tagline: '4G GPS SD card mobile DVR for simple fleet video recording.',
    description:
      'MDVR101N is a mobile DVR solution with 1080P video recording, SD card storage, 4G communication, GPS/BD positioning and optional AI detection support for small and medium fleet deployments.',
    features: makeFeatures([
      { icon: 'camera', label: '1080P video recording' },
      { icon: 'lte', label: '4G network connectivity' },
      { icon: 'gps', label: 'External GPS/BD support' },
      { icon: 'sd', label: 'TF card storage support' },
      { icon: 'adas', label: 'Optional DMS/BSD AI detection' },
      { icon: 'serial', label: 'RS232 support' },
      { icon: 'cloud', label: 'Platform monitoring support' },
      { icon: 'crash', label: 'Fleet event alarm support' },
    ]),
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': '4G GPS SD Card Mobile DVR',
          Model: 'MDVR101N',
          Purpose: 'Mobile video recording and fleet safety monitoring',
        },
      },
      video: {
        label: 'Video & Storage',
        items: {
          Video: '1080P video recording support',
          Encoding: 'H.264 / H.265 support',
          Storage: 'TF card storage support',
          AI: 'Optional DMS / BSD detection support',
        },
      },
      connectivity: {
        label: 'Connectivity & Expansion',
        items: {
          Network: '4G communication support',
          Positioning: 'External GPS / BD support',
          Interface: 'Input / output and RS232 support',
          Use: 'Suitable for taxis, vans, trucks and small fleet vehicles',
        },
      },
    },
  },

  'qh-ai-alcohol-detection-camera': {
    tagline: 'Contactless alcohol detection camera for driver safety and compliance.',
    description:
      'AI Alcohol Detection Camera supports contactless driver alcohol detection, fast response, automatic warning and fleet safety compliance workflows for high-risk and regulated vehicle operations.',
    features: makeFeatures([
      { icon: 'adas', label: 'AI alcohol detection' },
      { icon: 'camera', label: 'Contactless camera-based monitoring' },
      { icon: 'crash', label: 'Automatic warning support' },
      { icon: 'sos', label: 'Driver safety compliance' },
      { icon: 'power', label: 'Vehicle power support' },
      { icon: 'cloud', label: 'Platform alarm linkage' },
      { icon: 'water', label: 'Fleet environment support' },
      { icon: 'geo', label: 'Commercial operation control' },
    ]),
    specs: {
      overview: {
        label: 'Overview',
        items: {
          'Product Type': 'AI Alcohol Detection Camera',
          Model: 'AI Alcohol Detection Camera',
          Purpose: 'Driver alcohol detection and fleet safety compliance',
        },
      },
      detection: {
        label: 'Detection',
        items: {
          Method: 'Contactless detection',
          Distance: 'Short-range driver detection support',
          Response: 'Fast detection response for operational use',
          Accuracy: 'Designed for reliable fleet safety monitoring',
        },
      },
      application: {
        label: 'Application',
        items: {
          Vehicles: 'Passenger fleets, oil/gas fleets, buses and regulated transport',
          Integration: 'Can link with alarm and monitoring systems',
          Benefit: 'Helps prevent risky driving and supports driver compliance',
        },
      },
    },
  },
};

const defaultDetail = (product) => {
  const template = templates[product.categoryLabel] || vehicleCameraDetail;
  return template(product);
};

const deepMergeDetail = (base, extra) => ({
  ...base,
  ...extra,
  specs: {
    ...(base.specs || {}),
    ...(extra.specs || {}),
  },
  applications: extra.applications || base.applications,
  accessories: extra.accessories || base.accessories,
});

export const QOHO_PRODUCT_DETAILS = Object.fromEntries(
  qohoFlatProducts.map((product) => {
    const base = defaultDetail(product);
    const extra = specificProductDetails[product.id] || {};
    const detail = deepMergeDetail(base, extra);

    return [
      product.id,
      {
        model: product.model,
        name: product.name,
        image: product.image,
        category: product.categoryLabel,
        tagline: detail.tagline,
        description: detail.description,
        features: detail.features,
        specs: detail.specs,
        applications: detail.applications || categoryApplications,
        accessories: detail.accessories || categoryAccessories,
      },
    ];
  })
);