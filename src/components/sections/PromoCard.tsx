import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { promoProduct } from '@/data/products';

export function PromoCard() {
  const discount = Math.round(
    ((promoProduct.originalPrice! - promoProduct.price) / promoProduct.originalPrice!) * 100
  );

  return (
    <section className="py-16">
      <Container>
        <div className="bg-primary text-white rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-12">
              <span className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                SAVE {discount}%
              </span>
              <h3 className="text-4xl font-bold mb-4">{promoProduct.name}</h3>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold">${promoProduct.price}</span>
                <span className="text-xl text-white/60 line-through">
                  ${promoProduct.originalPrice}
                </span>
              </div>
              <p className="text-white/80 mb-8">
                Premium quality bedsheet sets in various colors and sizes.
                Limited stock available!
              </p>
              <Button variant="pill" className="bg-white text-primary hover:bg-white/90">
                Shop Now
              </Button>
            </div>
            <div className="h-64 md:h-80 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
              <span className="text-8xl">🛏️</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}