import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  const { ref: heroRef, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-biryani.dim_1920x1080.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay — bottom to top + left fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, oklch(0.10 0 0 / 0.94) 0%, oklch(0.10 0 0 / 0.78) 45%, oklch(0.10 0 0 / 0.30) 100%), linear-gradient(to top, oklch(0.10 0 0 / 0.70) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div
          className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Eyebrow */}
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-5">
            Cooked fresh. Not reheated
          </p>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-foreground mb-6">
            Authentic Dum&nbsp;Biryani,{" "}
            <span className="italic text-primary">Sealed with Tradition</span>
          </h1>

          {/* Subtext */}
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
            Experience the timeless art of slow-cooking, where rich flavors and
            aromatic spices are nurtured within a sealed clay pot for an
            unparalleled culinary journey.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              data-ocid="hero-order-cta"
              onClick={() => window.open("https://wa.me/919211576460?text=Hello%20Matka%20Biryani!%20I%20would%20like%20to%20place%20an%20order.", "_blank")}
              className="px-8 py-3.5 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:bg-primary/90 transition-smooth shadow-elevated"
            >
              Order Now
            </button>
            <button
              type="button"
              data-ocid="hero-menu-cta"
              onClick={() => scrollTo("#menu")}
              className="px-8 py-3.5 border border-foreground/20 text-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:border-primary/60 hover:text-primary transition-smooth"
            >
              View Menu
            </button>
          </div>

          {/* Stats strip */}
          <div className="flex gap-10 mt-14 pt-8 border-t border-foreground/10">
            {[
              { value: "26+", label: "Years Legacy" },
              { value: "15K+", label: "Happy Guests" },
              { value: "100%", label: "Dum Cooked" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl text-primary">
                  {stat.value}
                </p>
                <p className="font-body text-xs text-muted-foreground tracking-wide mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
}
