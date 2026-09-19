import { ServiceItem, FAQItem } from '../types';

export const business = {
  name: "BrightSpark Electrical",
  category: "Electrical services / Electrician",
  phone: "+44 20 7523 5373",
  phoneLink: "tel:+442075235373",
  location: "Chiswick, London W3",
  rating: 4.9,
  reviewCount: 444,
  metaDescription: "Professional electrical services for homes and properties in Chiswick and London. Electrical repairs, installations, lighting, and fault finding. Rated 4.9/5 from 444 reviews."
};

// Verified electrical photography (Pexels, tested 200 OK)
export const images = {
  // Electrician testing electrical wiring / panel
  heroElectrician: "https://images.pexels.com/photos/5691621/pexels-photo-5691621.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // Modern consumer unit / circuit breaker panel testing
  consumerUnit: "https://images.pexels.com/photos/8853504/pexels-photo-8853504.jpeg?auto=compress&cs=tinysrgb&w=800",
  // Electrician with clamp multimeter & diagnostics
  faultFinding: "https://images.pexels.com/photos/8853507/pexels-photo-8853507.jpeg?auto=compress&cs=tinysrgb&w=800",
  // Modern interior ceiling downlights and ambient illumination
  lightingInterior: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  // Clean wall light switch and power outlet install
  socketsSwitches: "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=800",
  // Domestic electrical repair / wiring work
  electricalRepairs: "https://images.pexels.com/photos/5691629/pexels-photo-5691629.jpeg?auto=compress&cs=tinysrgb&w=800",
  // Professional electrical terminal connections
  generalElectrical: "https://images.pexels.com/photos/8853510/pexels-photo-8853510.jpeg?auto=compress&cs=tinysrgb&w=800",
  // Warm architectural pendant lighting
  featureLighting: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
};

export const servicesData: ServiceItem[] = [
  {
    id: "repairs",
    title: "Electrical Repairs",
    shortDesc: "Timely troubleshooting and professional repair for tripped breakers, faulty circuits, and intermittent electrical faults.",
    fullDesc: "Electrical problems can disrupt daily life and create potential safety risks. Our professional repair service focuses on identifying the root cause of electrical failures and restoring safe, reliable power to your property without delay.",
    typicalNeed: "Power cut to specific rooms, persistent tripping RCDs, non-functioning circuits, or burning smell from an electrical accessory.",
    iconName: "Wrench",
    imageUrl: images.electricalRepairs,
    imageAlt: "Professional electrician investigating and repairing residential circuit wiring"
  },
  {
    id: "installations",
    title: "Electrical Installations",
    shortDesc: "Clean, compliant installations for domestic power points, appliances, consumer units, and property enhancements.",
    fullDesc: "From additional power points in a home office to dedicated circuits for modern appliances, we provide methodical electrical installations designed to meet contemporary power demands neatly and safely.",
    typicalNeed: "Adding new plug points, installing electric cookers, upgrading distribution units, or adding outdoor weatherproof power.",
    iconName: "Cpu",
    imageUrl: images.consumerUnit,
    imageAlt: "Modern residential distribution board with circuit breakers cleanly installed"
  },
  {
    id: "fault-finding",
    title: "Fault Finding",
    shortDesc: "Systematic electrical diagnostic testing to pinpoint hidden cable damage, short circuits, and earth leakage issues.",
    fullDesc: "Intermittent faults can be difficult to locate without proper testing equipment. We methodically test circuits across live, neutral, and earth conductors to isolate issues accurately and recommend practical solutions.",
    typicalNeed: "A fuse or breaker trips unexpectedly when turning on a switch or plugging in an appliance, with no obvious visible cause.",
    iconName: "Search",
    imageUrl: images.faultFinding,
    imageAlt: "Professional electrical testing using precision diagnostic instruments"
  },
  {
    id: "lighting",
    title: "Lighting & Electrical Improvements",
    shortDesc: "Energy-efficient LED downlights, decorative pendant fittings, dimmer switches, and exterior security illumination.",
    fullDesc: "Effective lighting transforms the comfort and functionality of any living space. We install recessed ceiling lights, under-cabinet illumination, modern statement fixtures, and external security lighting with careful cable management.",
    typicalNeed: "Upgrading halogen spotlights to energy-saving LEDs, fitting new ceiling pendants, or installing garden and porch lighting.",
    iconName: "Lightbulb",
    imageUrl: images.lightingInterior,
    imageAlt: "Modern residential interior featuring clean recessed ceiling lighting"
  },
  {
    id: "sockets-switches",
    title: "Sockets & Switches",
    shortDesc: "Replacement of damaged or outdated electrical plates, adding USB-integrated sockets, and new switch positions.",
    fullDesc: "Worn or cracked sockets can overheat and present fire risks. We replace old plastic faceplates with modern, high-grade finishes including brushed steel, matt black, and integrated USB fast-charge ports.",
    typicalNeed: "Cracked socket covers, loose switches, converting single outlets into double sockets, or adding convenient USB charging points.",
    iconName: "Plug",
    imageUrl: images.socketsSwitches,
    imageAlt: "Modern electrical wall sockets and switches cleanly fitted on interior wall"
  },
  {
    id: "general-electrical",
    title: "General Electrical Services",
    shortDesc: "Comprehensive domestic and property electrical maintenance for homeowners, landlords, and property managers.",
    fullDesc: "Whether you need routine electrical upkeep between tenancies, advice on electrical capacity, or general electrical alterations across your property, we are on hand to discuss your requirements.",
    typicalNeed: "General electrical inspections, resolving minor electrical snags, landlord pre-tenancy repairs, or general property maintenance.",
    iconName: "ShieldCheck",
    imageUrl: images.generalElectrical,
    imageAlt: "Electrician carrying out meticulous terminal connection work on an electrical system"
  }
];

export const whyChooseBenefits = [
  {
    title: "Professional Approach",
    description: "Every electrical enquiry is handled with punctuality, clean workmanship, and strict respect for your home or property."
  },
  {
    title: "Clear Communication",
    description: "We explain the required electrical work clearly without confusing technical jargon, keeping you informed at every step."
  },
  {
    title: "Convenient Contact",
    description: "Reach BrightSpark Electrical directly by phone on +44 20 7523 5373 or submit a written enquiry to discuss your needs."
  },
  {
    title: "Attention to Detail",
    description: "All wiring, accessories, and fittings are aligned neatly, securely terminated, and thoroughly checked before sign-off."
  },
  {
    title: "Tailored to Your Property",
    description: "Electrical solutions suited to the unique architecture and layout of Chiswick and London residences."
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description: "Call +44 20 7523 5373 or send an enquiry detailing the electrical issue, installation, or improvement you require."
  },
  {
    step: "02",
    title: "Discuss the Electrical Work",
    description: "We discuss your requirements, the scope of work involved, and practical options suited to your property."
  },
  {
    step: "03",
    title: "Arrange the Next Step",
    description: "Agree on a convenient time for the electrician to visit your property in Chiswick or London to carry out the agreed work."
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-services",
    category: "Services",
    question: "What electrical services can I enquire about?",
    answer: "You can enquire about a broad range of domestic and commercial electrical requirements, including electrical repairs, fault finding, lighting installations, socket and switch replacements, new power points, and general electrical maintenance for properties in Chiswick and London."
  },
  {
    id: "faq-contact",
    category: "Contact",
    question: "How can I contact BrightSpark Electrical?",
    answer: "You can call us directly on +44 20 7523 5373, which connects straight to our telephone line. Alternatively, you can complete the enquiry form on our Contact page with your details and a description of the work needed."
  },
  {
    id: "faq-location",
    category: "Location",
    question: "Where is BrightSpark Electrical based?",
    answer: "BrightSpark Electrical is based in Chiswick, London W3, serving homeowners, landlords, and local property managers across Chiswick and the surrounding London area."
  },
  {
    id: "faq-repairs",
    category: "Repairs",
    question: "Can I enquire about electrical repairs?",
    answer: "Yes. Customers are welcome to contact BrightSpark Electrical to discuss urgent or scheduled electrical repairs, such as tripped circuits, broken sockets, flickering lights, or sudden power loss on specific circuits."
  },
  {
    id: "faq-installations",
    category: "Installations",
    question: "Can I ask about lighting or electrical installations?",
    answer: "Yes. Please contact us to discuss the work required and confirm our current availability. We assist with internal downlights, outdoor security lights, pendant fittings, new socket runs, and modern electrical improvements."
  },
  {
    id: "faq-describe-problem",
    category: "Enquiries",
    question: "How should I describe my electrical problem when calling?",
    answer: "Explain what happened (for example, whether a circuit breaker tripped, a light began flickering, or a socket stopped supplying power), when the issue started, and whether any particular appliance was in use. This helps us understand the context before attending."
  },
  {
    id: "faq-landlords",
    category: "Clients",
    question: "Do you work with homeowners and landlords?",
    answer: "Yes. We assist private homeowners, tenants, landlords, and property managers who require professional electrical work, repairs, or lighting improvements across Chiswick and London."
  }
];
