"use client";
import { Shield, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero-gradient min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1E8FFF]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#1E8FFF]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-white/80 text-sm mb-8">
          <Shield size={14} className="text-[#1E8FFF]" />
          Más de 14 años protegiendo familias en Tamaulipas
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Protege lo que
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1E8FFF] to-[#7ec8ff]">
            más importa
          </span>
        </h1>

        <p className="text-white/75 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Asesoría integral en seguros y fianzas. Trabajamos con las mejores
          aseguradoras para darte la{" "}
          <span className="text-white font-semibold">tranquilidad que mereces</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#cotizar"
            className="btn-primary text-white font-bold text-lg px-8 py-4 rounded-full"
          >
            Cotiza gratis ahora
          </a>
          <a
            href="#servicios"
            className="btn-outline text-white font-semibold text-lg px-8 py-4 rounded-full"
          >
            Ver servicios
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: "14+", label: "Años de experiencia" },
            { value: "5,000+", label: "Clientes protegidos" },
            { value: "10+", label: "Aseguradoras aliadas" },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-4">
              <div className="text-3xl font-black text-white">{s.value}</div>
              <div className="text-white/60 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
