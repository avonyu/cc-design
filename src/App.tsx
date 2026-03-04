import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { TopRating } from '@/components/sections/TopRating';
import { PromoCard } from '@/components/sections/PromoCard';
import { LargeProductFeature } from '@/components/sections/LargeProductFeature';
import { Newsletter } from '@/components/sections/Newsletter';
import { ServiceFeatures } from '@/components/sections/ServiceFeatures';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <TopRating />
        <PromoCard />
        <LargeProductFeature />
        <Newsletter />
        <ServiceFeatures />
      </main>
      <Footer />
    </div>
  );
}

export default App;