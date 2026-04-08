import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    id: "t1",
    quote:
      "Simply the best biryani I've ever tasted. The moment the matka was unsealed at the table, the aroma was something else entirely.",
    author: "Anjali R.",
    location: "Hyderabad",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "An unforgettable dining experience. The slow-cooked mutton just melts on the tongue. I've recommended Matka Biryani to everyone I know.",
    author: "David K.",
    location: "Bangalore",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Every spoonful is a burst of traditional flavor. The rice is perfectly cooked — each grain separate, fragrant, and full. Truly unmatched.",
    author: "Priya S.",
    location: "Mumbai",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "I've tried biryani across India and abroad. Nothing comes close to the depth of flavor you get from a clay-sealed dum pot. Matka Biryani nails it.",
    author: "Arjun M.",
    location: "Delhi",
    rating: 5,
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {STAR_KEYS.slice(0, count).map((key) => (
        <svg
          key={key}
          className="w-3.5 h-3.5 text-primary fill-current"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5Z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  item,
  delay,
}: { item: (typeof testimonials)[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      data-ocid={`testimonial-${item.id}`}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col bg-card rounded-sm p-7 shadow-card border border-border/20 transition-all duration-700 ease-out hover:shadow-elevated hover:-translate-y-0.5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Quote mark */}
      <span className="font-display text-4xl text-primary/30 leading-none mb-3 select-none">
        "
      </span>
      <StarRating count={item.rating} />
      <blockquote className="font-body text-sm text-muted-foreground leading-relaxed flex-1 italic">
        {item.quote}
      </blockquote>
      <div className="mt-6 pt-5 border-t border-border/30">
        <p className="font-body text-sm font-medium text-foreground">
          {item.author}
        </p>
        <p className="font-body text-xs text-muted-foreground mt-0.5">
          {item.location}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Guest Voices
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            What Our Guests Say
          </h2>
          <div className="w-12 h-px bg-primary mx-auto opacity-60" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.id} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
