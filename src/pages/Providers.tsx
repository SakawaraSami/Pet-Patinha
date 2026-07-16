import { Link } from "react-router-dom";
import { DollarSign, Calendar, Shield, Users } from "lucide-react";
import logoAsset from "@/assets/pet-patinha-logo.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  { icon: DollarSign, title: "Ganhe no Seu Tempo", desc: "Defina seus próprios preços e disponibilidade. Ganhe até R$ 5.000/mês cuidando de pets que você ama." },
  { icon: Calendar, title: "Reservas Flexíveis", desc: "Aceite reservas que se encaixem na sua rotina. Você sempre tem o controle da sua agenda." },
  { icon: Shield, title: "Seguro Incluso", desc: "Toda reserva inclui cobertura de seguro premium para total tranquilidade." },
  { icon: Users, title: "Comunidade em Crescimento", desc: "Junte-se a milhares de cuidadores de pets de confiança em todo o país." },
];

const steps = [
  { num: "1", title: "Crie Seu Perfil", desc: "Cadastre-se e conte sobre sua experiência, sua casa e os pets que você adoraria cuidar." },
  { num: "2", title: "Defina Seus Serviços", desc: "Escolha entre hospedagem, passeio, creche e mais. Defina seus próprios preços." },
  { num: "3", title: "Comece a Ganhar", desc: "Aceite reservas de tutores da sua região e comece a fazer o que ama." },
];

const Providers = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="gradient-hero rounded-3xl p-8 md:p-16 text-center"
        >
          <div className="inline-block bg-background rounded-2xl p-4 mx-auto mb-6">
            <img src={logoAsset.url} alt="Pet Patinha" className="h-20 w-auto object-contain" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Transforme Seu Amor por Pets em Renda
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Junte-se à Pet Patinha como cuidador de pets e ganhe dinheiro fazendo o que ama. Defina sua agenda, preços e serviços.
          </p>
          <Button size="lg" variant="secondary" className="rounded-xl font-semibold text-base px-8" asChild>
            <Link to="/signup">Começar Agora</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">Por Que Ser Cuidador na Pet Patinha?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl shadow-card p-6 text-center hover:shadow-elevated transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">Como Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4 text-primary-foreground font-display font-bold text-xl">
                {s.num}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Pronto Para Começar?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Crie seu perfil gratuito de cuidador hoje e comece a se conectar com tutores da sua região.
        </p>
        <Button size="lg" className="rounded-xl font-semibold text-base px-8" asChild>
          <Link to="/signup">Cadastre-se como Cuidador</Link>
        </Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default Providers;
