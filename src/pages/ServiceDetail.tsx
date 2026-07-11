import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getServiceBySlug, services } from "@/data/services";
import { useCreateServiceInquiry } from "@/hooks/useServiceInquiries";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";

// Validation schemas
const nameSchema = z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters");
const phoneSchema = z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters");

// FlipButton component
const FlipButton = ({
  children,
  variant = "primary"
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) => {
  const bgClass = variant === "primary" ? "bg-primary" : "bg-secondary";
  return (
    <button className={`group relative px-8 py-4 ${bgClass} rounded-full overflow-hidden`}>
      <span className="relative block overflow-hidden h-6">
        <span className="block transition-transform duration-300 group-hover:-translate-y-full text-white font-semibold">
          {children}
        </span>
        <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full text-white font-semibold">
          {children}
        </span>
      </span>
    </button>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  // Form state
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(slug || services[0].slug);
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const createInquiry = useCreateServiceInquiry();

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    const nameResult = nameSchema.safeParse(fullName);
    if (!nameResult.success) {
      newErrors.fullName = nameResult.error.errors[0].message;
    }

    const phoneResult = phoneSchema.safeParse(phone);
    if (!phoneResult.success) {
      newErrors.phone = phoneResult.error.errors[0].message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const selected = services.find((s) => s.slug === selectedService);
    const serviceName = selected?.title || service?.title || "Service";

    await createInquiry.mutateAsync({
      service_name: serviceName,
      full_name: fullName.trim(),
      phone: phone.trim(),
      note: note.trim() || null,
      user_id: null,
    });

    // Reset form on success
    setFullName("");
    setPhone("");
    setNote("");
    setErrors({});
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="container-custom section-padding py-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Service Not Found</h2>
          <p className="text-muted-foreground mb-8">We couldn't find the service you were looking for.</p>
          <Link to="/services">
            <FlipButton variant="primary">View All Services</FlipButton>
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Service Title Section */}
      <section className="bg-transparent py-12">
        <div className="container-custom section-padding py-12">
          {/* Breadcrumb */}
          <div className="text-muted-foreground text-sm mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary transition-colors">Service</Link>
          </div>

          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4">
              <h2 className="text-black text-5xl md:text-7xl font-bold">{service.title}</h2>
              <Link to="/quote">
                <FlipButton variant="primary">Get A Quote</FlipButton>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-muted-foreground text-lg max-w-xl mb-12">{service.description}</p>
          </FadeIn>

          {/* Hero Image */}
          <FadeIn delay={200}>
            <div className="rounded-xl overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section with Contact Form */}
      <section className="pt-16">
        <div className="container-custom section-padding">
          <div className="flex lg:flex-row flex-col gap-24">
            {/* Left - About Content */}
            <div className="w-full max-w-[640px]">
              <FadeIn>
                <p className="text-primary font-semibold mb-4">Service Details</p>
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">About this Service</h3>
              </FadeIn>

              <FadeIn delay={100}>
                <div className="text-muted-foreground font-medium leading-relaxed mb-8">
                  {service.aboutDescription}
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h4 className="text-2xl font-bold text-black mb-4">What is included?</h4>
                <div className="space-y-4">
                  {service.included.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <section className=" py-16 lg:py-32">
                <div className="container-custom">
                  <FadeIn>
                    <p className="text-primary font-bold mb-4">Working Process</p>
                    <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">How We Work</h3>
                    <p className="text-muted-foreground max-w-2xl mb-12">
                      Every project follows a clear, no-surprises process — from your first enquiry right through to the finished result.
                    </p>
                  </FadeIn>

                  <div className="grid md:grid-cols-2 gap-12">
                    {service.workSteps.map((step, index) => (
                      <FadeIn key={index} delay={index * 100}>
                        <div className="flex flex-col gap-4">
                          <div className="w-14 h-14 rounded-full border border-secondary flex items-center justify-center flex-shrink-0">
                            <span className="text-secondary font-bold">{String(index + 1).padStart(2, "0")}</span>
                          </div>
                          <div>
                            <h5 className="text-2xl font-bold text-black mb-2">{step.title}</h5>
                            <p className="text-muted-foreground font-medium">{step.description}</p>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </section>

              {/* Service Benefits Section */}
              <section className="pt-16">
                <div className="container-custom">
                  <div className="grid gap-16 items-center">
                    {/* Left - Benefits Content */}
                    <div>
                      <FadeIn>
                        <p className="text-primary font-bold mb-4">Benefits</p>
                        <h3 className="text-3xl md:text-5xl font-bold text-black mb-6">Service Benefits</h3>
                        <p className="text-muted-foreground font-medium mb-8">
                          A professional spray finish offers a practical, cost-effective way to refresh and protect your surfaces.
                        </p>
                      </FadeIn>

                      <FadeIn delay={100}>
                        <div className="space-y-4">
                          {service.benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-3">
                              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <p className="text-muted-foreground font-medium">{benefit}</p>
                            </div>
                          ))}
                        </div>
                      </FadeIn>
                    </div>

                    {/* Right - Image */}
                    <FadeIn delay={200}>
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[400px] object-cover"
                        />
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </section>
            </div>

            {/* Right - Contact Form */}
            <div className="flex sticky top-10 h-fit justify-end">
              <FadeIn className="w-[460px]" delay={300}>
                <div className="bg-[#f4f4f7]  p-8 rounded-xl">
                  <h4 className="text-3xl font-bold text-black mb-6">Get In Touch</h4>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div>
                      <label className=" font-bold text-black mb-2 block">Full Name</label>
                      <Input
                        className="bg-transparent h-12"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your name"
                      />
                      {errors.fullName && (
                        <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className=" font-bold text-black mb-2 block">Phone</label>
                      <Input
                        className="bg-transparent border-border h-12"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className=" font-bold text-black mb-2 block">Select A Service</label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger className="bg-transparent h-12 border-border">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.slug} value={s.slug}>
                              {s.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className=" font-bold text-black mb-2 block">Short Note</label>
                      <Textarea
                        placeholder="Type here.."
                        className="bg-transparent border-border min-h-[100px]"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-secondary/90 text-white py-6"
                      disabled={createInquiry.isPending}
                    >
                      {createInquiry.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>


      <CTA />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
