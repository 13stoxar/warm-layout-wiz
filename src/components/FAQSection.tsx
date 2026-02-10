import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does a septic system or treatment work?",
    a: "A septic system treats wastewater from your home. Solid waste settles in a tank, and the liquid effluent is treated and dispersed into a drain field. Our aerobic systems add oxygen to speed up treatment and produce cleaner effluent."
  },
  {
    q: "How often should my septic tank be cleaned or pumped?",
    a: "Most septic tanks should be pumped every 3-5 years depending on usage, tank size, and household size. Regular maintenance ensures optimal performance."
  },
  {
    q: "What kind of alerts will I receive from the system?",
    a: "You'll receive real-time SMS and push notifications for high water alarms, pump failures, power outages, and scheduled maintenance reminders."
  },
  {
    q: "Can I control multiple zones from a single dashboard?",
    a: "Yes! Our Smart Connect and Dual Alternating Control systems support up to 6 zones (expandable to 24) all manageable from a single dashboard."
  },
  {
    q: "Is this system compatible with existing installations?",
    a: "Our systems are designed to be compatible with most existing aerobic treatment installations. Contact us for a compatibility assessment."
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl">
        <h2 className="text-center font-heading font-bold text-2xl md:text-4xl text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Have questions? We've answered the most common ones below.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`border rounded-lg overflow-hidden transition ${openIdx === i ? 'border-primary shadow-sm' : ''}`}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className={`w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-sm transition ${openIdx === i ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-muted'}`}
              >
                {faq.q}
                <ChevronDown size={18} className={`flex-shrink-0 ml-2 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && (
                <div className="p-5 bg-card text-muted-foreground text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
