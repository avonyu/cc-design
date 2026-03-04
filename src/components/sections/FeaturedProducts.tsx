import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/ui/section-title';
import { ProductCard } from '@/components/ui/product-card';
import { featuredProducts } from '@/data/products';

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          title="Featured Products"
          subtitle="Handpicked selections for your home"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-6xl">🪑</span>
              </div>
              <ProductCard product={product} className="flex-1" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}