import { Star, MapPin, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Provider } from "@/lib/mockData";

interface ProviderCardProps {
  provider: Provider;
  index: number;
}

const ProviderCard = ({ provider, index }: ProviderCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
  >
    <Link to={`/provider/${provider.id}`} className="block">
      <div className="bg-card rounded-2xl border border-border hover:shadow-elevated transition-all duration-300 p-5 group">
        <div className="flex gap-4">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-xl shrink-0">
            {provider.initials}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-display font-semibold text-foreground text-lg">{provider.name}</h3>
              {provider.badges.includes("Verified") && (
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              )}
            </div>

            <div className="flex items-center gap-1 text-sm mt-0.5">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="font-semibold text-foreground">{provider.rating}</span>
              <span className="text-muted-foreground">({provider.reviews} reviews)</span>
            </div>

            <p className="text-sm text-muted-foreground mt-1 truncate">{provider.specialty}</p>

            {/* Badges */}
            <div className="flex gap-1.5 mt-2 flex-wrap">
              {provider.badges.filter(b => b !== "Verified").map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium bg-secondary text-primary px-2 py-0.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer stats */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-border text-sm">
          <span className="font-display font-bold text-primary">From ${provider.price}/night</span>
          <div className="flex items-center gap-3 text-muted-foreground text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {provider.distance} mi
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {provider.responseTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ProviderCard;
