import workKitchen from "@/assets/work-1.png";
import workDrain from "@/assets/work-2.png";
import workGarage from "@/assets/work-3.png";
import workFascias from "@/assets/work-4.png";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const projects = [
  {
    title: "Emergency leak response",
    description: "The first priority is to isolate the water, identify the source and make the property safe.",
    image: workKitchen,
  },
  {
    title: "Blocked drain clearance",
    description: "Rodding, clearance and high-powered jetting selected according to the blockage and pipework.",
    image: workDrain,
  },
  {
    title: "Bathroom plumbing",
    description: "Careful repairs and replacements for taps, toilets, sinks, showers and the connections around them.",
    image: workGarage,
  },
  {
    title: "Radiators and water flow",
    description: "Practical support for radiators, showers, pumps and the valves that keep a home working properly.",
    image: workFascias,
  },
];

const FeaturedWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCardWidth = (index: number) => {
    if (hoveredIndex === null) return index === 0 ? "50%" : "16.67%";
    return hoveredIndex === index ? "50%" : "16.67%";
  };

  return (
    <section className="bg-primary py-20 lg:py-32">
      <div className="container-custom section-padding">
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div>
            <FadeIn>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-tertiary">The work we handle</p>
              <h2 className="text-white">
                Plumbing for the moments
                <br />
                that matter
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-xl text-white lg:mt-0">
              From urgent leaks to planned bathroom work, these are the jobs Leeds Plumber UK is set up to handle across the city.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {projects.map((project) => (
              <div key={project.title} className="relative overflow-hidden rounded-2xl">
                <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-base font-bold leading-tight text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="hidden gap-4 md:flex">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-1000 ease-in-out"
                style={{ width: getCardWidth(index) }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={project.image} alt={project.title} className="h-80 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`mb-2 text-3xl font-bold text-white ${hoveredIndex === index || (hoveredIndex === null && index === 0) ? "opacity-100" : "opacity-0"}`}>
                    {project.title}
                  </h3>
                  <p className={`line-clamp-2 text-white transition-opacity duration-300 ${hoveredIndex === index || (hoveredIndex === null && index === 0) ? "opacity-100" : "opacity-0"}`}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedWorks;
