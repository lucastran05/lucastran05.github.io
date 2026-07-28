import { useState } from 'react'
import Section from './Section'

function Projects({ data, title, labels }) {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? data : data.slice(0, 2)
  const hasMore = data.length > 2

  return (
    <Section id="projects" title={title}>
      <div className="space-y-4">
        {visibleProjects.map((project) => (
          <article key={project.title} className="rounded-xl border border-cardBorder bg-white p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-navyText sm:text-lg">{project.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{project.date}</p>
                <p className="mt-1 text-sm font-medium text-slate-600">{project.technologies}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{project.description}</p>
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-600">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-xs font-semibold text-blue-600 hover:underline"
              >
                View on link →
              </a>
            )}
          </article>
        ))}
      </div>

      {hasMore && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center rounded-xl border border-cardBorder bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-navyText"
          >
            {showAll ? labels.showLess : labels.showMore}
          </button>
        </div>
      )}
    </Section>
  )
}

export default Projects

