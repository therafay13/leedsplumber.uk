import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, CheckCircle2, Clock, Phone, Wrench } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export type QuoteUrgency = "planned" | "urgent" | "emergency";

export interface QuoteData {
  serviceSlug: string;
  serviceTitle: string;
  urgency: QuoteUrgency;
}

const quoteServices = [
  { slug: "emergency-plumbing", title: "Emergency Plumbing" },
  { slug: "plumbing-repairs", title: "Plumbing Repairs" },
  { slug: "drainage-jetting", title: "Drainage & Jetting" },
  { slug: "bathrooms-showers", title: "Bathrooms & Showers" },
  { slug: "radiators-heating", title: "Radiators & Heating" },
  { slug: "pumps-saniflo", title: "Pumps, Saniflo & Installations" },
];

const responseOptions: Array<{
  value: QuoteUrgency;
  title: string;
  description: string;
}> = [
  {
    value: "planned",
    title: "Planned work",
    description: "For improvements, replacements and non-urgent repairs.",
  },
  {
    value: "urgent",
    title: "Urgent repair",
    description: "For a fault or leak that needs prompt attention.",
  },
  {
    value: "emergency",
    title: "Emergency help",
    description: "For burst pipes, flooding, blocked drains or loss of water.",
  },
];

const QuoteCalculator = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const [urgency, setUrgency] = useState<QuoteUrgency>("planned");

  const selectedServiceDetails = quoteServices.find((service) => service.slug === selectedService);

  const handleRequestQuote = () => {
    if (!selectedServiceDetails) return;

    const quoteData: QuoteData = {
      serviceSlug: selectedServiceDetails.slug,
      serviceTitle: selectedServiceDetails.title,
      urgency,
    };

    navigate("/contact", { state: { quoteData } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary py-24 lg:py-32">
        <div className="container-custom section-padding text-center">
          <FadeIn>
            <div className="mb-6 flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="text-white/60 transition-colors hover:text-white">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="font-medium text-white">Request a Quote</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Request a Plumbing Quote
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/75">
              Tell us what needs attention and we will arrange a clear quote for work across Leeds.
              There is no call-out charge, and charges start from arrival.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-card py-16 lg:py-24">
        <div className="container-custom section-padding">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-start">
            <FadeIn>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">What do you need help with?</h2>
                    <p className="text-sm text-muted-foreground">Choose the closest service and response type.</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="block text-base font-medium text-primary" htmlFor="quote-service">
                      Select a service
                    </label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger id="quote-service" className="h-14 bg-white text-base text-primary">
                        <SelectValue placeholder="Choose a plumbing service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {quoteServices.map((service) => (
                          <SelectItem key={service.slug} value={service.slug} className="text-base">
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <p className="text-base font-medium text-primary">How quickly do you need help?</p>
                    <div className="grid gap-3">
                      {responseOptions.map((option) => {
                        const isSelected = urgency === option.value;

                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setUrgency(option.value)}
                            className={`flex items-start gap-3 rounded-xl border-2 p-4 text-left transition-colors ${
                              isSelected
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {isSelected ? (
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tertiary" />
                            ) : (
                              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                            )}
                            <span>
                              <span className="block font-semibold text-primary">{option.title}</span>
                              <span className="mt-1 block text-sm text-muted-foreground">{option.description}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <Button
                    type="button"
                    size="lg"
                    className="w-full rounded-full bg-tertiary py-6 text-lg text-white hover:bg-tertiary/90"
                    onClick={handleRequestQuote}
                    disabled={!selectedServiceDetails}
                  >
                    Continue to contact form
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="mb-4 text-3xl font-bold text-white">A clear next step</h2>
                <p className="mb-8 text-lg leading-relaxed text-white/75">
                  We review the details and contact you to arrange the right next step. You receive a clear quote before planned work begins.
                </p>

                <div className="space-y-5">
                  {[
                    "Tell us what is happening and where you are based in Leeds.",
                    "We arrange a suitable visit or discuss the job over the phone.",
                    "You receive a clear quote before planned work begins.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tertiary" />
                      <p className="text-white/80">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-t border-white/15 pt-6">
                  <a href="tel:+441134182075" className="inline-flex items-center gap-2 font-semibold text-white hover:text-white/80">
                    <Phone className="h-5 w-5" />
                    Call 0113 418 2075 for emergency help
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 lg:py-24">
        <div className="container-custom section-padding">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <AlertCircle className="mx-auto mb-5 h-10 w-10 text-tertiary" />
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Need help right now?</h2>
              <p className="text-lg text-white/75">
                For emergencies, call us directly. We are available 24 hours a day, 365 days a year.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default QuoteCalculator;
