import { Check } from "lucide-react";

const products = [
  {
    name: "Classic Control",
    desc: "Reliable, time-tested timer-based aerobic control, no frills, just dependable performance.",
    features: [
      "Perfect for single-pump or spray-zone configurations",
      "No connectivity needs, simple standalone controller",
      "Field-proven circuit board and component build design",
      "Designed for basic single aerobic systems",
    ],
    highlight: "Standard basic features",
  },
  {
    name: "Classic Connect",
    desc: "Same reliable controls with added built-in connectivity, so you can keep an eye remotely.",
    features: [
      "Cellular or WiFi-based single pump or spray controller",
      "Optional: UV/Ozone treatment add-on (available at extra cost)",
      "All Classic Control features included",
    ],
    highlight: "Classic + Connectivity features",
  },
  {
    name: "Smart Connect",
    desc: "Advanced multi-zone smart control with cellular connectivity—designed for homes that need more.",
    features: [
      "Cellular or WiFi connectivity, remote access",
      "Zone support up to 6 zones (expandable 6+ add-on zones)",
      "UV Ozone treatment add-on",
      "Advanced NSF-40/245/350 ready, low-bid-proof features",
    ],
    highlight: "Standard + smart connectivity features",
    bestFor: "Best for installations requiring flexible programming and advanced multi-zone configurations.",
  },
  {
    name: "Dual Alternating Control",
    desc: "Top-tier controller designed for dual-pump and alternating configurations—maximum reliability.",
    features: [
      "Dual alternating pump controller",
      "Supports 1-to-6 spray zones per motor (expandable)",
      "Advanced NSF-40/245/350 zone controllers",
      "6 spray/drip zone to 12 zones (expandable to 24)",
      "All connectivity and smart features included",
    ],
    highlight: "Smart Connect + DAC features",
    bestFor: "Best for large properties, commercial wastewater projects, and multiple treatment living configurations.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-gray py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading font-bold text-2xl md:text-4xl text-foreground mb-4">
          Advanced Wastewater Treatment Solutions<br />That Work While You Sleep
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Aerobic controls and smart panels where certified aerobic system controls also serve as remote monitoring solutions, and that the UV/Ozone add-on is a secondary purification step using ultraviolet light and/or ozone to further treat the effluent.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-card rounded-xl p-8 shadow-md border hover:shadow-lg transition">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <ul className="space-y-2 mb-4">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-heading font-semibold text-sm">{p.highlight}</p>
              {p.bestFor && (
                <p className="text-muted-foreground text-xs mt-2 italic">{p.bestFor}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
