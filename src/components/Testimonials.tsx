import FadeIn from "@/components/FadeIn";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    quote: "Did a great job, highly recommended.",
    author: "Mlynch Cheam",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Extremely knowledgeable and clearly a great guy.",
    author: "Victoria Jasmine",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "I would recommend him all day long.",
    author: "Susan Raisbeck",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Great service. John responded quickly.",
    author: "Kay Watson",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "The price was very reasonable.",
    author: "Moniczek",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Very professional and reasonable pricing.",
    author: "Susan Bushnell",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Helpful, courteous and polite.",
    author: "soul12uk",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Very impressed. Would recommend.",
    author: "Joanna Hargreaves",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "He was professional, and polite.",
    author: "Albie Bartholomew",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Was really impressed with John.",
    author: "Sharon Brook",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Very knowledgeable and professional.",
    author: "david arden",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "John was very efficient.",
    author: "Jessica Allanby",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "The work was well done.",
    author: "Rich90",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "John came on site, changed my sink and toilet.",
    author: "Andrew Blackburn",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "He always arrives on time and finishes to an excellent standard.",
    author: "Bashko",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "John was very helpful upon the phone.",
    author: "Ayesta",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "He arranged a time the following day and fixed it.",
    author: "James Shaw",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Identified the problem immediately and repaired it the same day.",
    author: "Chris Morris",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Quickly found the problem.",
    author: "Diane",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Arrived on time, sorted the job quickly and efficiently.",
    author: "Matt Corner",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Really quick for an emergency leak. Got the job done super fast.",
    author: "Jennifer Anne Dook",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Within an hour the plumber was here.",
    author: "D",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
  {
    quote: "Did an excellent job and was professional, quick and well priced.",
    author: "Daniel",
    source: "Google review",
    sourceUrl: "https://www.google.com/maps/search/?api=1&query=Leeds+Plumber+UK%2C+51+Whinmoor+Crescent%2C+Leeds%2C+LS14+1NJ",
  },
];

const FeedbackCard = ({ quote, author, source, sourceUrl }: (typeof reviews)[number]) => (
  <article className="flex w-[320px] max-w-[320px] flex-shrink-0 flex-col rounded-2xl bg-white p-6">
    <div className="mb-4 flex items-center justify-between">
      <Quote className="h-8 w-8 text-tertiary/40" />
      <div className="flex gap-0.5" aria-label={`${source} customer review`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-tertiary text-tertiary" />
        ))}
      </div>
    </div>
    <p className="flex-grow text-base leading-relaxed text-primary">“{quote}”</p>
    <div className="mt-6 flex items-end justify-between gap-4 border-t border-primary/10 pt-4 text-xs">
      <div>
        <p className="font-semibold text-primary">{author}</p>
        <p className="mt-1 text-muted-foreground">Google reviewer</p>
      </div>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-primary transition-colors hover:text-tertiary"
      >
        {source}
      </a>
    </div>
  </article>
);

const Testimonials = () => {
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="overflow-hidden bg-primary py-20 lg:py-32">
      <div className="container-custom section-padding">
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div>
            <FadeIn>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-tertiary">Testimonials</p>
              <h2 className="text-white">
                What Leeds customers
                <br />
                say
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-xl text-white lg:mt-0">
              Homeowners and businesses across Leeds choose us because we bring the same careful, professional standard to every job, from urgent repairs to planned plumbing work.
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={300}>
        <div className="relative mb-4">
          <div className="flex w-max gap-4 animate-marquee-left">
            {duplicatedReviews.map((review, index) => (
              <FeedbackCard key={`${review.author}-${index}`} {...review} />
            ))}
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="flex w-max gap-4 animate-marquee-right">
            {duplicatedReviews.map((review, index) => (
              <FeedbackCard key={`reverse-${review.author}-${index}`} {...review} />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonials;
