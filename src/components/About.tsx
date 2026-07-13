import plumberTeam from "@/assets/hero-4.png";
import plumberTeam1 from "@/assets/hero-41.png";
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
    title: "Repair-first advice",
    description: "We look for the proportionate fix and explain the options before work begins.",
  },
  {
    title: "Careful in your space",
    description: "Homes and premises are treated with respect, from the first visit to the final check.",
  },
  {
    title: "A clean handover",
    description: "The work is tested, the area is left tidy, and you know what has been done.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative bg-card py-20 lg:pb-40">
      <div className="container-custom section-padding">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-28">
          <FadeIn>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={plumberTeam}
                  alt="Leeds Plumber UK service team at work"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 hidden h-[240px] w-[240px] overflow-hidden rounded-xl text-white lg:block">
                <img
                  src={plumberTeam1}
                  alt="Close view of hands-on plumbing work"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <div className="lg:pt-8">
            <FadeIn delay={100}>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-tertiary">Who we are</p>
              <h2 className="mb-6 text-primary">A local plumber who stays clear and practical</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mb-8 font-semibold leading-relaxed text-muted-foreground">
                John McGinty Plumbing Services, trading as Leeds Plumber UK, provides emergency plumbing, repairs and drainage support across Leeds. The aim is simple: answer when you need help, make the problem understandable, and carry out the right work without fuss.
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
        </div>
      </div>
      <div className="absolute left-1/2 top-0 z-10 h-px w-[84%] -translate-x-1/2 bg-black/10" />
    </section>
  );
};

export default About;
