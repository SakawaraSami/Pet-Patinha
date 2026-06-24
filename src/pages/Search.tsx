import { useState, useMemo } from "react";
import { Search as SearchIcon, MapPin, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchFilters from "@/components/search/SearchFilters";
import ProviderCard from "@/components/search/ProviderCard";
import { providers } from "@/lib/mockData";
import { useIsMobile } from "@/hooks/use-mobile";

type SortOption = "recommended" | "price-low" | "price-high" | "rating" | "distance";

const Search = () => {
  const isMobile = useIsMobile();
  const [location, setLocation] = useState("");
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([75, 500]);
  const [petSizes, setPetSizes] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("recommended");

  const filtered = useMemo(() => {
    let result = providers.filter((p) => {
      if (priceRange[0] > 75 || priceRange[1] < 500) {
        if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      }
      if (petSizes.length > 0 && !petSizes.some((s) => p.petSizes.includes(s))) return false;
      if (features.length > 0 && !features.every((f) => p.features.includes(f))) return false;
      if (location && !p.location.toLowerCase().includes(location.toLowerCase())) return false;
      return true;
    });

    switch (sort) {
      case "price-low": result.sort((a, b) => a.price - b.price); break;
      case "price-high": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "distance": result.sort((a, b) => a.distance - b.distance); break;
      default: result.sort((a, b) => b.rating * b.reviews - a.rating * a.reviews); break;
    }
    return result;
  }, [serviceTypes, priceRange, petSizes, features, sort, location]);

  const activeFilterCount = serviceTypes.length + petSizes.length + features.length + (priceRange[0] > 75 || priceRange[1] < 500 ? 1 : 0);

  const filtersContent = (
    <SearchFilters
      serviceTypes={serviceTypes} setServiceTypes={setServiceTypes}
      priceRange={priceRange} setPriceRange={setPriceRange}
      petSizes={petSizes} setPetSizes={setPetSizes}
      features={features} setFeatures={setFeatures}
    />
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="gradient-hero rounded-2xl p-6 md:p-8"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Encontre Cuidadores Perto de Você</h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Digite sua localização..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-card text-foreground text-sm border-0 outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button variant="secondary" className="rounded-lg font-semibold shrink-0">
                <SearchIcon className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {!isMobile && (
              <motion.aside
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-72 shrink-0"
              >
                <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                  <h2 className="font-display font-bold text-foreground text-lg mb-5">Filtros</h2>
                  {filtersContent}
                </div>
              </motion.aside>
            )}

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{filtered.length}</span> cuidadores encontrados
                </p>
                <div className="flex items-center gap-3">
                  {isMobile && (
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-lg">
                          <SlidersHorizontal className="w-4 h-4 mr-1" />
                          Filtros
                          {activeFilterCount > 0 && (
                            <span className="ml-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                              {activeFilterCount}
                            </span>
                          )}
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="overflow-y-auto">
                        <SheetHeader>
                          <SheetTitle className="font-display">Filtros</SheetTitle>
                        </SheetHeader>
                        <div className="mt-4">{filtersContent}</div>
                      </SheetContent>
                    </Sheet>
                  )}
                  <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
                    <SelectTrigger className="w-44 rounded-lg text-sm">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recomendados</SelectItem>
                      <SelectItem value="price-low">Preço: Menor para Maior</SelectItem>
                      <SelectItem value="price-high">Preço: Maior para Menor</SelectItem>
                      <SelectItem value="rating">Melhor Avaliação</SelectItem>
                      <SelectItem value="distance">Mais Próximos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {filtered.map((p, i) => (
                    <ProviderCard key={p.id} provider={p} index={i} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="font-display text-lg text-foreground mb-2">Nenhum cuidador encontrado</p>
                  <p className="text-sm text-muted-foreground">Tente ajustar os filtros para ver mais resultados.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Search;
