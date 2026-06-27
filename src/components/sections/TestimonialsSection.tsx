"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxSlide = TESTIMONIALS.length - slidesPerView;

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxSlide ? 0 : c + 1));
  }, [maxSlide]);

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxSlide : c - 1));
  }, [maxSlide]);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  const cardWidth = 100 / slidesPerView;
  const gap = 24;

  return (
    <section id="testimonials" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4 reveal-up">Testimonials</div>
          <h2 className="font-display text-4xl xl:text-5xl font-extrabold text-secondary leading-[1.2] mb-4 reveal-up delay-100">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed reveal-up delay-200">
            Real experiences from real patients who trusted us with their smiles.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden reveal-up">
          <div
            className="slider-track"
            style={{
              transform: `translateX(calc(-${current * (cardWidth + (gap * 100) / 100 / slidesPerView)}% - ${current * gap / slidesPerView}px))`,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{ minWidth: `calc(${cardWidth}% - ${gap * (slidesPerView - 1) / slidesPerView}px)`, marginRight: `${gap}px` }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-card flex-shrink-0"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-500 text-[15px] leading-relaxed italic mb-6">"{t.review}"</p>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-base flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary text-[15px]">{t.name}</h5>
                    <span className="text-slate-400 text-xs">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white hover:bg-primary hover:border-primary hover:text-white text-slate-500 flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2 items-center">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-7 h-2.5"
                    : "bg-slate-200 w-2.5 h-2.5 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white hover:bg-primary hover:border-primary hover:text-white text-slate-500 flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
