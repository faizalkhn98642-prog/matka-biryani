import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

function MatkaLogoSmall() {
  return (
    <span className="text-primary">
      <svg
        width="28"
        height="28"
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

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Menu", href: "#menu" },
  { label: "The Tradition", href: "#story" },
  { label: "Why Choose Us", href: "#why-us" },
];

const socialLinks = [
  {
    icon: <SiInstagram size={16} />,
    label: "Instagram",
    href: "https://instagram.com/matkabiryani",
  },
  {
    icon: <SiFacebook size={16} />,
    label: "Facebook",
    href: "https://facebook.com/matkabiryani",
  },
  {
    icon: <SiX size={16} />,
    label: "X (Twitter)",
    href: "https://x.com/matkabiryani",
  },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      id="contact"
      className="bg-card border-t border-border/30 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <MatkaLogoSmall />
              <span className="font-display text-lg text-foreground">
                Matka Biryani
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-[220px]">
              Slow-cooked dum biryani sealed with tradition — since 1997.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-5">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label={link.label}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+911234567890"
                  className="flex items-start gap-2.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  +91 12345 67890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@matkabiryani.com"
                  className="flex items-start gap-2.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  info@matkabiryani.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 font-body text-sm text-muted-foreground">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>
                    Banjara Hills, Hyderabad,
                    <br />
                    Telangana 500034
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/30 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {year} Matka Biryani. All Rights Reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
