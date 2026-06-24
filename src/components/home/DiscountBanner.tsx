import { motion } from "framer-motion";
import bannerImg from "@/assets/pets-banner.png";

const DiscountBanner = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden gradient-hero"
      >
        <div className="relative z-10 text-center pt-10 pb-0">
          <p className="font-display text-primary-foreground/80 italic text-lg">Week Discount</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-2">
            Offer Discounts 30%
          </h2>
          <p className="text-primary-foreground/70 text-sm mb-6">
            for Long Term Stays Over 30 Days
          </p>
          <img
            src={bannerImg}
            alt="Happy pets together"
            className="mx-auto w-full max-w-2xl object-cover rounded-t-2xl"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default DiscountBanner;
