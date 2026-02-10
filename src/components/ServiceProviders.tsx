import serviceImg from "@/assets/service-providers.png";
import { Bell, Battery, Bluetooth, Shield } from "lucide-react";

const providerFeatures = [
  { icon: <Bell className="text-primary" size={28} />, title: "Instant Notifications", desc: "Receive real-time SMS & push alerts, prioritized alerts via your phone." },
  { icon: <Battery className="text-primary" size={28} />, title: "Battery Backup", desc: "Battery protection to sustain your system during power outages." },
  { icon: <Bluetooth className="text-primary" size={28} />, title: "Bluetooth Low Energy", desc: "Simple Bluetooth connection for local configuration and diagnostics." },
  { icon: <Shield className="text-primary" size={28} />, title: "Built-In Redundancy", desc: "Built-in redundancy for critical applications." },
];

const ServiceProviders = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <p className="text-center text-primary font-heading font-semibold text-sm mb-2 tracking-wide">
          For the Technical Service Provider
        </p>
        <h2 className="text-center font-heading font-bold text-2xl md:text-4xl text-foreground mb-4">
          Built For Modern Service Providers
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Provide your customers with cutting-edge monitoring solutions and premium septic system management tools to build sustainable brands for years.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src={serviceImg} alt="Service provider illustration" className="max-w-xs md:max-w-sm" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {providerFeatures.map((f, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-3">{f.icon}</div>
                <h4 className="font-heading font-bold text-sm mb-1 text-foreground">{f.title}</h4>
                <p className="text-muted-foreground text-xs">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;
