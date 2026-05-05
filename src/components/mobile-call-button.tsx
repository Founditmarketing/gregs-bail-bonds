import { Phone } from 'lucide-react';
import { BUSINESS } from '../constants';

export function MobileCallButton() {
  return (
    <a
      href={BUSINESS.phoneTel}
      className="lg:hidden fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl transition-all hover:scale-105 active:scale-95"
      style={{ background: 'linear-gradient(135deg, #E66952 0%, #AA2F19 100%)', boxShadow: '0 6px 20px rgba(230, 105, 82, 0.4)' }}
      aria-label="Call Greg's Bail Bonds"
      id="mobile-call-fab"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
