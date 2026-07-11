import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

// Import existing images for works
import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";

const works = [
  {
    slug: "kitchen-respray-chester",
    image: work1,
    title: "Chester Kitchen Respray",
    description: "Tired oak shaker kitchen in Chester stripped, primed and resprayed in matte charcoal with new brass hardware. Sprayed over three days with zero disruption to the family."
  },
  {
    slug: "upvc-front-elevation",
    image: work2,
    title: "uPVC Front Elevation — Ellesmere Port",
    description: "Whole front elevation of white uPVC windows and composite door sprayed anthracite grey on-site, masked end-to-end and finished in a single day."
  },
  {
    slug: "garage-door-satin-black",
    image: work3,
    title: "Garage Door — Satin Black",
    description: "Up-and-over garage door brought back to showroom condition without removal. Two-pack satin black finish, sprayed in-situ on a quiet residential driveway."
  },
  {
    slug: "fascias-soffits-refresh",
    image: work4,
    title: "Fascias, Soffits & Downpipes",
    description: "Weather-worn fascias and downpipes on a 1990s detached home restored to crisp white and matt black — a fraction of the cost of replacement uPVC."
  },
  {
    slug: "industrial-steelwork-coating",
    image: work5,
    title: "Industrial Steel Coating",
    description: "Internal warehouse steelwork prepped and coated with a hard-wearing protective finish. Completed across two shifts to keep the unit operational."
  },
  {
    slug: "shop-front-respray",
    image: work6,
    title: "Cheshire Oaks Shop Front",
    description: "Retail unit resprayed out of hours so the client didn't lose a single trading hour. Charcoal frame with ember orange brand accents."
  }
];

const Work = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Work Cards */}
      <section className="pt-20 lg:pt-32 bg-white">
        <div className="container-custom section-padding">
          {/* Breadcrumb */}
          <div className="text-muted-foreground text-sm mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Work</span>
          </div>

          {/* Header */}
          <div className="flex max-md:flex-col gap-8 mb-16 justify-between">
            <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold">Recent <span className="text-tertiary">Spray</span> Projects</h1>
            <p className="text-muted-foreground max-w-[468px] text-lg font-medium lg:pt-4">
              A selection of recent kitchens, uPVC, garage doors and commercial work sprayed across Cheshire, Ellesmere Port and the Wirral.
            </p>
          </div>

          {/* Work Cards Grid - 2 columns */}
          <div className="grid md:grid-cols-2 gap-8 gap-y-16">
            {works.map((work, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div>
                  {/* Image */}
                  <div className="overflow-hidden rounded-2xl mb-6">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-[420px] object-cover"
                    />
                  </div>

                  {/* Content */}
                  <h5 className="text-black text-4xl font-bold mb-3">
                    {work.title}
                  </h5>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {work.description}
                  </p>
                </div>
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
