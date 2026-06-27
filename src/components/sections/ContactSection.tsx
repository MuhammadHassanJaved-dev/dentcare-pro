"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send } from "lucide-react";

const contactDetails = [
  {
    Icon: MapPin,
    title: "Our Location",
    text: "123 Dental Street, Health Plaza\nKarachi, Pakistan 75500",
  },
  {
    Icon: Phone,
    title: "Phone Number",
    text: "+92 300 123 4567\n+92 21 3456 7890",
  },
  {
    Icon: Mail,
    title: "Email Address",
    text: "info@dentcarepro.com\nappointments@dentcarepro.com",
  },
  {
    Icon: Clock,
    title: "Working Hours",
    text: "Monday – Saturday: 9:00 AM – 7:00 PM\nSunday: 10:00 AM – 4:00 PM",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setLoading(true);

    console.log(
      "CONTACT FORM URL:",
      process.env.NEXT_PUBLIC_CONTACT_FORM
    );

    const response = await fetch(
      process.env.NEXT_PUBLIC_CONTACT_FORM!,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          formType: "CONTACT FORM",
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      }
    );

    console.log("Status:", response.status);

    const responseText = await response.text();
    console.log("Response:", responseText);

    if (response.ok) {
      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } else {
      alert("Failed to send message");
    }
  } catch (error) {
    console.error("Form Error:", error);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  return (
    <section id="contact" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4 reveal-up">
            Contact Us
          </div>
          <h2 className="font-display text-4xl xl:text-5xl font-extrabold text-secondary leading-[1.2] mb-4 reveal-up delay-100">
            Get In <span className="gradient-text">Touch With Us</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed reveal-up delay-200">
            Have a question or ready to book? We&apos;re love to hear from you. Reach
            out and  respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* LEFT - Details */}
          <div className="reveal-left">
            <h3 className="text-2xl font-extrabold text-secondary mb-8">
              Contact Information
            </h3>
            <div className="space-y-7">
              {contactDetails.map(({ Icon, title, text }, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-[15px] mb-1">
                      {title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-line">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className="mt-8 h-48 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #e0faf9, #ccfbf1)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center gap-3 text-primary">
                <MapPin size={28} />
                <span className="font-semibold text-[15px]">
                  DentCare Pro — Karachi
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="bg-white rounded-3xl p-10 shadow-xl2 border border-primary/8 relative overflow-hidden reveal-right">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light rounded-t-3xl" />
            <h3 className="text-2xl font-extrabold text-secondary mb-7">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold text-secondary">
                  Message Sent!
                </h4>
                <p className="text-slate-500 text-center">
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="form-field bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-secondary placeholder-slate-400 outline-none transition-all duration-300 w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    className="form-field bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-secondary placeholder-slate-400 outline-none transition-all duration-300 w-full"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="form-field bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-secondary placeholder-slate-400 outline-none transition-all duration-300 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="form-field bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-secondary placeholder-slate-400 outline-none transition-all duration-300 w-full"
                  />
                </div>
                <textarea
                  placeholder="Your Message..."
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  className="form-field bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-secondary placeholder-slate-400 outline-none transition-all duration-300 w-full resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-4 rounded-xl font-semibold text-[15px] shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="3"
                        strokeDasharray="30 60"
                      />
                    </svg>
                  ) : (
                    <>
                      <Send size={17} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
