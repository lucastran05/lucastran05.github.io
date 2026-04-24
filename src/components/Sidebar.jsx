import {
  Award,
  BookOpenText,
  Briefcase,
  GraduationCap,
  Mail,
  Newspaper,
} from 'lucide-react'

const navigationIcons = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  newspaper: Newspaper,
  award: Award,
  book: BookOpenText,
}

const contactIcons = {
  mail: Mail,
  github: Briefcase,
  graduation: GraduationCap,
  linkedin: Newspaper,
}

function Sidebar({ profile, activeSection, onNavigate }) {
  return (
    <aside className="mb-5 rounded-2xl border border-cardBorder bg-white p-5 shadow-card lg:fixed lg:top-6 lg:h-[calc(100vh-3rem)] lg:w-[20.75rem] lg:p-6">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-4 lg:flex-col lg:text-center">
          <img
            src={profile.personal.avatar}
            alt={profile.personal.name}
            className="h-20 w-20 rounded-full border-4 border-slate-100 object-cover shadow-sm lg:h-36 lg:w-36"
          />
          <div>
            <h2 className="text-xl font-bold text-navyText lg:text-2xl">{profile.personal.name}</h2>
            <p className="mt-1 text-sm text-slate-600">{profile.personal.subtitle}</p>
          </div>
        </div>

        <a
          href={profile.personal.cvUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-navyText px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Download CV (PDF)
        </a>

        <nav className="mt-5 space-y-1.5">
          {profile.navigation.map((item) => {
            const Icon = navigationIcons[item.icon] ?? GraduationCap
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
                  isActive
                    ? 'bg-slate-100 text-navyText'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-navyText'
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-start gap-2 lg:justify-center">
            {profile.contacts.map((item) => {
              const Icon = contactIcons[item.icon] ?? Mail

              return (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cardBorder text-slate-600 transition hover:border-slate-400 hover:text-navyText"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
