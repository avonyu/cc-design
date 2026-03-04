import { Container } from './Container';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { navItems } from '@/data/products';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="py-16">
          {/* Brand Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold">Household</span>
                <span className="text-2xl font-light">Store</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Your one-stop destination for premium household equipment and furniture.
                We bring style and comfort to your home.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                {navItems.slice(4).map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>123 Furniture Street</li>
                <li>Design City, DC 12345</li>
                <li>contact@householdstore.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2026 Household Store. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}