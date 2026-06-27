import { FOOTER_QUICK_LINKS, FOOTER_SERVICES } from "@/lib/constants";

const socialLinks = [
  { icon: "f", label: "Facebook", href: "#" },
  { icon: "t", label: "Twitter", href: "#" },
  { icon: "in", label: "Instagram", href: "#" },
  { icon: "li", label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8 2 5 5 5 9c0 3 1 5 2 7l1 4c.5 1.5 2 2 4 2s3.5-.5 4-2l1-4c1-2 2-4 2-7 0-4-3-7-7-7z"/>
                </svg>
              </div>
              <span className="text-xl font-black">
                Dent<span className="text-primary">Care</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              DentCare Pro is committed to providing exceptional dental care with a focus on patient comfort, advanced technology, and outstanding results for every smile.
            </p>
            <div className="flex gap-3">
              {["fb", "tw", "ig", "li", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300 text-xs font-bold"
                >
                  {s === "fb" ? "f" : s === "tw" ? "𝕏" : s === "ig" ? "ig" : s === "li" ? "in" : "▶"}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-primary text-lg leading-none">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Our Services</h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-primary text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-primary text-lg leading-none">›</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Contact Info</h4>
            <div className="space-y-4">
              {[
                { icon: "📍", text: "123 Dental Street, Health Plaza\nKarachi, Pakistan 75500" },
                { icon: "📞", text: "+92 300 123 4567" },
                { icon: "✉️", text: "info@dentcarepro.com" },
                { icon: "🕐", text: "Mon – Sat: 9am – 7pm\nSunday: 10am – 4pm" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-base mt-0.5 flex-shrink-0">{item.icon}</span>
                  <span className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-white/40 text-sm">
          <span>© 2026 DentCare Pro. All Rights Reserved. Made with ❤️</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
