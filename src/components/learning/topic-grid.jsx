import React from "react"
import TopicCard from "./topic-card"

function TopicGrid({ topics }) {
  if (topics.length === 0) {
    return (
      <section id="topics-section">
        <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-6">Lalàna rehetra</h2>
        <div className="text-center py-16">
          <p className="text-slate-500 text-lg">Tsy nahita valiny... Andramo teny hafa</p>
        </div>
      </section>
    )
  }

  return (
    <section id="topics-section">
      <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-6">
        Lalàna rehetra ({topics.length})
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </section>
  )
}

export default TopicGrid
