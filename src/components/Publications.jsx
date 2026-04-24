import Section from './Section'

function renderAuthors(authors, highlightedAuthor) {
  return authors.map((author, index) => {
    const suffix = index < authors.length - 1 ? ', ' : ''
    if (author === highlightedAuthor) {
      return (
        <span key={author + index} className="font-semibold text-navyText">
          {author}
          {suffix}
        </span>
      )
    }

    return <span key={author + index}>{author}{suffix}</span>
  })
}

function Publications({ data, highlightedAuthor, title }) {
  return (
    <Section id="publications" title={title} titleClassName="tracking-[0.18em]">
      <div className="overflow-hidden rounded-xl border border-cardBorder bg-white">
        {data.map((item, index) => (
          <article
            key={item.title}
            className="flex flex-col gap-3 border-b border-cardBorder px-4 py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:px-5"
          >
            <div>
              <p className="text-sm font-medium text-slate-500">[{index + 1}]</p>
              <h3 className="mt-1 text-base font-semibold text-navyText">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">
                {renderAuthors(item.authors, highlightedAuthor)}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {item.venue} ({item.year})
              </p>
            </div>

            <a
              href={item.pdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:bg-slate-100"
            >
              PDF
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Publications
