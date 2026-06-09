import {
  Car,
  Heart,
  Home,
  Briefcase,
  Stethoscope,
  FileText,
  Umbrella,
  Building2,
} from "lucide-react";

const products = [
  {
    icon: Car,
    title: "Seguro de Auto",
    desc: "Protección total para tu vehículo contra accidentes, robo, daños a terceros y más.",
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    desc: "Asegura el bienestar financiero de tu familia cuando más lo necesitan.",
    color: "from-rose-500 to-rose-700",
    bg: "bg-rose-50",
  },
  {
    icon: Home,
    title: "Seguro de Hogar",
    desc: "Cubre tu casa y pertenencias ante robos, incendios, inundaciones y desastres naturales.",
    color: "from-emerald-500 to-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    icon: Stethoscope,
    title: "Gastos Médicos Mayores",
    desc: "Atención médica de calidad sin preocuparte por los costos hospitalarios.",
    color: "from-violet-500 to-violet-700",
    bg: "bg-violet-50",
  },
  {
    icon: Briefcase,
    title: "Seguro para Empresas",
    desc: "Protege tu negocio, empleados y activos con coberturas empresariales completas.",
    color: "from-amber-500 to-amber-700",
    bg: "bg-amber-50",
  },
  {
    icon: FileText,
    title: "Fianzas",
    desc: "Fianzas de fidelidad, arrendamiento y cumplimiento para personas y empresas.",
    color: "from-cyan-500 to-cyan-700",
    bg: "bg-cyan-50",
  },
  {
    icon: Umbrella,
    title: "Seguro de Daños",
    desc: "Cobertura integral contra daños patrimoniales inesperados en propiedades y bienes.",
    color: "from-indigo-500 to-indigo-700",
    bg: "bg-indigo-50",
  },
  {
    icon: Building2,
    title: "Seguro Colectivo",
    desc: "Planes grupales para empleados con beneficios de salud, vida y más.",
    color: "from-teal-500 to-teal-700",
    bg: "bg-teal-50",
  },
];

export default function Products() {
  return (
    <section id="servicios" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[#1E8FFF] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Nuestros Productos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F2B5B] mb-4">
            Un seguro para cada{" "}
            <span className="text-[#1E8FFF]">necesidad</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Trabajamos con las principales aseguradoras de México para ofrecerte
            la mejor cobertura al mejor precio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`product-card ${p.bg} rounded-2xl p-6 cursor-pointer group`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-3 duration-300`}
                >
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="font-bold text-[#0F2B5B] text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#1E8FFF] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Cotizar →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
