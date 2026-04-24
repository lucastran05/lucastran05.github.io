import { ChevronUp } from 'lucide-react'

function BackToTop({ show }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!show) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-navyText text-white shadow-lg transition hover:bg-slate-800 lg:bottom-12 lg:right-12"
    >
      <ChevronUp size={20} />
    </button>
  )
}

export default BackToTop
