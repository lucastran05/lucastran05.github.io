function Section({ id, title, children, titleClassName = '' }) {
  return (
    <section id={id} className="scroll-mt-6 rounded-2xl border border-cardBorder bg-white p-6 shadow-card sm:p-7">
      <h2 className={`mb-5 text-xl font-bold tracking-wide text-navyText ${titleClassName}`}>{title}</h2>
      {children}
    </section>
  )
}

export default Section
