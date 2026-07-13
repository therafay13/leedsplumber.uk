import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";

const proofPoints = [
  {
    value: "24/7",
    label: "Emergency availability",
    detail: "Support for urgent plumbing and drainage problems",
  },
  {
    value: "Leeds",
    label: "Local coverage",
    detail: "Homes and businesses across the city",
  },
  {
    value: "Free",
    label: "Quotes",
    detail: "No call-out charge, with charges from arrival",
  },
];

const Experience = () => {
  return (
    <section className="bg-card py-20 lg:py-32">
      <div className="container-custom section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/plumbing/support-clean-handover.webp"
                  alt="Plumber checking a repaired kitchen fitting before leaving"
                  className="h-auto max-h-[500px] w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={200}>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-tertiary">
                A better way to call a plumber
              </p>
              <h2 className="mb-6 text-black">
                Practical help, clearly explained
              </h2>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mb-8 max-w-xl text-muted-foreground">
                We are built around the jobs that cannot wait and the repairs that should not be overcomplicated. We answer clearly, arrive prepared, and explain the work before it begins.
              </p>
            </FadeIn>

            <div className="mb-8 grid grid-cols-1 gap-6 border-y border-border py-6 sm:grid-cols-3 sm:gap-4">
              {proofPoints.map((point, index) => (
                <FadeIn key={point.label} delay={400 + index * 100}>
                  <div>
                    <p className="mb-1 text-3xl font-bold text-primary">{point.value}</p>
                    <p className="mb-1 text-sm font-semibold text-black">{point.label}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{point.detail}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={700}>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-primary bg-white px-8 py-4 font-semibold text-primary transition-transform duration-300 hover:-translate-y-1"
              >
                About Leedsplumber.uk
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
