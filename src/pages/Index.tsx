import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import CategoriesSection from "@/components/home/CategoriesSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProviders from "@/components/home/FeaturedProviders";
import DiscountBanner from "@/components/home/DiscountBanner";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <TrustBadges />
    <CategoriesSection />
    <ServicesSection />
    <FeaturedProviders />
    <DiscountBanner />
    <PricingSection />
    <TestimonialsSection />
    <Footer />
  </div>
);

export default Index;
