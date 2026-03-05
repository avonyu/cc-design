import { Header } from "./Header";
import { Hero } from "./Hero";
import { Clients } from "./Clients";
import { AboutUs } from "./AboutUs";
import { OurValues } from "./OurValues";
import { OurInterests } from "./OurInterests";
import { Projects } from "./Projects";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Clients />
        <AboutUs />
        <OurInterests />
        <OurValues />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}