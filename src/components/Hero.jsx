import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(147,197,253,0.12),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/90 backdrop-blur">
              Frisør i Aarhus • Skandinavisk design
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Scandic Studios
            </h1>
            <p className="mt-5 text-lg md:text-xl leading-relaxed text-blue-100/90">
              Hos Scandic Studios kombinerer vi skandinavisk design, kreativitet og håndværk for at give dig en frisøroplevelse i særklasse. Vores dygtige stylister arbejder med de nyeste teknikker og trends, så du altid forlader salonen med et personligt look, der passer til dig og din livsstil.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#booking" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-white font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition">
                Book tid
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-blue-100 font-medium border border-white/10 hover:bg-white/15 transition">
                Se ydelser
              </a>
            </div>
            <div className="mt-6 text-sm text-blue-200/70">
              Åbent tirsdag–lørdag • Frederiks Allé, Aarhus C
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(59,130,246,0.08),transparent)]" />
              <div className="h-full w-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto h-28 w-28 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-14 w-14 text-blue-300"><path stroke="currentColor" strokeWidth="1.5" d="M7 4c2 3 2 5 0 8m10-8c-2 3-2 5 0 8M4 17c4 2 12 2 16 0"/></svg>
                  </div>
                  <p className="mt-5 text-blue-100/90">
                    Personlige klip og farver med fokus på kvalitet, detaljer og god service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
