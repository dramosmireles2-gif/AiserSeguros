import { CheckCircle2, Clock, Users, Award, HeartHandshake, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "14+ años de experiencia",
    desc: "Llevamos más de una década asesorando a familias y empresas en Reynosa.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    desc: "Un asesor dedicado te acompaña desde la cotización hasta el pago de tu siniestro.",
  },
  {
    icon: ShieldCheck,
    title: "Las mejores aseguradoras",
    desc: "Trabajamos con GNP, AXA, Qualitas, HDI, Inbursa y más para darte las mejores opciones.",
  },
  {
    icon: Clock,
    title: "Respuesta rápida",
    desc: "Te enviamos tu cotización en menos de 24 horas, con opciones claras y sin letra chica.",
  },
  {
    icon: HeartHandshake,
    title: "Apoyo en siniestros",
    desc: "Te acompañamos durante el proceso de reclamación para que cobres sin complicaciones.",
  },
  {
    icon: CheckCircle2,
    title: "Precios competitivos",
    desc: "Comparamos entre múltiples aseguradoras para conseguirte la mejor cobertura al menor costo.",
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-orange-100 text-[#FF6B2B] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              ¿Por qué AISER?
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F2B5B] leading-tight mb-6">
              No somos solo una
              <span className="text-[#1E8FFF]"> agencia</span>,
              somos tu aliado
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              En AISER entendemos que cada cliente es único. Por eso no vendemos
              seguros genéricos — diseñamos soluciones a la medida de tu vida,
              tu negocio y tu presupuesto.
            </p>

            {/* Mini stats */}
            <div className="flex gap-8">
              {[
                { n: "14+", l: "Años" },
                { n: "5K+", l: "Clientes" },
                { n: "10+", l: "Aseguradoras" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl font-black text-[#1E8FFF]">{s.n}</div>
                  <div className="text-gray-400 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-[#F5F7FA] transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0F2B5B] flex items-center justify-center shrink-0 group-hover:bg-[#1E8FFF] transition-colors">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F2B5B] text-sm mb-1">{r.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
