import React, { useState } from 'react';
import { Phone, FileSignature, MapPin, Clock, Send } from 'lucide-react';
import { Reveal } from '../components/reveal';
import { BUSINESS, LOCATIONS } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="bg-white text-black">
      {/* Phone number IS the hero */}
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <Reveal direction="scale">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-green-400/80 text-xs font-semibold uppercase tracking-widest">Available Now</span>
            </div>
            <h1 className="text-2xl font-bold text-white/50 mb-4">Need Bail Help?</h1>
            <a href={BUSINESS.phoneTel} className="block text-bail text-5xl sm:text-6xl font-bold tracking-tight hover:text-white transition-colors mb-3">
              {BUSINESS.phone}
            </a>
            <p className="text-white/30 text-sm">Greg answers personally. Day or night.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="space-y-4">
              <Reveal direction="left">
                <div className="bg-warm-gray border border-gray-100 rounded-xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-bail/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-bail" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-sm">Hours</h3>
                    <p className="text-gray-500 text-sm"><strong className="text-black">24/7/365</strong> — nights, weekends, holidays</p>
                  </div>
                </div>
              </Reveal>
              <Reveal direction="left" delay={0.08}>
                <a href={BUSINESS.docuSignUrl} target="_blank" rel="noopener noreferrer"
                  className="block bg-warm-gray border border-gray-100 rounded-xl p-6 hover:border-bail/30 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-bail/10 rounded-lg flex items-center justify-center shrink-0">
                      <FileSignature className="h-6 w-6 text-bail" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black text-sm group-hover:text-bail transition-colors">Sign Bail Agreement</h3>
                      <p className="text-gray-400 text-xs">Complete online via DocuSign</p>
                    </div>
                  </div>
                </a>
              </Reveal>
              <Reveal direction="left" delay={0.16}>
                <div className="bg-warm-gray border border-gray-100 rounded-xl p-6">
                  <h3 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Office Locations</h3>
                  <div className="space-y-3">
                    {LOCATIONS.map(loc => (
                      <div key={loc.city} className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-bail mt-0.5 shrink-0" />
                        <div><span className="font-bold text-black text-sm block">{loc.city}</span>
                        <span className="text-gray-400 text-xs">{loc.region}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal direction="right">
              <div className="bg-warm-gray border border-gray-100 rounded-xl p-7">
                <h2 className="text-xl font-bold text-black mb-1">Send a Message</h2>
                <p className="text-gray-400 text-sm mb-6">For non-emergency inquiries. For urgent help, call directly.</p>
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-black mb-2">Message Received</h3>
                    <p className="text-gray-500 text-sm">Greg will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="c-name" className="block text-xs font-bold text-black mb-1.5">Your Name</label>
                      <input id="c-name" type="text" required value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-bail" placeholder="Full name" />
                    </div>
                    <div>
                      <label htmlFor="c-phone" className="block text-xs font-bold text-black mb-1.5">Phone Number</label>
                      <input id="c-phone" type="tel" required value={formData.phone}
                        onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-bail" placeholder="(555) 555-5555" />
                    </div>
                    <div>
                      <label htmlFor="c-msg" className="block text-xs font-bold text-black mb-1.5">Message</label>
                      <textarea id="c-msg" required rows={4} value={formData.message}
                        onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-bail resize-none" placeholder="How can we help?" />
                    </div>
                    <button type="submit" className="btn-bail w-full text-center rounded-lg py-3 text-sm flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
