function Hero({ hero }) {
  return (
    <section className="rounded-2xl border border-cardBorder bg-white p-6 shadow-card sm:p-7">
      <h1 className="text-2xl font-bold text-navyText sm:text-[2rem]">{hero.heading}</h1>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{hero.intro}</p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <div className="space-y-3">
          {hero.info.map((item) => (
            <div key={item.label} className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-4">
              <p className="text-sm font-semibold text-slate-600">{item.label}</p>
              <p className="text-sm text-slate-700">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
