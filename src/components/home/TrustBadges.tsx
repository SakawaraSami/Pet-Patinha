import { ShieldCheck, Star, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: ShieldCheck, text: "12.500+ Cuidadores Verificados" },
  { icon: Star, text: "Nota Média de 4,9 Estrelas" },
  { icon: Headphones, text: "Suporte e Proteção 24/7" },
];

const TrustBadges = () => (
  <section className="py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((b, i) => (
          <motion.div
            key={b.text}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 bg-secondary px-5 py-3 rounded-full"
          >
            <b.icon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">{b.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
