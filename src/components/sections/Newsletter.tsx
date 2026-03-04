import { Container } from '@/components/layout/Container';
import { NewsletterForm } from '@/components/ui/newsletter-form';

export function Newsletter() {
  return (
    <section className="py-16 bg-primary text-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/80 mb-8">
            Get the latest updates on new products, exclusive offers, and design tips
            delivered straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </Container>
    </section>
  );
}