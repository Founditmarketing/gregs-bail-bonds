import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Home, Users, Wrench, MapPin, HelpCircle, MessageSquare, FileSignature } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS } from '../constants';

const navLinks: { name: string; path: string; icon: React.ReactNode }[] = [
  { name: 'Home', path: '/', icon: <Home className="h-4 w-4" /> },
  { name: 'About', path: '/about', icon: <Users className="h-4 w-4" /> },
  { name: 'Services', path: '/services', icon: <Wrench className="h-4 w-4" /> },
  { name: 'Areas', path: '/areas', icon: <MapPin className="h-4 w-4" /> },
  { name: 'FAQ', path: '/faq', icon: <HelpCircle className="h-4 w-4" /> },
  { name: 'Contact', path: '/contact', icon: <MessageSquare className="h-4 w-4" /> },
];

const TICKER_ITEMS = [
  `📞 ${BUSINESS.phone}`,
  '⚡ Available 24/7/365',
  '📍 Philadelphia · Chambersburg · Harrisburg · Poconos',
  '✍️ Sign bail agreement online via DocuSign',
  '🛡️ Licensed PA Bail Bondsman · 13+ Years',
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* Ticker top bar */}
      <div className="bg-charcoal text-white py-2 overflow-hidden relative">
        <div className="ticker-track flex items-center gap-12 whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <a key={i} href={i % TICKER_ITEMS.length === 0 ? BUSINESS.phoneTel : undefined}
              className="text-xs font-medium text-white/50 hover:text-white transition-colors flex items-center gap-2 shrink-0">
              {item}
              <span className="text-bail/30">•</span>
            </a>
          ))}
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-glass shadow-lg border-b border-[var(--color-slate-6)]' : 'bg-[var(--color-slate-1)] border-b border-[var(--color-slate-6)]'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between py-2.5">

          {/* Text logo — colored accent */}
          <Link id="nav-logo" to="/" className="flex flex-col shrink-0 group">
            <span className="text-[15px] md:text-base font-bold leading-tight tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-bail">Greg's</span> <span className="text-[var(--color-slate-12)]">Bail Bonds</span>
            </span>
            <span className="label-caps text-[var(--color-slate-8)]" style={{ fontSize: '0.55rem' }}>
              Philadelphia, PA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path}
                className={`relative px-3 py-2 text-[13px] font-semibold rounded-md transition-all duration-200 ${
                  isActive(link.path) ? 'text-bail bg-[var(--color-orange-2)]' : 'text-[var(--color-slate-9)] hover:text-[var(--color-slate-12)] hover:bg-[var(--color-slate-3)]'
                }`}>
                {link.name}
              </Link>
            ))}
            <div className="ml-3 pl-3 border-l border-[var(--color-slate-6)] flex items-center gap-3">
              <a href={BUSINESS.phoneTel}
                className="flex items-center gap-1.5 bg-bail text-white font-bold text-sm px-5 py-2.5 rounded-md hover:bg-[var(--color-orange-10)] transition-colors">
                <Phone className="h-4 w-4" /> {BUSINESS.phone}
              </a>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <a href={BUSINESS.phoneTel} className="flex items-center gap-1.5 bg-bail text-white font-bold text-xs px-3 py-2 rounded-md">
              <Phone className="h-3.5 w-3.5" /> Call
            </a>
            <button id="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} className="p-2 text-[var(--color-slate-9)] cursor-pointer">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} className="lg:hidden bg-[var(--color-slate-1)] border-t border-[var(--color-slate-6)] overflow-hidden">
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.path} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04, duration: 0.2 }}>
                    <Link to={link.path}
                      className={`flex items-center gap-3 py-2.5 px-3 rounded-md font-semibold text-sm transition-colors ${
                        isActive(link.path) ? 'bg-[var(--color-orange-2)] text-bail font-bold' : 'text-[var(--color-slate-9)] hover:text-[var(--color-slate-12)] hover:bg-[var(--color-slate-3)]'
                      }`}>
                      <span className={isActive(link.path) ? 'text-bail' : 'text-[var(--color-slate-7)]'}>{link.icon}</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-[var(--color-slate-6)] space-y-3">
                  <a href={BUSINESS.phoneTel} className="btn-bail block w-full text-center rounded-md py-3 text-sm">
                    <span className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" /> Call {BUSINESS.phone}</span>
                  </a>
                  <a href={BUSINESS.docuSignUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 font-semibold text-[var(--color-slate-9)] text-sm py-2">
                    <FileSignature className="h-4 w-4" /> Sign Bail Agreement
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
