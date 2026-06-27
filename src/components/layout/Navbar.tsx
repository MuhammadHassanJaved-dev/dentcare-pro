"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          scrolled
            ? "glass shadow-card py-3"
            : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-primary text-white text-xl transition-transform duration-300 group-hover:scale-105">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 2 5 5 5 9c0 3 1 5 2 7l1 4c.5 1.5 2 2 4 2s3.5-.5 4-2l1-4c1-2 2-4 2-7 0-4-3-7-7-7z"/>
              </svg>
            </div>
            <span className="text-xl font-black text-secondary">
              Dent<span className="text-primary">Care</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link-underline text-slate-500 hover:text-primary font-medium text-[15px] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#appointment"
            className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full font-semibold text-sm shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Appointment
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl text-secondary hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white/98 backdrop-blur-xl transition-all duration-400",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-[-20px]"
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="text-3xl font-bold text-secondary hover:text-primary transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="bg-gradient-to-r from-primary to-primary-light text-white px-10 py-4 rounded-full text-xl font-bold shadow-primary mt-4"
        >
          Get Appointment
        </a>
      </div>
    </>
  );
}
