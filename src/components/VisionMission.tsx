import { Eye, Target } from "lucide-react";
import SectionHeader from "./SectionHeader";
import WaveDivider from "./WaveDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VisionMission = () => {
  const ref = useScrollAnimation();

  return (
    <section id="vision" className="bg-[#1B4332] py-20 md:py-28 relative">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Our Purpose"
          heading="Vision & Mission"
          light
        />
        <div className="grid md:grid-cols-2 gap-8 mt-4">

          {/* Vision */}
          <div className="scroll-fade relative bg-[#2D6A4F] rounded-3xl p-10 border border-gold/20 hover:border-gold/60 transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-gold" />
            </div>
            <div className="w-10 h-[3px] bg-gold mb-4 rounded-full" />
            <h3 className="font-display text-[32px] font-bold text-white mb-4">
              Our Vision
            </h3>
            <p className="font-body text-white/70 leading-relaxed text-base">
              To be Telangana's most beloved farmhouse destination — a place where
              families, friends, and teams come together to create memories that
              last a lifetime, surrounded by the beauty of nature and the warmth
              of genuine hospitality.
            </p>
          </div>

          {/* Mission */}
          <div className="scroll-fade relative bg-[#2D6A4F] rounded-3xl p-10 border border-gold/20 hover:border-gold/60 transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-gold" />
            </div>
            <div className="w-10 h-[3px] bg-gold mb-4 rounded-full" />
            <h3 className="font-display text-[32px] font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="font-body text-white/70 leading-relaxed text-base">
              To provide an immersive, joyful escape from the everyday — offering
              thoughtfully curated experiences, farm-fresh surroundings, and
              heartfelt service that makes every guest feel at home, every single
              visit.
            </p>
          </div>

        </div>

        {/* Bottom quote */}
        <div className="mt-12 text-center scroll-fade">
          <p className="font-display italic text-2xl md:text-3xl text-gold/80">
            "Where every visit feels like coming home."
          </p>
        </div>
      </div>
      <WaveDivider from="#1B4332" to="#FFF8EE" />
    </section>
  );
};

export default VisionMission;