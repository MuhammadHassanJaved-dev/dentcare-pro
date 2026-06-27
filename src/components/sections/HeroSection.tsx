"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  CalendarCheck,
  Play,
  CheckCircle2,
  Star,
  Users,
  Shield,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const floatBadges = [
  {
    icon: <Star size={18} className="text-yellow-500" />,
    bg: "bg-yellow-100",
    title: "4.9 Rating",
    sub: "20K+ Patients",
    pos: "top-10 -left-10",
    delay: 0,
  },
  {
    icon: <Shield size={18} className="text-blue-500" />,
    bg: "bg-blue-100",
    title: "100% Safe",
    sub: "Sterilized Tools",
    pos: "top-[35%] -right-8",
    delay: 1,
  },
  {
    icon: <Sparkles size={18} className="text-primary" />,
    bg: "bg-primary/10",
    title: "Premium Care",
    sub: "Modern Technology",
    pos: "bottom-32 right-6",
    delay: 2,
  },
];

export default function HeroSection() {

const treatments = {
  "Teeth Whitening": {
    doctors: ["Dr. Emily Williams"],
    duration: "45 Minutes",
    fee: "Rs. 12,000",
  },

  "Dental Implants": {
    doctors: ["Dr. Michael Chen"],
    duration: "2 Hours",
    fee: "Rs. 85,000",
  },

  Orthodontics: {
    doctors: ["Dr. Sarah Johnson"],
    duration: "60 Minutes",
    fee: "Consultation Required",
  },

  Braces: {
    doctors: ["Dr. Sarah Johnson"],
    duration: "60 Minutes",
    fee: "Rs. 150,000",
  },

  "Root Canal": {
    doctors: ["Dr. Ahmed Hassan"],
    duration: "90 Minutes",
    fee: "Rs. 18,000",
  },

  "Dental Cleaning": {
    doctors: ["Dr. Hina Ali"],
    duration: "30 Minutes",
    fee: "Rs. 5,000",
  },

  "Tooth Extraction": {
    doctors: ["Dr. David Smith"],
    duration: "40 Minutes",
    fee: "Rs. 8,000",
  },

  Veneers: {
    doctors: ["Dr. Emily Williams"],
    duration: "90 Minutes",
    fee: "Rs. 22,000",
  },

  Dentures: {
    doctors: ["Dr. Fatima Noor"],
    duration: "2 Visits",
    fee: "Consultation Required",
  },

  "Gum Treatment": {
    doctors: ["Dr. James Wilson"],
    duration: "60 Minutes",
    fee: "Consultation Required",
  },

  Fillings: {
    doctors: ["Dr. Usman Tariq"],
    duration: "30 Minutes",
    fee: "Rs. 6,000",
  },
};

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",

  treatment: "",

  doctor: "",

  date: "",

  time: "",

  notes: "",
});

  const [submitted, setSubmitted] = useState(false);
  const selectedTreatment = form.treatment
  ? treatments[form.treatment as keyof typeof treatments]
  : null;

const doctors = selectedTreatment?.doctors ?? [];
const duration = selectedTreatment?.duration ?? "";
const fee = selectedTreatment?.fee ?? "";

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

console.log("Appointment Form URL:", process.env.NEXT_PUBLIC_APPOINTMENT_FORM);

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_APPOINTMENT_FORM!,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          formType: "APPOINTMENT REQUEST",
          name: form.name,
          email: form.email,
          phone: form.phone,
          treatment: form.treatment,
          doctor: form.doctor,
          date: form.date,
          time: form.time,
          notes: form.notes,
        }),
      }
    );

    if (response.ok) {
      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        treatment: "",
        doctor: "",
        date: "",
        time: "",
        notes: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } else {
      alert("Failed to send appointment request");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#f0fdfc 0%,#ffffff 50%,#f0f9ff 100%)",
      }}
    >
      <div
        className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,183,176,0.07) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(20,214,204,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-xs font-bold tracking-wide mb-6"
            >
              <CheckCircle2 size={13} />
              Professional Dental Care
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-[52px] leading-[1.05] font-extrabold leading-[1.05] text-secondary mb-6"
            >
              Transform Your Smile
              <br />
              With{" "}
              <span className="gradient-text">World-Class Dental Experts</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Advanced dental treatments, modern equipment, and experienced
              specialists dedicated to delivering healthier smiles and
              exceptional patient care for every member of your family.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-7 py-4 rounded-full font-semibold shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CalendarCheck size={18} />
                Book Appointment
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-4 rounded-full font-semibold hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <Play size={16} />
                Our Services
              </a>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-5 mb-10"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <Users size={16} className="text-primary" />
                20K+ Happy Patients
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <Shield size={16} className="text-primary" />
                Certified Specialists
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <Star size={16} className="text-yellow-500" />
                4.9 Patient Rating
              </div>
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            className="bg-white/80 backdrop-blur-xl rounded-[32px] p-8 md:p-10 shadow-2xl border border-white/60 relative overflow-hidden min-h-[340px]"  
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light" />

              <h3
               id="appointment"
              className="text-lg font-bold text-secondary flex items-center gap-2 mb-5">
                <CalendarCheck size={20} className="text-primary" />
                Book An Appointment
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-6 gap-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 size={30} className="text-primary" />
                  </div>

                  <p className="text-secondary font-bold text-lg">Thank You!</p>

                  <p className="text-center text-slate-500 text-sm max-w-[260px]">
                    Your appointment request has been received successfully. We
                    will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<input
type="text"
placeholder="Full Name"
required
value={form.name}
onChange={(e)=>setForm({...form,name:e.target.value})}
className="form-field bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5"
/>

<input
type="email"
placeholder="Email Address"
required
value={form.email}
onChange={(e)=>setForm({...form,email:e.target.value})}
className="form-field bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5"
/>

<input
type="tel"
placeholder="Phone Number"
required
value={form.phone}
onChange={(e)=>setForm({...form,phone:e.target.value})}
className="form-field bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5"
/>

{/* Treatment */}
<div className="relative">
  <select
    value={form.treatment}
    onChange={(e) => {
      const treatment = e.target.value;

      const selected =
        treatments[treatment as keyof typeof treatments];

      setForm({
        ...form,
        treatment,
        doctor:treatment ? selected?.doctors?.[0] ?? "" : "", // SAFE FIX
      });
    }}
    className={`form-field w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 pr-10 text-base appearance-none outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
      form.treatment ? "text-secondary" : "text-slate-400"
    }`}
  >
    <option value="">Select Treatment</option>
    {Object.keys(treatments).map((item) => (
      <option key={item} value={item}
      className="text-black bg-white"
      style={{ color: "#000" }}
      >
        {item}
      </option>
    ))}
  </select>

  <ChevronDown
    size={18}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
  />
</div>

{/* Doctor */}
<div className="relative">
  <input
    type="text"
    value={form.doctor}
    readOnly
    placeholder="Consultant"
    className="form-field w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-base text-secondary outline-none cursor-not-allowed"
  />
</div>
{/* Date */}
<input
  type="date"
  required
  value={form.date}
  onChange={(e) => setForm({ ...form, date: e.target.value })}
  className={`form-field w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-base outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
    form.date ? "text-secondary" : "text-slate-400"
  }`}
/>

{/* Time */}
<div className="relative">
  <select
    required
    value={form.time}
    onChange={(e) => setForm({ ...form, time: e.target.value })}
    className={`form-field w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 pr-10 text-base appearance-none outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
      form.time ? "text-secondary" : "text-slate-400"
    }`}
  >
    <option value="">Select Time</option>

    {timeSlots.map((slot) => (
      <option key={slot} value={slot}
      className="text-black bg-white"
      style={{ color: "#000" }}
      >
        {slot}
      </option>
    ))}
  </select>

  <ChevronDown
    size={18}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
  />
</div>

</div>

<textarea
  rows={4}
  placeholder="Additional Notes (Optional)"
  value={form.notes}
  onChange={(e) => setForm({ ...form, notes: e.target.value })}
  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-base text-secondary placeholder-slate-400 resize-none outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
/>

<div className="grid grid-cols-2 gap-4">

<div className="rounded-2xl bg-primary/5 border border-primary/10 p-4">

<p className="text-base text-slate-500">

Estimated Duration

</p>

<p className="font-bold text-secondary mt-1">

{selectedTreatment?.duration || "-"}

</p>

</div>

<div className="rounded-2xl bg-primary/5 border border-primary/10 p-4">

<p className="text-base text-slate-500">

Consultation Fee

</p>

<p className="font-bold text-primary mt-1">

{selectedTreatment?.fee || "-"}

</p>

</div>

</div>

<div className="space-y-2 text-sm text-slate-500">

<div>✓ Instant Confirmation</div>

<div>✓ Secure Booking</div>

<div>✓ No Advance Payment</div>

</div>

<button
type="submit"
className="w-full bg-gradient-to-r from-primary to-primary-light text-white rounded-xl py-4 font-semibold hover:-translate-y-1 transition-all duration-300"
>

Schedule Appointment →

</button>

</form>
              )}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="absolute top-[-30px] left-[60px] w-24 h-24 rounded-full bg-primary/10 blur-xl" />
            <div className="absolute bottom-10 right-14 w-16 h-16 rounded-full bg-primary-light/20 blur-lg" />
            <div className="absolute top-48 right-8 w-12 h-12 rounded-xl bg-primary/15 blur-md" />

            {/* Main Image */}
            <div className="relative w-[500px] h-[620px] rounded-[40px] overflow-hidden shadow-2xl bg-white">
              <Image
                src="/images/hero-doctor.png"
                alt="Professional Dentist"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Bottom Left Card */}
            <div
              className="absolute -bottom-8 -left-10 backdrop-blur-xl bg-white/90 border border-white/60 rounded-3xl px-6 py-5 shadow-2xl animate-float z-20"
              style={{
                animationDelay: "0.5s",
                animationDuration: "4.5s",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
                  🦷
                </div>

                <div>
                  <p className="font-bold text-secondary">Advanced Care</p>

                  <p className="text-xs text-slate-500">
                    Modern Dental Equipment
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Rating Card */}
            <div className="absolute top-8 -left-8 bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl px-5 py-4 shadow-2xl z-20 animate-float">
              <div className="flex items-center gap-2 mb-1">
                <Star className="text-yellow-500" size={16} />
                <span className="font-bold text-secondary">4.9 Rating</span>
              </div>

              <p className="text-xs text-slate-500">
                Trusted by 20,000+ patients
              </p>
            </div>

            {/* Floating Safety Card */}
            <div
              className="absolute top-[45%] -right-10 bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl px-5 py-4 shadow-2xl z-20 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Shield className="text-blue-500" size={16} />
                <span className="font-bold text-secondary">100% Safe</span>
              </div>

              <p className="text-xs text-slate-500">
                Sterilized tools & equipment
              </p>
            </div>

            {/* Top Rating Card */}
            <div
              className="absolute bottom-24 left-0 bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl px-5 py-4 shadow-2xl z-20 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="text-primary" size={16} />
                <span className="font-bold text-secondary">Premium Care</span>
              </div>

              <p className="text-xs text-slate-500">Modern Technology</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}