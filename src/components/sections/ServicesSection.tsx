import { ArrowRight, Star, Smile, Zap, AlignCenter, Sparkles, Siren } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const icons = [Star, Smile, Zap, AlignCenter, Sparkles, Siren];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4 reveal-up">Our Services</div>
          <h2 className="font-display text-4xl xl:text-5xl font-extrabold text-secondary leading-[1.2] mb-4 reveal-up delay-100">
            Comprehensive <span className="gradient-text">Dental Services</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed reveal-up delay-200">
            We provide a full range of dental services to keep your smile healthy, beautiful, and confident for life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={service.title}
                className={`card-bottom-bar relative bg-white rounded-2xl p-9 border border-slate-100 hover:-translate-y-3 hover:shadow-primary hover:border-primary/20 transition-all duration-400 group cursor-pointer overflow-hidden reveal-up`}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "radial-gradient(circle at top right, rgba(0,183,176,0.06), transparent 70%)" }} />

                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-[18px] font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.desc}</p>

                <a
                  href="#appointment"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Schedule Appointment  <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
