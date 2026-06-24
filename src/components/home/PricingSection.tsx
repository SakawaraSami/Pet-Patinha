import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    label: "Day",
    price: "Free",
    note: "If you are a new client, we will give your pet day care for free the first 24 hours.",
  },
  {
    label: "Week",
    price: "$759",
    note: "Book a room for the month, get free training with a dog handler in the outside.",
    featured: true,
  },
  {
    label: "Month",
    price: "$1599",
    note: "Give your puppy more games and exercise when you leave them for day care.",
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-16 bg-card">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Choose Your Price</h2>
      <p className="text-muted-foreground mb-10 max-w-md mx-auto text-sm">
        Flexible pricing options for every pet care need
      </p>

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
              {plan.price === "Free" ? plan.price : (
                <>
                  <span className="text-lg align-top">$</span>
                  {plan.price.replace("$", "")}
                </>
              )}
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{plan.note}</p>
            <Button className="w-full rounded-full">Book Now</Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
