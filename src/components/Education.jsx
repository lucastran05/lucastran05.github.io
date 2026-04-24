import Section from './Section'

function Education({ data, title, gpaLabel }) {
  return (
    <Section id="education" title={title}>
      <div className="space-y-4">
        {data.map((item) => (
          <article key={item.school} className="rounded-xl border border-cardBorder bg-white p-4 sm:p-5">
            <h3 className="text-base font-bold text-navyText sm:text-lg">{item.school}</h3>
            <p className="mt-1 text-sm text-slate-600">{item.degree}</p>
            <p className="mt-2 text-sm font-medium text-slate-700">{item.years}</p>
            <p className="mt-2 text-sm text-slate-700">{gpaLabel}: {item.gpa}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Education
