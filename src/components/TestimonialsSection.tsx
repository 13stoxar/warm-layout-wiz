import { Star } from "lucide-react";

const testimonials = [
  {
    text: "The Real-Time Monitoring is incredible. Having the power to see if our system is running efficiently without leaving home has been a game changer. Especially in the winter, that's very valuable.",
    name: "Mr. Steven Menfi",
    role: "Homeowner",
  },
  {
    text: "Since installing AGX from my service technician, I've had zero problems. The system is incredibly reliable, doesn't bother me. My Technician manages everything remotely to keep things running smoothly.",
    name: "Mr. Kevin Rabbit",
    role: "Homeowner",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-gray py-16 md:py-24">
      <div className="container">
        <h2 className="text-center font-heading font-bold text-2xl md:text-4xl text-foreground mb-4">
          Testimonials
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Hear from our customers who are building a smarter, cleaner living experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-8 shadow-md border text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic mb-6">"{t.text}"</p>
              <div className="w-12 h-12 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center font-heading font-bold text-foreground">
                {t.name.charAt(0)}
              </div>
              <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
              <p className="text-primary text-xs font-medium">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
