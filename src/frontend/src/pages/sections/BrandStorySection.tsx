import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function BrandStorySection() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({
    threshold: 0.15,
  });
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal({
    threshold: 0.15,
  });

  return (
    <section id="story" className="py-24 md:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div
          ref={imgRef}
          className={`relative transition-all duration-900 ease-out ${
            imgVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }`}
          style={{ transitionDuration: "900ms" }}
        >
          <div className="relative rounded-sm overflow-hidden">
            <img
              src="/assets/generated/story-cooking.dim_800x600.jpg"
              alt="Traditional dum cooking process at Matka Biryani"
              className="w-full h-[480px] md:h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>

          {/* Floating accent card */}
          <div className="absolute -bottom-6 -right-6 bg-card p-6 max-w-[200px] shadow-elevated rounded-sm hidden md:block">
            <p className="font-display text-3xl text-primary leading-none">
              26
            </p>
            <p className="font-body text-xs text-muted-foreground mt-1 leading-snug tracking-wide uppercase">
              Years of
              <br />
              Authentic Cooking
            </p>
          </div>

          {/* Gold accent line */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-primary/40 rounded-tl-sm hidden md:block" />
        </div>

        {/* Text side */}
        <div
          ref={textRef}
          className={`transition-all duration-900 ease-out ${
            textVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDuration: "900ms", transitionDelay: "150ms" }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Our Legacy
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Our Legacy of{" "}
            <span className="italic text-primary">Slow-Cooking.</span>
          </h2>
          <div className="w-10 h-px bg-primary opacity-60 mb-8" />

          <div className="space-y-5">
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Embracing centuries-old{" "}
              <em className="text-foreground/80 not-italic font-medium">
                'Dum-Pukht'
              </em>{" "}
              techniques, we seal each Matka Biryani with fragrant dough,
              allowing fresh, authentic spices to weave their magic as the
              biryani cooks slowly over low heat — preserving every drop of
              flavor and aroma.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              The clay pot is not just a vessel. It breathes. It absorbs the
              spices, it tempers the heat, and it transforms raw ingredients
              into a dish that carries the memory of a thousand meals.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Every matka that leaves our kitchen has been touched by hands that
              have spent decades perfecting a single craft — the art of real
              biryani.
            </p>
          </div>

          {/* Feature callouts */}
          <div className="grid grid-cols-2 gap-5 mt-10">
            {[
              {
                title: "Sealed Dum",
                desc: "Dough-sealed matkas lock in aroma",
              },
              { title: "Low & Slow", desc: "4+ hours of patient cooking" },
              { title: "Wild Spices", desc: "Whole spices from source farms" },
              { title: "No Shortcuts", desc: "Every step done the old way" },
            ].map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-primary/40 pl-4"
              >
                <p className="font-body text-sm font-medium text-foreground">
                  {item.title}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
