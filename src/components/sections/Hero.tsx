import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium mb-4 text-white/80">LIMITED TIME OFFER</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            SALE 50% OFF
            <br />
            <span className="text-white/90">MODERN FURNITURE</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-lg">
            Discover our exclusive collection of modern furniture pieces at incredible prices.
            Transform your home with style and elegance.
          </p>
          <Button variant="pill" size="lg" className="bg-white text-primary hover:bg-white/90">
            VIEW NOW
          </Button>
        </div>
      </Container>
    </section>
  );
}