import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const providers = [
  { name: "Maria Rodrigues", rating: 4.95, reviews: 248, specialty: "Experiente com cães de grande porte", price: 225, distance: 2.3 },
  { name: "Tiago Wilson", rating: 4.92, reviews: 189, specialty: "Certificado em primeiros socorros pet", price: 190, distance: 3.7 },
  { name: "Sara Kim", rating: 4.98, reviews: 312, specialty: "Quintal cercado, sem outros pets", price: 260, distance: 1.8 },
  { name: "Davi Thompson", rating: 4.89, reviews: 156, specialty: "Especialista em cães idosos", price: 210, distance: 4.2 },
];

const FeaturedProviders = () => {
  const [active, setActive] = useState(0);
  const visibleCount = 3;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-display text-primary italic text-lg">Mais Bem Avaliados</p>
            <h2 className="text-3xl font-bold text-foreground">Cuidadores em Destaque</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActive(Math.max(0, active - 1))}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => setActive(Math.min(providers.length - visibleCount, active + 1))}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <ChevronRight className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {providers.slice(active, active + visibleCount).map((prov, i) => (
            <motion.div
              key={prov.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border hover:shadow-elevated transition-all duration-300 p-5 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-xl mb-3">
                {prov.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg">{prov.name}</h3>
              <div className="flex items-center gap-1 text-sm mt-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="font-semibold text-foreground">{prov.rating}</span>
                <span className="text-muted-foreground">({prov.reviews} avaliações)</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{prov.specialty}</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                <span className="font-display font-bold text-primary">A partir de R$ {prov.price}/noite</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" /> {prov.distance} km
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
