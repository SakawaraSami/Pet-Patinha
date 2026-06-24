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
            <span className="font-display text-xl font-bold">PawStay</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Connecting pet owners with trusted local caregivers. Your pet's happiness is our mission.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/search" className="hover:opacity-100 transition-opacity">Boarding</Link></li>
            <li><Link to="/search" className="hover:opacity-100 transition-opacity">Dog Walking</Link></li>
            <li><Link to="/search" className="hover:opacity-100 transition-opacity">Day Care</Link></li>
            <li><Link to="/search" className="hover:opacity-100 transition-opacity">House Sitting</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/providers" className="hover:opacity-100 transition-opacity">Become a Provider</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Blog</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 123-456-6789</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@pawstay.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Seattle, WA</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-secondary/20 text-center text-sm opacity-50">
        © 2026 PawStay Connect. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
