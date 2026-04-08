import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const dishes = [
  {
    id: "Masala Chiken Matka Biryani",
    name: "the royal Masala Chiken Matka Biryani",
    description:
      "Fragrant basmati rice layered with slow-cooked chicken in rich Mughlai spice gravy, sealed and dum-cooked in a clay pot.",
    price: "₹169",
    tag: "Chef's Choice",
    image: "/assets/generated/dish-mughlai.dim_600x400.jpg",
  },
  {
    id: "Sweet Raita",
    name: "Sweet Raita with bundi",
    description:
      "Sweet Raita with bundi, perfect for cooling down the heat of the biryani and have a theeka meetha experience.",
    price: "₹19",
    tag: "must have",
    image: "/assets/generated/dish-hyderabadi.dim_600x400.jpg",
  },
  {
    id: "Normal raita",
    name: "Normal raita",
    description:
      "Normal raita with cucumber and onion",
    price: "*free with biryani",
    tag: "should try",
    image: "/assets/generated/dish-zafrani.dim_600x400.jpg",
  },
  {
    id: "Roasted Chiken",
    name: "Roasted Chiken in afgani style",
    description:
      "Roasted chicken marinated in afgani spices and herbs , add and extra kick to your biryani",
    price: "₹100",
    tag: "Seasonal",
    image: "/assets/generated/dish-prawn.dim_600x400.jpg",
  },
];

function DishCard({
  dish,
  delay,
}: { dish: (typeof dishes)[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex flex-col bg-card rounded-sm overflow-hidden shadow-card transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-elevated ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Tag */}
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary/90 text-primary-foreground font-body text-xs tracking-wider rounded-sm">
          {dish.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-xl text-foreground mb-2 leading-snug">
          {dish.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
          {dish.description}
        </p>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/40">
          <span className="font-display text-lg text-primary">
            {dish.price}
          </span>
          <button
            type="button"
            data-ocid={`dish-order-${dish.id}`}
            onClick={() => window.open(`https://wa.me/919211576460?text=Hello%20Matka%20Biryani!%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(dish.name)}.`, "_blank")}
            className="font-body text-xs tracking-wider uppercase text-foreground/70 hover:text-primary transition-colors duration-200 flex items-center gap-1.5 p-1"
          >
            Order →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SignatureDishesSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headingVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
            }`}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Our Menu
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Signature Dishes
          </h2>
          <div className="w-12 h-px bg-primary mx-auto opacity-60" />
          <p className="font-body text-base text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed">
            Each biryani is crafted using centuries-old dum technique —
            slow-cooked in sealed clay pots to lock in every drop of flavor.
          </p>
        </div>

        {/* Dishes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
