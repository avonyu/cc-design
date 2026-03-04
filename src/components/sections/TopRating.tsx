import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/ui/section-title';
import { ProductCard } from '@/components/ui/product-card';
import { topRatingProducts } from '@/data/products';

export function TopRating() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionTitle
          title="Top Rating"
          subtitle="Our customers' favorite picks"
          align="center"
          className="text-center"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topRatingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}