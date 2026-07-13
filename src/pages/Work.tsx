import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";

const works = [
  {
    slug: "emergency-pipe-repair",
    image: work1,
    title: "Emergency pipe repair",
    description: "A calm response to burst pipes, leaks and loss of water, with immediate steps to limit damage and restore the property.",
  },
  {
    slug: "blocked-drain-clearance",
    image: work2,
    title: "Blocked drain clearance",
    description: "Drain rodding, clearance and high-powered jetting selected for the blockage, the access and the pipework involved.",
  },
  {
    slug: "bathroom-plumbing",
    image: work3,
    title: "Bathroom plumbing",
    description: "Thoughtful repairs and replacements for taps, toilets, sinks, showers and the connections around them.",
  },
  {
    slug: "radiator-repair",
    image: work4,
    title: "Radiator repair",
    description: "Practical investigation of cold, leaking or unreliable radiators, valves and the pipework that serves them.",
  },
  {
    slug: "shower-repair",
    image: work5,
    title: "Shower repair",
    description: "Support for electric, mixer and power showers when flow, temperature or reliability has changed.",
  },
  {
    slug: "pump-saniflo-support",
    image: work6,
    title: "Pump and Saniflo support",
    description: "Installation, repair and maintenance enquiries for pumps, Saniflo systems, tanks and inlet equipment.",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-white pt-20 lg:pt-32">
        <div className="container-custom section-padding">
          <div className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Work</span>
          </div>

          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row">
            <FadeIn>
              <h1 className="text-4xl font-bold text-black md:text-5xl lg:text-6xl">
                Plumbing work <span className="text-tertiary">we handle</span>
              </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="max-w-[468px] text-lg font-medium text-muted-foreground lg:pt-4">
                A considered view of the emergency repairs, maintenance and planned plumbing work Leeds Plumber UK is set up to provide.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {works.map((work, index) => (
              <FadeIn key={work.slug} delay={index * 100}>
                <Link to={`/work/${work.slug}`} className="group block">
                  <div className="mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="mb-3 text-3xl font-bold text-black transition-colors group-hover:text-primary md:text-4xl">
                    {work.title}
                  </h2>
                  <p className="font-medium leading-relaxed text-muted-foreground">{work.description}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Work;
