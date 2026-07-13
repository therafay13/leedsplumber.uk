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
  aboutDescription: string;
  included: string[];
  benefits: string[];
  workSteps: { title: string; description: string }[];
}

export const services: Service[] = [
  {
    number: "01",
    image: service1,
    title: "Emergency Plumbing",
    slug: "emergency-plumbing",
    description:
      "A fast, practical response for burst pipes, flooding, loss of water and urgent faults across Leeds.",
    aboutDescription:
      "When water is escaping or a vital fitting has failed, the first priority is to make the situation safe and limit further damage. Leeds Plumber UK provides emergency plumbing support for homes and businesses, with clear advice on the phone and a direct route to the right next step.",
    included: [
      "Initial advice to help you isolate water and reduce damage",
      "Assessment of the fault and the safest repair approach",
      "Repair or temporary make-safe work where appropriate",
      "Clear explanation of what needs doing before further work begins",
    ],
    benefits: [
      "Available 24 hours a day, 365 days a year",
      "Aims to arrive within one hour, depending on location and demand",
      "No call-out charge, with charges starting from arrival",
      "Calm, practical communication when the situation is stressful",
    ],
    workSteps: [
      { title: "Call and triage", description: "Tell us what has happened, where you are, and what you can see. We will help you take the safest immediate step." },
      { title: "Assess the fault", description: "We identify the source, the risk, and the repair needed before recommending the work." },
      { title: "Make it safe", description: "The priority is to stop the leak, restore essential service, or contain the problem." },
      { title: "Explain the next step", description: "You receive a clear account of the work completed and any follow-up the property needs." },
    ],
  },
  {
    number: "02",
    image: service2,
    title: "General Plumbing Repairs",
    slug: "plumbing-repairs",
    description:
      "Reliable repairs for the everyday faults that interrupt a kitchen, bathroom, rental property or workplace.",
    aboutDescription:
      "Not every plumbing problem is an emergency, but small faults rarely improve by themselves. We handle practical repairs to fittings, pipework and water systems, taking time to identify the cause and leave you with a solution that makes sense for the property.",
    included: [
      "Fault finding for visible leaks, weak flow and failed fittings",
      "Repair or replacement of common plumbing components",
      "Kitchen and utility plumbing, including sink connections",
      "Advice on the most proportionate repair for the property",
    ],
    benefits: [
      "One clear point of contact for repair work",
      "Suitable for homes, landlords and commercial premises",
      "Practical recommendations without unnecessary upselling",
      "Free quotes for planned work",
    ],
    workSteps: [
      { title: "Understand the problem", description: "We listen to what has changed, when it started, and what the fitting or pipework is doing now." },
      { title: "Inspect the cause", description: "The visible symptom is not always the source, so we check the surrounding connections and controls." },
      { title: "Repair properly", description: "We complete the agreed repair using suitable parts and a method that fits the property." },
      { title: "Test and explain", description: "The work is tested and you are told what was found, what was done, and what to watch for." },
    ],
  },
  {
    number: "03",
    image: service3,
    title: "Leaks, Burst Pipes and Overflows",
    slug: "leaks-burst-pipes",
    description:
      "Careful leak tracing and repair for pipework, tanks, valves, overflows and the damage they can leave behind.",
    aboutDescription:
      "A leak can travel before it becomes visible. We investigate the source rather than simply drying the symptom, whether the issue is a burst pipe, a failing valve, an overflowing tank or a concealed connection. The aim is a safe repair and a clear explanation of what caused it.",
    included: [
      "Visible leak assessment and tracing of likely sources",
      "Burst pipe and damaged connection repairs",
      "Overflow, tank and inlet valve fault finding",
      "Testing of repaired pipework and fittings",
    ],
    benefits: [
      "Helps limit avoidable water damage",
      "Useful for both urgent faults and persistent mystery leaks",
      "Clear distinction between the immediate repair and any follow-up work",
      "Advice on the stop tap and sensible next steps",
    ],
    workSteps: [
      { title: "Stop the flow", description: "We help isolate the water supply where needed and assess the immediate risk to the property." },
      { title: "Trace the source", description: "We inspect pipework, valves, tanks and nearby fittings to identify where the water is coming from." },
      { title: "Repair the fault", description: "The damaged section or fitting is repaired or replaced using the appropriate approach." },
      { title: "Check the system", description: "We restore the supply, test the repair and explain any signs that should prompt a return call." },
    ],
  },
  {
    number: "04",
    image: service4,
    title: "Blocked Drains and Jetting",
    slug: "drainage-jetting",
    description:
      "Drain unblocking, rodding, clearance and high-powered jetting for slow, backed-up or recurring drainage problems.",
    aboutDescription:
      "A blocked drain is usually a flow problem before it becomes a flood problem. We clear domestic and commercial drainage issues using the method suited to the blockage, from straightforward rodding and clearance to high-powered jetting when a deeper clean is required.",
    included: [
      "Assessment of the affected drain and surrounding access points",
      "Drain rodding and mechanical clearance where suitable",
      "High-powered jetting for stubborn build-up and recurring flow issues",
      "Practical advice on reducing the chance of the blockage returning",
    ],
    benefits: [
      "A direct response to slow or backed-up drainage",
      "Suitable for homes, landlords and businesses",
      "The method is matched to the blockage rather than assumed in advance",
      "Clear explanation of any access or follow-up required",
    ],
    workSteps: [
      { title: "Locate the restriction", description: "We establish which outlet or run is affected and check the safest access point." },
      { title: "Choose the method", description: "Straightforward clearance, rodding or jetting is selected according to the blockage and pipework." },
      { title: "Restore the flow", description: "The obstruction is removed and the line is tested to confirm the water is moving correctly." },
      { title: "Leave clear advice", description: "You receive practical guidance on use, maintenance and signs of a recurring issue." },
    ],
  },
  {
    number: "05",
    image: service5,
    title: "Bathrooms, Taps and Toilets",
    slug: "bathrooms-taps-toilets",
    description:
      "Thoughtful plumbing repairs, replacements and installations for bathrooms, taps, toilets, sinks and wet-room fittings.",
    aboutDescription:
      "Bathrooms are made up of many small connections, and a fault in one fitting can quickly affect the rest of the room. We help with tap and toilet repairs, sink plumbing, shower connections and planned bathroom plumbing, keeping the work practical and the finish tidy.",
    included: [
      "Tap, outside tap and toilet flush repairs",
      "Sink, waste and appliance plumbing connections",
      "Bathroom and wet-room plumbing support",
      "Replacement of worn or failed valves, traps and fittings",
    ],
    benefits: [
      "A considered repair before a replacement is recommended",
      "Suitable for small faults and planned improvement work",
      "Care taken around finished surfaces and occupied homes",
      "Clear quotes for planned bathroom plumbing",
    ],
    workSteps: [
      { title: "Review the fitting", description: "We look at the existing installation, the fault, and the access available around it." },
      { title: "Agree the work", description: "You receive a straightforward explanation of the repair or replacement before it starts." },
      { title: "Install carefully", description: "The fitting is repaired or installed with attention to connections, seals and surrounding finishes." },
      { title: "Test the result", description: "Flow, drainage and the affected fitting are tested before the work is handed back." },
    ],
  },
  {
    number: "06",
    image: service6,
    title: "Radiators, Showers and Pumps",
    slug: "radiators-showers-pumps",
    description:
      "Practical help with radiators, electric and mixer showers, power showers, pumps and related water-flow problems.",
    aboutDescription:
      "Water pressure, temperature and flow problems can make a home uncomfortable very quickly. We investigate the fitting and the wider system around it, then recommend the work needed to restore reliable everyday use.",
    included: [
      "Radiator repairs and replacement support",
      "Electric, mixer and power shower plumbing",
      "Pump installation, replacement and maintenance enquiries",
      "Checks for flow, pressure and related valve issues",
    ],
    benefits: [
      "A repair-led approach to heating and water-flow faults",
      "Clear explanation of what the fitting can and cannot resolve",
      "Suitable for planned upgrades and urgent loss of service",
      "Free quotes for work that needs planning",
    ],
    workSteps: [
      { title: "Describe the symptom", description: "We establish whether the issue is flow, pressure, temperature, noise or a complete loss of service." },
      { title: "Check the system", description: "The fitting and its surrounding valves, connections and supply are assessed together." },
      { title: "Complete the repair", description: "We carry out the agreed repair or replacement with the property protected throughout." },
      { title: "Confirm operation", description: "The fitting is tested and you receive a clear handover before we leave." },
    ],
  },
  {
    number: "07",
    image: service7,
    title: "Saniflo and Water Systems",
    slug: "saniflo-water-systems",
    description:
      "Support with Saniflo installations, water tanks, ball valves, inlet systems and the plumbing around them.",
    aboutDescription:
      "Some spaces rely on pumps, macerators, tanks or specialist inlet systems to work properly. We provide practical installation, repair and maintenance support for these systems, with the limits of the existing setup explained before work begins.",
    included: [
      "Saniflo installation and repair enquiries",
      "Ball valves, tanks and inlet system repairs",
      "Pump maintenance, replacement and installation support",
      "Hot and cold water system fault finding",
    ],
    benefits: [
      "Useful for additions, adaptations and difficult access areas",
      "Attention to the wider system, not only the failed component",
      "Clear advice when an installation needs further specialist input",
      "Free quotes for planned system work",
    ],
    workSteps: [
      { title: "Understand the setup", description: "We review the existing system, what it serves, and the issue you are experiencing." },
      { title: "Inspect the components", description: "Tanks, valves, pumps, pipework and discharge routes are checked as relevant." },
      { title: "Plan the repair", description: "You receive a clear recommendation that accounts for access, compatibility and future use." },
      { title: "Test and hand over", description: "The work is tested and the important maintenance or operating points are explained." },
    ],
  },
];

const legacyServiceAliases: Record<string, string> = {
  "kitchen-resprays": "emergency-plumbing",
  "upvc-windows-doors": "plumbing-repairs",
  "fascias-soffits-downpipes": "leaks-burst-pipes",
  "garage-door-respray": "drainage-jetting",
  "wardrobes-interior-coatings": "bathrooms-taps-toilets",
  "shop-fronts-commercial": "radiators-showers-pumps",
  "industrial-protective-coatings": "saniflo-water-systems",
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  const canonicalSlug = legacyServiceAliases[slug] ?? slug;
  return services.find((service) => service.slug === canonicalSlug);
};
