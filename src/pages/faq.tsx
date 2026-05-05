import { useState } from 'react';
import { Reveal } from '../components/reveal';
import { ChevronDown, Phone } from 'lucide-react';
import { FAQ_DATA, BUSINESS } from '../constants';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="bg-white text-black">
      {/* Minimal white header — no hero image */}
      <section className="pt-16 pb-8 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">Frequently Asked Questions</h1>
            <p className="text-gray-400">Everything you need to know about the bail process.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-3">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 0.03}>
                <div className={`rounded-xl border transition-all duration-300 ${
                  isOpen ? 'border-bail/30 shadow-sm bg-white' : 'border-gray-100 bg-warm-gray'
                }`}>
                  <button onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left bg-transparent border-none cursor-pointer">
                    <span className={`font-bold text-sm transition-colors ${isOpen ? 'text-bail' : 'text-black'}`}>
                      {item.question}
                    </span>
                    <ChevronDown className={`h-5 w-5 shrink-0 mt-0.5 transition-all duration-300 ${
                      isOpen ? 'rotate-180 text-bail' : 'text-gray-300'
                    }`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-6"><p className="text-gray-500 text-sm leading-relaxed">{item.answer}</p></div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Phone CTA */}
      <section className="bg-charcoal py-14">
        <Reveal direction="scale">
          <div className="container mx-auto px-4 text-center max-w-xl">
            <p className="text-white/40 text-sm mb-3">Still have questions?</p>
            <a href={BUSINESS.phoneTel}
              className="inline-flex items-center gap-3 text-bail text-3xl font-bold tracking-tight hover:text-white transition-colors">
              <Phone className="h-7 w-7" /> {BUSINESS.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
export default FAQ;
