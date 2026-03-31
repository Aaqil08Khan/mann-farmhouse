import { Check } from "lucide-react";
import SectionHeader from "./SectionHeader";
import WaveDivider from "./WaveDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { WHATSAPP_NUMBER } from "@/constants/data";

const packages = [
  {
    tier: "Day Experience",
    name: "12 Hour Package",
    price: "1,999",
    unit: "/ person",
    duration: "9:00 AM – 9:00 PM",
    features: [
      "Full day farmhouse access",
      "Welcome drinks on arrival",
      "Breakfast + Lunch + Evening Snacks",
      "Swimming pool access",
      "Indoor & outdoor games",
      "Garden, lawn & bonfire area",
      "Music system access",
      "Ample parking included",
    ],
    popular: false,
  },
  {
    tier: "Best Value",
    name: "24 Hour Package",
    price: "3,999",
    unit: "/ person",
    duration: "Check-in 12PM – Check-out 12PM",
    features: [
      "Overnight AC room accommodation",
      "Welcome drinks on arrival",
      "Breakfast + Lunch + Dinner",
      "Swimming pool & all amenities",
      "Bonfire night with music",
      "Indoor & outdoor games",
      "DJ system access",
      "Nature trails & garden access",
      "Ample parking included",
    ],
    popular: true,
  },
];

const Packages = () => {
  const ref = useScrollAnimation();

  return (
    <section id="packages" className="bg-cream py-20 md:py-28">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Packages" heading="Choose Your Experience" />
        <div className="grid md:grid-cols-2 gap-8 items-center">
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
              <span className="font-label italic text-gold text-sm">
                {pkg.tier}
              </span>
              <h3 className="font-display text-[32px] font-bold text-forest mt-1 mb-1">
                {pkg.name}
              </h3>
              <p className="font-body text-sm text-text-soft mb-4">
                🕐 {pkg.duration}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-[56px] font-bold text-gold">
                  ₹{pkg.price}
                </span>
                <span className="font-body text-text-soft text-base">
                  {pkg.unit}
                </span>
              </div>
              <div className="w-full h-px bg-gold/30 mb-6" />
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-text-soft">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in the ${pkg.name} at Mann Farmhouse.`}
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