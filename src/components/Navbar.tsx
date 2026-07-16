import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone, LogOut } from "lucide-react";
import logoAsset from "@/assets/pet-patinha-logo.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Encontrar Cuidador", href: "/search" },
  { label: "Serviços", href: "/#services" },
  { label: "Preços", href: "/#pricing" },
  { label: "Para Cuidadores", href: "/providers" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Sessão encerrada com sucesso");
      navigate("/");
    } catch {
      toast.error("Falha ao sair");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-card/90 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
            <img src={logoSymbol} alt="Pet Patinha" className="w-5 h-5 object-contain" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">Pet Patinha</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+551134567890" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            (11) 3456-7890
          </a>
          {!loading && (
            user ? (
              <>
                <span className="text-sm text-foreground font-medium truncate max-w-[120px]">
                  {user.user_metadata?.display_name || user.email}
                </span>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-1" />
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Entrar</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/signup">Cadastrar</Link>
                </Button>
              </>
            )
          )}
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                {user ? (
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => { handleSignOut(); setMobileOpen(false); }}>
                    <LogOut className="w-4 h-4 mr-1" />
                    Sair
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link to="/login" onClick={() => setMobileOpen(false)}>Entrar</Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link to="/signup" onClick={() => setMobileOpen(false)}>Cadastrar</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
