import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { ScrollToTop } from './components/scroll-to-top';
import { MobileCallButton } from './components/mobile-call-button';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import Areas from './pages/areas';
import FAQ from './pages/faq';
import Contact from './pages/contact';
import Privacy from './pages/privacy';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
      <MobileCallButton />
    </BrowserRouter>
  );
}
