import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ABOUT_FEATURES } from "@/lib/constants";


export default function AboutSection() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT - Image */}
          <div className="reveal-left relative">
            <div
              className="w-full h-[500px] sm:h-[560px] rounded-[32px] overflow-hidden relative flex items-center justify-center shadow-xl2"
              style={{
                background: "linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)",
              }}
            >
              <Image
                src="/images/about-dentist.jpg"
                alt="About DentCare Pro"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,183,176,0.08), transparent 60%)",
                }}
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-primary-light text-white p-7 rounded-3xl shadow-primary-lg border-4 border-white text-center">
              <span className="block text-5xl font-black leading-none">
                15+
              </span>
              <span className="block text-[11px] font-semibold opacity-90 mt-2 leading-tight tracking-wide">
                Years
                <br />
                Experience
              </span>
            </div>

            {/* Small floating badge */}
            <div className="absolute top-8 -right-6 bg-white rounded-2xl px-5 py-3 shadow-card-lg flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-secondary font-bold text-sm">
                  ISO Certified
                </p>
                <p className="text-slate-400 text-xs">Clinic Standards</p>
              </div>
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="reveal-right">
            <div className="section-label mb-4">About Us</div>
            <h2 className="font-display text-4xl xl:text-5xl font-extrabold text-secondary leading-[1.2] mb-5">
              We Provide The Best
              <br />
              <span className="gradient-text">Dental Treatment</span>
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed mb-3">
              At DentCare Pro, we are committed to providing exceptional dental
              care in a warm, welcoming environment. Our experienced team uses
              the latest technology to ensure you receive the best possible
              treatment.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-7">
              From routine check-ups to complex procedures, we offer
              comprehensive dental services tailored to your unique needs. Your
              comfort and satisfaction are our top priorities.
            </p>

            <ul className="space-y-1 mb-9">
              {ABOUT_FEATURES.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-b-0"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span className="text-slate-600 font-medium text-[15px]">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold shadow-primary hover:shadow-primary-lg hover:-translate-y-1 transition-all duration-300"
            >
              <ArrowRight size={18} />
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
