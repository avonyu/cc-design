import { Container } from '@/components/layout/Container';
import { RefreshCw, Headphones, Truck } from 'lucide-react';

const features = [
  {
    icon: RefreshCw,
    title: '100% REFUND',
    description: '30-day money back guarantee',
  },
  {
    icon: Headphones,
    title: 'SUPPORT 24/7',
    description: 'Dedicated customer support',
  },
  {
    icon: Truck,
    title: 'FREE SHIPPING',
    description: 'On orders over $100',
  },
];

export function ServiceFeatures() {
  return (
    <section className="py-16 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}