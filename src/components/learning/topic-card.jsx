import React from "react"
import { useNavigate } from "react-router-dom"
import { categories } from "../../data/legalData"

function TopicCard({ topic }) {
  const navigate = useNavigate()
  const category = categories.find((c) => c.id === topic.category)
  const levelLabel = topic.level === "pemiera" ? "Pemiera" : "Antsalotra"
  const levelColor = topic.level === "pemiera" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"

  return (
    <article
      onClick={() => navigate(`/article/${topic.id}`)}
      className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{category?.icon}</span>
        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${category?.color}`}>
          {category?.name}
        </span>
      </div>
      <h3 className="font-playfair text-lg font-bold text-slate-900 mb-2 line-clamp-2">
        {topic.title}
      </h3>
      <p className="text-sm text-slate-600 mb-4 line-clamp-3">
        {topic.description}
      </p>
      <div className="flex items-center gap-2">
        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${levelColor}`}>
          {levelLabel}
        </span>
        <span className="text-xs text-slate-500">{topic.readTime}</span>
        {topic.popular && (
          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
            Malaza
          </span>
        )}
      </div>
    </article>
  )
}

export default TopicCard
