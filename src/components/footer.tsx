import { Link } from 'react-router-dom';
import { Phone, MapPin, FileSignature, Shield } from 'lucide-react';
import { BUSINESS, SERVICES, LOCATIONS, IMAGES } from '../constants';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="site-footer" className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={IMAGES.logoBadge} alt="Greg's Bail Bonds" className="h-8 w-auto" loading="lazy" width={80} height={32} />
              <span className="text-base font-bold text-white">Greg's Bail Bonds</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Trusted 24/7 bail help across Pennsylvania and West Virginia. Over 13 years of experience.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/30 mb-4">
              <Shield className="h-3.5 w-3.5 text-bail/50" /> {BUSINESS.license}
            </div>
            <a href={BUSINESS.phoneTel} className="flex items-center gap-2 text-bail font-bold text-lg hover:text-white transition-colors">
              <Phone className="h-4 w-4" /> {BUSINESS.phone}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">Services</h3>
            <div className="space-y-2">
              {SERVICES.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="block text-sm text-white/40 hover:text-white transition-colors">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">Locations</h3>
            <div className="space-y-3">
              {LOCATIONS.map(loc => (
                <div key={loc.city} className="flex items-start gap-2.5">
                  <MapPin className="h-3.5 w-3.5 text-bail/60 mt-1 shrink-0" />
                  <div>
                    <span className="text-sm text-white/60 font-medium">{loc.city}</span>
                    <span className="text-white/30 text-xs block">{loc.region}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-white/40 hover:text-white transition-colors">About Greg</Link>
              <Link to="/areas" className="block text-sm text-white/40 hover:text-white transition-colors">Areas We Cover</Link>
              <Link to="/faq" className="block text-sm text-white/40 hover:text-white transition-colors">FAQ</Link>
              <Link to="/contact" className="block text-sm text-white/40 hover:text-white transition-colors">Contact</Link>
              <a href={BUSINESS.docuSignUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-bail/70 font-semibold hover:text-bail transition-colors mt-2">
                <FileSignature className="h-3.5 w-3.5" /> Sign Bail Agreement
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/25">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};
