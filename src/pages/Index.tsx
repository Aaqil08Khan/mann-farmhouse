import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import EnquiryForm from "@/components/EnquiryForm";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Amenities />
    <Packages />
    <Gallery />
    <EnquiryForm />
    <Location />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
