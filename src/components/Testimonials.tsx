import FadeIn from "@/components/FadeIn";
import { Quote, Star } from "lucide-react";

const feedbackThemes = [
  {
    title: "Responsive when it matters",
    text: "We respond quickly and aim to attend promptly when a plumbing problem cannot wait.",
  },
  {
    title: "Clear and fair",
    text: "We explain what we find, what the work involves and what it should cost before we begin.",
  },
  {
    title: "Tidy by nature",
    text: "We protect the property, work carefully and leave a clean handover that feels properly finished.",
  },
  {
    title: "Problems solved properly",
    text: "We take time to solve the fault properly, with useful advice for smaller faults as well as emergencies.",
  },
  {
    title: "A local service people reuse",
    text: "We build repeat custom through dependable work, clear advice and a service worth recommending.",
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
  </article>
);

const Testimonials = () => {
  const duplicatedThemes = [...feedbackThemes, ...feedbackThemes, ...feedbackThemes];

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
              When you call us, we keep the next step simple. We respond quickly, explain the work clearly and leave your home or premises tidy.
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={300}>
        <div className="relative mb-4">
          <div className="flex w-max gap-4 animate-marquee-left">
            {duplicatedThemes.map((theme, index) => (
              <FeedbackCard key={`${theme.title}-${index}`} {...theme} />
            ))}
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="flex w-max gap-4 animate-marquee-right">
            {duplicatedThemes.map((theme, index) => (
              <FeedbackCard key={`reverse-${theme.title}-${index}`} {...theme} />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonials;
