import { Check } from "lucide-react";
import SectionHeader from "./SectionHeader";
import WaveDivider from "./WaveDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { WHATSAPP_NUMBER } from "@/constants/data";

const packages = [
  {
    tier: "Day Trip",
    name: "Day Outing",
    price: "1,500",
    unit: "/ person",
    features: ["Full day access (9am–6pm)", "Welcome drinks", "Lunch included", "Pool & games access", "Garden & lawn use"],
    popular: false,
  },
  {
    tier: "Best Value",
    name: "Overnight Stay",
    price: "3,500",
    unit: "/ person",
    features: ["Check-in 2pm, check-out 11am", "Dinner + Breakfast", "Bonfire night", "Pool & all amenities", "Room accommodation", "DJ system access"],
    popular: true,
  },
  {
    tier: "Premium",
    name: "Weekend Retreat",
    price: "8,000",
    unit: "/ person",
    features: ["2 nights, 3 days", "All meals included", "Private event space", "Dedicated staff", "Bonfire + BBQ nights", "Photography spots"],
    popular: false,
  },
];

const Packages = () => {
  const ref = useScrollAnimation();

  return (
    <section id="packages" className="bg-cream py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Packages" heading="Choose Your Experience" />
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`scroll-fade relative bg-white rounded-3xl border p-10 ${
                pkg.popular
                  ? "border-gold border-2 md:scale-105 shadow-[0_0_40px_rgba(244,166,35,0.2)]"
                  : "border-[#e8e0d0]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 right-6 bg-gold text-forest font-body text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <span className="font-label italic text-gold text-sm">{pkg.tier}</span>
              <h3 className="font-display text-[32px] font-bold text-forest mt-1 mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-[56px] font-bold text-gold">₹{pkg.price}</span>
                <span className="font-body text-text-soft text-base">{pkg.unit}</span>
              </div>
              <div className="w-full h-px bg-gold/30 mb-6" />
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-text-soft">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in the ${pkg.name} package.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold text-forest font-body font-bold uppercase tracking-wider text-sm h-12 rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
              >
                Book {pkg.name}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center font-body italic text-text-soft mt-10">
          All packages customizable. Contact us for group discounts.
        </p>
      </div>
      <WaveDivider from="#FFF8EE" to="#1B4332" />
    </section>
  );
};

export default Packages;
