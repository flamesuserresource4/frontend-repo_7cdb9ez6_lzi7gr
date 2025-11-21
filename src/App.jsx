import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      {/* Soft grid background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.08),transparent_35%)]" />

      {/* Navigation */}
      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-blue-300"><path stroke="currentColor" strokeWidth="1.5" d="M7 4c2 3 2 5 0 8m10-8c-2 3-2 5 0 8M4 17c4 2 12 2 16 0"/></svg>
            </div>
            <span className="text-white font-semibold tracking-tight">Scandic Studios</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/80">
            <a href="#services" className="hover:text-white transition">Ydelser</a>
            <a href="#booking" className="hover:text-white transition">Booking</a>
            <a href="#contact" className="hover:text-white transition">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <Services />
        <CTA />

        {/* Contact / Location */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">Kontakt</h3>
              <div className="mt-4 space-y-2 text-blue-100/90">
                <p>Telefon: <a href="tel:+4588991122" className="text-blue-300 hover:underline">+45 88 99 11 22</a></p>
                <p>Email: <a href="mailto:hello@scandicstudios.dk" className="text-blue-300 hover:underline">hello@scandicstudios.dk</a></p>
                <p>Adresse: Frederiks Allé, 8000 Aarhus C</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">Åbningstider</h3>
              <ul className="mt-4 space-y-2 text-blue-100/90">
                <li>Tirsdag–Fredag: 10:00 – 18:00</li>
                <li>Lørdag: 09:00 – 15:00</li>
                <li>Søndag–Mandag: Lukket</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-200/70">
          <p>© {new Date().getFullYear()} Scandic Studios · Alle rettigheder forbeholdes</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white transition">Ydelser</a>
            <a href="#booking" className="hover:text-white transition">Booking</a>
            <a href="#contact" className="hover:text-white transition">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
