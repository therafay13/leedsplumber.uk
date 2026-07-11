import workKitchen from "@/assets/work-1.png";
import workUpvc from "@/assets/work-2.png";
import workGarage from "@/assets/work-3.png";
import workFascias from "@/assets/work-4.png";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const projects = [
  {
    title: "Kitchen Respray",
    description: "Tired oak kitchen brought back to life in deep matte charcoal with brass hardware.",
    image: workKitchen,
  },
  {
    title: "uPVC Transformation",
    description: "Full elevation of white uPVC sprayed to anthracite grey on-site in a single day.",
    image: workUpvc,
  },
  {
    title: "Garage Door Respray",
    description: "Up-and-over door stripped, primed and finished in satin black — without removal.",
    image: workGarage,
  },
  {
    title: "Fascias & Roofline",
    description: "Weather-worn fascias, soffits and downpipes on a Cheshire detached restored to crisp white — fraction of replacement cost.",
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
    <section className="py-20 lg:py-32 bg-primary">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <FadeIn>
              <p className="text-tertiary font-medium mb-4 uppercase tracking-widest text-sm">Our Portfolio</p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-white">
                Recent Projects
                <br />
                Across Cheshire
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={200}>
            <p className="text-white max-w-xl mt-6 lg:mt-0">
              Kitchens, uPVC, garage doors, fascias and industrial steelwork — a small selection of recent jobs sprayed across Cheshire and Ellesmere Port. Every project finished on time and on budget.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid — mobile: 2-column static grid */}
        <FadeIn delay={300}>
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {projects.map((project, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-44 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h5 className="text-white text-base font-bold leading-tight">{project.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid — desktop: hover-expand flex layout */}
        <FadeIn delay={300}>
          <div className="hidden md:flex gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-1000 ease-in-out"
                style={{ width: getCardWidth(index) }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h5 className={`text-white text-3xl font-bold mb-2 ${hoveredIndex === index || (hoveredIndex === null && index === 0) ? "opacity-100" : "opacity-0"}`}>{project.title}</h5>
                  <p className={`text-white line-clamp-2 transition-opacity duration-300 ${hoveredIndex === index || (hoveredIndex === null && index === 0) ? "opacity-100" : "opacity-0"}`}>
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
