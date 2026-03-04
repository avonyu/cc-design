import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { largeFeatureProduct } from '@/data/products';
import { Rating } from '@/components/ui/rating';

export function LargeProductFeature() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl flex items-center justify-center">
            <span className="text-9xl">🏺</span>
          </div>
          <div className="space-y-6">
            <span className="text-sm font-medium text-muted-foreground">FEATURED COLLECTION</span>
            <h2 className="text-4xl font-bold text-primary">{largeFeatureProduct.name}</h2>
            <Rating rating={largeFeatureProduct.rating} />
            <p className="text-muted-foreground leading-relaxed">
              Elevate your home decor with this stunning terracota vase. Handcrafted by skilled
              artisans, each piece is unique and brings natural beauty to any space.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">${largeFeatureProduct.price}</span>
              <span className="text-muted-foreground">
                ({largeFeatureProduct.reviewCount} reviews)
              </span>
            </div>
            <div className="flex gap-4">
              <Button variant="pill" className="px-8">
                Add to Cart
              </Button>
              <Button variant="outline" className="rounded-full px-8">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}