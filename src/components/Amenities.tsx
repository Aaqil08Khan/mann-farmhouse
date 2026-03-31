import { Wifi, Car, Utensils, Trees, Flame, Music, Droplets, Tent, ShowerHead, Gamepad2, Sun, Tv } from "lucide-react";
import SectionHeader from "./SectionHeader";
import WaveDivider from "./WaveDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Car, label: "Free Parking" },
  { icon: Utensils, label: "Farm Kitchen" },
  { icon: Trees, label: "Lush Gardens" },
  { icon: Flame, label: "Bonfire Pit" },
  { icon: Music, label: "DJ & Sound System" },
  { icon: Droplets, label: "Swimming Pool" },
  { icon: Tent, label: "Outdoor Camping" },
  { icon: ShowerHead, label: "Modern Bathrooms" },
  { icon: Gamepad2, label: "Indoor Games" },
  { icon: Sun, label: "Open Lawns" },
  { icon: Tv, label: "Projector & Screen" },
];

const Amenities = () => {
  const ref = useScrollAnimation();

  return (
    <section id="amenities" className="bg-forest botanical-bg py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Amenities" heading="Everything You Need" light />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="scroll-fade group bg-forest-mid rounded-2xl p-7 border-t-[3px] border-gold cursor-pointer transition-all duration-300 hover:bg-gold shadow-[0_0_20px_rgba(244,166,35,0.2)]"
            >
              <Icon className="w-8 h-8 text-gold mb-3 transition-colors duration-300 group-hover:text-forest" />
              <span className="font-body text-[15px] font-semibold text-white transition-colors duration-300 group-hover:text-forest">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider from="#1B4332" to="#FFF8EE" />
    </section>
  );
};

export default Amenities;
