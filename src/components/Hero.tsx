import heroGrid1 from "@/assets/hero-grid-1.jpg";
import heroGrid2 from "@/assets/hero-grid-2.jpg";
import heroGrid3 from "@/assets/hero-grid-3.jpg";
import heroGrid4 from "@/assets/hero-grid-4.jpg";
import heroGrid5 from "@/assets/hero-grid-5.jpg";
import heroGrid6 from "@/assets/hero-grid-6.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const FlipButton = ({
  children,
  variant = "light"
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) => {
  const bgClass = variant === "light"
    ? "bg-tertiary text-primary hover:bg-tertiary/90"
    : "bg-primary text-white border border-accent text-accent";
  return (
    <Button size="default" className={`group relative overflow-hidden font-semibold rounded-full px-6 ${bgClass}`}>
      <span className="flex items-center gap-2 font-bold transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
        {children}
      </span>
      <span className="absolute inset-0 flex font-bold items-center justify-center gap-2 transition-all duration-300 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        {children}
      </span>
    </Button>
  );
};
const Hero = () => {
  const leftColumnImages = [{
    src: heroGrid1,
    alt: "Spray painter applying matte finish to kitchen cabinet door",
    className: "rounded-2xl"
  }, {
    src: heroGrid3,
    alt: "Spray painter in PPE inside spray booth",
    className: "rounded-full"
  }, {
    src: heroGrid5,
    alt: "HVLP spray gun atomising ember-coloured paint",
    className: "rounded-2xl"
  }];
  const rightColumnImages = [{
    src: heroGrid2,
    alt: "Freshly resprayed anthracite uPVC window frame",
    className: "rounded-full"
  }, {
    src: heroGrid4,
    alt: "Resprayed charcoal garage door on a UK home",
    className: "rounded-2xl"
  }, {
    src: heroGrid6,
    alt: "Painter masking uPVC fascias and soffits on-site",
    className: "rounded-full"
  }];
  const allImages = [...leftColumnImages, ...rightColumnImages];
  const mobileStripImages = [...allImages, ...allImages, ...allImages];
  return <section className="relative bg-primary overflow-hidden">
    {/* Content */}
    <div className="container-custom section-padding relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 relative items-center lg:min-h-[calc(100vh-8rem)]">
        {/* Left Content */}
        <div className="max-w-7xl lg:min-w-[700px] relative z-10 pb-8 lg:pb-16">
          <div className="animate-fade-up">
            <h1 className="text-white font-bold mb-6 text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-[800px] text-left xl:text-7xl">
              Spray Painting Specialists
              <br />
              Cheshire &amp; Ellesmere Port,
              <br />
              <span className="text-tertiary">Reborn, Not Replaced.</span>
            </h1>
          </div>

          <p style={{
            animationDelay: "0.1s"
          }} className="text-white text-lg mb-8 max-w-[800px] animate-fade-up md:text-base">
            Kitchen resprays, uPVC windows and doors, fascias, garage doors and commercial
            coatings — flawless factory-grade finishes applied on-site or in our workshop
            for a fraction of the cost of replacement.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12 animate-fade-up" style={{
            animationDelay: "0.2s"
          }}>
            <Link to="/quote">
              <FlipButton>Get A Quote</FlipButton>
            </Link>
            <Link to="/services">
              <FlipButton variant="dark">
                See All Services
              </FlipButton>
            </Link>
          </div>

          {/* Client Stats */}
          <div className="flex items-center gap-4 animate-fade-up" style={{
            animationDelay: "0.3s"
          }}>
            <div className="flex items-stretch">
              <div className="w-1 bg-tertiary rounded-full self-stretch mr-4" />
              <div className="flex items-center">
                <div>
                  <p className="text-white text-3xl font-bold">25+</p>
                  <p className="text-white/60 text-xs mt-1">Years Serving Cheshire</p>
                </div>
                <div className="w-px bg-white/20 self-stretch mx-6" />
                {/* UNVERIFIED: "1,200+" is a marketing claim, not a measured figure — confirm the real project count with the client before launch. */}
                <div>
                  <p className="text-white text-3xl font-bold">1,200+</p>
                  <p className="text-white/60 text-xs mt-1">Projects Sprayed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image Grid with Marquee */}
        <div style={{
          width: '432px'
        }} className="hidden lg:flex gap-7 items-start justify-end absolute right-0 top-0 bottom-0 overflow-hidden z-0">
          {/* Left Column - slides down continuously */}
          <div className="flex flex-col animate-marquee-down">
            {[...leftColumnImages, ...leftColumnImages, ...leftColumnImages].map((image, index) => <div key={index} className="overflow-hidden flex-shrink-0 pb-4">
              <img src={image.src} alt={image.alt} className={`w-full h-48 object-cover ${image.className}`} />
            </div>)}
          </div>

          {/* Right Column - slides up continuously */}
          <div className="flex flex-col animate-marquee-up" style={{ animationDelay: "-5s" }}>
            {[...rightColumnImages, ...rightColumnImages, ...rightColumnImages].map((image, index) => <div key={index} className="overflow-hidden flex-shrink-0 pb-4">
              <img src={image.src} alt={image.alt} className={`w-full h-48 object-cover ${image.className}`} />
            </div>)}
          </div>
        </div>

        {/* Mobile image strip — visible on mobile only */}
        <div className="lg:hidden overflow-hidden -mx-4 md:-mx-8 pb-8 pt-2">
          <div className="flex gap-3 animate-marquee-left w-max">
            {mobileStripImages.map((image, index) => (
              <div key={index} className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default Hero;