"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const insuranceTypes = [
  "Seguro de Auto",
  "Seguro de Vida",
  "Seguro de Hogar",
  "Gastos Médicos Mayores",
  "Seguro para Empresas",
  "Fianzas",
  "Otro",
];

export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'd connect to your backend / WhatsApp API
    setSent(true);
  };

  return (
    <section id="cotizar" className="py-24 hero-gradient relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Cotizador
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Tu cotización, gratis y{" "}
            <span className="text-[#7ec8ff]">sin compromiso</span>
          </h2>
          <p className="text-white/60 text-lg">
            Llena el formulario y te contactamos en menos de 24 horas.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          {sent ? (
            <div className="text-center py-12">
              <CheckCircle2 className="mx-auto text-emerald-500 mb-4" size={64} />
              <h3 className="text-2xl font-black text-[#0F2B5B] mb-2">
                ¡Solicitud enviada!
              </h3>
              <p className="text-gray-500">
                Un asesor te contactará en menos de 24 horas. También puedes llamarnos al{" "}
                <a href="tel:8999250235" className="text-[#1E8FFF] font-semibold">
                  (899) 925-02-35
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#0F2B5B] mb-2">
                  Nombre completo *
                </label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E8FFF] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F2B5B] mb-2">
                  Teléfono *
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(899) 000-0000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E8FFF] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F2B5B] mb-2">
                  Correo electrónico
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="juan@correo.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E8FFF] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F2B5B] mb-2">
                  Tipo de seguro *
                </label>
                <select
                  name="type"
                  required
                  value={form.type}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E8FFF] transition bg-white"
                >
                  <option value="">Selecciona un seguro</option>
                  {insuranceTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#0F2B5B] mb-2">
                  ¿Algo que debamos saber?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntanos brevemente qué necesitas cubrir..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E8FFF] transition resize-none"
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-gray-400 text-xs">
                  Al enviar aceptas que te contactemos. Sin spam, prometido.
                </p>
                <button
                  type="submit"
                  className="btn-primary text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 whitespace-nowrap"
                >
                  <Send size={18} />
                  Solicitar cotización
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
