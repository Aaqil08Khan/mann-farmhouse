import { useState } from "react";
import { ZoomIn } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SectionHeader from "./SectionHeader";
import WaveDivider from "./WaveDivider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", alt: "Farmhouse exterior" },
  { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", alt: "Pool area" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", alt: "Garden view" },
  { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", alt: "Room interior" },
  { src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80", alt: "Outdoor dining" },
  { src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", alt: "Bonfire night" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", alt: "Nature trails" },
  { src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80", alt: "Cottage" },
  { src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80", alt: "Lawn area" },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const ref = useScrollAnimation();

  return (
    <section id="gallery" className="bg-forest botanical-bg py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <SectionHeader label="Gallery" heading="Glimpses of Mann" light />
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="scroll-fade relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/30 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 rounded-2xl border-[3px] border-transparent group-hover:border-gold transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
      />

      <WaveDivider from="#1B4332" to="#FFF8EE" />
    </section>
  );
};

export default Gallery;
