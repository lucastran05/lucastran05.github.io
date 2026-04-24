import Section from './Section'

function Awards({ data, title }) {
  return (
    <Section id="awards" title={title}>
      <div className="space-y-3">
        {data.map((item) => (
          <article key={item.title} className="rounded-xl border border-cardBorder bg-white p-4 sm:p-5">
            <h3 className="text-base font-semibold text-navyText sm:text-lg">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Awards
