import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Septic Controls", href: "#products" },
  { label: "Notifications", href: "#features" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground text-sm py-2">
        <div className="container flex justify-between items-center">
          <span>Do you need remote monitoring, Real-time troubleshooting, and activity alerts?</span>
          <a href="#contact" className="bg-primary text-primary-foreground px-4 py-1 rounded font-heading font-semibold text-xs uppercase tracking-wide hover:opacity-90 transition hidden md:inline-block">
            Book a Free Demo
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background sticky top-0 z-50 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
              A
            </div>
            <span className="font-heading font-bold text-xl text-secondary">AGX</span>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className="text-foreground hover:text-primary transition font-medium text-sm">
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden lg:inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-heading font-semibold text-sm hover:opacity-90 transition">
            Book a Free Demo
          </a>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-background border-t pb-4">
            <div className="container flex flex-col gap-3 pt-3">
              {navLinks.map((link, i) => (
                <a key={i} href={link.href} onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition font-medium text-sm py-1">
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-heading font-semibold text-sm text-center hover:opacity-90 transition">
                Book a Free Demo
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
