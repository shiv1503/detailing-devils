export interface ContactConfig {
  phone: string;
  whatsapp: string;
  whatsappNumberDigits: string; // for direct wa.me link
  email: string;
  address: string;
  openingHours: string;
  instagram: string;
  instagramUrl: string;
  mapsUrl: string;
}

export const BRAND = {
  name: "Detailing Devils",
  shortName: "Devils",
  tagline: "Unleash the Devil in Your Detail.",
  alternateTagline: "Where Every Car Meets Its Best Finish.",
  tertiaryTagline: "Precision. Protection. Perfection.",
  established: "2020",
  headline: "YOUR CAR. OUR OBSESSION.",
  subheadline: "Precision detailing, paint correction and advanced protection engineered to make your vehicle look exceptional.",
};

/**
 * ALL CONTACT INFORMATION CENTRALIZED
 * Easily editable placeholders per instructions.
 */
export const CONTACT_INFO: ContactConfig = {
  phone: "+91 XXXXX XXXXX",
  whatsapp: "+91 XXXXX XXXXX",
  whatsappNumberDigits: "919999999999", // Editable WhatsApp number digits for direct wa.me link
  email: "hello@yourdomain.com",
  address: "Your Studio Address, City, State",
  openingHours: "Mon–Sun | XX AM – XX PM",
  instagram: "@yourinstagram",
  instagramUrl: "https://instagram.com/yourinstagram",
  mapsUrl: "https://maps.google.com/?q=Your+Studio+Address",
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  fullDetails: string;
  features: string[];
  image: string;
  duration: string;
  recommendedFor: string;
  warranty?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "exterior-detailing",
    number: "01",
    title: "EXTERIOR DETAILING",
    tagline: "High-Gloss Perfection, Safe & Clean",
    description: "Deep decontamination, hand wash, and paint-safe treatments that restore pure optical clarity to every exterior contour.",
    fullDetails: "Our signature exterior detailing goes far beyond standard washes. We employ gentle snow foam pre-washes, grit-guarded two-bucket techniques, chemical de-ironing, and ultra-fine clay bar decontamination to strip harmful environmental road grime without inflicting micro-scratches.",
    features: [
      "Foam wash",
      "Two-bucket wash",
      "Decontamination",
      "Clay bar treatment",
      "Hand drying",
      "Paint-safe cleaning",
      "Tire & wheel cleaning",
      "Tire dressing",
      "Exterior protection"
    ],
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80",
    duration: "4 – 6 Hours",
    recommendedFor: "Bi-monthly maintenance for luxury and sports vehicles.",
  },
  {
    id: "interior-detailing",
    number: "02",
    title: "INTERIOR DETAILING",
    tagline: "Cockpit Restoration & Sanitization",
    description: "Bespoke cabin rejuvenation combining deep-fiber steam sanitization, leather nourishment, and matte satin UV protection.",
    fullDetails: "Automotive interiors are delicate ecosystems of fine leather, Alcantara, piano black trims, and stitched fabrics. Our team extracts embedded dust, neutralizes odors, restores natural non-greasy matte leather finishes, and applies anti-static UV barriers to all trim components.",
    features: [
      "Deep vacuuming",
      "Dashboard cleaning",
      "Upholstery cleaning",
      "Leather conditioning",
      "Carpet cleaning",
      "Interior sanitization",
      "Glass cleaning",
      "Surface protection"
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    duration: "4 – 6 Hours",
    recommendedFor: "Quarterly rejuvenation or pre-season deep cleansing.",
  },
  {
    id: "paint-correction",
    number: "03",
    title: "PAINT CORRECTION",
    tagline: "Surgical Swirl & Defect Removal",
    description: "Multi-stage machine compounding and micro-polishing that permanently levels clear coat imperfections to reveal mirror reflections.",
    fullDetails: "Swirl marks, wash marring, bird drop etching, and dull oxidation rob your car of depth and reflectivity. Using precision digital paint depth gauges, temperature-controlled dual-action rotaries, and tailored abrasives, we restore up to 90-95%+ defect-free paint without compromising clear coat integrity.",
    features: [
      "Paint inspection",
      "Scratch & swirl reduction",
      "Machine polishing",
      "Oxidation removal",
      "Gloss enhancement",
      "Multi-stage correction"
    ],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    duration: "1 – 2 Days",
    recommendedFor: "Vehicles with visible spiderweb swirls, prior to ceramic coating.",
  },
  {
    id: "ceramic-coating",
    number: "04",
    title: "CERAMIC COATING",
    tagline: "Molecular 9H Hardness Protection",
    description: "Ultra-dense SiO2 nano-ceramic barrier providing permanent hydrophobic water repelling, chemical resistance, and wet-look shine.",
    fullDetails: "Our professional grade ceramic coatings cross-link directly with your vehicle's factory clear coat, forming a semi-permanent sacrificial glass layer. Enjoy extreme 110° water contact angles, effortless washing, unmatched self-cleaning properties, and intense candy-like depth.",
    features: [
      "Paint preparation",
      "Surface decontamination",
      "Paint correction",
      "Ceramic coating application",
      "Hydrophobic protection",
      "UV protection",
      "Enhanced gloss"
    ],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    duration: "2 – 3 Days",
    recommendedFor: "Brand new vehicles or newly corrected paint seeking 3-5 years of armor.",
    warranty: "Up to 5 Years Warranty Included",
  },
  {
    id: "protection-treatments",
    number: "05",
    title: "PROTECTION TREATMENTS",
    tagline: "Advanced Sealants & Hybrid Defense",
    description: "Engineered shielding combining synthetic fluoropolymer sealants, graphene shields, and glass hydrophobic coatings.",
    fullDetails: "Custom-formulated protection matrices designed to withstand extreme tropical temperatures, acid rain, harsh UV degradation, and highway sandblasting. Includes windshield rain repellents and dedicated wheel barrel thermal coatings.",
    features: [
      "Ceramic protection",
      "Paint sealants",
      "UV protection",
      "Hydrophobic protection",
      "Long-term surface protection"
    ],
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    duration: "1 – 2 Days",
    recommendedFor: "Owners requiring versatile paint defense with rapid cure times.",
  },
  {
    id: "specialized-services",
    number: "06",
    title: "SPECIALIZED SERVICES",
    tagline: "Artisan Details for Discerning Enthusiasts",
    description: "High-level treatments including wheel-off barrel polishing, engine bay detailing, caliper ceramics, and bespoke concourse prep.",
    fullDetails: "True automotive artistry lives in the subtle areas most detailers overlook. From steam cleaning complex engine bays with safe non-conductive dielectric dressings, to removing wheels for 360-degree ceramic ceramic bake-on coats, no millimeter is neglected.",
    features: [
      "Alloy wheel polishing",
      "Tire dressing",
      "Engine bay cleaning",
      "Premium vehicle preparation",
      "Luxury vehicle detailing"
    ],
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
    duration: "Custom Timeline",
    recommendedFor: "Supercars, vintage classics, and bespoke luxury projects.",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  inspectionDetails: string[];
  icon: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "INSPECT",
    tagline: "Digital Diagnostic & Paint Mapping",
    description: "We inspect the vehicle and identify paint, interior and surface conditions.",
    inspectionDetails: [
      "Digital paint thickness gauge measurements (microns)",
      "High-CRI daylight simulation swirl detection",
      "Clear coat health & clear burn risk assessment",
      "Interior leather elasticity & fabric stain diagnosis"
    ],
    icon: "Scan",
  },
  {
    step: "02",
    title: "PREPARE",
    tagline: "Decontamination & Surface Prep",
    description: "Thorough cleaning and decontamination.",
    inspectionDetails: [
      "pH-neutral citrus pre-wash & snow foam bath",
      "Ferrous chemical de-ironing of wheels & panels",
      "Synthetic polymer clay bar to draw embedded road tar",
      "Warm filtered air drying to prevent water spots"
    ],
    icon: "Sparkles",
  },
  {
    step: "03",
    title: "CORRECT",
    tagline: "Rotary & Dual-Action Machine Leveling",
    description: "Paint correction and surface restoration where required.",
    inspectionDetails: [
      "Precision masking of rubber seals, emblems & plastics",
      "Heavy cut compounding to eliminate swirls & etching",
      "Jeweling micro-polish to produce high optical depth",
      "Isopropanol wipe-down to ensure zero polish fillers"
    ],
    icon: "Flame",
  },
  {
    step: "04",
    title: "PROTECT",
    tagline: "Molecular Ceramic & Polymer Bonding",
    description: "Apply the selected protection system.",
    inspectionDetails: [
      "Climate-controlled, dust-filtered cleanroom environment",
      "Cross-hatch manual application of 9H nano-ceramic coats",
      "Short-wave infrared (IR) curing for maximum hardness",
      "Oleophobic and hydrophobic top-coat lock"
    ],
    icon: "ShieldCheck",
  },
  {
    step: "05",
    title: "PERFECT",
    tagline: "Final Handover & Studio Sign-Off",
    description: "Final inspection and finishing touches.",
    inspectionDetails: [
      "360-degree high-angle illumination quality audit",
      "Glass crystal polish inside and outside",
      "Satin non-sling tire dressing & exhaust tip polish",
      "Digital handover report with paint depth warranty certificate"
    ],
    icon: "CheckCircle",
  },
];

export interface BeforeAfterCategory {
  id: string;
  label: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  stats: string;
}

export const BEFORE_AFTER_DATA: BeforeAfterCategory[] = [
  {
    id: "paint",
    label: "Paint Correction",
    title: "Multi-Stage Paint Correction & Gloss Leveling",
    description: "Severe spiderweb swirls, automatic car wash marring, and dull oxidation eradicated down to a flawless mirror reflection.",
    beforeImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    beforeLabel: "BEFORE — Swirled & Oxidized",
    afterLabel: "AFTER — 95%+ Defect-Free Mirror",
    stats: "+92% Specular Gloss Increase",
  },
  {
    id: "interior",
    label: "Interior Restoration",
    title: "Deep Leather & Cockpit Rejuvenation",
    description: "Dust-caked ventilated seats, greasy steering wheel grime, and stained floor mats transformed into showroom factory matte satin.",
    beforeImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    beforeLabel: "BEFORE — Soiled & Greasy",
    afterLabel: "AFTER — Deep Sanitized & Conditioned",
    stats: "100% Odor & Allergen Free",
  },
  {
    id: "headlight",
    label: "Headlight Restoration",
    title: "Polycarbonate UV Lens Clarity Restoration",
    description: "Yellowed, cloudy, oxidized lenses wet-sanded, compounded, and sealed with ceramic UV blockers for maximum night illumination.",
    beforeImage: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    beforeLabel: "BEFORE — Yellowed & Foggy",
    afterLabel: "AFTER — Crystal Clear Optical Glass",
    stats: "+250% Lux Beam Transmission",
  },
  {
    id: "ceramic",
    label: "Ceramic Coating",
    title: "Extreme Hydrophobic Contact Angle",
    description: "Watch stagnant water sheets give way to hyper-hydrophobic beads that roll off effortlessly, carrying surface dirt away.",
    beforeImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    beforeLabel: "BEFORE — Stagnant Water Film",
    afterLabel: "AFTER — 110° Tight Water Beading",
    stats: "9H Hardness Protection",
  },
  {
    id: "alloy",
    label: "Alloy Restoration",
    title: "Precision Wheel & Barrel Decontamination",
    description: "Burnt-on corrosive metallic brake dust and dull alloy surfaces restored, polished, and protected with heat-resistant ceramic.",
    beforeImage: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
    beforeLabel: "BEFORE — Corrosive Brake Dust",
    afterLabel: "AFTER — Hyper-Gloss Ceramic Coated",
    stats: "Resists Up to 800°C Heat",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "EXTERIOR" | "INTERIOR" | "PAINT" | "CERAMIC" | "LUXURY";
  servicePerformed: string;
  vehicleCategory: string;
  vehicleModel: string;
  description: string;
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Porsche 911 GT3 RS",
    category: "CERAMIC",
    servicePerformed: "9H Multi-Coat Ceramic Shield & Full PPF Edging",
    vehicleCategory: "Supercar / Track Exotic",
    vehicleModel: "Porsche 911 GT3 RS (992)",
    description: "Treated in our dust-free cleanroom with full multi-stage jeweling and high-density ceramic bonding for track protection.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g-2",
    title: "Mercedes-AMG G 63",
    category: "PAINT",
    servicePerformed: "Stage 3 Paint Correction & Obsidian Gloss Restoration",
    vehicleCategory: "Luxury Full-Size SUV",
    vehicleModel: "Mercedes-AMG G 63",
    description: "Over 24 hours of rotary and orbital polishing to eliminate heavy micro-marring across deep obsidian black bodywork.",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g-3",
    title: "Ferrari F8 Tributo",
    category: "LUXURY",
    servicePerformed: "Rosso Corsa Paint Correction & Ceramic Top Coat",
    vehicleCategory: "Exotic Mid-Engine Supercar",
    vehicleModel: "Ferrari F8 Tributo",
    description: "Restoring the iconic Rosso Corsa paint to maximum depth and clarity with non-abrasive jeweling compound.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g-4",
    title: "BMW M8 Competition Gran Coupé",
    category: "EXTERIOR",
    servicePerformed: "Signature Exterior Detail & Ceramic Wheel Armor",
    vehicleCategory: "Grand Tourer Performance",
    vehicleModel: "BMW M8 Competition",
    description: "Deep chemical de-ironing, clay bar treatment, and high-gloss polymer sealant applied to carbon fiber aero packages.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g-5",
    title: "Audi RS6 Avant Interior",
    category: "INTERIOR",
    servicePerformed: "Full Valcona Leather & Alcantara Restoration",
    vehicleCategory: "Super Wagon / Interior Cabin",
    vehicleModel: "Audi RS6 Avant",
    description: "Steam extraction, matte natural leather conditioning, anti-bacterial cabin fogging, and piano black trim scratch reduction.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g-6",
    title: "Lamborghini Huracán EVO",
    category: "CERAMIC",
    servicePerformed: "Double-Layer 9H Ceramic & Windshield Hydrophobic Guard",
    vehicleCategory: "Exotic V10 Supercar",
    vehicleModel: "Lamborghini Huracán EVO",
    description: "Full paint leveling and infrared-cured nano-ceramic matrix providing effortless maintenance and intense candy reflections.",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g-7",
    title: "Aston Martin DBS Superleggera",
    category: "LUXURY",
    servicePerformed: "Concourse Preparation & Satin Carbon Detail",
    vehicleCategory: "Ultra-Luxury GT",
    vehicleModel: "Aston Martin DBS Superleggera",
    description: "Bespoke preparation including engine bay steam detailing, titanium exhaust polishing, and bespoke leather nourishment.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g-8",
    title: "Rolls-Royce Ghost Cockpit",
    category: "INTERIOR",
    servicePerformed: "Artisan Leather Conditioning & Wood Veneer Polish",
    vehicleCategory: "Pinnacle Luxury Saloon",
    vehicleModel: "Rolls-Royce Ghost",
    description: "Careful treatment of untreated open-pore wood, lamb's wool carpets, and supple hand-stitched hides with zero chemical residues.",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=80",
  },
];

export interface PackageItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  subtitle: string;
  highlighted?: boolean;
  features: string[];
  idealFor: string;
  timeEstimate: string;
}

export const PACKAGES: PackageItem[] = [
  {
    id: "devils-refresh",
    name: "DEVIL'S REFRESH",
    badge: "MAINTENANCE ESSENTIAL",
    tagline: "For regular maintenance.",
    subtitle: "A thorough rejuvenation designed to maintain showroom condition between major seasonal treatments.",
    features: [
      "Exterior wash",
      "Interior vacuum",
      "Wheel cleaning",
      "Tire dressing",
      "Glass cleaning",
      "Two-bucket wash system",
      "Door jambs & boot shuts wiped",
      "Quick hydrophobic spray gloss"
    ],
    idealFor: "Monthly upkeep, post-road trips, or everyday performance daily drivers.",
    timeEstimate: "3 – 5 Hours",
  },
  {
    id: "devils-gloss",
    name: "DEVIL'S GLOSS",
    badge: "MOST POPULAR",
    tagline: "For a complete visual transformation.",
    subtitle: "Our signature multi-stage transformation that eradicates paint defects and restores true showroom luster.",
    highlighted: true,
    features: [
      "Exterior detailing",
      "Decontamination",
      "Clay treatment",
      "Machine polish",
      "Interior deep clean",
      "Paint protection",
      "Single-to-dual stage defect removal",
      "Leather & fabric sanitization",
      "Exhaust tip & trim enhancement"
    ],
    idealFor: "Cars exhibiting wash swirls, pre-sale preparation, or owners wanting noticeable optical depth.",
    timeEstimate: "1 – 2 Days",
  },
  {
    id: "devils-shield",
    name: "DEVIL'S SHIELD",
    badge: "ULTIMATE PROTECTION",
    tagline: "Premium protection package.",
    subtitle: "The pinnacle of vehicle armor — multi-stage surgical correction paired with certified 9H nano-ceramic coating.",
    features: [
      "Full detailing",
      "Paint correction",
      "Ceramic coating",
      "Interior protection",
      "Wheel & tire treatment",
      "UV protection",
      "Multi-year warranty certificate",
      "Wheel face & glass ceramic defense",
      "Comprehensive leather & fabric barrier"
    ],
    idealFor: "Brand new supercars, luxury flagships, and owners demanding zero-compromise long term defense.",
    timeEstimate: "2 – 3 Days",
  },
];

export interface Pillar {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const WHY_US_PILLARS: Pillar[] = [
  {
    number: "01",
    title: "DETAIL OBSESSION",
    description: "Every surface receives meticulous attention. We measure perfection in microns, not minutes.",
    icon: "Eye",
  },
  {
    number: "02",
    title: "PREMIUM PRODUCTS",
    description: "Professional-grade products and tools sourced directly from the world's leading chemical laboratories.",
    icon: "Award",
  },
  {
    number: "03",
    title: "PAINT-SAFE PROCESS",
    description: "Carefully controlled detailing techniques backed by digital paint gauges to preserve factory clear coat.",
    icon: "ShieldAlert",
  },
  {
    number: "04",
    title: "FINISH-FIRST MINDSET",
    description: "The goal isn't simply clean. It's exceptional. A dramatic finish that commands attention in any light.",
    icon: "Target",
  },
];

export const STATS = [
  { value: "5,000+", label: "Vehicles Perfected", detail: "Exotics, Supercars & Luxury SUVs" },
  { value: "99.8%", label: "Flawless Handover", detail: "Verified Client Satisfaction Rate" },
  { value: "9H / 10H", label: "Certified Coatings", detail: "Laboratory-Tested Hardness" },
  { value: "15+", label: "Master Craftsmen", detail: "Years Combined Studio Expertise" },
];

export interface TestimonialItem {
  id: string;
  rating: number;
  quote: string;
  clientName: string;
  vehicle: string;
  service: string;
  location: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-1",
    rating: 5,
    quote: "Absolutely incredible finish. The car looked better than when I first bought it. The depth in the black paint after their ceramic coating is unbelievable.",
    clientName: "Vikram Singhania",
    vehicle: "Porsche 911 Turbo S",
    service: "Devil's Shield Ceramic Coating",
    location: "Studio Verified Client",
  },
  {
    id: "t-2",
    rating: 5,
    quote: "Professional, detailed and extremely careful with the vehicle. They kept me updated with high-res photos throughout the paint correction process. True artisans.",
    clientName: "Arjun Mehta",
    vehicle: "Mercedes-AMG G 63",
    service: "Devil's Gloss & Interior Deep Clean",
    location: "Studio Verified Client",
  },
  {
    id: "t-3",
    rating: 5,
    quote: "I was skeptical about paint correction on my M3 because of thin clear coat fears, but their digital gauge inspection and controlled technique gave me complete confidence. Flawless!",
    clientName: "Rahul Kapoor",
    vehicle: "BMW M3 Competition",
    service: "Multi-Stage Paint Correction",
    location: "Studio Verified Client",
  },
  {
    id: "t-4",
    rating: 5,
    quote: "The hydrophobic effect on my Defender in heavy rain is mesmerizing. Bugs and road film just wash off with a gentle rinse. Worth every penny.",
    clientName: "Sameer Nambiar",
    vehicle: "Land Rover Defender 110",
    service: "Devil's Shield & Wheel Armor",
    location: "Studio Verified Client",
  },
];

export const VEHICLE_SIZES = [
  { id: "compact", name: "Coupe / Hatchback", example: "Porsche 911, Audi TT, Golf R, Mini" },
  { id: "sedan", name: "Sedan / Saloon", example: "BMW 3/5 Series, Mercedes C/E-Class, Audi A4/A6" },
  { id: "mid-suv", name: "Compact / Mid-SUV", example: "Porsche Macan, BMW X3/X5, Mercedes GLC/GLE" },
  { id: "full-suv", name: "Full SUV / Exotic Flagship", example: "G-Wagon, Range Rover, Defender, Rolls-Royce" },
];
