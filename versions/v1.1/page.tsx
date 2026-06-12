import Header        from "./components/Header";
import Hero           from "./components/Hero";
import LogoTicker     from "./components/LogoTicker";
import WhyReading     from "./components/WhyReading";
import CasesCarousel  from "./components/CasesCarousel";
import Stats          from "./components/Stats";
import Benefits       from "./components/Benefits";
import Process        from "./components/Process";
import FAQ            from "./components/FAQ";
import FinalCTA       from "./components/FinalCTA";
import Footer         from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoTicker />
      <WhyReading />
      <CasesCarousel />
      <Stats />
      <Benefits />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
