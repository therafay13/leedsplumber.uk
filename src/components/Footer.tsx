import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FlipButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button variant="nav-cta" size="default" className="group relative overflow-hidden">
      <span className="flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
        <Phone className="h-4 w-4" />
        {children}
      </span>
      <span className="absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        <Phone className="h-4 w-4" />
        {children}
      </span>
    </Button>
  );
};

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <a href={href} className="group relative block h-5 overflow-hidden text-sm text-white/60 transition-colors hover:text-tertiary">
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">{children}</span>
      <span className="absolute inset-0 flex items-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">{children}</span>
    </a>
  );
};

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [{ name: "Plumbing Services", href: "/services" }],
  resources: [{ name: "Privacy Policy", href: "/privacy-policy" }],
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mb-12">
          <div className="col-span-2">
            <Logo isDark />
            <p className="mt-4 mb-6 max-w-sm text-white/70">
              24-hour plumbing and drainage support across Leeds. No call-out charge, free quotes, and a direct line to the team.
            </p>

            <div className="mt-6">
              <a href="tel:+441134182075">
                <FlipButton>Call 0113 418 2075</FlipButton>
              </a>
            </div>
          </div>

          <div>
            <h6 className="mb-4 font-semibold text-white">Company</h6>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <FlipLink href={link.href}>{link.name}</FlipLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-4 font-semibold text-white">Services</h6>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <FlipLink href={link.href}>{link.name}</FlipLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h6 className="mb-4 font-semibold text-white">Contact</h6>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-tertiary" />
                <a href="tel:+441134182075" className="text-sm text-white/70 transition-colors hover:text-white">
                  0113 418 2075
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-tertiary" />
                <a
                  href="https://www.google.com/maps?q=51+Whinmoor+Crescent+Leeds+LS14+1NJ"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  51 Whinmoor Crescent,
                  <br />
                  Leeds, LS14 1NJ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Leedsplumber.uk, trading name of John McGinty Plumbing Services.
            </p>
            <div className="flex gap-6">
              {footerLinks.resources.map((link) => (
                <Link key={link.name} to={link.href} className="text-sm text-white/50 transition-colors hover:text-white">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
