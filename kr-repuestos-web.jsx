export default function AutomotrizLandingPage() {
  const categorias = [
    {
      nombre: "Repuestos de Motor",
      icono: "⚙️",
    },
    {
      nombre: "Frenos y Suspensión",
      icono: "🛞",
    },
    {
      nombre: "Aceites y Lubricantes",
      icono: "🛢️",
    },
    {
      nombre: "Baterías",
      icono: "🔋",
    },
    {
      nombre: "Filtros",
      icono: "🧰",
    },
    {
      nombre: "Accesorios",
      icono: "🚘",
    },
  ];

  const marcas = [
    "BOSCH",
    "Mobil",
    "Mann Filter",
    "Valeo",
    "KYB",
    "LUK",
  ];

  return (
    <div className="min-h-screen bg-yellow-400 text-black font-sans overflow-hidden">
      {/* TOP BAR */}
      <div className="bg-yellow-500 border-b border-yellow-600 px-6 py-2 text-sm font-semibold flex flex-wrap justify-between items-center">
        <div className="flex gap-6">
          <span>🚚 Despachos a toda La Araucanía</span>
          <span>⭐ Calidad Garantizada</span>
        </div>

        <div>
          <span>📲 Atención rápida por WhatsApp</span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-yellow-400/95 backdrop-blur border-b-2 border-green-950 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-950 to-green-800 flex items-center justify-center shadow-2xl border-4 border-yellow-300">
              <span className="text-yellow-300 text-4xl font-black tracking-tight">KR</span>
            </div>

            <div>
              <h1 className="text-3xl font-black uppercase text-green-950 tracking-tight">
                KR Repuestos
              </h1>
              <p className="text-green-900 font-semibold">
                Temuco - Región de La Araucanía
              </p>
            </div>
          </div>

          <div className="hidden lg:flex gap-10 font-bold uppercase text-sm">
            <a href="#inicio" className="hover:text-green-900 transition">
              Inicio
            </a>
            <a href="#productos" className="hover:text-green-900 transition">
              Productos
            </a>
            <a href="#beneficios" className="hover:text-green-900 transition">
              Beneficios
            </a>
            <a href="#contacto" className="hover:text-green-900 transition">
              Contacto
            </a>
          </div>

          <button className="bg-green-950 hover:bg-black text-yellow-300 px-6 py-4 rounded-2xl shadow-2xl font-bold transition">
            📞 +56 9 5378 4439
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="inicio"
        className="relative px-6 lg:px-16 py-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-green-900 font-black mb-5">
              Repuestos y accesorios automotrices
            </p>

            <h2 className="text-6xl lg:text-7xl font-black uppercase leading-none mb-8">
              Calidad que
              <span className="block text-green-950">
                mueve tu camino
              </span>
            </h2>

            <p className="text-xl text-black/80 mb-10 max-w-xl leading-relaxed">
              Repuestos automotrices en Temuco con stock garantizado,
              atención rápida y productos de calidad para vehículos,
              camionetas y flotas comerciales.
            </p>

            <div className="flex flex-wrap gap-5 mb-12">
              <button className="bg-green-950 hover:bg-black text-yellow-300 px-8 py-5 rounded-2xl font-black text-lg shadow-2xl transition hover:scale-105">
                📲 Escríbenos por WhatsApp
              </button>

              <button className="border-2 border-green-950 hover:bg-green-950 hover:text-yellow-300 px-8 py-5 rounded-2xl font-black text-lg transition">
                Cotiza Aquí →
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center">
              <div className="bg-yellow-200 rounded-2xl p-4 border border-yellow-500 shadow-lg">
                <p className="text-3xl mb-2">🛡️</p>
                <p className="font-bold text-sm">Stock Garantizado</p>
              </div>

              <div className="bg-yellow-200 rounded-2xl p-4 border border-yellow-500 shadow-lg">
                <p className="text-3xl mb-2">🚚</p>
                <p className="font-bold text-sm">Despacho Rápido</p>
              </div>

              <div className="bg-yellow-200 rounded-2xl p-4 border border-yellow-500 shadow-lg">
                <p className="text-3xl mb-2">⭐</p>
                <p className="font-bold text-sm">Calidad Premium</p>
              </div>

              <div className="bg-yellow-200 rounded-2xl p-4 border border-yellow-500 shadow-lg">
                <p className="text-3xl mb-2">👨‍🔧</p>
                <p className="font-bold text-sm">Atención Personalizada</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-green-950 blur-3xl opacity-20 rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
              alt="Toyota Hilux"
              className="relative z-10 rounded-[2rem] border-4 border-green-950 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-5xl font-black uppercase mb-5">
              Categorías Principales
            </h3>

            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Trabajamos con productos de calidad para vehículos particulares,
              camionetas, empresas y talleres mecánicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {categorias.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-green-950 to-green-900 text-yellow-300 rounded-[2rem] p-8 text-center shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="w-20 h-20 rounded-3xl bg-yellow-300 text-green-950 mx-auto mb-6 flex items-center justify-center text-4xl shadow-xl font-black">
                  {item.icono}
                </div>

                <h4 className="font-black text-lg uppercase leading-tight mb-4">
                  {item.nombre}
                </h4>

                <button className="text-yellow-300 font-bold hover:underline">
                  Ver más →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS + UBICACION */}
      <section
        id="beneficios"
        className="px-6 lg:px-16 py-20 bg-yellow-300"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="bg-yellow-200 rounded-[2rem] p-8 border border-yellow-500 shadow-xl">
            <h3 className="text-4xl font-black uppercase mb-8">
              ¿Por qué elegirnos?
            </h3>

            <div className="space-y-5">
              <div className="bg-yellow-100 rounded-2xl p-5 border border-yellow-400">
                <p className="font-bold">⚡ Atención rápida y eficiente</p>
              </div>

              <div className="bg-yellow-100 rounded-2xl p-5 border border-yellow-400">
                <p className="font-bold">🛡️ Productos garantizados</p>
              </div>

              <div className="bg-yellow-100 rounded-2xl p-5 border border-yellow-400">
                <p className="font-bold">📦 Amplio stock disponible</p>
              </div>

              <div className="bg-yellow-100 rounded-2xl p-5 border border-yellow-400">
                <p className="font-bold">👨‍🔧 Asesoría personalizada</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-950 to-green-900 text-yellow-300 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-yellow-300/10 rounded-full"></div>

            <h3 className="text-4xl font-black uppercase mb-5">
              Promociones Exclusivas
            </h3>

            <p className="text-lg text-yellow-100 mb-8">
              Descuentos especiales en productos seleccionados para vehículos y camionetas.
            </p>

            <div className="bg-red-600 text-white inline-block px-6 py-4 rounded-2xl text-3xl font-black shadow-xl mb-8">
              Hasta 25% OFF
            </div>

            <button className="bg-yellow-300 text-green-950 hover:bg-white transition px-8 py-4 rounded-2xl font-black shadow-xl">
              Ver Promociones
            </button>
          </div>

          <div className="bg-yellow-200 rounded-[2rem] p-8 border border-yellow-500 shadow-xl">
            <h3 className="text-4xl font-black uppercase mb-6">
              ¿Dónde estamos?
            </h3>

            <div className="space-y-5 text-lg font-semibold mb-8">
              <p>📍 Calle Brasil #56, Temuco</p>
              <p>🌎 Región de La Araucanía</p>
              <p>📞 +56 9 5378 4439</p>
              <p>📧 titolemo31@hotmail.cl</p>
            </div>

            <div className="bg-yellow-100 rounded-3xl overflow-hidden shadow-lg border border-yellow-400">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="Mapa Temuco"
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <button className="w-full bg-green-950 hover:bg-black text-yellow-300 py-4 rounded-2xl font-black transition">
                  Cómo Llegar →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="px-6 lg:px-16 py-16 bg-yellow-500 border-y-2 border-yellow-600">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-black uppercase mb-10">
            Marcas que Trabajamos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {marcas.map((marca, index) => (
              <div
                key={index}
                className="bg-yellow-200 border border-yellow-600 rounded-2xl py-6 text-2xl font-black shadow-lg hover:scale-105 transition"
              >
                {marca}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contacto"
        className="bg-gradient-to-r from-green-950 to-green-900 text-yellow-300 px-6 lg:px-16 py-14"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-2xl font-black mb-5 uppercase">
              Ubicación
            </h4>
            <p>Calle Brasil #56, Temuco</p>
            <p>Región de La Araucanía</p>
          </div>

          <div>
            <h4 className="text-2xl font-black mb-5 uppercase">
              Horarios
            </h4>
            <p>Lun - Vie: 8:30 - 18:30</p>
            <p>Sábado: 9:00 - 14:00</p>
          </div>

          <div>
            <h4 className="text-2xl font-black mb-5 uppercase">
              Despachos
            </h4>
            <p>A todo Temuco y La Araucanía</p>
          </div>

          <div>
            <h4 className="text-2xl font-black mb-5 uppercase">
              Contacto
            </h4>
            <p>📞 +56 9 5378 4439</p>
            <p>📧 titolemo31@hotmail.cl</p>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 text-center text-yellow-100">
          © 2026 KR Repuestos Automotrices | Diseñado por Alconta Solutions
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-20 h-20 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.45)] text-3xl transition hover:scale-110 z-50">
        💬
      </button>
    </div>
  );
}
