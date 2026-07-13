import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";

const FlipButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button variant="default" size="default" className="group relative overflow-hidden border border-primary text-white hover:text-primary">
      <span className="flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
        <Phone className="h-4 w-4" />
        {children}
      </span>
      <span className="absolute inset-0 flex items-center justify-center gap-2 bg-primary text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Phone className="h-4 w-4" />
        {children}
      </span>
    </Button>
  );
};

const features = [
  {
    title: "Fast response when it matters",
    description: "Emergency plumbing support is available 24 hours a day, 365 days a year.",
  },
  {
    title: "Straight answers",
    description: "You receive a clear explanation of the fault, the options and the work agreed.",
  },
  {
    title: "Careful, tidy work",
    description: "We protect the space around the job and leave the area ready to use again.",
  },
];

const Solutions = () => {
  return (
    <section className="relative bg-card py-20 lg:pb-40">
      <div className="container-custom section-padding">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-28">
          <div className="order-2 lg:order-1 lg:pt-8">
            <FadeIn delay={100}>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-tertiary">Why choose us</p>
              <h2 className="mb-6 text-primary">Good plumbing starts with a clear plan</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mb-8 font-semibold leading-relaxed text-muted-foreground">
                From a blocked drain to a planned bathroom repair, we bring the same calm approach to every call. The work should solve the problem and make sense to the person paying for it.
              </p>
            </FadeIn>

            <div className="mb-8 space-y-6">
              {features.map((feature, index) => (
                <FadeIn key={feature.title} delay={300 + index * 100}>
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <CheckCircle className="h-6 w-6 rounded-full border bg-primary text-secondary stroke-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-2xl font-bold text-primary">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <a href="tel:+441134182075">
              <FadeIn delay={600}>
                <FlipButton>Call 0113 418 2075</FlipButton>
              </FadeIn>
            </a>
          </div>

          <FadeIn className="order-1 h-[90%] lg:order-2">
            <div className="relative lg:h-full">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-auto lg:h-full">
                <img
                  src="/images/plumbing/support-finished-bathroom.webp"
                  alt="Finished bathroom plumbing with a clean basin and tap"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 hidden h-[240px] w-[240px] overflow-hidden rounded-xl text-white lg:block">
                <img
                  src="/images/plumbing/service-saniflo-water-systems.webp"
                  alt="Plumber inspecting a compact water-system installation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 z-10 h-px w-[84%] -translate-x-1/2 bg-black/10" />
    </section>
  );
};

export default Solutions;
