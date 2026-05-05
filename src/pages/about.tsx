import { Reveal } from '../components/reveal';
import { BUSINESS, LOCATIONS, IMAGES } from '../constants';
import { Phone, MapPin, Shield, BadgeCheck } from 'lucide-react';

const About = () => (
  <div className="bg-white text-black">
    {/* No hero banner — starts inline */}
    <section className="py-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12 max-w-5xl mx-auto">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <img src={IMAGES.logoBadge} alt="Greg's Bail Bonds" className="h-12 w-auto" />
                <div>
                  <span className="text-bail text-xs font-semibold uppercase tracking-widest">About</span>
                  <h1 className="text-3xl sm:text-4xl font-bold text-black leading-tight">Greg's Bail Bonds</h1>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-600 leading-relaxed mb-6 font-medium">
                When you call, Greg answers. Not a receptionist, not a voicemail — the person who's going to get your family member out.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-gray-500 leading-relaxed mb-4">
                At Greg's Bail Bonds of Philadelphia, we believe everyone deserves a second chance — and fast,
                judgment-free help when they need it most. Founded over 13 years ago by Greg, a licensed bail
                bondsman with deep knowledge of the legal system, our mission is simple: to help families navigate
                the bail process with compassion, clarity, and confidence.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Why Greg, Specifically?</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Greg isn't just another agent behind a desk — he's a one-man operation who puts people first.
                His 13+ years in the legal bonding system mean you're getting more than bail; you're getting
                personal guidance through one of life's most stressful moments.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { icon: <Shield className="h-4 w-4" />, text: BUSINESS.license },
                  { icon: <BadgeCheck className="h-4 w-4" />, text: BUSINESS.experience },
                  { icon: <MapPin className="h-4 w-4" />, text: "4 Office Locations" },
                  { icon: <BadgeCheck className="h-4 w-4" />, text: BUSINESS.network },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-warm-gray rounded-lg px-3 py-2.5 border border-gray-100">
                    <span className="text-bail">{item.icon}</span>{item.text}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <h2 className="text-2xl font-bold text-black mt-10 mb-3">Local Roots, Wide Reach</h2>
              <p className="text-gray-500 leading-relaxed">
                Whether you're calling from a jail in Philly, a courtroom downtown, or need discreet help in a
                nearby county, Greg works quickly and respectfully — every single time. With offices in
                Philadelphia, Chambersburg, Harrisburg, and the Poconos, help is always close.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5 space-y-6">
            <Reveal direction="right" delay={0.1}>
              <img src={IMAGES.servicesPage} alt="Bail bonds" className="rounded-xl shadow-xl w-full" />
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <img src={IMAGES.handcuffs} alt="Bail support" className="rounded-xl shadow-lg w-full" />
            </Reveal>
            <Reveal direction="right" delay={0.25}>
              <div className="bg-charcoal rounded-xl p-6">
                <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">Office Locations</h3>
                <div className="space-y-3">
                  {LOCATIONS.map(loc => (
                    <div key={loc.city} className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-bail mt-0.5 shrink-0" />
                      <div><span className="text-white text-sm font-bold block">{loc.city}</span>
                      <span className="text-white/40 text-xs">{loc.region}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* CTA — phone-focused */}
    <section className="bg-charcoal py-16">
      <Reveal direction="scale">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <p className="text-white/40 text-sm mb-3">Need bail help right now?</p>
          <a href={BUSINESS.phoneTel} className="text-bail text-4xl sm:text-5xl font-bold tracking-tight hover:text-white transition-colors">
            {BUSINESS.phone}
          </a>
          <p className="text-white/30 text-xs mt-3">Greg answers personally. Day or night.</p>
        </div>
      </Reveal>
    </section>
  </div>
);
export default About;
