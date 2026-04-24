import { useEffect, useMemo, useState } from 'react'
import Achievements from './components/Achievements'
import BackToTop from './components/BackToTop'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Loading from './components/Loading'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'
import profile from './data/profile'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState(profile.defaultLocale)
  const [activeSection, setActiveSection] = useState(profile.navigation[0]?.id)
  const content = profile.i18n[language]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sectionIds = useMemo(
    () => profile.navigation.map((item) => item.id),
    [],
  )

  useEffect(() => {
    document.documentElement.lang = language
    document.title = content.seo.title

    const upsertMeta = (name, key, value) => {
      let tag = document.querySelector(`meta[${name}="${key}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(name, key)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', value)
    }

    upsertMeta('name', 'description', content.seo.description)
    upsertMeta('name', 'keywords', content.seo.keywords)
    upsertMeta('property', 'og:title', content.seo.title)
    upsertMeta('property', 'og:description', content.seo.description)
    upsertMeta('property', 'og:locale', language === 'vi' ? 'vi_VN' : 'en_US')
    upsertMeta('name', 'twitter:title', content.seo.title)
    upsertMeta('name', 'twitter:description', content.seo.description)
  }, [content.seo.description, content.seo.keywords, content.seo.title, language])

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

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'vi' ? 'en' : 'vi'))
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen bg-slateBg text-navyText">
      <div className="w-full px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <Sidebar
          profile={profile}
          content={content}
          language={language}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onToggleLanguage={toggleLanguage}
        />

        <main className="space-y-5 lg:ml-[22.5rem]">
          <Hero hero={content.hero} personal={profile.personal} />

          <Education data={content.education} title={content.labels.education} gpaLabel={content.labels.gpa} />
          <Skills data={content.skills} title={content.labels.skills} />
          <Projects data={content.projects} title={content.labels.projects} />
          <Certifications data={content.certifications} title={content.labels.certifications} />
          <Achievements data={content.achievements} title={content.labels.achievements} />
          <Publications data={profile.publications} highlightedAuthor={profile.personal.name} title={content.labels.publications} />
          <Footer />
        </main>
      </div>
      <BackToTop show={isScrolled} />
    </div>
  )
}

export default App
