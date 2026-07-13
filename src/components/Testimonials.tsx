import FadeIn from "@/components/FadeIn";
import { Quote, Star } from "lucide-react";

const feedbackThemes = [
  {
    title: "Responsive when it matters",
    text: "Public feedback repeatedly highlights quick replies and prompt attendance when a plumbing problem cannot wait.",
  },
  {
    title: "Clear and fair",
    text: "Customers value straightforward explanations, reasonable pricing and knowing what the work involves before it starts.",
  },
  {
    title: "Tidy by nature",
    text: "Careful work and a clean handover are recurring reasons people recommend the service to friends and family.",
  },
  {
    title: "Problems solved properly",
    text: "Review themes include reliable repairs, useful advice and a willingness to help with smaller faults as well as emergencies.",
  },
  {
    title: "A local service people reuse",
    text: "Repeat custom and personal recommendations point to a service built on trust rather than a hard sell.",
  },
];

const FeedbackCard = ({ title, text }: (typeof feedbackThemes)[number]) => (
  <article className="flex w-[320px] max-w-[320px] flex-shrink-0 flex-col rounded-2xl bg-white p-6">
    <div className="mb-4 flex items-center justify-between">
      <Quote className="h-8 w-8 text-tertiary/40" />
      <div className="flex gap-0.5" aria-label="Positive feedback theme">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-tertiary text-tertiary" />
        ))}
      </div>
    </div>
    <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
    <p className="flex-grow text-sm leading-relaxed text-muted-foreground">{text}</p>
    <p className="mt-4 border-t border-gray-100 pt-4 text-sm font-semibold text-secondary">Public review theme</p>
  </article>
);

const Testimonials = () => {
  const duplicatedThemes = [...feedbackThemes, ...feedbackThemes];

  return (
    <section className="overflow-hidden bg-primary py-20 lg:py-32">
      <div className="container-custom section-padding">
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div>
            <FadeIn>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-tertiary">Why people call back</p>
              <h2 className="text-white">
                What Leeds customers
                <br />
                value most
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-xl text-white lg:mt-0">
              Public feedback consistently mentions quick attendance, clear explanations, fair prices, tidy work and repeat use.
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={300}>
        <div className="relative">
          <div className="flex w-max gap-4 animate-marquee-left">
            {duplicatedThemes.map((theme, index) => (
              <FeedbackCard key={`${theme.title}-${index}`} {...theme} />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonials;
