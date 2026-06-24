import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, ShieldCheck, Clock, Users, CalendarCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderServices from "@/components/provider/ProviderServices";
import ProviderReviews from "@/components/provider/ProviderReviews";
import AvailabilityCalendar from "@/components/provider/AvailabilityCalendar";
import { providers } from "@/lib/mockData";

const ProviderProfile = () => {
  const { id } = useParams<{ id: string }>();
  const provider = providers.find((p) => p.id === id);

  if (!provider) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-xl text-foreground mb-2">Cuidador não encontrado</p>
          <Link to="/search" className="text-primary underline text-sm">Voltar para a busca</Link>
        </div>
      </div>
    );
  }

  const stats = [
    { icon: Clock, label: "Tempo de Resposta", value: provider.responseTime },
    { icon: Users, label: "Clientes Recorrentes", value: `${provider.repeatClients}%` },
    { icon: CalendarCheck, label: "Reservas Totais", value: provider.totalBookings.toLocaleString("pt-BR") },
    { icon: Heart, label: "Taxa de Resposta", value: `${provider.responseRate}%` },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/search" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Voltar para a busca
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-8"
          >
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-2xl shrink-0">
                {provider.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">{provider.name}</h1>
                  {provider.badges.includes("Verificado") && (
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{provider.location}</span>
                </div>
                <div className="flex items-center gap-1 mt-1.5">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-semibold text-foreground">{provider.rating}</span>
                  <span className="text-muted-foreground text-sm">({provider.reviews} avaliações)</span>
                </div>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  {provider.badges.map((b) => (
                    <span key={b} className="text-xs font-medium bg-secondary text-primary px-2.5 py-0.5 rounded-full">{b}</span>
                  ))}
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-display font-bold text-primary text-2xl">R$ {provider.price}</p>
                <p className="text-xs text-muted-foreground">por noite</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="text-center">
                  <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="font-display font-bold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-foreground mb-3">Sobre {provider.name.split(" ")[0]}</h2>
            <p className="text-foreground leading-relaxed mb-4">{provider.bio}</p>
            <h3 className="font-display font-semibold text-foreground mb-2">Minha Casa</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{provider.homeDescription}</p>
            {provider.features.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {provider.features.map((f) => (
                  <span key={f} className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full">{f}</span>
                ))}
              </div>
            )}
          </motion.div>

          <div className="mb-8">
            <ProviderServices services={provider.services} />
          </div>

          <div className="mb-8">
            <AvailabilityCalendar availability={provider.availability} />
          </div>

          <div className="mb-8">
            <ProviderReviews reviews={provider.reviewsList} overallRating={provider.rating} />
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 flex items-center justify-between md:hidden z-40">
        <div>
          <p className="font-display font-bold text-primary text-lg">R$ {provider.price}/noite</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="w-3 h-3 fill-primary text-primary" />
            {provider.rating} ({provider.reviews})
          </div>
        </div>
        <Button className="rounded-xl px-8 font-semibold">Reservar Agora</Button>
      </div>

      <Footer />
    </div>
  );
};

export default ProviderProfile;
