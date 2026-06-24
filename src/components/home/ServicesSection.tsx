import { Scissors, GraduationCap, Salad, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  { icon: Scissors, title: "Banho e Tosa", desc: "Cuidados profissionais para todas as raças" },
  { icon: GraduationCap, title: "Adestramento Profissional", desc: "Treinamento comportamental por especialistas" },
  { icon: Salad, title: "Dieta Especial", desc: "Planos nutricionais personalizados" },
  { icon: Stethoscope, title: "Serviços Veterinários", desc: "Atendimento veterinário sob demanda" },
];

const ServicesSection = () => (
  <section id="services" className="py-16 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-primary text-lg italic mb-1">Serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Especialmente Para o Seu Pet
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
            Oferecemos cuidados completos para pets, incluindo hospedagem, banho e tosa, adestramento e serviços veterinários.
            Descontos disponíveis para estadias longas, acima de 30 dias.
          </p>
          <Button>Saiba Mais</Button>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-6 text-center border border-border cursor-pointer group"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                <svc.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm">{svc.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
