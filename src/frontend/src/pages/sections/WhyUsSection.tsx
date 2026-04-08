import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reasons = [
  {
    id: "slow-dum",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="32"
          r="13"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M17 32 Q17 26 21 24 Q24 22 24 22 Q24 22 27 24 Q31 26 31 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 22 Q21 17 24 16 Q27 17 28 22"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M22 14 Q23 10 22 8"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M24 13 Q24 9 24 7"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M26 14 Q25 10 26 8"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    ),
    title: "Slow-Cooked Dum",
    desc: "4+ hours of patient, low-heat cooking in sealed clay pots — the only way real biryani is made.",
  },
  {
    id: "premium-ingredients",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M24 8 L28 18 L40 18 L30 25 L34 36 L24 29 L14 36 L18 25 L8 18 L20 18 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Premium Ingredients",
    desc: "Aged basmati rice, single-origin saffron, and whole spices sourced directly from farms.",
  },
  {
    id: "authentic-taste",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M14 24 C14 16 20 10 28 12 C34 13.5 38 19 36 26 C34 33 26 38 18 35 C12 32 14 24 14 24Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M20 24 C20 20 23 18 27 19 C30 20 32 23 31 27 C30 30 26 32 23 30 C20 28 20 24 20 24Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M24 8 C24 6 26 4 28 5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    title: "Authentic Taste",
    desc: "Recipes passed down through three generations — unchanged because perfection needs no update.",
  },
  {
    id: "hygienic",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M24 8 L36 14 L36 26 C36 33 30 39 24 41 C18 39 12 33 12 26 L12 14 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M18 24 L22 28 L30 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Hygienic Kitchen",
    desc: "Open kitchen philosophy — every step is clean, every surface is safe, and every cook is trained.",
  },
];

function ReasonCard({
  item,
  delay,
}: { item: (typeof reasons)[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col items-center text-center p-8 transition-all duration-700 ease-out group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
        {item.icon}
      </div>
      <div className="w-8 h-px bg-primary/40 mb-5" />
      <h3 className="font-display text-xl text-foreground mb-3">
        {item.title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-[220px]">
        {item.desc}
      </p>
    </div>
  );
}

export default function WhyUsSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();

  return (
    <section id="why-us" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            The Difference
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Why Choose Us
          </h2>
          <div className="w-12 h-px bg-primary mx-auto opacity-60" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <ReasonCard key={item.id} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
