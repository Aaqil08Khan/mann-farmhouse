import { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/constants/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#enquiry" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-gold/30 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Leaf className="w-7 h-7 text-gold" />
            <span className={`font-display font-bold text-[28px] tracking-widest ${scrolled ? "text-forest" : "text-white"}`}>
              MANN
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full ${
                  scrolled ? "text-forest hover:text-gold" : "text-white/90 hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in booking Mann Farmhouse.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-forest font-body font-bold text-sm uppercase tracking-wider px-6 h-12 rounded-full flex items-center hover:bg-gold-light transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden"
          >
            <Menu className={`w-7 h-7 ${scrolled ? "text-forest" : "text-white"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-forest flex flex-col items-center justify-center">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6"
          >
            <X className="w-8 h-8 text-gold" />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl font-bold text-gold hover:text-gold-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in booking Mann Farmhouse.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gold text-forest font-body font-bold uppercase tracking-wider px-8 h-14 rounded-full flex items-center hover:bg-gold-light transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
