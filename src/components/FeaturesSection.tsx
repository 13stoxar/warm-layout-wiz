import { Activity, Settings, Sun } from "lucide-react";

const features = [
  {
    icon: <Activity className="text-primary" size={32} />,
    title: "Real-Time Monitoring",
    desc: "Monitor your septic system's performance 24/7 from any device with real-time alerts and diagnostics.",
  },
  {
    icon: <Settings className="text-primary" size={32} />,
    title: "Smart Controls",
    desc: "Advanced controls and timers for configurable timer cycles, 1, 2, 3, 4 zone configurations, 1-to-6 zone models.",
  },
  {
    icon: <Sun className="text-primary" size={32} />,
    title: "Hands-Free UV/Ozone",
    desc: "UV-Ozone enabled add-on solutions that provide no-contact water treatment.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl text-foreground mb-12">
          OUR FEATURES
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-card rounded-xl p-8 text-center shadow-md border hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
