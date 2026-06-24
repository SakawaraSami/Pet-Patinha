import { motion } from "framer-motion";
import catImg from "@/assets/cat.png";
import dogImg from "@/assets/dog.png";
import exoticImg from "@/assets/exotic.png";

const categories = [
  { name: "Cats", image: catImg },
  { name: "Dogs", image: dogImg },
  { name: "Exotic", image: exoticImg },
];

const CategoriesSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 gradient-hero py-3 text-center">
                <span className="font-display font-bold text-primary-foreground text-lg">
                  {cat.name}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
