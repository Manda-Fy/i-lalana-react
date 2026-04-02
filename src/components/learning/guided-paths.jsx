import React from "react"
import { guidedPaths } from "../../data/legalData"
import { useNavigate } from "react-router-dom"

function GuidedPaths() {
  const navigate = useNavigate()

  return (
    <section id="guided-paths-section" className="mb-12">
      <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-6">Dingana torolalana</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {guidedPaths.map((path) => (
          <button
            key={path.id}
            onClick={() => navigate(`/explore?path=${path.id}`)}
            className="flex-shrink-0 w-72 p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{path.icon}</span>
              <div>
                <h3 className="font-playfair font-bold text-slate-900">{path.title}</h3>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-3">{path.description}</p>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default GuidedPaths
