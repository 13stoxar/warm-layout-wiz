import heroDevice from "@/assets/hero-device.png";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient text-secondary-foreground py-16 md:py-24 relative overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-heading font-semibold text-sm mb-2 tracking-wide">
            Smart Technology for a Cleaner World
          </p>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold leading-tight mb-6">
            Smart Septic Controls &amp;<br />Remote Monitoring
          </h1>
          <p className="text-secondary-foreground/80 text-base md:text-lg mb-8 max-w-lg">
            Industry-leading aerobic septic system controls and live remote monitoring as alerts
            designed for performance, reliability, and peace of mind.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition">
              Explore Products <ArrowRight size={16} />
            </a>
            <a href="#contact" className="border border-secondary-foreground/30 text-secondary-foreground px-6 py-3 rounded-md font-heading font-semibold text-sm flex items-center gap-2 hover:bg-secondary-foreground/10 transition">
              <Play size={16} /> Request Demo
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={heroDevice} alt="AGX Smart Septic Control Device" className="max-w-xs md:max-w-sm drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
