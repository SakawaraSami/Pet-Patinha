import { Home, Footprints, Sun, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  name: string;
  description: string;
  price: number;
  unit: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "Overnight Boarding": <Home className="w-6 h-6" />,
  "Dog Walking": <Footprints className="w-6 h-6" />,
  "Doggy Day Care": <Sun className="w-6 h-6" />,
  "House Sitting": <Home className="w-6 h-6" />,
  "Drop-In Visits": <MapPin className="w-6 h-6" />,
};

const ProviderServices = ({ services }: { services: Service[] }) => (
  <div>
    <h2 className="text-2xl font-bold text-foreground mb-5">Services & Pricing</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {services.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-card rounded-2xl border border-border p-5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {iconMap[s.name] || <Home className="w-6 h-6" />}
          </div>
          <h3 className="font-display font-semibold text-foreground">{s.name}</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-3">{s.description}</p>
          <p className="font-display font-bold text-primary text-lg">${s.price}<span className="text-sm font-normal text-muted-foreground">/{s.unit}</span></p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ProviderServices;
