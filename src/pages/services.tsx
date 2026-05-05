import { Reveal } from '../components/reveal';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants';

const SEVERITY_LABEL: Record<string, string> = { felony: 'Felony', misdemeanor: 'Misdemeanor', varies: 'Varies' };
const SEVERITY_CLASS: Record<string, string> = { felony: 'badge-felony', misdemeanor: 'badge-misdemeanor', varies: 'badge-varies' };
const ALL_TAGS = ['DUI/DWI', 'Drug Charges', 'Felony', 'Domestic Violence', 'Theft', 'Violent Crimes', 'Sex Crimes', 'White Collar', 'Probation'];

const Services = () => (
  <div className="bg-white text-black">
    {/* Compact header with scrolling charge tags */}
    <section className="pt-16 pb-10 border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">Bail Bond Services</h1>
          <p className="text-gray-400 max-w-xl mb-6">Select a charge type below to understand the bail process, typical bond amounts, and how Greg can help.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map(tag => (
              <span key={tag} className="text-xs font-semibold px-3 py-1.5 bg-warm-gray rounded-full text-gray-500 border border-gray-100">{tag}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05} direction={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}>
              <Link to={`/services/${s.slug}`} className="group block bg-white rounded-xl overflow-hidden card-lift border border-gray-100 h-full">
                <div className="h-48 overflow-hidden relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${SEVERITY_CLASS[s.severity]}`}>
                    {SEVERITY_LABEL[s.severity]}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-black mb-1.5 group-hover:text-bail transition-colors text-[15px]">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">{s.intro}</p>
                  <span className="text-xs font-bold text-gray-300 group-hover:text-bail inline-flex items-center gap-1 transition-colors">
                    Learn More <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);
export default Services;
