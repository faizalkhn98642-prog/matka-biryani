import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

function MatkaLogo() {
  return (
    <span className="text-primary">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="18"
          cy="24"
          rx="11"
          ry="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 24 Q8 18 11 14 Q14 10 18 10 Q22 10 25 14 Q28 18 27 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 10 Q15 6 18 5 Q21 6 22 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M16 18 Q18 16 20 18"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M15 21 Q18 19 21 21"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M14 8 Q15 4 16 3"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M18 7 Q18 3 18 2"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M22 8 Q21 4 20 3"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </span>
  );
}

function scrollTo(href: string, close?: () => void) {
  close?.();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2.5 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <MatkaLogo />
          <span className="font-display text-xl text-foreground leading-tight">
            <span className="block text-xs font-body text-primary tracking-[0.2em] uppercase">
              Matka
            </span>
            <span className="block text-base leading-none">Biryani</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                data-ocid={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                onClick={() => scrollTo(link.href)}
                className="font-body text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            data-ocid="nav-order-cta"
            onClick={() => window.open("https://wa.me/919211576460?text=Hello%20Matka%20Biryani!%20I%20would%20like%20to%20place%20an%20order.", "_blank")}
            className="px-5 py-2 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-smooth tracking-wide"
          >
            Order Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          data-ocid="nav-hamburger"
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border/40 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href, () => setMenuOpen(false))}
              className="font-body text-base text-muted-foreground hover:text-primary transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              window.open("https://wa.me/919211576460?text=Hello%20Matka%20Biryani!%20I%20would%20like%20to%20place%20an%20order.", "_blank");
            }}
            className="mt-2 px-5 py-2.5 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm w-full"
          >
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
