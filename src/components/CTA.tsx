import heroPlumber from "@/assets/hero-plumber.jpg";
import FadeIn from "@/components/FadeIn";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FlipButton = ({
  children,
  variant = "light"
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) => {
  const bgClass = variant === "light"
    ? "bg-tertiary text-primary hover:bg-tertiary/90"
    : "bg-primary text-white hover:bg-primary/90";
  return (
    <Button size="default" className={`group relative overflow-hidden font-semibold rounded-full px-6 ${bgClass}`}>
      <span className="flex items-center gap-2 font-bold transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
        {variant === "dark" && <Phone className="h-4 w-4" />}
        {children}
      </span>
      <span className="absolute inset-0 flex font-bold items-center justify-center gap-2 transition-all duration-300 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        {variant === "dark" && <Phone className="h-4 w-4" />}
        {children}
      </span>
    </Button>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container-custom section-padding">
        <FadeIn>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Card - with image */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden relative min-h-[320px]">
              {/* Background Image */}
              <img
                src={heroPlumber}
                  alt="Spray painter respraying uPVC window"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/65 to-transparent" />
              {/* Content */}
              <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-center h-full max-w-md">
                  <p className="text-tertiary text-sm font-medium mb-3 uppercase tracking-widest">Ready to refresh, not replace?</p>
                  <h2 className="text-white mb-8">Let's spray your project.</h2>
                <div>
                  <Link to="/quote">
                    <FlipButton variant="light">Get A Quote</FlipButton>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-primary rounded-3xl p-8 lg:p-10 flex flex-col justify-center min-h-[320px]">
              {/* Logo */}
              <div className="mb-6">
                <Logo isDark />
              </div>
              {/* Text */}
              <p className="text-white font-semibold text-xl leading-relaxed mb-8">
                Speak directly with the team at Cheshire Spraying Specialists — we'll talk through your project and book a free site visit.
              </p>
              {/* Button */}
              <Link to="tel:+447882395895">
                <FlipButton variant="light">Call 07882 395895</FlipButton>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;