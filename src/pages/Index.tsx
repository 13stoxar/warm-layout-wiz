import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ServiceProviders from "@/components/ServiceProviders";
import ProductsSection from "@/components/ProductsSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RemoteAccessSection from "@/components/RemoteAccessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServiceProviders />
      <ProductsSection />
      <FAQSection />
      <TestimonialsSection />
      <RemoteAccessSection />
      <Footer />
    </div>
  );
};

export default Index;
