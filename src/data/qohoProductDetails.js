import { QOHO_PRODUCT_CATEGORIES } from './qohoProductsData';

const qohoFlatProducts = QOHO_PRODUCT_CATEGORIES.flatMap((cat) =>
  cat.products.map((product) => ({
    ...product,
    categoryId: cat.id,
    categoryLabel: cat.label,
    categoryDesc: cat.desc,
  }))
);

const productDetails = {
  'qh-mc810ip': {
    tagline: 'AI people counting and child safety monitoring for smart vehicles.',
    description:
      'AI Smart IP People Counting Camera for passenger left-behind detection, child safety monitoring and real-time people counting linked with MDVR workflows.',
    features: [
      'Passenger left-behind detection',
      'Child safety monitoring',
      'Real-time people counting',
      'MDVR alarm linkage',
    ],
    specs: {
      Technology: 'AI face and passenger detection',
      Integration: 'MDVR + remote app notification',
      Application: 'Family, business, ride-hailing and passenger fleets',
    },
  },
  'qh-ai-4g-dash-camera': {
    tagline: 'All-in-one AI 4G dash camera with ADAS, DMS, GPS and WiFi.',
    description:
      'Mobile DVR with 2CH/4CH 1080P AI camera support, built-in 4G, GPS, WiFi, ADAS, DMS and fleet platform compatibility.',
    features: [
      '2CH/4CH 1080P AI camera support',
      'Built-in 4G GPS WiFi',
      '110° ADAS and 135° DMS camera',
      'Up to 512GB TF storage',
    ],
    specs: {
      Processor: 'High-performance processor',
      Compression: 'H.265',
      Storage: '2 TF cards up to 512GB each',
      Platform: 'Fleet monitoring platform and third-party API support',
    },
  },
  'qh-mdvr8101s': {
    tagline: 'Compact 1080P mobile DVR camera with 4G, WiFi and GPS.',
    description:
      'MDVR8101S supports 1080P mobile DVR recording with integrated 4G, 2.4G WiFi, GPS/BeiDou positioning, G-sensor alarms and dual TF card storage.',
    features: [
      'Expandable video inputs',
      'Integrated 4G/WiFi/GPS',
      'Dual TF card storage',
      'G-Sensor safety alarms',
    ],
    specs: {
      Video: 'Up to 3x 1080P AHD or 1x 1080P IPC',
      Encoding: 'H.265/H.264 at 30FPS',
      Storage: 'Dual TF up to 1TB per card',
      Temperature: '-20°C to +70°C',
    },
  },
  'qh-mdvr101n': {
    tagline: '4G GPS SD card mobile DVR for simple fleet video recording.',
    description:
      'MDVR101N supports H.264/H.265 encoding, 1080P video, CAT1 4G network, external GPS/BD and optional AI DMS/BSD detection.',
    features: [
      '1080P@25FPS video',
      'CAT1 4G connectivity',
      'External GPS/BD support',
      'Optional DMS/BSD AI detection',
    ],
    specs: {
      Encoding: 'H.264 / H.265',
      Storage: 'TF card up to 512GB',
      'I/O': '1 input, 1 output, RS232 supported',
      AI: 'Optional DMS/BSD detection',
    },
  },
  'qh-ai-alcohol-detection-camera': {
    tagline: 'Contactless automatic alcohol detection camera for driver safety.',
    description:
      'AI contactless alcohol detection camera uses sensor and camera-based detection for automatic driver alcohol monitoring.',
    features: [
      'Contactless detection',
      '99.90% accuracy',
      '0.5 to 2 meter detection distance',
      'IP54 waterproof rating',
    ],
    specs: {
      Voltage: 'DC 8–36V',
      'Detection Angle': '45° horizontal',
      'Detection Time': '100ms to 1 second',
      Temperature: '-25°C to 80°C',
    },
  },
  'qh-ai-hdd-sd-mobile-dvr': {
    tagline: '8CH AI 4TB HDD/SSD mobile DVR for heavy-duty fleets.',
    description:
      'AI HDD/SD Mobile DVR supports 8CH 1080P recording, ADAS, DMS, BSD, AHD/IPC cameras, 4TB HDD/SSD storage and firebox mirror support.',
    features: [
      '8CH 1080P recording',
      'ADAS/DMS/BSD support',
      'Up to 4TB HDD/SSD',
      'Aviation connectors and wide voltage',
    ],
    specs: {
      Channels: '8CH 1080P/720P/960H',
      Storage: 'Up to 4TB HDD/SSD + external 2TB HDD + 1 SD card',
      Voltage: '8–36V',
      Dimensions: '199(W) × 76(H) × 190(L) mm',
    },
  },
  'qh-hybrid-mobile-nvr': {
    tagline: 'Hybrid NVR for IPC and AHD mobile video architecture.',
    description:
      'Hybrid Mobile NVR supports up to 8CH IPC + 4CH AHD or 12CH IPC with 4G/5G, WiFi, GPS, geo-fence and AI camera compatibility.',
    features: [
      '8CH IPC + 4CH AHD or 12CH IPC',
      '4G/5G live view',
      'AI ADAS/DMS/BSD camera support',
      'H.265 compression',
    ],
    specs: {
      Storage: '2.5” 4TB HDD/SSD + 64GB SD card',
      Voltage: 'DC 8V–36V',
      Certifications: 'CE, FCC, Emark, EN50155',
      Sensors: 'Temperature, TPMS, weight, thermal sensor support',
    },
  },
  'qh-smallest-mobile-dvr': {
    tagline: 'Compact waterproof DVR for 1CH to 4CH vehicle applications.',
    description:
      'Smallest Mobile DVR supports 1CH to 4CH 1080P/720P video, 4G GPS WiFi, H.265 compression, dual TF cards and IP65 waterproof design.',
    features: [
      '1CH to 4CH camera support',
      'H.265 video compression',
      'Dual TF card slots',
      'IP65 waterproof design',
    ],
    specs: {
      Resolution: '1080P / 720P',
      Storage: 'Dual TF cards up to 512GB each',
      Connectivity: '4G GPS WiFi',
      Platform: 'Fleet monitoring platform support',
    },
  },
};

const genericDetail = (product) => ({
  tagline: `${product.model} for intelligent vehicle safety and fleet monitoring.`,
  description: `${product.model} is a professional vehicle safety product designed for fleet monitoring, mobile surveillance, driver safety and commercial vehicle operations.`,
  features: [
    'Vehicle safety monitoring',
    'Fleet operation visibility',
    'Professional installation support',
    'Commercial vehicle use',
  ],
  specs: {
    'Product Type': product.categoryLabel,
    Model: product.model,
    Application: 'Fleet safety, vehicle monitoring and mobile surveillance',
    Image: product.image || 'Product image path available in product data',
  },
});

export const QOHO_PRODUCT_DETAILS = Object.fromEntries(
  qohoFlatProducts.map((product) => {
    const detail = productDetails[product.id] || genericDetail(product);

    return [
      product.id,
      {
        model: product.model,
        name: product.name,
        image: product.image,
        category: product.categoryLabel,
        tagline: detail.tagline,
        description: detail.description,
        features: detail.features.map((label) => ({ icon: 'camera', label })),
        specs: {
          overview: {
            label: 'Overview',
            items: detail.specs,
          },
        },
        applications: [
          {
            title: 'Fleet Safety',
            desc: 'Supports safer vehicle operations with video evidence and monitoring capabilities.',
          },
          {
            title: 'Commercial Vehicles',
            desc: 'Suitable for buses, trucks, taxis, police vehicles, emergency fleets and specialty vehicles.',
          },
          {
            title: 'Control Room Monitoring',
            desc: 'Can be integrated with mobile DVR, NVR, CMS platforms or fleet monitoring workflows.',
          },
          {
            title: 'Driver & Passenger Protection',
            desc: 'Improves visibility, accountability and risk control during daily operations.',
          },
        ],
        accessories: [
          { label: 'Fleet Monitoring Platform' },
          { label: 'Vehicle Camera Integration' },
          { label: 'Professional Installation Support' },
        ],
      },
    ];
  })
);