import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FlipButton = ({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) => {
  const bgClass = variant === "light"
    ? "bg-tertiary text-white hover:bg-tertiary/90"
    : "border border-white/40 bg-primary text-white hover:bg-secondary";

  return (
    <Button size="default" className={`group relative overflow-hidden rounded-full px-6 font-semibold ${bgClass}`}>
      <span className="flex items-center gap-2 font-bold transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
        {children}
      </span>
      <span className="absolute inset-0 flex items-center justify-center gap-2 font-bold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {children}
      </span>
    </Button>
  );
};

const Hero = () => {
  const leftColumnImages = [
    { src: "/images/plumbing/anchor-leak-trace.webp", alt: "Plumber tracing a leak beneath a kitchen sink", className: "rounded-2xl" },
    { src: "/images/plumbing/hero-radiator-check.webp", alt: "Plumber checking a radiator connection", className: "rounded-full" },
    { src: "/images/plumbing/hero-drain-inspection.webp", alt: "Plumber inspecting an exterior drain", className: "rounded-2xl" },
  ];
  const rightColumnImages = [
    { src: "/images/plumbing/hero-pipe-connection.webp", alt: "Plumber making a pipe connection", className: "rounded-full" },
    { src: "/images/plumbing/hero-basin-fitting.webp", alt: "Plumber fitting a bathroom tap", className: "rounded-2xl" },
    { src: "/images/plumbing/hero-homeowner-consultation.webp", alt: "Plumber explaining the next step to a homeowner", className: "rounded-full" },
  ];
  const allImages = [...leftColumnImages, ...rightColumnImages];
  const mobileStripImages = [...allImages, ...allImages, ...allImages];

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="container-custom section-padding relative z-10 max-md:pt-5 md:max-lg:pt-10">
        <div className="relative grid items-center gap-12 md:max-lg:gap-5 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-2">
          <div className="relative z-10 max-w-7xl pb-8 max-md:pb-3 md:max-lg:pb-3 lg:min-w-[700px] lg:pb-16">
            <div className="animate-fade-up">
              <h1 className="mb-6 max-w-[800px] text-left text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl xl:text-7xl">
                <span className="text-tertiary">Emergency</span> Plumbing
                <br />
                <span className="text-white">Across Leeds</span>
              </h1>
            </div>

            <p className="mb-8 max-w-[800px] animate-fade-up text-base text-white md:text-lg" style={{ animationDelay: "0.1s" }}>
              24 hours a day, 365 days a year for emergencies, repairs, leaks, drains and planned work.
            </p>

            <div className="mb-12 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/quote">
                <FlipButton>Get A Free Quote</FlipButton>
              </Link>
              <Link to="/contact">
                <FlipButton variant="dark">
                  Contact Us
                </FlipButton>
              </Link>
            </div>

            <div className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-stretch">
                <div className="mr-4 w-1 self-stretch rounded-full bg-tertiary" />
                <div className="flex items-center">
                  <div>
                    <p className="text-3xl font-bold text-white">24/7</p>
                    <p className="mt-1 text-xs text-white/60">Emergency support</p>
                  </div>
                  <div className="mx-6 w-px self-stretch bg-white/20" />
                  <div>
                    <p className="text-3xl font-bold text-white">Free</p>
                    <p className="mt-1 text-xs text-white/60">Quotes, no call-out charge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-[10%] top-0 bottom-0 z-0 hidden w-[432px] items-start justify-end gap-7 overflow-hidden lg:flex">
            <div className="flex flex-col animate-marquee-down">
              {[...leftColumnImages, ...leftColumnImages, ...leftColumnImages].map((image, index) => (
                <div key={index} className="flex-shrink-0 overflow-hidden pb-4">
                  <img src={image.src} alt={image.alt} className={`h-48 w-full object-cover ${image.className}`} />
                </div>
              ))}
            </div>
            <div className="flex flex-col animate-marquee-up" style={{ animationDelay: "-5s" }}>
              {[...rightColumnImages, ...rightColumnImages, ...rightColumnImages].map((image, index) => (
                <div key={index} className="flex-shrink-0 overflow-hidden pb-4">
                  <img src={image.src} alt={image.alt} className={`h-48 w-full object-cover ${image.className}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="-mx-4 overflow-hidden pb-8 pt-2 max-md:pt-0 md:-mx-8 md:max-lg:pb-5 md:max-lg:pt-0 lg:hidden">
            <div className="flex w-max gap-3 animate-marquee-left">
              {mobileStripImages.map((image, index) => (
                <div key={index} className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
