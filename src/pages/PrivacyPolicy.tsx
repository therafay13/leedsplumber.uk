import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container-custom mx-auto section-padding text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">Privacy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground font-medium">
              Last Updated: June 2025
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="space-y-12">
              {/* Who We Are */}
              <div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Who We Are
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cheshire Spraying Specialists is a spray painting and surface coating business based in Neston, Cheshire. We operate across Cheshire and the surrounding area, providing kitchen resprays, uPVC spraying, garage door resprays, fascia and soffit coatings, and commercial spray painting services. This privacy policy explains how we collect, use, and protect your personal information when you use this website or contact us for a quote.
                  </p>
                  <p>
                    If you have any questions about this policy, contact us at: cheshiresprayingspecialists@gmail.com or by calling 07882 395895.
                  </p>
                </div>
              </div>

              {/* What Information We Collect */}
              <div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  What Information We Collect
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    When you submit an enquiry, request a quote, or contact us through this website, we collect the information you provide in the form — typically your name, phone number, email address, and details about the work you require. We do not collect payment card details through this website.
                  </p>
                  <p>
                    We may also receive basic technical information about your visit, such as your browser type and the pages you viewed, but this is not linked to your personal identity.
                  </p>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We use the information you submit solely to respond to your enquiry, prepare a quote, or arrange a site visit. We do not use your information for any automated profiling or decision-making. We do not sell, rent, or share your personal information with third-party marketing organisations.
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>To respond to your quote request or enquiry</li>
                    <li>To arrange a site visit or follow up on a job</li>
                    <li>To contact you about work we have completed for you</li>
                  </ul>
                </div>
              </div>

              {/* How Long We Keep Your Information */}
              <div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  How Long We Keep Your Information
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We keep your contact details and job information for as long as is reasonably necessary to complete the work and comply with any legal obligations. If you ask us to delete your information, we will do so promptly unless we are required to retain it by law.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Cookies
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    This website uses only the cookies necessary to make it function correctly. We do not use advertising or analytics tracking cookies. If this changes in the future, this policy will be updated and you will be informed via a cookie consent notice.
                  </p>
                </div>
              </div>

              {/* Your Rights Under UK GDPR */}
              <div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  Your Rights Under UK GDPR
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Under UK data protection law, you have the right to access the personal information we hold about you, to request that we correct inaccurate information, and to request deletion of your information. You also have the right to object to certain uses of your information.
                  </p>
                  <p>
                    To exercise any of these rights, contact us at cheshiresprayingspecialists@gmail.com. We will respond within one calendar month.
                  </p>
                </div>
              </div>

              {/* How to Make a Complaint */}
              <div>
                <h2 className="text-4xl font-bold text-black mb-4">
                  How to Make a Complaint
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    If you believe we have not handled your personal information correctly, you have the right to make a complaint to the Information Commissioner's Office (ICO) — the UK regulator for data protection. You can contact the ICO at ico.org.uk or by calling 0303 123 1113.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
