import { Header } from "./Header";
import { Hero } from "./Hero";
import { CurrentProjects } from "./CurrentProjects";
import { OurValues } from "./OurValues";
import { OurInterests } from "./OurInterests";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <CurrentProjects />
        <OurValues />
        <OurInterests />
      </main>
      <Footer />
    </div>
  );
}