import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground/70 border-t border-secondary-foreground/10">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
              A
            </div>
            <span className="font-heading font-bold text-secondary-foreground">AGX</span>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="hover:text-primary transition">Home</a>
            <a href="#about" className="hover:text-primary transition">About Us</a>
            <a href="#products" className="hover:text-primary transition">All Our Products</a>
            <a href="#features" className="hover:text-primary transition">Services</a>
            <a href="#contact" className="hover:text-primary transition">Contact Us</a>
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms</a>
          </div>

          <div className="flex gap-3">
            <a href="#" className="hover:text-primary transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-primary transition"><Twitter size={18} /></a>
            <a href="#" className="hover:text-primary transition"><Instagram size={18} /></a>
          </div>
        </div>
        <p className="text-center text-xs mt-8 text-secondary-foreground/50">
          Copyright © 2025 by AGX Industries. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
