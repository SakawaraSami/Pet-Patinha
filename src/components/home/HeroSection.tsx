import { Search, Calendar, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroDog from "@/assets/hero-dog.png";

const HeroSection = () => (
  <section className="relative pt-24 pb-16 overflow-hidden">
    {/* Warm gradient background */}
    <div className="absolute inset-0 gradient-hero opacity-10 pointer-events-none" />
    
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left: Content + Search */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-primary rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Decorative paws */}
            <div className="absolute top-4 right-4 opacity-20">
              <PawPrint className="w-16 h-16 text-primary-foreground" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-10">
              <PawPrint className="w-24 h-24 text-primary-foreground rotate-45" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-3">
              Yay, We<br />Love Your Pets!
            </h1>
            <p className="text-primary-foreground/80 mb-6 text-sm md:text-base">
              Find trusted local pet care providers near you.
            </p>

            {/* Search form */}
            <div className="space-y-3">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Check in"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-card text-foreground text-sm border-0 outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Check Out"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-card text-foreground text-sm border-0 outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <PawPrint className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Kind of pets"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-card text-foreground text-sm border-0 outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <input
                  type="number"
                  placeholder="Number"
                  className="w-full px-4 py-3 rounded-lg bg-card text-foreground text-sm border-0 outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button className="w-full py-3 rounded-lg font-semibold" variant="secondary" asChild>
                <Link to="/search">
                  <Search className="w-4 h-4 mr-2" />
                  Check Availability
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Speech bubble */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute top-0 right-4 md:right-12 z-10 bg-primary text-primary-foreground font-display font-bold text-lg px-5 py-3 rounded-2xl rounded-br-sm shadow-elevated"
          >
            Say Woof!
          </motion.div>
          <img
            src={heroDog}
            alt="Happy golden retriever puppy"
            className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
