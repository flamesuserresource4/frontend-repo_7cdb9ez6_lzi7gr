import React from 'react'

function CTA() {
  return (
    <section id="booking" className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-10 backdrop-blur">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Klar til forandring?</h3>
          <p className="mt-3 text-blue-100/90">Book en tid og oplev en salon, hvor du kan slappe af, blive forkælet og gå herfra med fornyet selvtillid.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="rounded-xl bg-blue-500 px-6 py-3 text-white font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition">Book online</a>
            <a href="tel:+4588991122" className="rounded-xl bg-white/10 px-6 py-3 text-blue-100 font-medium border border-white/10 hover:bg-white/15 transition">Ring til os</a>
          </div>
          <p className="mt-4 text-xs text-blue-200/70">Åbningstider: Tir–Fre 10–18 · Lør 9–15</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
