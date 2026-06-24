import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    label: "Diária",
    price: "Grátis",
    note: "Se você é um novo cliente, oferecemos as primeiras 24 horas de creche para seu pet de graça.",
  },
  {
    label: "Semanal",
    price: "R$ 3.795",
    note: "Reserve um quarto pelo mês e ganhe treinamento gratuito com um adestrador ao ar livre.",
    featured: true,
  },
  {
    label: "Mensal",
    price: "R$ 7.995",
    note: "Mais brincadeiras e exercícios para o seu pet quando ele ficar na creche.",
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-16 bg-card">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Escolha o Seu Plano</h2>
      <p className="text-muted-foreground mb-10">Preços transparentes, sem surpresas</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl p-6 pt-0 bg-background border border-border ${
              plan.featured ? "ring-2 ring-primary shadow-card" : ""
            }`}
          >
            <div className="gradient-hero rounded-full px-6 py-2 font-display font-bold text-primary-foreground text-sm inline-block -mt-4 mb-4">
              {plan.label}
            </div>
            <div className="text-4xl font-bold text-primary font-display mb-3">
              {plan.price}
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{plan.note}</p>
            <Button className="w-full rounded-full">Reservar Agora</Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
