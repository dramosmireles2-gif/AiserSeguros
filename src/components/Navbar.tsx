"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg transition-colors ${
              scrolled ? "bg-[#0F2B5B] text-white" : "bg-white/20 text-white"
            }`}
          >
            A
          </div>
          <div className={`transition-colors ${scrolled ? "text-[#0F2B5B]" : "text-white"}`}>
            <div className="font-bold text-lg leading-none">AISER</div>
            <div className="text-xs opacity-70 leading-none">Seguros y Fianzas</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-sm font-medium transition-colors ${
                scrolled ? "text-gray-700 hover:text-[#1E8FFF]" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:8999250235"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? "text-[#0F2B5B]" : "text-white"
            }`}
          >
            <Phone size={16} />
            (899) 925-02-35
          </a>
          <a
            href="#cotizar"
            className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Cotizar gratis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-[#0F2B5B]" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-xl px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium text-lg border-b pb-3"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:8999250235"
            className="flex items-center gap-2 text-[#0F2B5B] font-semibold"
          >
            <Phone size={18} /> (899) 925-02-35
          </a>
          <a
            href="#cotizar"
            className="btn-primary text-white text-center font-semibold px-5 py-3 rounded-full"
          >
            Cotizar gratis
          </a>
        </div>
      )}
    </header>
  );
}
