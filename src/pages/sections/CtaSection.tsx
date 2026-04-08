import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function CtaSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, oklch(0.72 0.22 48) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-6 text-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-5">
          Ready to Order?
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-5 leading-tight">
          Craving Real <span className="italic text-primary">Biryani?</span>
        </h2>
        <div className="w-12 h-px bg-primary mx-auto opacity-60 mb-8" />
        <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto">
          Indulge in an authentic clay pot experience. Reserve your table or
          order online for delivery — and taste the difference of real dum.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            type="button"
            data-ocid="cta-order-now"
            onClick={() => window.open("https://wa.me/919211576460?text=Hello%20Matka%20Biryani!%20I%20would%20like%20to%20place%20an%20order.", "_blank")}
            className="px-10 py-3.5 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wider rounded-sm hover:bg-primary/90 transition-smooth shadow-elevated"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
