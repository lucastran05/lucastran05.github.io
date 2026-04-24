import Section from './Section'

function Skills({ data, title }) {
  return (
    <Section id="skills" title={title}>
      <div className="space-y-4">
        {data.map((skill) => (
          <article key={skill.category} className="rounded-xl border border-cardBorder bg-white p-4 sm:p-5">
            <h3 className="text-base font-semibold text-navyText sm:text-lg">{skill.category}</h3>
            <p className="mt-2 text-sm text-slate-600">{skill.items}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Skills
