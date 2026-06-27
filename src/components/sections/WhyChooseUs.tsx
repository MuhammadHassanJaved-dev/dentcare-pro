"use client";
import { UserRound, Microscope, Tag, Siren } from "lucide-react";
import { WHY_CARDS, COUNTERS } from "@/lib/constants";
import { useCounter } from "@/hooks/useCounter";

const icons = [UserRound, Microscope, Tag, Siren];

function CounterCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value, 2200);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative bg-gradient-to-br from-primary to-primary-light rounded-2xl p-9 text-white text-center overflow-hidden reveal-up"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/8" />
      <span className="relative block text-5xl sm:text-6xl font-black leading-none mb-2">
        {count}{suffix}
      </span>
      <span className="relative block text-sm font-medium opacity-90">{label}</span>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4 reveal-up">Why Choose Us</div>
          <h2 className="font-display text-4xl xl:text-5xl font-extrabold text-secondary leading-[1.2] mb-4 reveal-up delay-100">
            Why Patients <span className="gradient-text">Trust Us</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed reveal-up delay-200">
            We combine expertise, technology and compassionate care to deliver dental experiences that exceed expectations.
          </p>
        </div>

        {/* Why Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {WHY_CARDS.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 text-center border border-slate-100 hover:-translate-y-2 hover:shadow-primary hover:border-primary/20 transition-all duration-400 reveal-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-[70px] h-[70px] rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white mx-auto mb-5 shadow-primary">
                  <Icon size={30} />
                </div>
                <h3 className="font-bold text-secondary text-[17px] mb-3">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COUNTERS.map((c) => (
            <CounterCard key={c.label} value={c.value} suffix={c.suffix} label={c.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
