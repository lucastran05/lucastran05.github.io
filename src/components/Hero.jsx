function Hero({ hero }) {
  return (
    <section className="rounded-2xl border border-cardBorder bg-white p-6 shadow-card sm:p-7">
      <h1 className="text-2xl font-bold text-navyText sm:text-[2rem]">{hero.heading}</h1>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{hero.intro}</p>
    </section>
  )
}

export default Hero
