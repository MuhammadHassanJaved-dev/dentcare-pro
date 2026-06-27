"use client";

import Image from "next/image";
import { DOCTORS } from "@/lib/constants";

const doctorColors = [
  "from-teal-100 to-emerald-200",
  "from-sky-100 to-blue-200",
  "from-violet-100 to-purple-200",
  "from-amber-100 to-orange-200",
  "from-pink-100 to-rose-200",
  "from-indigo-100 to-blue-200",
  "from-lime-100 to-green-200",
  "from-gray-100 to-slate-200",
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800">
            Meet Our Expert Dentists
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {DOCTORS.map((doctor, i) => (
            <div
              key={doctor.name}
              className="bg-white rounded-2xl overflow-hidden border hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div
                className={`h-[260px] bg-gradient-to-br ${
                  doctorColors[i % doctorColors.length]
                } relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h4 className="font-bold text-slate-800">
                  {doctor.name}
                </h4>
                <p className="text-blue-600 text-sm font-medium">
                  {doctor.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}