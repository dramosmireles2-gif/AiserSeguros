import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Cliente desde 2018",
    text: "AISER me ayudó a conseguir el mejor seguro de auto para mi familia. El proceso fue rapidísimo y el precio superó mis expectativas. ¡Los recomiendo 100%!",
    stars: 5,
    initials: "MG",
    color: "bg-blue-500",
  },
  {
    name: "Roberto Salinas",
    role: "Empresario, Reynosa",
    text: "Contraté seguros para toda mi flotilla de vehículos y el trato fue excelente. Siempre disponibles cuando los necesité. Una agencia de confianza.",
    stars: 5,
    initials: "RS",
    color: "bg-emerald-500",
  },
  {
    name: "Ana Martínez",
    role: "Cliente desde 2020",
    text: "Cuando tuve mi siniestro pensé que iba a ser un calvario. El equipo de AISER me guió en todo momento. ¡Cobré en tiempo récord!",
    stars: 5,
    initials: "AM",
    color: "bg-violet-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F2B5B] mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-[#1E8FFF]">clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[#0F2B5B] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
