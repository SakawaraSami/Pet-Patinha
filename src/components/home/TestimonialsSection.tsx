import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Encontrei a cuidadora perfeita para meu resgatado ansioso. A Maria mandou fotos diárias e meu cãozinho voltou feliz!",
    author: "Jennifer L.",
    pet: "Tutora de Golden Retriever",
    rating: 5,
  },
  {
    text: "O James foi além do esperado durante nossas férias. Nossos gatos foram super bem cuidados!",
    author: "Mike S.",
    pet: "Tutor de gato",
    rating: 5,
  },
  {
    text: "Melhor decisão de todas! A Sarah virou nossa cuidadora regular. Super recomendo!",
    author: "Rachel P.",
    pet: "Tutora de Buldogue Francês",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <p className="font-display text-primary italic text-lg">Nossos Clientes</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Seus Depoimentos</h2>
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
