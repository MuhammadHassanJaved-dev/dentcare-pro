import { CalendarCheck, PhoneCall, Clock } from "lucide-react";

const cards = [
  {
    Icon: CalendarCheck,
    title: "Get Appointment",
    desc: "Book your visit online quickly and easily",
    link: { label: "Book Now →", href: "#contact" },
  },
  {
    Icon: PhoneCall,
    title: "Emergency Contact",
    desc: "24/7 emergency dental care available",
    link: { label: "+92 300 123 4567", href: "tel:+923001234567" },
  },
  {
    Icon: Clock,
    title: "Working Hours",
    desc: "Mon – Sat: 9am – 7pm",
    sub: "Sunday: 10am – 4pm",
  },
];

export default function InfoStrip() {
  return (
    <section className="relative z-10 -mt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="card-top-border relative bg-white rounded-2xl p-7 shadow-xl2 border border-primary/8 flex items-center gap-5 hover:-translate-y-2 hover:shadow-primary transition-all duration-400 cursor-pointer overflow-hidden group"
            >
              <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white shadow-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <card.Icon size={26} />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-[17px] mb-1">{card.title}</h4>
                <p className="text-slate-500 text-[13px] leading-snug">{card.desc}</p>
                {card.sub && <p className="text-slate-500 text-[13px]">{card.sub}</p>}
                {card.link && (
                  <a
                    href={card.link.href}
                    className="text-primary font-semibold text-sm mt-1 inline-block hover:underline"
                  >
                    {card.link.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
