import { Reveal } from '../components/reveal';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, ChevronRight, FileSignature } from 'lucide-react';
import { SERVICES, BUSINESS } from '../constants';

const SEVERITY_LABEL: Record<string, string> = { felony: 'Felony', misdemeanor: 'Misdemeanor', varies: 'Varies' };
const SEVERITY_CLASS: Record<string, string> = { felony: 'badge-felony', misdemeanor: 'badge-misdemeanor', varies: 'badge-varies' };

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);
  const others = SERVICES.filter(s => s.slug !== slug);

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-bail font-bold">← Back to Services</Link>
      </div>
    </div>
  );

  return (
    <div className="bg-white text-black">
      {/* Compact header with severity badge */}
      <section className="pt-14 pb-8 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal>
            <Link to="/services" className="inline-flex items-center gap-1 text-gray-400 text-sm hover:text-black mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4" /> All Services
            </Link>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl sm:text-4xl font-bold text-black">{service.title}</h1>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${SEVERITY_CLASS[service.severity]}`}>
                {SEVERITY_LABEL[service.severity]}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="md:col-span-2 space-y-6">
              <Reveal>
                <img src={service.image} alt={service.title} className="w-full h-64 object-cover object-top rounded-xl mb-6" loading="lazy" width={800} height={256} />
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-gray-600 text-lg leading-relaxed">{service.intro}</p>
              </Reveal>
              {service.sections.map((section, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="space-y-3">
                    {section.heading && <h2 className="text-xl font-bold text-black">{section.heading}</h2>}
                    {section.content && <p className="text-gray-500 leading-relaxed">{section.content}</p>}
                    {section.bullets && (
                      <ul className="space-y-2 ml-1">
                        {section.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-gray-500 text-sm">
                            <span className="w-1.5 h-1.5 bg-bail rounded-full mt-2 shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}

              {/* Inline CTA */}
              <Reveal delay={0.2}>
                <div className="bg-charcoal text-white rounded-xl p-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-8">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Need help with this charge?</h3>
                    <p className="text-white/50 text-sm mt-1">Greg answers personally — day or night.</p>
                  </div>
                  <a href={BUSINESS.phoneTel}
                    className="bg-bail text-white font-bold text-sm px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-bail-dark transition-colors shrink-0">
                    <Phone className="h-4 w-4" /> {BUSINESS.phone}
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="space-y-5">
              <div className="bg-warm-gray rounded-xl p-5 border border-gray-100 sticky top-20">
                <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-4">Other Services</h3>
                <div className="space-y-0.5">
                  {others.map(s => (
                    <Link key={s.slug} to={`/services/${s.slug}`}
                      className="flex items-center justify-between py-2.5 px-2 text-sm text-gray-500 hover:text-bail hover:bg-white rounded-lg transition-all">
                      {s.title} <ChevronRight className="h-3 w-3 opacity-40" />
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a href={BUSINESS.docuSignUrl} target="_blank" rel="noopener noreferrer"
                    className="btn-bail block w-full text-center rounded-lg py-3 text-sm">
                    <span className="flex items-center justify-center gap-2"><FileSignature className="h-4 w-4" /> Sign Bail Agreement</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ServiceDetail;
