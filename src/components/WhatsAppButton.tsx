"use client";
import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "528999250235";
const DEFAULT_MSG = encodeURIComponent(
  "Hola, me gustaría recibir información sobre sus seguros."
);

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {tooltip && (
        <div className="relative bg-white shadow-xl rounded-2xl px-4 py-3 text-sm text-gray-700 max-w-[200px] mr-1">
          <button
            onClick={() => setTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
          >
            <X size={10} />
          </button>
          ¡Escríbenos por WhatsApp! 💬
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow" />
        </div>
      )}

      {/* Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        style={{ background: "#25D366" }}
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-pulse-ring" />

        {/* WhatsApp icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.476 2.027 7.786L0 32l8.432-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.769-1.845l-.485-.287-5.008 1.189 1.212-4.87-.317-.505A13.247 13.247 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.955c-.398-.199-2.355-1.163-2.72-1.295-.365-.133-.63-.199-.896.2-.265.398-1.03 1.294-1.263 1.561-.233.266-.465.299-.863.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.759-.233-.398-.025-.614.175-.812.18-.179.398-.465.597-.698.2-.232.266-.398.398-.664.133-.265.067-.498-.033-.698-.1-.199-.896-2.161-1.228-2.959-.323-.776-.65-.671-.896-.683l-.763-.013c-.266 0-.698.1-1.063.498-.365.398-1.395 1.362-1.395 3.323s1.428 3.854 1.628 4.12c.199.265 2.81 4.289 6.81 6.018.952.41 1.695.656 2.274.839.955.304 1.824.261 2.511.158.766-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.265-.763-.465z" />
        </svg>
      </a>
    </div>
  );
}
