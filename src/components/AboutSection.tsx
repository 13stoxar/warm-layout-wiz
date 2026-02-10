import aboutImg from "@/assets/about-septic.png";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-gray py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-heading font-semibold text-sm mb-2 tracking-wide">
            Smart Technology for a Cleaner World
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-6 leading-tight">
            Aerobic Septic Control and Remote Monitoring Solutions
          </h2>
          <p className="text-muted-foreground mb-6">
            AGX builds smart, IoT-powered aerobic septic system controls paired with 
            real-time remote monitoring and advanced water treatment solutions. Our 
            systems are designed for residential and commercial applications 
            to improve performance, protect water quality, and deliver environmental compliance 
            while providing simple management and monitoring of your septic system.
          </p>
          <a href="#products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-semibold text-sm hover:opacity-90 transition">
            Learn More <ArrowRight size={16} />
          </a>
        </div>
        <div className="flex justify-center">
          <img src={aboutImg} alt="Aerobic septic system" className="rounded-xl shadow-lg max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
