# AISER Seguros y Fianzas

Sitio web oficial de **AISER Seguros y Fianzas**, correduría integral de seguros y riesgos ubicada en Reynosa, Tamaulipas.

## Stack

- [Next.js 16](https://nextjs.org/) — App Router
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide React](https://lucide.dev/) — Iconos

## Estructura

```
src/
├── app/
│   ├── layout.tsx        # Layout global + metadata SEO
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globales y animaciones
└── components/
    ├── Navbar.tsx         # Navegación fija con efecto scroll
    ├── Hero.tsx           # Sección principal con CTAs
    ├── Products.tsx       # Catálogo de 8 productos de seguro
    ├── WhyUs.tsx          # Razones para elegir AISER
    ├── Testimonials.tsx   # Testimonios de clientes
    ├── QuoteForm.tsx      # Formulario de cotización
    ├── Footer.tsx         # Pie de página con contacto
    └── WhatsAppButton.tsx # Botón flotante de WhatsApp
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue

El proyecto está listo para desplegarse en [Vercel](https://vercel.com). Conecta el repositorio y se despliega automáticamente en cada push a `main`.

```bash
npm run build   # Verificar build de producción
```

## Contacto

**AISER Seguros y Fianzas**  
Blvd. Lázaro Cárdenas 720, Col. Anzalduas  
Reynosa, Tamaulipas, México  
Tel: (899) 925-02-35
