import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
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

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, width: '100%' }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgressBar />
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
