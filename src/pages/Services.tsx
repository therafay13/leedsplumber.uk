import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { services } from "@/data/services";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-white pt-20">
        <div className="container-custom section-padding">
          <div className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Services</span>
          </div>

          <div className="mb-16 max-w-4xl">
            <FadeIn>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-tertiary">Our services</p>
              <h1 className="text-4xl font-bold text-black md:text-5xl lg:text-6xl">
                Plumbing <span className="text-tertiary">services</span>
              </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="mt-6 max-w-2xl border-l-2 border-tertiary pl-5">
                <p className="text-lg text-muted-foreground">
                  We provide emergency plumbing, repairs, drainage, bathrooms, radiators, showers and water-system support for homes and businesses across Leeds.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 100}>
                <Link to={`/services/${service.slug}`} className="block h-full">
                  <article className="group h-full cursor-pointer rounded-xl bg-card px-7 py-7 transition-all duration-300 hover:bg-primary">
                    <div className="relative mb-6 min-h-[300px] overflow-hidden rounded-md max-md:aspect-[3/2] max-md:min-h-0 md:max-lg:aspect-[3/2] md:max-lg:min-h-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-105 max-md:absolute max-md:inset-0 max-md:block md:max-lg:absolute md:max-lg:inset-0 md:max-lg:block"
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <h2 className="text-3xl font-bold text-black transition-colors duration-300 group-hover:text-white">
                        {service.title}
                      </h2>
                      <span className="text-sm font-bold text-primary transition-colors duration-300 group-hover:text-tertiary">{service.number}</span>
                    </div>
                    <p className="leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/80">
                      {service.description}
                    </p>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Services;
