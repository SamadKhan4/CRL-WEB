import ftlDeliveryImage from '../../assets/Services/service-delivery.png';
import ftlPackingImage from '../../assets/Services/service-packing.png';
export const ftlData = {
  slug: "full-truck-load",
  serviceName: "Full Truck Load",

  hero: {
    heading: "Services",
    breadcrumb: ["CRL", "Services", "Full Truck Load"],
    image: "serviceshero.png",
  },

  overview: {
    image: null, // Exact FTL image filename abhi confirm nahi hai
    category: "What is FTL?",
    heading: "A Dedicated Truck for Your Shipment",
    paragraphs: [
      "Full Truck Load transportation is suitable when your shipment requires the complete vehicle capacity.",
      "With CRL FTL, the truck is dedicated to the customer’s shipment requirement.",
    ],
    features: [
      "Industrial goods",
      "Machinery",
      "FMCG",
      "Automotive components",
      "Commercial goods",
      "Bulk consignments",
    ],
  },

  benefits: {
    eyebrow: "Why Choose CRL FTL?",
    heading: "Reliable Transportation for High-Volume Requirements",
    description:
      "CRL focuses on reliable movement, timely delivery, safe handling, transparent operations, and professional service throughout the transportation process.",

    images: [
      null, // Exact image filename confirm karna hai
      null, // Exact image filename confirm karna hai
     ftlDeliveryImage,
  ftlPackingImage,
    ],

    cards: [
      {
        title: "Dedicated Vehicle",
        description:
          "The complete truck is allocated for the shipment.",
        icon: "Truck",
      },
      {
        title: "Professional Transportation",
        description:
          "CRL focuses on dependable movement and professional service.",
        icon: "ShieldCheck",
      },
      {
        title: "Safety First",
        description:
          "Careful handling and transportation of goods remain a core operational commitment.",
        icon: "MessageCircle",
      },
      {
        title: "Timely Delivery Focus",
        description:
          "CRL emphasizes meeting committed delivery schedules.",
        icon: "Clock",
      },
      {
        title: "Transparent Operations",
        description:
          "Clear communication is maintained throughout the transportation process.",
        icon: "House",
        wide: true,
      },
    ],
  },

  additionalSupport: {
    eyebrow: "Comprehensive Value",
    heading: "Additional FTL Support Capabilities",
    description:
      "Every FTL consignment comes backed with our full suite of enterprise support services:",

    items: [
      "Online tracking",
      "24-hour customer support",
      "Door pickup and delivery",
      "Appointment delivery",
      "Credit facility",
      "Multimode transportation",
      "POD tracking",
    ],
  },

  cta: {
    image: null, // Exact FTL background image filename confirm karna hai
    heading: "Need an Entire Truck for Your Shipment?",
    description:
      "Talk to CRL about your FTL transportation requirement.",

    actions: [
      {
        label: "Request a Quote",
        href: "#quote",
      },
      {
        label: "Contact CRL",
        href: "/contact",
      },
    ],

    phone: {
      label: "Call CRL",
      display: "+91 7499358403",
      href: "tel:+917499358403",
    },
  },
};
