import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Found the perfect sitter for my anxious rescue. Maria sent daily photos and my pup came home happy!",
    author: "Jennifer L.",
    pet: "Golden Retriever owner",
    rating: 5,
  },
  {
    text: "James went above and beyond during our vacation. Our cats were so well cared for!",
    author: "Mike S.",
    pet: "Cat owner",
    rating: 5,
  },
  {
    text: "Best decision ever! Sarah has become our regular sitter. Highly recommend!",
    author: "Rachel P.",
    pet: "French Bulldog owner",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <p className="font-display text-primary italic text-lg">Our Clients</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl p-6 border border-border relative"
          >
            <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                {t.author[0]}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.pet}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
