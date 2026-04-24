import { useEffect, useMemo, useState } from 'react'
import Awards from './components/Awards'
import Education from './components/Education'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Publications from './components/Publications'
import Section from './components/Section'
import Sidebar from './components/Sidebar'
import profile from './data/profile'

function App() {
  const [activeSection, setActiveSection] = useState(profile.navigation[0]?.id)

  const sectionIds = useMemo(
    () => profile.navigation.map((item) => item.id),
    [],
  )

  useEffect(() => {
    const observers = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) {
        return
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          rootMargin: '-35% 0px -50% 0px',
          threshold: 0,
        },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sectionIds])

  const handleNavigate = (sectionId) => {
    const target = document.getElementById(sectionId)
    if (!target) {
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slateBg text-navyText">
      <div className="w-full px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <Sidebar
          profile={profile}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        <main className="space-y-5 lg:ml-[22.5rem]">
          <Hero hero={profile.hero} personal={profile.personal} />

          <Education data={profile.education} />
          <Experience data={profile.experience} />

          <Section id="latest-news" title="Latest News">
            <div className="space-y-3">
              {profile.latestNews.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-cardBorder bg-white px-4 py-3 shadow-card"
                >
                  <p className="text-sm font-semibold text-slate-500">{item.date}</p>
                  <h3 className="mt-1 text-base font-semibold text-navyText">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </Section>

          <Awards data={profile.awards} />
          <Publications data={profile.publications} highlightedAuthor={profile.personal.name} />
        </main>
      </div>
    </div>
  )
}

export default App
