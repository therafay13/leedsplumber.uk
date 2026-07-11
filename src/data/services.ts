import service1 from "@/assets/service-1.png";
import service2 from "@/assets/service-2.png";
import service3 from "@/assets/service-3.png";
import service4 from "@/assets/service-4.png";
import service5 from "@/assets/service-5.png";
import service6 from "@/assets/service-6.png";
import service7 from "@/assets/service-7.png";

export interface Service {
  number: string;
  image: string;
  title: string;
  slug: string;
  description: string;
  basePrice: number; // Base price per hour
  complexityOptions: ComplexityOption[];
  // DRAFT COPY — needs client review before launch
  aboutDescription: string;
  included: string[];
  benefits: string[];
  workSteps: { title: string; description: string }[];
}

export interface ComplexityOption {
  label: string;
  multiplier: number;
  description: string;
}

export const services: Service[] = [
  {
    number: "01",
    image: service1,
    title: "Kitchen Resprays",
    slug: "kitchen-resprays",
    description:
      "Transform tired kitchen cabinets, doors and worktops with a flawless factory-grade spray finish — a fraction of the cost of a full replacement.",
    basePrice: 55,
    complexityOptions: [
      { label: "Small Kitchen", multiplier: 1, description: "Up to 10 doors and drawers" },
      { label: "Medium Kitchen", multiplier: 1.6, description: "10–18 doors and drawers" },
      { label: "Large Kitchen", multiplier: 2.4, description: "18+ doors, island and panels" },
    ],
    aboutDescription:
      "A specialist spray finish gives worn or dated kitchen cabinetry a brand-new look without the disruption, mess and cost of ripping everything out. Doors, drawer fronts, end panels and even worktop edges can be resprayed in virtually any colour, leaving a smooth, durable surface that's built to handle everyday family life. It's the quickest way to completely change the feel of your kitchen while keeping the units that already fit your space perfectly.",
    included: [
      "Cabinet doors, drawer fronts and visible panels fully prepared and resprayed",
      "Degreasing, fine sanding and priming so the new finish bonds properly",
      "Choice of solid colours or wood-grain effects in standard RAL shades",
      "Rehanging of doors and adjustment of hinges once fully cured",
    ],
    benefits: [
      "A fraction of the cost of a full new fitted kitchen",
      "Minimal disruption — your kitchen stays usable throughout the work",
      "A tough, wipe-clean surface that resists everyday knocks and spills",
      "Update the whole look in your choice of modern or classic colours",
    ],
    workSteps: [
      { title: "Booking & Inspection", description: "We visit to assess your cabinets, discuss colours and confirm exactly what's being sprayed." },
      { title: "Preparation", description: "Doors and panels are removed, degreased, sanded and primed for a flawless, long-lasting bond." },
      { title: "Spraying", description: "Multiple coats of colour are applied in a controlled finish to give a smooth, even surface." },
      { title: "Completion & Handover", description: "Everything is rehung, adjusted and checked so your kitchen looks crisp and ready to use." },
    ],
  },
  {
    number: "02",
    image: service2,
    title: "uPVC Windows, Doors & Conservatories",
    slug: "upvc-windows-doors",
    description:
      "Refresh dated white uPVC into modern anthracite, charcoal or any RAL colour — fully prepped, masked and sprayed on-site.",
    basePrice: 45,
    complexityOptions: [
      { label: "Single Property Section", multiplier: 1, description: "1–4 windows or one door" },
      { label: "Full Frontage", multiplier: 1.8, description: "Whole front or rear elevation" },
      { label: "Whole House + Conservatory", multiplier: 2.8, description: "Every window, door & conservatory" },
    ],
    aboutDescription:
      "Tired of yellowing white uPVC? Spraying lets you transform windows, doors and conservatories into a modern anthracite, charcoal, black or any RAL colour without the huge cost and upheaval of replacing the frames. The coating is applied in-situ with careful masking of glass and surrounds, leaving a factory-style finish that revives the whole exterior. It's one of the most cost-effective ways to modernise a property's kerb appeal.",
    included: [
      "Full cleaning and keying of the existing uPVC surfaces",
      "Careful masking of glass, brickwork and surrounding fittings",
      "Specialist exterior-grade spray coating in your chosen colour",
      "Windows, doors and conservatory framework all finished on-site",
    ],
    benefits: [
      "A modern colour change without replacing your windows and doors",
      "Far cheaper and faster than a full frame replacement",
      "UV-stable coating that won't yellow like old white uPVC",
      "Instantly refreshes the look of your home's exterior",
    ],
    workSteps: [
      { title: "Booking & Inspection", description: "We assess the frames, confirm colours and check condition before any work begins." },
      { title: "Preparation", description: "Surfaces are cleaned, keyed and all glass and surroundings are masked off to protect them." },
      { title: "Spraying", description: "Durable exterior-grade colour is applied in even coats for a smooth, consistent finish." },
      { title: "Completion & Handover", description: "Masking is removed, edges are checked and everything is left clean and ready." },
    ],
  },
  {
    number: "03",
    image: service3,
    title: "Fascias, Soffits & Downpipes",
    slug: "fascias-soffits-downpipes",
    description:
      "Bring eaves and rainwater goods back to life with a hard-wearing exterior spray finish — far cheaper than replacement uPVC.",
    basePrice: 50,
    complexityOptions: [
      { label: "Single Elevation", multiplier: 1, description: "One side of a typical home" },
      { label: "Full House", multiplier: 1.8, description: "All fascias, soffits and downpipes" },
      { label: "Large / Detached", multiplier: 2.5, description: "Detached property or unusual heights" },
    ],
    aboutDescription:
      "Faded, stained or mossy fascias, soffits and downpipes drag down the look of an otherwise tidy home. Spraying restores them to a clean, crisp finish that smartens up the roofline and rainwater goods — at a fraction of the cost of replacing the uPVC. The coating is flexible and weather-resistant, so it stands up to British rain and cold without flaking. It's a quick, low-disruption way to refresh the parts of your home everyone notices from the street.",
    included: [
      "Thorough cleaning and removal of algae, moss and grime",
      "Fascias, soffits and downpipe surfaces fully prepared",
      "Weather-resistant exterior coating in your chosen colour",
      "Guttering and brackets masked and protected throughout",
    ],
    benefits: [
      "Refreshes the roofline without costly uPVC replacement",
      "Weather-resistant finish that won't flake or peel easily",
      "Removes unsightly staining and discolouration",
      "Smartens up the exterior visible to neighbours and passers-by",
    ],
    workSteps: [
      { title: "Booking & Inspection", description: "We check access, condition and heights, then agree colours and scope." },
      { title: "Preparation", description: "Surfaces are cleaned down, treated and prepared with guttering safely masked." },
      { title: "Spraying", description: "A durable exterior coating is applied evenly across all roofline and downpipe surfaces." },
      { title: "Completion & Handover", description: "Everything is unmasked, checked and left clean and tidy." },
    ],
  },
  {
    number: "04",
    image: service4,
    title: "Garage Door Respray",
    slug: "garage-door-respray",
    description:
      "Up & over, sectional or roller garage doors brought back to showroom condition in any colour, sprayed in-situ.",
    basePrice: 45,
    complexityOptions: [
      { label: "Single Door", multiplier: 1, description: "Standard single garage door" },
      { label: "Double Door", multiplier: 1.6, description: "Double garage door or two singles" },
      { label: "Premium Finish", multiplier: 2.2, description: "Multi-coat metallic or specialist coating" },
    ],
    aboutDescription:
      "A faded, scratched or simply dated garage door can let down the whole front of your home. Whether it's up-and-over, sectional or roller, the door can be resprayed in-situ in almost any colour — including metallic and wood-effect finishes — to match or contrast with the rest of your property. The result is a showroom-quality surface that hides years of wear and instantly lifts your home's appearance, all without the cost of a brand-new door.",
    included: [
      "Full clean and preparation of the existing door surface",
      "Masking of tracks, handles, seals and surrounding brickwork",
      "Durable spray coating in solid, metallic or specialist finishes",
      "Hardware cleaned up and reassembled once cured",
    ],
    benefits: [
      "A fresh, showroom-style finish without buying a new door",
      "Covers scratches, fading and years of everyday wear",
      "Choose any colour to complement your home's exterior",
      "Quick, on-site work with no need to remove the door",
    ],
    workSteps: [
      { title: "Booking & Inspection", description: "We check the door type and condition, then agree the colour and finish." },
      { title: "Preparation", description: "The door is cleaned, keyed and masked along with all hardware and surrounds." },
      { title: "Spraying", description: "Even coats of hard-wearing colour are applied for a smooth, consistent finish." },
      { title: "Completion & Handover", description: "Masking is removed, the door is tested and the area is left clean." },
    ],
  },
  {
    number: "05",
    image: service5,
    title: "Wardrobes & Interior Coatings",
    slug: "wardrobes-interior-coatings",
    description:
      "Fitted wardrobes, staircases, panelling and interior joinery resprayed to a flawless hand-finished workshop standard.",
    basePrice: 50,
    complexityOptions: [
      { label: "Single Unit", multiplier: 1, description: "One wardrobe or staircase" },
      { label: "Bedroom Suite", multiplier: 1.7, description: "Full fitted bedroom" },
      { label: "Whole Home Interior", multiplier: 2.6, description: "Multiple rooms of joinery" },
    ],
    aboutDescription:
      "Fitted wardrobes, staircases, panelling and interior joinery can all be resprayed to a flawless, hand-finished standard — ideal for matching new decor or simply refreshing tired woodwork. Rather than replacing perfectly good joinery, spraying lets you change the colour and finish entirely, from dark wood to a clean modern shade. The result feels like a workshop-quality refinishing job carried out in your home, with minimal mess and disruption to your day-to-day life.",
    included: [
      "Doors, frames, panels and visible joinery fully prepared",
      "Sanding, filling and priming for a smooth, even surface",
      "Hand-finished colour in your chosen shade or effect",
      "Hardware removed, cleaned and refitted where needed",
    ],
    benefits: [
      "Transform joinery without the cost of replacement",
      "Match existing decor or go for a completely new look",
      "Workshop-quality finish applied with minimal household disruption",
      "Revitalises dated, dark or scuffed interior woodwork",
    ],
    workSteps: [
      { title: "Booking & Inspection", description: "We assess the joinery, discuss colours and confirm the scope of the work." },
      { title: "Preparation", description: "Surfaces are sanded, filled and primed, with fixtures and floors protected." },
      { title: "Spraying", description: "Fine coats of colour are applied for a smooth, hand-finished appearance." },
      { title: "Completion & Handover", description: "Hardware is refitted and everything is checked and left tidy." },
    ],
  },
  {
    number: "06",
    image: service6,
    title: "Shop Fronts & Commercial",
    slug: "shop-fronts-commercial",
    description:
      "Retail facades, signage panels and commercial uPVC sprayed out of hours to minimise downtime for your business.",
    basePrice: 65,
    complexityOptions: [
      { label: "Single Frontage", multiplier: 1, description: "One shop front or unit" },
      { label: "Full Refurb", multiplier: 1.8, description: "Frontage, signage and trims" },
      { label: "Multi-Site Rollout", multiplier: 2.8, description: "Several branches across the region" },
    ],
    aboutDescription:
      "For retail and commercial premises, the appearance of the frontage directly affects footfall and first impressions. We spray shop fronts, signage panels, commercial uPVC and metalwork to refresh tired facades and maintain a professional, well-cared-for look. Work can be scheduled out of hours or around trading times to keep disruption to your business to an absolute minimum, whether it's a single unit or a multi-site rollout.",
    included: [
      "Shop fronts, signage panels and commercial uPVC prepared and sprayed",
      "Flexible scheduling including out-of-hours where needed",
      "Masking and protection of glazing, pavements and fittings",
      "Consistent colour and finish across single or multiple sites",
    ],
    benefits: [
      "Refresh a tired frontage without closing for a full refit",
      "Out-of-hours options to minimise downtime for your business",
      "Consistent, professional results across multiple locations",
      "A cleaner, more inviting appearance for customers",
    ],
    workSteps: [
      { title: "Booking & Inspection", description: "We survey the premises, agree the scope and plan timings around your business." },
      { title: "Preparation", description: "Surfaces are cleaned and keyed, with glazing and surrounds fully protected." },
      { title: "Spraying", description: "Durable coatings are applied evenly for a professional, consistent finish." },
      { title: "Completion & Handover", description: "The site is unmasked, cleaned and left ready for trading." },
    ],
  },
  {
    number: "07",
    image: service7,
    title: "Industrial Protective Coatings",
    slug: "industrial-protective-coatings",
    description:
      "Hard-wearing protective coatings for steelwork, plant, racking and factory equipment — applied with HVLP and airless systems.",
    basePrice: 70,
    complexityOptions: [
      { label: "Small Plant / Racking", multiplier: 1, description: "Single units or short runs" },
      { label: "Structural Steel", multiplier: 1.9, description: "Beams, columns and frameworks" },
      { label: "Full Site Coating", multiplier: 3, description: "Large facility, multi-day project" },
    ],
    aboutDescription:
      "Industrial environments demand coatings that do more than look good — they need to protect steelwork, plant, racking and machinery from corrosion, chemicals and constant use. We apply hard-wearing protective coatings using HVLP and airless spray systems suited to large-scale and high-output facilities. The right coating extends the life of your assets, keeps them compliant and presentable, and reduces the frequency of costly repainting or replacement.",
    included: [
      "Steelwork, plant, racking and machinery surface preparation",
      "Corrosion treatment and priming where required",
      "Industrial-grade protective coatings via HVLP and airless systems",
      "Flexible scheduling to suit operational and shutdown periods",
    ],
    benefits: [
      "Protects steelwork and equipment from corrosion and wear",
      "Extends the service life of costly industrial assets",
      "Large-scale application using HVLP and airless spray systems",
      "Hard-wearing finishes built for demanding environments",
    ],
    workSteps: [
      { title: "Booking & Inspection", description: "We survey the site and assets, then recommend the right coating system for the environment." },
      { title: "Preparation", description: "Surfaces are degreased, treated for corrosion and primed for maximum adhesion." },
      { title: "Spraying", description: "Protective coatings are applied with HVLP and airless systems for full, even coverage." },
      { title: "Completion & Handover", description: "The coating is inspected for coverage and the area is handed back ready for use." },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};
