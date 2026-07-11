import FadeIn from "@/components/FadeIn";
import { Quote, Star } from "lucide-react";

// Real testimonials pulled verbatim from the live old site
// (cheshiresprayingspecialists.co.uk/testimonials). The source site carries
// no customer names, so reviews are unattributed — no invented names or
// locations, and no stock photos presented as real customer avatars.
const testimonials = [{
  text: "Highly recommended we absolutely love what you have done. Saved us so much money with not replacing. Easy to organise with. Trustworthly to be in the house when not there. Will most definitely be in touch for more work. Thank you so very much. Such an amazing job."
}, {
  text: "Done a fantastic job with my kitchen. Very professional company, everything was tidied up afterwards, there was no mess. Would definitely recommend them, very reliable, you won't be disappointed."
}, {
  text: "These 2 boys came & done a fabulous job on my garage door, house doors & windows I would highly recommend them they are professional, punctual & very clean workers so get on them now"
}, {
  text: "Great job done!"
}, {
  text: "Absolutely Perfect! No mess, such tidy hard working lads, they made my 15yr old kitchen look brand new! Thank you!"
}, {
  text: "They came round to do my Mum's bedroom & done a perfect job, they were never late & worked until they had finished what they were doing. Would recommend to anyone looks amazing!"
}, {
  text: "Such hard workers & my wardrobes look brand new! Deffo recommend!"
}, {
  text: "Absolutely thrilled with the transformation of my garage door. Thank you Cheshire Spraying Specialists for doing such a fantastic job. 100% recommended."
}, {
  text: "Well what can I say, I absolutely love my room. You guys have done an amazing job, 5 Star. Great local guys wish you all the luck in the world with your business (I'm still looking for things to spray)!"
}];

const TestimonialCard = ({
  text
}: typeof testimonials[0]) => <div className="bg-white rounded-2xl p-6 w-[320px] max-w-[320px] flex-shrink-0 flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <Quote className="w-8 h-8 text-tertiary/40" />
      <div className="flex gap-0.5">
        {Array.from({
          length: 5
        }).map((_, i) => <Star key={i} className="w-4 h-4 fill-tertiary text-tertiary" />)}
      </div>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{text}</p>
    <p className="text-secondary font-semibold text-sm mt-4 pt-4 border-t border-gray-100">Verified Customer</p>
  </div>;

const Testimonials = () => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  return <section className="py-20 lg:py-32 bg-primary overflow-hidden">
    <div className="container-custom section-padding">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
        <div>
          <FadeIn>
            <p className="text-tertiary font-medium mb-4 uppercase tracking-widest text-sm">Testimonials</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-white">
              What Cheshire
              <br />
              Customers Say
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={200}>
          <p className="text-white max-w-xl mt-6 lg:mt-0">
            Homeowners and businesses across Cheshire, Wirral and Ellesmere Port choose us because we treat every spray job — large or small — with the same workshop-grade care.
          </p>
        </FadeIn>
      </div>
    </div>

    {/* Marquee Row 1 - Slides Left */}
    <FadeIn delay={300}>
      <div className="relative mb-4">
        <div className="flex gap-4 animate-marquee-left w-max">
          {duplicatedTestimonials.map((testimonial, index) => <TestimonialCard key={`row1-${index}`} {...testimonial} />)}
        </div>
      </div>
    </FadeIn>

    {/* Marquee Row 2 - Slides Right */}
    <FadeIn delay={400} className="hidden md:block">
      <div className="relative">
        <div className="flex gap-4 animate-marquee-right w-max">
          {duplicatedTestimonials.map((testimonial, index) => <TestimonialCard key={`row2-${index}`} {...testimonial} />)}
        </div>
      </div>
    </FadeIn>
  </section>;
};
export default Testimonials;
