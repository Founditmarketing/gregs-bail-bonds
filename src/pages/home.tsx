import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight, MapPin, ArrowRight, Shield, BadgeCheck, Building2, PhoneCall, FileCheck, Unlock, FileSignature } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
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

const HERO_WORDS = ['Someone', 'you', 'love', 'is', 'in', 'jail.'];

/* ── Animated counter hook ── */
function useCounter(end: number, duration = 1500, inView = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);
  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, duration, inView]);
  return count;
}

/* ── Stat badge with counter ── */
const StatBadge = ({ icon, text, number, suffix = '' }: { icon: React.ReactNode; text: string; number?: number; suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCounter(number ?? 0, 1200, isInView);
  return (
    <div ref={ref} className="flex items-center gap-2.5 bg-white/4 border border-white/6 rounded-lg px-3.5 py-3">
      <span className="text-bail/50">{icon}</span>
      <span className="text-white/55 text-xs font-semibold leading-tight">
        {number != null ? `${count}${suffix}` : text}
      </span>
    </div>
  );
};

/* ── Clip-reveal image wrapper ── */
const ClipRevealImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div ref={ref} className={`clip-reveal ${isInView ? 'visible' : ''}`}>
      <img src={src} alt={alt} className={className} />
    </div>
  );
};

/* ── Timeline step with scroll-triggered animations ── */
const TimelineStep = ({ step, index, isLast, dark }: { step: typeof STEPS[0]; index: number; isLast: boolean; dark?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <div ref={ref} className="step-item">
      <div className="step-number-col">
        <div className={`step-number step-number-animated ${isInView ? 'visible' : ''}`}
          style={{ animationDelay: `${index * 0.12}s` }}>
          {step.num}
        </div>
        {!isLast && (
          <div className={`step-line step-line-animated ${isInView ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.12 + 0.2}s`, background: dark ? 'rgba(255,255,255,0.1)' : undefined }} />
        )}
      </div>
      <motion.div className="step-content"
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.12 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <h3 className={`text-lg ${dark ? 'text-white' : ''}`}>{step.title}</h3>
        <p className={`text-[15px] leading-relaxed ${dark ? 'text-white/50' : 'text-[var(--color-slate-9)]'}`}>{step.desc}</p>
      </motion.div>
    </div>
  );
};

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [0.25, 0]);

  /* ── Cursor-follow glow state ── */
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [glowVisible, setGlowVisible] = useState(false);
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (!glowVisible) setGlowVisible(true);
  }, [glowVisible]);
  const handleMouseLeave = useCallback(() => setGlowVisible(false), []);

  return (
    <div id="home-page">

      {/* ═══════════════════ HERO — CINEMATIC TWO-COLUMN ═══════════════════ */}
      <div ref={heroRef} className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center bg-charcoal overflow-hidden grain">
        {/* Aurora orbs */}
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />

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

              {/* Word-by-word staggered reveal */}
              <h1 className="text-white mb-4" style={{ fontSize: 'var(--text-hero)', lineHeight: 1.05 }}>
                {HERO_WORDS.map((word, i) => (
                  <motion.span key={i}
                    initial={{ opacity: 0, y: 30, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.2 + i * 0.08,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block mr-[0.25em]"
                    style={{ perspective: '800px' }}>
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
                className="text-white/50 text-xl sm:text-2xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Let's get them out.
              </motion.p>

              <motion.a href={BUSINESS.phoneTel} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.5 }}
                className="block mb-2 group">
                <span className="phone-shimmer phone-glow text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                  style={{ fontFamily: 'var(--font-display)' }}>
                  {BUSINESS.phone}
                </span>
              </motion.a>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95, duration: 0.4 }}
                className="text-white/40 text-base">
                Greg answers personally. Day or night.
              </motion.p>
            </div>

            {/* Right — CTA + credentials */}
            <div className="md:col-span-5">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                className="space-y-4">
                {/* Animated gradient border DocuSign CTA */}
                <a href={BUSINESS.docuSignUrl} target="_blank" rel="noopener noreferrer"
                  className="gradient-border flex items-center gap-4 bg-white/6 hover:bg-white/10 rounded-xl p-5 transition-all backdrop-blur-sm group">
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
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.3 }}>
                    <StatBadge icon={<Shield className="h-4 w-4" />} text={BUSINESS.license} />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.96, duration: 0.3 }}>
                    <StatBadge icon={<BadgeCheck className="h-4 w-4" />} text="" number={13} suffix="+ Years" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.02, duration: 0.3 }}>
                    <StatBadge icon={<Building2 className="h-4 w-4" />} text="" number={4} suffix=" PA & WV Offices" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.08, duration: 0.3 }}>
                    <StatBadge icon={<BadgeCheck className="h-4 w-4" />} text={BUSINESS.network} />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════ HOW IT WORKS — DARK SECTION ═══════════════════ */}
      <section id="how-bail-works" className="py-24 sm:py-28 bg-charcoal relative grain overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <Reveal className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <h2 className="text-white accent-underline">How It Works</h2>
                <p className="text-white/40 mt-4 text-lg">Most people are released in 2 to 4 hours.</p>
                <hr className="hr-accent mt-6" />
              </div>
            </Reveal>

            <div className="md:col-span-8">
              <div className="step-timeline">
                {STEPS.map((step, i) => (
                  <TimelineStep key={step.num} step={step} index={i} isLast={i === STEPS.length - 1} dark />
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

      {/* ═══════════════════ TRUST BANNER — FULL ORANGE ═══════════════════ */}
      <section className="relative py-14 sm:py-16 overflow-hidden" style={{ background: 'linear-gradient(120deg, oklch(28% 0.06 55) 0%, oklch(52% 0.16 55) 45%, oklch(66% 0.185 55) 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '128px' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: '24/7', label: 'Always Available' },
              { value: '13+', label: 'Years Experience' },
              { value: '4', label: 'Office Locations' },
              { value: '2-4hr', label: 'Typical Release' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.08} direction="scale">
                <div>
                  <div className="text-white text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</div>
                  <div className="text-white/70 text-sm font-semibold mt-1">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES — CLIP-PATH REVEALS ═══════════════════ */}
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
                    <ClipRevealImage src={s.image} alt={s.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full z-10 ${SEVERITY_CLASS[s.severity]}`}>
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

      {/* ═══════════════════ LOCATIONS — IMAGE BG ═══════════════════ */}
      <section id="home-locations" className="py-24 relative overflow-hidden">
        <img src={IMAGES.hero} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[oklch(15%_0.020_250/0.88)]" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Reveal><div className="mb-10 text-center">
            <h2 className="text-white accent-underline">4 Offices Across PA & WV</h2>
            <p className="text-white/50 mt-3">Same-day bond posting at all locations. Greg covers every county in between.</p>
            <hr className="hr-accent mt-6 mx-auto" />
          </div></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.city} delay={i * 0.08} direction="scale">
                <div className="bg-white/8 backdrop-blur-sm rounded-xl p-6 text-center card-lift border border-white/10 hover:bg-white/12 transition-colors">
                  <div className="w-10 h-10 bg-[var(--color-orange-9)] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{loc.city}</h3>
                  <p className="text-white/40 text-xs mt-1">{loc.region}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}><div className="mt-8 text-center">
            <Link to="/areas" className="inline-flex items-center gap-2 text-bail font-bold text-sm hover:text-white transition-colors">
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
                <div className="rounded-xl p-6 border border-[var(--color-slate-5)] bg-white shadow-sm card-accent">
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

      {/* ═══════════════════ BOTTOM CTA — CURSOR GLOW ═══════════════════ */}
      <section ref={ctaRef} className="bg-charcoal py-24 relative grain overflow-hidden"
        onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {/* Cursor-following radial glow */}
        {glowVisible && (
          <div className="cursor-glow" style={{ left: glowPos.x, top: glowPos.y }} />
        )}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <Reveal direction="left">
              <div>
                <p className="label-caps text-white/30 mb-4">24/7/365</p>
                <h2 className="text-white leading-snug mb-2" style={{ fontSize: 'var(--text-4xl)' }}>
                  Jail doesn't wait.
                </h2>
                <p className="text-white/30 text-2xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>Neither does Greg.</p>
                <a href={BUSINESS.phoneTel}>
                  <span className="phone-shimmer phone-glow text-3xl sm:text-4xl font-bold tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}>
                    {BUSINESS.phone}
                  </span>
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
