import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const FlipButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="group relative overflow-hidden rounded-full border border-primary bg-white px-8 py-4">
      <span className="relative block h-6 overflow-hidden">
        <span className="block font-semibold text-primary transition-transform duration-300 group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute left-0 top-full block font-semibold text-primary transition-transform duration-300 group-hover:-translate-y-full">
          {children}
        </span>
      </span>
    </button>
  );
};

const Services = () => {
  return (
    <section id="services" className="bg-background py-20 lg:py-32">
      <div className="container-custom section-padding">
        <div className="relative grid items-start gap-16 lg:grid-cols-2">
          <div className="lg:sticky lg:top-32">
            <FadeIn>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-tertiary">Our services</p>
              <h2 className="mb-6 text-3xl text-black md:text-5xl lg:text-6xl">
                <span className="relative inline-block">
                  <span className="relative z-10">Plumbing</span>
                </span>
                <br />
                That Works
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mb-8 max-w-md text-base text-muted-foreground">
                From emergency repairs and leaks to blocked drains, bathrooms, radiators and water systems, we provide practical plumbing support across Leeds.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <Link to="/services">
                <FlipButton>View All Services</FlipButton>
              </Link>
            </FadeIn>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 100}>
                <Link to={`/services/${service.slug}`}>
                  <div className="group cursor-pointer rounded-2xl bg-white px-5 py-8 transition-all duration-500 hover:bg-tertiary md:px-12">
                    <div className="flex items-start gap-3 md:gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary text-primary transition-colors duration-500">
                        <span className="font-medium">{service.number}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-2xl font-bold text-primary transition-colors duration-500 md:text-3xl">
                          {service.title}
                        </h3>
                        <p className="text-lg font-medium text-muted-foreground transition-colors duration-500 group-hover:text-primary/80">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex h-10 w-10 shrink-0 translate-x-2 -translate-y-5 items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
