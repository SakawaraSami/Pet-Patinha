import { Link } from "react-router-dom";
import { PawPrint, DollarSign, Calendar, Star, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  { icon: DollarSign, title: "Earn on Your Schedule", desc: "Set your own rates and availability. Earn up to $1,000/month caring for pets you love." },
  { icon: Calendar, title: "Flexible Bookings", desc: "Accept bookings that fit your life. You're always in control of your calendar." },
  { icon: Shield, title: "Insurance Included", desc: "Every booking includes premium insurance coverage for complete peace of mind." },
  { icon: Users, title: "Growing Community", desc: "Join thousands of trusted pet care providers across the country." },
];

const steps = [
  { num: "1", title: "Create Your Profile", desc: "Sign up and tell us about your experience, home, and the pets you'd love to care for." },
  { num: "2", title: "Set Your Services", desc: "Choose from boarding, walking, daycare, and more. Set your own prices." },
  { num: "3", title: "Start Earning", desc: "Accept bookings from pet owners in your area and start doing what you love." },
];

const Providers = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="gradient-hero rounded-3xl p-8 md:p-16 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
            <PawPrint className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Turn Your Love for Pets Into Income
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Join PawStay as a pet care provider and earn money doing what you love. Set your own schedule, rates, and services.
          </p>
          <Button size="lg" variant="secondary" className="rounded-xl font-semibold text-base px-8" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">Why Provide on PawStay?</h2>
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

    {/* How it works */}
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">How It Works</h2>
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

    {/* CTA */}
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Create your free provider profile today and start connecting with pet owners in your area.
        </p>
        <Button size="lg" className="rounded-xl font-semibold text-base px-8" asChild>
          <Link to="/signup">Sign Up as a Provider</Link>
        </Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default Providers;
