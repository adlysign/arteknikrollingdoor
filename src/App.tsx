import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import InteractiveDoorSimulator from './components/InteractiveDoorSimulator';
import ServicesSection from './components/ServicesSection';
import PriceCalculator from './components/PriceCalculator';
import PortfolioGallery from './components/PortfolioGallery';
import TrustFeatures from './components/TrustFeatures';
import FaqSection from './components/FaqSection';
import QuoteRequestForm from './components/QuoteRequestForm';
import CoverageArea from './components/CoverageArea';
import Footer from './components/Footer';
import QuickContactFloating from './components/QuickContactFloating';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductCatalog />
        <InteractiveDoorSimulator />
        <ServicesSection />
        <PriceCalculator />
        <PortfolioGallery />
        <TrustFeatures />
        <FaqSection />
        <QuoteRequestForm />
        <CoverageArea />
      </main>
      <Footer />
      <QuickContactFloating />
    </div>
  );
}
