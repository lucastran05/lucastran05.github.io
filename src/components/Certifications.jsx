import Section from './Section'

function Certifications({ data, title }) {
  return (
    <Section id="certifications" title={title}>
      <div className="space-y-3">
        {data.map((cert) => (
          <article key={cert.title} className="rounded-xl border border-cardBorder bg-white p-4 sm:p-5">
            <h3 className="text-base font-semibold text-navyText sm:text-lg">{cert.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{cert.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Certifications
