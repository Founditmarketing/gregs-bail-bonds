import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight, MapPin, ArrowRight, Shield, BadgeCheck, Building2, PhoneCall, FileCheck, Unlock, FileSignature } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BUSINESS, SERVICES, LOCATIONS, FAQ_DATA, IMAGES } from '../constants';
import { Reveal } from '../components/reveal';

const SEVERITY_LABEL: Record<string, string> = { felony: 'Felony', misdemeanor: 'Misdemeanor', varies: 'Varies' };
const SEVERITY_CLASS: Record<string, string> = { felony: 'badge-felony', misdemeanor: 'badge-misdemeanor', varies: 'badge-varies' };

const STEPS = [
  { num: '01', icon: <PhoneCall className="h-5 w-5" />, title: 'Call Greg, Not a Call Center',
    desc: 'Greg answers his own phone, 24/7. He verifies the bond amount, explains your options in plain English, and tells you exactly what to expect.' },
  { num: '02', icon: <FileCheck className="h-5 w-5" />, title: 'Sign & Post Bond',
    desc: 'Complete the bail agreement in person or via DocuSign from your phone. Greg posts the bond with the court. Flexible payment plans available.' },
  { num: '03', icon: <Unlock className="h-5 w-5" />, title: 'They Come Home',
    desc: 'Once bond is posted, release typically takes 2 to 4 hours. Greg walks you through court dates, conditions, and everything that happens next.' },
];



const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [0.25, 0]);

  return (
    <div id="home-page">

      {/* ═══════════════════ HERO — TWO-COLUMN CRISIS LAYOUT ═══════════════════ */}
      <div ref={heroRef} className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center bg-charcoal overflow-hidden grain">
        <motion.img src={IMAGES.hero} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ y: heroY, opacity: heroOpacity }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(15%_0.020_250)] via-[oklch(15%_0.020_250/0.75)] to-[oklch(15%_0.020_250/0.35)]" />

        <div className="relative z-10 container mx-auto px-5 sm:px-6 py-16 sm:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Left — crisis copy + phone */}
            <div className="md:col-span-7">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}
                className="flex items-center gap-2.5 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-green-400/80 label-caps">Available Now</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white mb-4" style={{ fontSize: 'var(--text-hero)', lineHeight: 1.05 }}>
                Someone you love<br />is in jail.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }}
                className="text-white/50 text-xl sm:text-2xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Let's get them out.
              </motion.p>

              <motion.a href={BUSINESS.phoneTel} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}
                className="block mb-2 group">
                <span className="text-bail phone-glow text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight group-hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}>
                  {BUSINESS.phone}
                </span>
              </motion.a>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.4 }}
                className="text-white/40 text-base">
                Greg answers personally. Day or night.
              </motion.p>
            </div>

            {/* Right — CTA + credentials */}
            <div className="md:col-span-5">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-4">
                <a href={BUSINESS.docuSignUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/6 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-all backdrop-blur-sm group">
                  <div className="w-12 h-12 bg-[var(--color-orange-3)] rounded-xl flex items-center justify-center shrink-0">
                    <FileSignature className="h-5 w-5 text-bail" />
                  </div>
                  <div>
                    <span className="text-white font-bold text-base block">Sign Bail Agreement Online</span>
                    <span className="text-white/35 text-sm">Complete via DocuSign from your phone</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-white/50 ml-auto transition-colors shrink-0" />
                </a>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Shield className="h-4 w-4" />, text: BUSINESS.license },
                    { icon: <BadgeCheck className="h-4 w-4" />, text: BUSINESS.experience },
                    { icon: <Building2 className="h-4 w-4" />, text: '4 PA & WV Offices' },
                    { icon: <BadgeCheck className="h-4 w-4" />, text: BUSINESS.network },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.06, duration: 0.3 }}
                      className="flex items-center gap-2.5 bg-white/4 border border-white/6 rounded-lg px-3.5 py-3">
                      <span className="text-bail/50">{item.icon}</span>
                      <span className="text-white/55 text-xs font-semibold leading-tight">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════ HOW IT WORKS — STEP TIMELINE ═══════════════════ */}
      <section id="how-bail-works" className="py-24 sm:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Left — section heading */}
            <Reveal className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <h2 className="accent-underline">How It Works</h2>
                <p className="text-[var(--color-slate-8)] mt-4 text-lg">Most people are released in 2 to 4 hours.</p>
                <hr className="hr-accent mt-6" />
              </div>
            </Reveal>

            {/* Right — timeline steps */}
            <div className="md:col-span-8">
              <div className="step-timeline">
                {STEPS.map((step, i) => (
                  <Reveal key={step.num} delay={i * 0.1}>
                    <div className="step-item">
                      <div className="step-number-col">
                        <div className="step-number">{step.num}</div>
                        {i < STEPS.length - 1 && <div className="step-line" />}
                      </div>
                      <div className="step-content">
                        <h3 className="text-lg">{step.title}</h3>
                        <p className="text-[var(--color-slate-9)] text-[15px] leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section id="home-about" className="py-24 bg-[var(--color-slate-2)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-10 max-w-6xl mx-auto items-center">
            <Reveal className="md:col-span-5" direction="left">
              <div className="img-accent-wrap">
                <img src={IMAGES.handcuffs} alt="Bail bonds help" className="rounded-xl shadow-xl w-full h-auto" />
              </div>
            </Reveal>
            <div className="md:col-span-7 md:pl-6">
              <Reveal delay={0.1} direction="right">
                <h2 className="accent-underline mb-5">
                  Greg isn't a call center.
                </h2>
                <p className="text-[var(--color-slate-8)] text-xl mt-2" style={{ fontFamily: 'var(--font-display)' }}>
                  He's a one-man operation.
                </p>
                <hr className="hr-accent mt-4 mb-6" />
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[var(--color-slate-9)] leading-relaxed mb-4 text-lg">
                  When you call Greg's Bail Bonds, Greg answers. Not a receptionist, not a voicemail tree; the person who's going to get your family member out.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-[var(--color-slate-8)] leading-relaxed mb-6">
                  13 years. 4 offices across PA and WV. Licensed, bonded, and a member of the Expert Bail Network. He handles everything from DUI to felony with the same personal attention, no matter the charge.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-slate-12)] text-[var(--color-slate-12)] font-bold rounded-lg hover:bg-[var(--color-slate-12)] hover:text-white transition-all text-sm">
                  About Greg <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES (capped at 6) ═══════════════════ */}
      <section id="home-services" className="py-24 sm:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal><div className="mb-14">
            <h2 className="accent-underline">What You're Dealing With</h2>
            <p className="text-[var(--color-slate-8)] mt-4 max-w-lg">Select the charge type to understand the bail process and how Greg can help.</p>
            <hr className="hr-accent mt-6" />
          </div></Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04} direction={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}>
                <Link to={`/services/${s.slug}`} className="group block rounded-xl overflow-hidden card-lift card-accent border border-[var(--color-slate-6)] bg-white h-full">
                  <div className="h-44 overflow-hidden relative">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${SEVERITY_CLASS[s.severity]}`}>
                      {SEVERITY_LABEL[s.severity]}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[15px] mb-1.5 group-hover:text-bail transition-colors">{s.title}</h3>
                    <p className="text-[var(--color-slate-8)] text-sm leading-relaxed mb-3 line-clamp-2">{s.intro}</p>
                    <span className="label-caps text-[var(--color-slate-7)] group-hover:text-bail inline-flex items-center gap-1 transition-colors" style={{ fontSize: '0.7rem' }}>
                      Learn More <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>


        </div>
      </section>

      {/* ═══════════════════ LOCATIONS ═══════════════════ */}
      <section id="home-locations" className="py-20 bg-[var(--color-slate-2)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal><div className="mb-10 text-center">
            <h2 className="accent-underline">4 Offices Across PA & WV</h2>
            <p className="text-[var(--color-slate-8)] mt-3">Same-day bond posting at all locations. Greg covers every county in between.</p>
            <hr className="hr-accent mt-6 mx-auto" />
          </div></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.city} delay={i * 0.08} direction="scale">
                <div className="bg-white rounded-xl p-6 text-center card-lift card-accent border border-[var(--color-slate-6)]">
                  <div className="w-10 h-10 bg-[var(--color-orange-2)] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-5 w-5 text-bail" />
                  </div>
                  <h3 className="text-sm font-bold">{loc.city}</h3>
                  <p className="text-[var(--color-slate-8)] text-xs mt-1">{loc.region}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}><div className="mt-8 text-center">
            <Link to="/areas" className="inline-flex items-center gap-2 text-bail font-bold text-sm hover:underline">
              See All Areas We Cover <ArrowRight className="h-4 w-4" />
            </Link>
          </div></Reveal>
        </div>
      </section>

      {/* ═══════════════════ FAQ PREVIEW ═══════════════════ */}
      <section id="home-faq" className="py-24 sm:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal><div className="mb-12">
            <h2 className="accent-underline">Common Questions</h2>
            <hr className="hr-accent mt-6" />
          </div></Reveal>
          <div className="space-y-3">
            {FAQ_DATA.slice(0, 3).map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-[var(--color-slate-2)] rounded-xl p-6 border border-[var(--color-slate-6)] card-accent">
                  <h3 className="text-sm font-bold mb-3 text-[var(--color-slate-12)]">{item.question}</h3>
                  <p className="text-[var(--color-slate-8)] text-sm leading-relaxed">{item.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}><div className="mt-8">
            <Link to="/faq" className="text-bail font-bold text-sm hover:underline inline-flex items-center gap-1">
              View All FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div></Reveal>
        </div>
      </section>

      {/* ═══════════════════ BOTTOM CTA — SPLIT + GRAIN ═══════════════════ */}
      <section className="bg-charcoal py-24 relative grain">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <Reveal direction="left">
              <div>
                <p className="label-caps text-white/30 mb-4">24/7/365</p>
                <h2 className="text-white leading-snug mb-2" style={{ fontSize: 'var(--text-4xl)' }}>
                  Jail doesn't wait.
                </h2>
                <p className="text-white/30 text-2xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>Neither does Greg.</p>
                <a href={BUSINESS.phoneTel} className="text-bail phone-glow text-3xl sm:text-4xl font-bold tracking-tight hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}>
                  {BUSINESS.phone}
                </a>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={BUSINESS.phoneTel} className="flex items-center gap-4 bg-white/5 hover:bg-white/8 border border-white/8 rounded-xl p-6 transition-colors card-accent">
                  <div className="w-12 h-12 bg-[var(--color-orange-3)] rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-bail" />
                  </div>
                  <div><span className="text-white font-bold text-base block">Call Now</span><span className="text-white/30 text-sm">Fastest option</span></div>
                </a>
                <a href={BUSINESS.docuSignUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/5 hover:bg-white/8 border border-white/8 rounded-xl p-6 transition-colors card-accent">
                  <div className="w-12 h-12 bg-[var(--color-orange-3)] rounded-xl flex items-center justify-center shrink-0">
                    <FileSignature className="h-5 w-5 text-bail" />
                  </div>
                  <div><span className="text-white font-bold text-base block">Sign Agreement</span><span className="text-white/30 text-sm">DocuSign online</span></div>
                </a>
                <Link to="/areas" className="flex items-center gap-4 bg-white/5 hover:bg-white/8 border border-white/8 rounded-xl p-6 transition-colors card-accent sm:col-span-2">
                  <div className="w-12 h-12 bg-[var(--color-orange-3)] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-bail" />
                  </div>
                  <div><span className="text-white font-bold text-base block">Find a Location</span><span className="text-white/30 text-sm">4 offices across PA & WV</span></div>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
