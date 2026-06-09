import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Seguro de Auto",
  "Seguro de Vida",
  "Seguro de Hogar",
  "Gastos Médicos Mayores",
  "Seguro para Empresas",
  "Fianzas",
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#0A1E3D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#1E8FFF] rounded-xl flex items-center justify-center font-black text-xl">
                A
              </div>
              <div>
                <div className="font-bold text-lg leading-none">AISER</div>
                <div className="text-xs text-white/50 leading-none">Seguros y Fianzas</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Asesoría integral en seguros y riesgos. Protegemos tu patrimonio, auto, hogar y familia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/aisersegurosreynosa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#1E8FFF] rounded-lg flex items-center justify-center transition-colors text-white text-xs font-bold"
              >
                f
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#1E8FFF] rounded-lg flex items-center justify-center transition-colors text-white text-xs font-bold"
              >
                ig
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
              Empresa
            </h4>
            <ul className="space-y-3">
              {["Inicio", "Nosotros", "Cotizar", "Contacto"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-[#1E8FFF] mt-0.5 shrink-0" />
                Blvd. Lázaro Cárdenas 720, Col. Anzalduas, Reynosa, Tam.
              </li>
              <li>
                <a
                  href="tel:8999250235"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Phone size={16} className="text-[#1E8FFF] shrink-0" />
                  (899) 925-02-35
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@aiserseguros.com"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Mail size={16} className="text-[#1E8FFF] shrink-0" />
                  contacto@aiserseguros.com
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Horario</div>
              <div className="text-sm text-white/70">Lun–Vie: 9:00 – 18:00</div>
              <div className="text-sm text-white/70">Sáb: 9:00 – 13:00</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} AISER Seguros y Fianzas. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">Reynosa, Tamaulipas, México</p>
        </div>
      </div>
    </footer>
  );
}
