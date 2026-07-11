import sprayTeamImage from "@/assets/about-hero-1.png";
import mission from "@/assets/mission-1.png";
import vision from "@/assets/mission-2.png";
import profile1 from "@/assets/profile-1.png";
import profile2 from "@/assets/profile-2.png";
import profile3 from "@/assets/profile-3.png";
import profile4 from "@/assets/profile-4.png";
import profile5 from "@/assets/profile-5.png";
import profile6 from "@/assets/profile-6.png";
import heroGrid1 from "@/assets/timeline-1.png";
import heroGrid2 from "@/assets/timeline-2.png";
import heroGrid3 from "@/assets/timeline-3.png";
import heroGrid4 from "@/assets/timeline-4.png";
import CounterAnimation from "@/components/CounterAnimation";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle2, Clock3, Heart, Shield, ShieldCheck, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const stats = [{
  value: 25,
  suffix: "+",
  label: "Year Experience",
  decimals: 0
}, {
  value: 1.2,
  suffix: "k+",
  label: "Projects Sprayed",
  decimals: 1
}, {
  value: 100,
  suffix: "%",
  label: "Cheshire Based",
  decimals: 0
}, {
  value: 3,
  suffix: "+",
  label: "Sectors Served",
  decimals: 0
}];
// UNVERIFIED: specific years/milestones below are placeholder/illustrative,
// not confirmed against real business history — must be verified with client
// before launch.
const timelineData = [{
  year: "1999",
  title: "Started In uPVC Fabrication",
  description: "The story began in a small Cheshire uPVC fabrication workshop — learning how every frame, seal and finish is built from the inside out.",
  image: heroGrid1,
  position: "left"
}, {
  year: "2008",
  title: "First On-Site Resprays",
  description: "We took spraying out of the factory and onto driveways and front elevations — refreshing uPVC and garage doors at a fraction of replacement cost.",
  image: heroGrid2,
  position: "right"
}, {
  year: "2015",
  title: "Kitchen Spray Booth",
  description: "Invested in a full workshop spray booth so kitchen cabinets, wardrobes and joinery could be finished to factory standard, then re-fitted at home.",
  image: heroGrid3,
  position: "left"
}, {
  year: "Today",
  title: "Cheshire's Spraying Specialists",
  description: "Now a small, expert team covering all of Cheshire and Ellesmere Port — domestic, commercial and industrial — with the same tidy, workshop-grade ethos.",
  image: heroGrid4,
  position: "right"
}];
const coreValues = [{
  title: "Workshop-Grade Finish",
  description: "Every coat applied with the same precision you'd expect from a factory paint line — on-site or in our booth.",
  icon: Users
}, {
  title: "Minimal Disruption",
  description: "Kitchens stay usable, businesses keep trading. We work around your day, not the other way round.",
  icon: Zap
}, {
  title: "Out-Of-Hours Commercial",
  description: "Shop fronts, offices and units sprayed evenings and weekends to protect your trading hours.",
  icon: Clock3
}, {
  title: "Tidy Workspace Ethos",
  description: "Dust sheets, masking, containment — we leave your home or premises as clean as we found them.",
  icon: Heart
}, {
  title: "Honest Quoting",
  description: "Free site visit, fixed written quote, no surprises. The price we agree is the price you pay.",
  icon: Shield
}, {
  title: "Safety & PPE First",
  description: "Full RPE, extraction and surface containment on every job, every time — domestic or industrial.",
  icon: ShieldCheck
}];
const missionFeatures = [
  "Save customers the cost and waste of replacing kitchens, uPVC and garage doors when they can be sprayed instead.",
  "Deliver a hand-finished, factory-grade result on every single project — large or small.",
  "Treat every home and premises with respect: clean masking, dust containment, tidy hand-over."
];
const visionFeatures = [
  "Be the spray painting specialist Cheshire's homeowners and businesses recommend by name.",
  "Keep investing in better booths, better guns and better coatings so the finish only ever improves.",
  "Reduce landfill from replaced kitchens and uPVC across the North West through high-quality respraying."
];
const teamMembers = [{
  name: "Lead Spray Technician",
  role: "Kitchens & Joinery",
  image: profile1
}, {
  name: "uPVC & Exterior Specialist",
  role: "On-Site Spraying",
  image: profile2
}, {
  name: "Workshop Finisher",
  role: "Wardrobes & Furniture",
  image: profile3
}, {
  name: "Industrial Coatings Lead",
  role: "Steelwork & Plant",
  image: profile4
}, {
  name: "Commercial Project Manager",
  role: "Shop Fronts & Retail",
  image: profile5
}, {
  name: "Apprentice Sprayer",
  role: "Prep & Masking",
  image: profile6
}];

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedYears, setAnimatedYears] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const timelineHeight = timelineRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline has been scrolled past
      const startOffset = windowHeight * 0.9; // Start filling when timeline is 10% from top
      const scrolled = startOffset - rect.top;
      const totalScrollable = timelineHeight + startOffset - windowHeight * 0.3;

      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Track which years have become active
      timelineData.forEach((_, index) => {
        const itemProgress = (index + 1) / timelineData.length;
        const isActive = progress >= itemProgress - 0.15;
        if (isActive && !animatedYears.has(index)) {
          setAnimatedYears(prev => new Set(prev).add(index));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedYears]);
  return <div className="min-h-screen">
    <Header />
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pb-32 bg-primary-foreground text-primary">
        <div className="container-custom section-padding text-primary-foreground">
          <FadeIn>
            <div className="flex lg:flex-row w-full flex-col gap-12 items-start lg:items-end justify-between mb-12">
              <div>
                <h1 className="leading-tight text-black font-bold text-4xl md:text-5xl lg:text-6xl">
                  Most things don't need<br />replacing. They need <span className="text-tertiary">finishing.</span>
                </h1>
              </div>
              <div className="flex max-w-[468px] items-center">
                <p className="text-black text-justify">
                  We're Cheshire's spray painting specialists — 25 years respraying kitchens, uPVC, garage doors and shop fronts to a workshop-grade finish, in your home, around your day, for a fraction of the cost of replacement.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            {/* Hero Image with Stats */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img src={sprayTeamImage} alt="Quality Spraying Service" className="w-full h-[400px] lg:h-[500px] object-cover" />
              </div>

              {/* Stats Overlay */}
              <div className="mt-4 md:mt-0 md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 bg-white rounded-2xl shadow-xl px-4 md:px-8 py-6">
                <div className="grid grid-cols-2 gap-4 md:flex md:divide-x md:divide-gray-200 md:gap-0">
                  {stats.map((stat, index) => <div key={index} className="text-center md:px-6 md:first:pl-0 md:last:pr-0">
                    <div className="flex items-baseline justify-center gap-0.5 text-2xl md:text-4xl lg:text-5xl font-bold mb-1 text-primary">
                      <CounterAnimation
                        target={stat.value}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                        duration={2000}
                        suffixClassName="text-tertiary "
                      />
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                  </div>)}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 lg:py-40 bg-primary">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <p className="text-tertiary font-bold mb-4">Our Story</p>
            <h2 className="text-white">Know More About Us</h2>
          </div>

          {/* Timeline */}
          <div className="relative" ref={timelineRef}>
            {/* Center Line - Background */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2 hidden lg:block" />

            {/* Center Line - Animated Fill */}
            <div
              className="absolute left-1/2 top-0 w-0.5 bg-tertiary -translate-x-1/2 hidden lg:block transition-all duration-100 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />

            <div className="space-y-16">
              {timelineData.map((item, index) => {
                const itemProgress = (index + 1) / timelineData.length;
                const isActive = scrollProgress >= itemProgress - 0.15;
                const hasBeenAnimated = animatedYears.has(index);
                const shouldAnimate = hasBeenAnimated && isActive;

                return (
                  <FadeIn key={index} delay={index * 150}>
                    <div className={`flex flex-col lg:flex-row items-center gap-8 ${item.position === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Image Side */}
                      <div className={`w-full lg:w-5/12 transition-all duration-700 ${shouldAnimate
                        ? 'opacity-100 translate-y-0'
                        : hasBeenAnimated
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                        }`}>
                        <div className="rounded-2xl overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                        </div>
                        {item.position === 'left' && <div className="mt-6 lg:block hidden">
                          <h4 className="text-white font-bold mb-2">{item.title === "Our Journey" || item.title === "Cheshire Spraying Specialists Overview" ? item.title : ""}</h4>
                          {(item.title === "Our Journey" || item.title === "Cheshire Spraying Specialists Overview") && <p className="text-white/60 text-sm">{item.description}</p>}
                        </div>}
                      </div>

                      {/* Year Badge */}
                      <div className="lg:w-2/12 flex justify-center relative">
                        <div
                          className={`font-bold px-4 py-2 rounded-full text-sm z-10 transition-all duration-500 ${isActive
                            ? 'bg-tertiary text-primary scale-110'
                            : 'bg-white/20 text-white/60'
                            }`}
                        >
                          {item.year}
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className={`w-full lg:w-5/12 transition-all duration-700 ${shouldAnimate
                        ? 'opacity-100 translate-y-0'
                        : hasBeenAnimated
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                        }`}>
                        <h4 className={`font-bold mb-3 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/60'}`}>{item.title}</h4>
                        <p className={`text-sm leading-relaxed transition-colors duration-500 ${isActive ? 'text-white/80' : 'text-white/40'}`}>{item.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-32 bg-[#F0F3F8]">
        <div className="container-custom section-padding">
          {/* Header Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-secondary font-bold mb-4">Values</p>
              <h2 className="text-primary">Our Core Values</h2>
            </div>
            <div className="flex items-center">
              <p className="text-muted-foreground">
                We built this business on the belief that most things don't need replacing — they just need the right finish. Every value below comes back to that: do the job properly, leave the site cleaner than you found it, and price it honestly.
              </p>
            </div>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => <FadeIn key={index} delay={index * 100}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-tertiary" />
                </div>
                <h5 className="text-primary font-bold mb-3">{value.title}</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </FadeIn>)}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-20">
            <p className="text-secondary font-bold mb-4">Mission & Vision</p>
            <h2 className="text-black font-bold">Turning Your Spraying<br />Needs into Reality</h2>
          </div>

          <div className="space-y-24">
            {/* Mission */}
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="rounded-2xl overflow-hidden">
                  <img src={mission} alt="Our Mission" className="w-full h-80 lg:h-96 object-cover" />
                </div>
                <div>
                  <h3 className="text-black font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground mb-8 font-semibold text-justify leading-relaxed">
                    At Cheshire Spraying Specialists, our mission is simple: to save homeowners and businesses from the unnecessary cost and waste of replacement. Whether it's a kitchen that still works perfectly, uPVC that just needs a fresh colour, or a shop front that should look sharp again — we spray it, finish it to a workshop standard, and make it last.
                  </p>
                  <ul className="space-y-4">
                    {missionFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-1 text-secondary fill-primary stroke-white flex-shrink-0" />
                      <span className="text-muted-foreground text-lg">{feature}</span>
                    </li>)}
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                <div>
                  <h3 className="text-black font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground mb-8 font-semibold text-justify leading-relaxed">
                    Our vision is to be the spray painting contractor Cheshire recommends by name. Not the biggest — the most trusted. We invest in better equipment and better coatings every year, because the only direction the standard of finish should move is up.
                  </p>
                  <ul className="space-y-4">
                    {visionFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-1 text-secondary fill-primary stroke-white flex-shrink-0" />
                      <span className="text-muted-foreground text-lg">{feature}</span>
                    </li>)}
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img src={vision} alt="Our Vision" className="w-full h-80 lg:h-96 object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-[#F5F7FA]">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <p className="text-secondary font-bold mb-4">Our Experts</p>
            <h2 className="text-primary">Meet Our Expert Spray Painters</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {teamMembers.map((member, index) => <FadeIn key={index} delay={index * 80}>
              <div className="bg-white rounded-2xl p-6 transition-all duration-300 group">
                <div className="rounded-xl overflow-hidden mb-4 group-hover:bg-accent bg-[#E8ECF4]">
                  <img src={member.image} alt={member.name} className="h-[460px] object-cover group-hover:scale-105 transition-all duration-300" />
                </div>
                <h5 className="text-secondary font-bold transition-colors">{member.name}</h5>
                <p className="text-muted-foreground text-base transition-colors">{member.role}</p>
              </div>
            </FadeIn>)}
          </div>
        </div>
      </section>

      <CTA />
    </main>
    <Footer />
  </div>;
};
export default About;