import { Link } from "react-router-dom";
import { PawPrint, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-secondary py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
              <PawPrint className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">Pet Patinha</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Conectando tutores a cuidadores locais de confiança. A felicidade do seu pet é a nossa missão.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/search" className="hover:opacity-100 transition-opacity">Hospedagem</Link></li>
            <li><Link to="/search" className="hover:opacity-100 transition-opacity">Passeio com Cães</Link></li>
            <li><Link to="/search" className="hover:opacity-100 transition-opacity">Creche</Link></li>
            <li><Link to="/search" className="hover:opacity-100 transition-opacity">Cuidado na Sua Casa</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/providers" className="hover:opacity-100 transition-opacity">Seja um Cuidador</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Sobre Nós</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Blog</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Carreiras</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (11) 3456-7890</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contato@petpatinha.com.br</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> São Paulo, SP</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-secondary/20 text-center text-sm opacity-50">
        © 2026 Pet Patinha. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
