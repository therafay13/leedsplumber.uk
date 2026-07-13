import aboutHero from "@/assets/about-hero-1.png";
import missionImage from "@/assets/mission-1.png";
import visionImage from "@/assets/mission-2.png";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle2, Clock3, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const proofFacts = [
  { value: "24/7", label: "Emergency availability" },
  { value: "Leeds", label: "Local service area" },
  { value: "Free", label: "Quotes for planned work" },
  { value: "£0", label: "Call-out charge" },
];

const standards = [
  {
    title: "We answer clearly",
    description: "We tell you who you are speaking to, what can happen next and how urgent the situation really is.",
    icon: Wrench,
  },
  {
    title: "We work carefully",
    description: "We protect the property, the people in it and the surrounding finishes throughout the job.",
    icon: ShieldCheck,
  },
  {
    title: "We leave a proper handover",
    description: "We test the repair, leave the area tidy and explain the next step in plain language.",
    icon: Clock3,
  },
];

const workSteps = [
  { number: "01", title: "Call", description: "Tell us what is happening, where you are in Leeds and how quickly you need help." },
  { number: "02", title: "Assess", description: "We establish the likely cause, the immediate risk and the most sensible way forward." },
  { number: "03", title: "Repair", description: "The agreed work is carried out with the surrounding property protected." },
  { number: "04", title: "Handover", description: "We test the result, explain what was done and leave you with clear advice." },
];

const coverageGroups = [
  ["Headingley", "Horsforth", "Garforth", "Armley", "Hyde Park", "Adel", "Weetwood"],
  ["Meanwood", "Cookridge", "Bramley", "Bramhope", "West Park", "Rodley", "Stanningley"],
  ["Pudsey", "Morley", "Farnley", "Farsley", "Cross Gates", "Seacroft", "Hunslet"],
  ["Rothwell", "Chapel Allerton", "Moortown", "Tinshill", "Churwell", "Beeston", "Kirkstall"],
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="bg-primary-foreground pb-20 pt-24 lg:pb-32">
          <div className="container-custom section-padding">
            <div className="mb-4 text-sm text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-primary">About</span>
            </div>

            <div className="mb-12 max-w-4xl">
              <FadeIn>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight text-black md:text-5xl lg:text-6xl">
                  A plumber who makes the next step clear<span className="text-tertiary">.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="mt-6 max-w-2xl border-l-2 border-tertiary pl-5">
                  <p className="text-black">
                    We provide local repair and emergency plumbing for homes and businesses across Leeds. We keep the advice practical, the communication clear and the finish tidy.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={200}>
              <div className="overflow-hidden rounded-3xl">
                <img src={aboutHero} alt="LeedsPlumber.Uk service team at work" className="h-[400px] w-full object-cover lg:h-[500px]" />
              </div>
            </FadeIn>

            <div className="mt-4 grid grid-cols-2 gap-4 rounded-2xl bg-white p-5 shadow-xl md:grid-cols-4 md:gap-0 md:divide-x md:divide-gray-200 md:p-8">
              {proofFacts.map((fact, index) => (
                <FadeIn key={fact.label} delay={300 + index * 80}>
                  <div className="px-2 text-center md:px-6 md:first:pl-0 md:last:pr-0">
                    <p className="mb-1 text-3xl font-bold text-primary md:text-4xl">{fact.value}</p>
                    <p className="text-sm text-muted-foreground">{fact.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-20 lg:py-32">
          <div className="container-custom section-padding">
            <div className="mb-16 max-w-3xl">
              <FadeIn>
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-tertiary">The standard</p>
                <h2 className="mb-6 text-primary">The service should feel as considered as the repair</h2>
                <p className="text-muted-foreground">We do more than get to the property. We make a difficult moment easier to understand and leave the work in a better state.</p>
              </FadeIn>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {standards.map((standard, index) => (
                <FadeIn key={standard.title} delay={index * 100}>
                  <article className={`group h-full rounded-2xl border border-border bg-white p-8 transition-colors duration-300 hover:bg-primary ${index === 0 ? "md:col-span-2" : ""}`}>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary transition-colors duration-300 group-hover:bg-white/10">
                      <standard.icon className="h-6 w-6 text-white transition-colors duration-300 group-hover:text-tertiary" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-white">{standard.title}</h3>
                    <p className="text-muted-foreground transition-colors duration-300 group-hover:text-white/75">{standard.description}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-white lg:py-32">
          <div className="container-custom section-padding">
            <div className="mb-16 max-w-3xl">
              <FadeIn>
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-tertiary">How we work</p>
                <h2 className="mb-6 text-white">Clear from the first call to the final check</h2>
                <p className="text-white/75">Every job is different. The standard of communication should not be.</p>
              </FadeIn>
            </div>

            <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
              {workSteps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 100}>
                  <div className="flex gap-5 border-t border-white/15 pt-6">
                    <span className="text-sm font-bold text-tertiary">{step.number}</span>
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-white">{step.title}</h3>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-32">
          <div className="container-custom section-padding">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <div className="grid grid-cols-2 gap-4">
                  <img src={missionImage} alt="Home service work" className="mt-10 h-72 w-full rounded-2xl object-cover" />
                  <img src={visionImage} alt="Careful work in a property" className="h-72 w-full rounded-2xl object-cover" />
                </div>
              </FadeIn>
              <FadeIn delay={100}>
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-tertiary">Local coverage</p>
                <h2 className="mb-6 text-black">Plumbing support across Leeds</h2>
                <p className="mb-8 font-medium leading-relaxed text-muted-foreground">From Headingley to Rothwell and Bramhope to Beeston, we serve homes and businesses across the city. If you are unsure whether your area is covered, call and ask.</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground md:grid-cols-4">
                  {coverageGroups.map((group) => (
                    <ul key={group[0]} className="space-y-2">
                      {group.map((area) => <li key={area}>{area}</li>)}
                    </ul>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-card py-20 lg:py-32">
          <div className="container-custom section-padding">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <FadeIn>
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-tertiary">The promise</p>
                <h2 className="mb-6 text-primary">A useful answer is part of the job</h2>
                <p className="mb-8 font-semibold leading-relaxed text-muted-foreground">Whether you need an emergency repair, a planned quote or honest advice about specialist attention, we aim to leave you better informed than when you called.</p>
                <ul className="space-y-4">
                  {["24 hours a day, 365 days a year for emergencies", "No call-out charge, with charges from arrival", "Free quotes for planned plumbing work"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 fill-primary text-secondary stroke-white" />
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="rounded-2xl bg-primary p-8 text-white md:p-12">
                  <MapPin className="mb-8 h-8 w-8 text-tertiary" />
                  <h3 className="mb-4 text-3xl font-bold text-white">Need a local plumber?</h3>
                  <p className="mb-8 text-white/75">Call the team directly or send the details of the job and we will arrange the next step.</p>
                  <a href="tel:+441134182075" className="inline-flex rounded-full bg-tertiary px-6 py-4 font-semibold text-white transition-transform hover:-translate-y-1">Call 0113 418 2075</a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
};

export default About;
