import { Container } from './Container';
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, User } from 'lucide-react';
import { navItems } from '@/data/products';

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Household</span>
            <span className="text-2xl font-light text-primary">Store</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-primary hover:text-primary/70 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="text-primary">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}