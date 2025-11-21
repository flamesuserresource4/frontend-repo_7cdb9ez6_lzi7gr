import React from 'react'

const services = [
  {
    title: 'Præcisionsklip',
    desc: 'Skræddersyede klipninger tilpasset dit ansigt og din stil.'
  },
  {
    title: 'Farve & Balayage',
    desc: 'Naturlige overgange og dybde med teknikker i topklasse.'
  },
  {
    title: 'Styling',
    desc: 'Fra hverdagsstyling til særlige lejligheder – vi får dit hår til at spille.'
  },
  {
    title: 'Kurbehandlinger',
    desc: 'Intensive behandlinger der styrker og giver glans.'
  },
  {
    title: 'Rådgivning',
    desc: 'Professionelle anbefalinger til pleje og produkter, der passer til dig.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.08),transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ydelser</h2>
          <p className="mt-3 text-blue-100/90">Vi tilbyder alt fra præcisionsklip, farvebehandlinger og balayage til styling, kurbehandlinger og rådgivning – altid med fokus på dig.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-200">{i+1}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
