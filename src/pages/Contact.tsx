import contact from "@/assets/contact-1.png";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { supabase } from "@/integrations/supabase/client";
import { Clock, MapPin, Phone, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import type { QuoteData } from "./QuoteCalculator";

const contactInfo = [
  {
    icon: Phone,
    title: "Call us",
    description: "24 hours a day, 365 days a year",
    value: "0113 418 2075",
    href: "tel:+441134182075",
  },
  {
    icon: MapPin,
    title: "Service area",
    description: "Homes and businesses across Leeds",
    value: "51 Whinmoor Crescent, Leeds, LS14 1NJ",
    href: "https://www.google.com/maps?q=51+Whinmoor+Crescent+Leeds+LS14+1NJ",
  },
  {
    icon: Clock,
    title: "Planned work",
    description: "Free quotes and no call-out charge",
    value: "Request a quote",
    href: "/quote",
  },
];

const Contact = () => {
  const location = useLocation();
  const quoteData = location.state?.quoteData as QuoteData | undefined;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: quoteData?.serviceSlug || "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (quoteData) {
      setFormData((previous) => ({ ...previous, service: quoteData.serviceSlug }));
    }
  }, [quoteData]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.fullName || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const quoteNotes = quoteData
        ? [`Quote request: ${quoteData.serviceTitle}`, `Response type: ${quoteData.urgency}`, formData.notes].filter(Boolean).join("\n")
        : formData.notes;

      const { error } = await supabase.from("contacts").insert({
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email || null,
        service: quoteData?.serviceTitle || formData.service || null,
        notes: quoteNotes || null,
      });

      if (error) throw error;

      toast.success(quoteData ? "Quote request sent. We will contact you soon." : "Message sent. We will get back to you soon.");
      setFormData({ fullName: "", phone: "", email: "", service: "", notes: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="px-4 pb-16 pt-32">
        <div className="container-custom mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-primary">Contact</span>
            </div>
            <h1 className="text-4xl font-bold text-black md:text-5xl lg:text-6xl">
              {quoteData ? "Request a plumbing quote" : "Contact LeedsPlumber.Uk"}
            </h1>
            <div className="mt-6 max-w-2xl border-l-2 border-tertiary pl-5">
              <p className="text-muted-foreground">
                {quoteData
                  ? "Tell us what you need and we will arrange a clear quote. There is no call-out charge."
                  : "Call 0113 418 2075 for emergency help or send us the details of planned plumbing work."}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {quoteData && (
        <section className="px-4 pb-8">
          <div className="container mx-auto section-padding">
            <FadeIn>
              <div className="mx-auto max-w-4xl rounded-2xl bg-primary p-6 text-primary-foreground md:p-8">
                <h2 className="mb-4 text-xl font-bold">Your quote summary</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <Wrench className="h-5 w-5 text-tertiary" />
                    <div>
                      <p className="text-sm text-primary-foreground/70">Service</p>
                      <p className="font-medium">{quoteData.serviceTitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-tertiary" />
                    <div>
                      <p className="text-sm text-primary-foreground/70">Response type</p>
                      <p className="font-medium capitalize">{quoteData.urgency}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wrench className="h-5 w-5 text-tertiary" />
                    <div>
                      <p className="text-sm text-primary-foreground/70">Quote status</p>
                      <p className="font-medium">Confirmed after assessment</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="px-4 pb-20">
        <div className="container mx-auto section-padding">
          <FadeIn>
            <div className="mx-auto grid gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl">
                <img src={contact} alt="Plumbing service work in a home" className="min-h-[400px] h-full w-full object-cover" />
              </div>

              <div className="rounded-2xl bg-card p-8">
                <h2 className="mb-6 text-3xl font-bold text-black">{quoteData ? "Send your details" : "Tell us about the job"}</h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block font-medium text-black">Full name <span className="text-destructive">*</span></label>
                    <Input id="contact-name" className="h-12 bg-transparent" value={formData.fullName} onChange={(event) => setFormData({ ...formData, fullName: event.target.value })} required />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="mb-2 block font-medium text-black">Phone <span className="text-destructive">*</span></label>
                    <Input id="contact-phone" type="tel" placeholder="0113 418 2075" className="border-border bg-transparent" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} required />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="mb-2 block font-medium text-black">Email</label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" className="border-border bg-transparent" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                  </div>

                  {!quoteData && (
                    <div>
                      <label htmlFor="contact-service" className="mb-2 block font-medium text-black">Select a service</label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger id="contact-service" className="border-border bg-transparent">
                          <SelectValue placeholder="Choose a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.slug} value={service.slug}>{service.title}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-notes" className="mb-2 block font-medium text-black">Additional notes</label>
                    <Textarea id="contact-notes" placeholder="Tell us what is happening..." className="min-h-[120px] border-border bg-transparent" value={formData.notes} onChange={(event) => setFormData({ ...formData, notes: event.target.value })} />
                  </div>

                  <Button type="submit" className="w-full bg-primary py-6 text-primary-foreground hover:text-accent/80" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : quoteData ? "Submit quote request" : "Send message"}
                  </Button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="container-custom section-padding">
          <FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              {contactInfo.map((info) => (
                <article key={info.title} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="mb-1 text-xl font-bold text-black">{info.title}</h2>
                  <p className="mb-2 text-muted-foreground">{info.description}</p>
                  <a href={info.href} className="font-medium text-primary hover:underline">{info.value}</a>
                </article>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
