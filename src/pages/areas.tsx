import { Reveal } from '../components/reveal';
import { MapPin, Phone } from 'lucide-react';
import { PA_COUNTIES, WV_COUNTIES, MD_AREAS, BUSINESS, LOCATIONS } from '../constants';

function CountyGrid({ title, counties }: { title: string; counties: string[] }) {
  return (
    <div className="mb-12">
      <Reveal><h2 className="text-xl font-bold text-black mb-5">{title}</h2></Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
        {counties.map((c, i) => (
          <Reveal key={c} delay={i * 0.03}>
            <div className="flex items-center gap-3 p-3.5 bg-warm-gray rounded-lg border border-gray-100 card-lift">
              <MapPin className="h-4 w-4 text-bail shrink-0" />
              <span className="text-sm font-semibold">{c}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

const Areas = () => (
  <div className="bg-white text-black">
    {/* Map-style header with location pins */}
    <section className="bg-charcoal py-14">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Areas We Cover</h1>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.city} delay={i * 0.08} direction="scale">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <MapPin className="h-5 w-5 text-bail mx-auto mb-2" />
                <h3 className="font-bold text-white text-sm">{loc.city}</h3>
                <p className="text-white/40 text-xs mt-0.5">{loc.region}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <p className="text-gray-500 leading-relaxed mb-12 max-w-2xl">
            We provide fast, professional bail bond services across Pennsylvania, West Virginia, and Maryland.
            With 4 strategically located offices and 13+ years of experience, we respond quickly no matter where
            the arrest occurred.
          </p>
        </Reveal>
        <CountyGrid title="Pennsylvania" counties={PA_COUNTIES} />
        <CountyGrid title="West Virginia" counties={WV_COUNTIES} />
        <CountyGrid title="Maryland" counties={MD_AREAS} />
      </div>
    </section>

    <section className="bg-charcoal py-14">
      <Reveal direction="scale">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <p className="text-white/40 text-sm mb-3">Don't see your county?</p>
          <a href={BUSINESS.phoneTel} className="inline-flex items-center gap-3 text-bail text-3xl font-bold tracking-tight hover:text-white transition-colors">
            <Phone className="h-7 w-7" /> {BUSINESS.phone}
          </a>
          <p className="text-white/30 text-xs mt-3">Greg may still be able to help.</p>
        </div>
      </Reveal>
    </section>
  </div>
);
export default Areas;
