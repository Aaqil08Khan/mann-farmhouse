import { Leaf, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { ADDRESS, PHONE_NUMBER, EMAIL } from "@/constants/data";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#enquiry" },
];

const Footer = () => (
  <footer className="bg-forest botanical-bg pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      {/* Logo + tagline */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-3">
          <Leaf className="w-7 h-7 text-gold" />
          <span className="font-display font-bold text-3xl tracking-widest text-white">MANN</span>
        </div>
        <span className="font-label italic text-gold text-sm">Your Celebratory Escape Into Nature</span>
      </div>

      {/* 3 columns */}
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-body text-white/70 hover:text-gold transition-colors text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-display text-lg font-bold text-white mb-4">Contact Us</h4>
          <div className="space-y-3">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <p className="font-body text-white/70 text-sm">{ADDRESS}</p>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <Phone className="w-4 h-4 text-gold" />
              </div>
              <p className="font-body text-white/70 text-sm">{PHONE_NUMBER}</p>
            </div>
            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <Mail className="w-4 h-4 text-gold" />
              </div>
              <p className="font-body text-white/70 text-sm">{EMAIL}</p>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-display text-lg font-bold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-white/70 hover:text-gold transition-colors">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gold/30 mb-6" />

      {/* Bottom */}
      <p className="text-center font-body text-white/40 text-sm">
        © 2025 Mann Farmhouse. Built by MavenAITech.
      </p>
    </div>
  </footer>
);

export default Footer;
