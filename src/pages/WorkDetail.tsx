import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Check, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import bathroomRemodel from "@/assets/bathroom-remodel.jpg";
import completedBathroom from "@/assets/completed-bathroom.jpg";
import completedKitchen from "@/assets/completed-kitchen.jpg";
import drainCleaning from "@/assets/drain-cleaning.jpg";
import faucetRepair from "@/assets/faucet-repair.jpg";
import heroGrid1 from "@/assets/hero-grid-1.jpg";
import heroGrid2 from "@/assets/hero-grid-2.jpg";
import heroGrid3 from "@/assets/hero-grid-3.jpg";
import heroGrid4 from "@/assets/hero-grid-4.jpg";
import problem1 from "@/assets/problem-1.png";
import problem2 from "@/assets/problem-11.png";
import solution1 from "@/assets/solution-1.png";
import solution2 from "@/assets/solution-11.png";

type WorkItem = {
  image: string;
  title: string;
  description: string;
  detailTitle: string;
  detailDescription: string;
  service: string;
  coverage: string;
  response: string;
  overview: string[];
  workSteps: { number: string; title: string; description: string }[];
  problems: string[];
  solutions: string[];
};

const worksData: Record<string, WorkItem> = {
  "emergency-pipe-repair": {
    image: heroGrid1,
    title: "Emergency pipe repair",
    description: "A calm response to burst pipes, leaks and loss of water, with immediate steps to limit damage and restore the property.",
    detailTitle: "Make the situation safe first",
    detailDescription: "Emergency plumbing is about clear priorities. We help isolate the water, assess the risk and focus on the repair that protects the property and restores essential service.",
    service: "Emergency plumbing",
    coverage: "Across Leeds",
    response: "24 hours a day, 365 days a year",
    overview: [
      "Burst pipe and visible leak assessment",
      "Immediate make-safe work where appropriate",
      "Clear explanation of repair and follow-up options",
    ],
    workSteps: [
      { number: "01", title: "Call and triage", description: "Tell us what has happened and we will help you take the safest immediate step." },
      { number: "02", title: "Assess the fault", description: "We identify the source, the risk and the repair needed." },
      { number: "03", title: "Make it safe", description: "The priority is to stop the leak, contain the problem or restore essential service." },
      { number: "04", title: "Explain the next step", description: "You receive a clear handover and practical advice before we leave." },
    ],
    problems: [
      "Water escaping from pipework, tanks or fittings",
      "A property at risk of avoidable water damage",
      "Uncertainty about what to isolate or repair first",
    ],
    solutions: [
      "Calm advice while help is being arranged",
      "A focused assessment of the likely source",
      "Repair work matched to the immediate risk and the property",
    ],
  },
  "blocked-drain-clearance": {
    image: drainCleaning,
    title: "Blocked drain clearance",
    description: "Drain rodding, clearance and high-powered jetting selected for the blockage, the access and the pipework involved.",
    detailTitle: "Restore the flow without guesswork",
    detailDescription: "A blocked drain needs the right method, not just more force. We establish where the restriction is, choose the safest access and test the line once the flow has been restored.",
    service: "Drainage and jetting",
    coverage: "Across Leeds",
    response: "Urgent and planned support",
    overview: [
      "Blocked sink, toilet and external drain support",
      "Rodding and mechanical clearance where suitable",
      "High-powered jetting for stubborn build-up and recurring flow issues",
    ],
    workSteps: [
      { number: "01", title: "Locate the restriction", description: "We establish which outlet or run is affected and check the safest access point." },
      { number: "02", title: "Choose the method", description: "The approach is selected according to the blockage and the pipework involved." },
      { number: "03", title: "Restore the flow", description: "The obstruction is removed and the line is tested to confirm water is moving correctly." },
      { number: "04", title: "Leave clear advice", description: "You receive practical guidance on use, maintenance and signs of a recurring issue." },
    ],
    problems: [
      "Slow drainage, standing water or unpleasant odours",
      "A blockage that returns after a quick surface fix",
      "Uncertainty about access points or the condition of the run",
    ],
    solutions: [
      "Assessment before the clearance method is chosen",
      "Rodding, clearance or jetting matched to the fault",
      "A final flow check and honest advice on what happens next",
    ],
  },
  "bathroom-plumbing": {
    image: completedBathroom,
    title: "Bathroom plumbing",
    description: "Thoughtful repairs and replacements for taps, toilets, sinks, showers and the connections around them.",
    detailTitle: "Small details that keep a bathroom working",
    detailDescription: "Bathrooms rely on many connections working together. We handle the fitting, the surrounding pipework and the finish around the job so the repair feels complete, not temporary.",
    service: "Bathrooms, taps and toilets",
    coverage: "Across Leeds",
    response: "Planned and urgent support",
    overview: [
      "Tap, toilet flush and outside tap repairs",
      "Sink, waste and appliance plumbing connections",
      "Shower and wet-room plumbing support",
    ],
    workSteps: [
      { number: "01", title: "Review the fitting", description: "We look at the existing installation, the fault and the access around it." },
      { number: "02", title: "Agree the work", description: "You receive a straightforward explanation before the repair or replacement starts." },
      { number: "03", title: "Install carefully", description: "The fitting is repaired or installed with attention to seals and surrounding finishes." },
      { number: "04", title: "Test the result", description: "Flow, drainage and the affected fitting are checked before handover." },
    ],
    problems: [
      "A tap, toilet, sink or shower that is leaking or unreliable",
      "A fitting that needs replacing without disturbing the whole room",
      "A small fault that has begun to affect the rest of the bathroom",
    ],
    solutions: [
      "Repair-first advice where the existing fitting can be saved",
      "Careful replacement work when a new component is the right answer",
      "A tested, tidy handover ready for everyday use",
    ],
  },
  "radiator-repair": {
    image: bathroomRemodel,
    title: "Radiator repair",
    description: "Practical investigation of cold, leaking or unreliable radiators, valves and the pipework that serves them.",
    detailTitle: "Warmth starts with the right diagnosis",
    detailDescription: "A radiator problem can sit in the radiator, the valve or the wider water system. We check the fitting and its connections together before recommending the proportionate repair.",
    service: "Radiators and heating support",
    coverage: "Across Leeds",
    response: "Planned and urgent support",
    overview: [
      "Radiator leaks, cold spots and unreliable heat",
      "Radiator valve and connection repairs",
      "Clear advice when a wider heating issue needs attention",
    ],
    workSteps: [
      { number: "01", title: "Describe the symptom", description: "We establish whether the issue is flow, temperature, noise or a complete loss of service." },
      { number: "02", title: "Check the system", description: "The radiator, valves, connections and relevant supply are assessed together." },
      { number: "03", title: "Complete the repair", description: "The agreed repair or replacement is carried out with the property protected." },
      { number: "04", title: "Confirm operation", description: "The fitting is tested and the important handover points are explained." },
    ],
    problems: [
      "A radiator that is cold, leaking or difficult to control",
      "A valve or connection that has started to fail",
      "A symptom that may be linked to more than one component",
    ],
    solutions: [
      "A repair-led assessment rather than an automatic replacement",
      "Attention to the fitting and the surrounding pipework",
      "Clear advice when the issue falls outside the immediate repair",
    ],
  },
  "shower-repair": {
    image: faucetRepair,
    title: "Shower repair",
    description: "Support for electric, mixer and power showers when flow, temperature or reliability has changed.",
    detailTitle: "Reliable flow for everyday use",
    detailDescription: "When a shower loses pressure, changes temperature or stops working, the cause may be the fitting, the valve or the supply around it. We work through the system in a clear order.",
    service: "Showers and water flow",
    coverage: "Across Leeds",
    response: "Planned and urgent support",
    overview: [
      "Electric, mixer and power shower plumbing support",
      "Checks for flow, pressure and valve issues",
      "Repair or replacement advice based on the existing setup",
    ],
    workSteps: [
      { number: "01", title: "Describe the change", description: "We establish what has changed in the flow, pressure or temperature." },
      { number: "02", title: "Check the connections", description: "The shower and the plumbing around it are assessed together." },
      { number: "03", title: "Repair or replace", description: "We carry out the agreed work with the bathroom protected throughout." },
      { number: "04", title: "Test the shower", description: "The result is checked and you receive a clear explanation before handover." },
    ],
    problems: [
      "A shower that is weak, inconsistent or not heating correctly",
      "A valve or connection that is leaking or stiff",
      "A new fitting that needs to work with the existing plumbing",
    ],
    solutions: [
      "A structured check of the fitting and its supply",
      "Practical repair or replacement options",
      "A final test focused on safe, reliable everyday use",
    ],
  },
  "pump-saniflo-support": {
    image: completedKitchen,
    title: "Pump and Saniflo support",
    description: "Installation, repair and maintenance enquiries for pumps, Saniflo systems, tanks and inlet equipment.",
    detailTitle: "Specialist water systems made clearer",
    detailDescription: "Pumps, macerators and tanks need to work as part of a wider system. We review the setup, explain the options and focus on the component or connection that is causing the issue.",
    service: "Pumps, Saniflo and water systems",
    coverage: "Across Leeds",
    response: "Planned and urgent support",
    overview: [
      "Saniflo installation and repair enquiries",
      "Pump maintenance, replacement and installation support",
      "Ball valves, tanks and inlet system repairs",
    ],
    workSteps: [
      { number: "01", title: "Understand the setup", description: "We review what the system serves and the issue you are experiencing." },
      { number: "02", title: "Inspect the components", description: "Tanks, valves, pumps, pipework and discharge routes are checked as relevant." },
      { number: "03", title: "Plan the repair", description: "You receive a recommendation that accounts for access, compatibility and future use." },
      { number: "04", title: "Test and hand over", description: "The work is tested and important operating or maintenance points are explained." },
    ],
    problems: [
      "A pump, macerator, tank or inlet system that is unreliable",
      "A new fitting that needs to work with an existing setup",
      "A fault that is difficult to isolate from the visible component",
    ],
    solutions: [
      "A system-level assessment before parts are recommended",
      "Clear limits when specialist input is needed beyond the plumbing work",
      "A tested installation or repair with practical handover advice",
    ],
  },
};

const legacyWorkAliases: Record<string, string> = {
  "bathroom-repair": "bathroom-plumbing",
  "kitchen-repair": "blocked-drain-clearance",
  "spraying-installation": "bathroom-plumbing",
  "sewer-cleaning": "blocked-drain-clearance",
  "commercial-renovation": "pump-saniflo-support",
  "emergency-repair": "emergency-pipe-repair",
};

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const work = slug ? worksData[slug] ?? worksData[legacyWorkAliases[slug]] : undefined;

  if (!work) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pb-20 pt-32 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Work not found</h1>
          <Link to="/work" className="text-primary hover:underline">Back to work</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-card pb-20 pt-20 lg:pt-32">
        <div className="container-custom section-padding">
          <FadeIn>
            <div className="mb-4 text-center text-sm text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/work" className="transition-colors hover:text-primary">Work</Link>
            </div>
            <h1 className="mb-4 text-center font-bold text-black">{work.title}</h1>
            <p className="mx-auto mb-12 max-w-2xl text-center font-medium text-muted-foreground">{work.description}</p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="overflow-hidden rounded-2xl">
              <img src={work.image} alt={work.title} className="h-[300px] w-full object-cover md:h-[500px]" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-card">
        <div className="container-custom section-padding pb-20 lg:pb-32">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-0">
            <div className="max-w-[640px] lg:col-span-2">
              <FadeIn>
                <span className="font-bold uppercase tracking-wider text-primary">Work details</span>
                <h2 className="mt-2 mb-6 text-4xl font-bold text-black md:text-5xl">{work.detailTitle}</h2>
                <p className="mb-8 font-medium leading-relaxed text-muted-foreground">{work.detailDescription}</p>
              </FadeIn>

              <FadeIn delay={100}>
                <h3 className="mb-4 text-2xl font-bold text-black">What this covers</h3>
                <p className="mb-6 font-medium text-muted-foreground">A focused service response built around the fault, the property and the safest practical next step.</p>
                <ul className="space-y-4">
                  {work.overview.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="font-medium text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <FadeIn delay={200}>
              <div className="rounded-2xl bg-primary p-8 text-white lg:ml-12">
                <h3 className="mb-6 text-2xl font-bold">At a glance</h3>
                <div className="space-y-5">
                  <div>
                    <p className="mb-1 text-sm text-white/60">Service</p>
                    <p className="font-semibold">{work.service}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-white/60">Coverage</p>
                    <p className="font-semibold">{work.coverage}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-white/60">Response</p>
                    <p className="font-semibold">{work.response}</p>
                  </div>
                </div>
                <Link to="/quote" className="mt-8 inline-flex rounded-full bg-tertiary px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-1">
                  Request a quote
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 lg:py-32">
        <div className="container-custom section-padding">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              {[heroGrid2, heroGrid3, heroGrid4, bathroomRemodel].map((image, index) => (
                <FadeIn key={image} delay={index * 100}>
                  <div className={`overflow-hidden rounded-xl ${index === 0 ? "mt-8" : ""}`}>
                    <img src={image} alt="Service work detail" className="h-64 w-full object-cover" />
                  </div>
                </FadeIn>
              ))}
            </div>

            <div>
              <FadeIn>
                <p className="mb-4 font-bold text-primary">Working process</p>
                <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">A clear process from call to handover</h2>
                <p className="mb-12 max-w-2xl text-muted-foreground">The details change from job to job, but the standard stays the same: understand the fault, agree the work and leave the property ready to use.</p>
              </FadeIn>

              <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
                {work.workSteps.map((step, index) => (
                  <FadeIn key={step.number} delay={index * 100}>
                    <div className="flex flex-col gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary">
                        <span className="text-lg font-bold text-primary">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-secondary">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-8 lg:py-16">
        <div className="container-custom section-padding">
          <div className="mb-20 flex w-full flex-col items-center justify-center text-center">
            <h2 className="mb-4 font-bold text-black">The practical difference</h2>
            <p className="max-w-2xl font-medium text-muted-foreground">Good service is not only the repair itself. It is the clarity before the work, the care during it and the handover afterwards.</p>
          </div>

          <div className="space-y-24">
            <FadeIn>
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="mb-4 font-bold text-black">The problem</h3>
                  <p className="mb-8 font-semibold leading-relaxed text-muted-foreground">A plumbing fault can be disruptive, confusing and more expensive when the first response is unclear. The right starting point is to understand what has changed and what is at risk.</p>
                  <ul className="space-y-4">
                    {work.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 fill-primary text-secondary stroke-white" />
                        <span className="text-lg text-muted-foreground">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <FadeIn>
                  <div className="overflow-hidden rounded-3xl">
                    <img src={problem1} alt="Service work in progress" className="h-full w-full object-cover" />
                  </div>
                </FadeIn>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <FadeIn>
                  <div className="overflow-hidden rounded-3xl">
                    <img src={solution1} alt="Completed service work" className="h-full w-full object-cover" />
                  </div>
                </FadeIn>
                <div>
                  <h3 className="mb-4 font-bold text-black">The approach</h3>
                  <p className="mb-8 font-semibold leading-relaxed text-muted-foreground">A good repair leaves you with more than a working fitting. It leaves you with a clear account of what happened and confidence in the next step.</p>
                  <ul className="space-y-4">
                    {work.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 fill-primary text-secondary stroke-white" />
                        <span className="text-lg text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <div className="hidden">
              <img src={problem2} alt="" />
              <img src={solution2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default WorkDetail;
