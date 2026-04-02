import React from "react"
import { categories } from "../../data/legalData"

function CategoryGrid({ onCategorySelect, activeCategory }) {
  return (
    <section id="categories-section" className="mb-12">
      <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-6">Sokajy</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategorySelect(cat.id === activeCategory ? "all" : cat.id)}
            className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer text-center ${cat.color} ${cat.hoverColor} ${activeCategory === cat.id ? "ring-2 ring-offset-2 ring-amber-500 shadow-md" : "shadow-sm hover:shadow-lg hover:-translate-y-1"}`}
          >
            <span className="text-3xl block mb-2">{cat.icon}</span>
            <h3 className="font-playfair font-bold text-sm mb-1">{cat.name}</h3>
            <p className="text-xs opacity-75"> Karazan lalàna {cat.count}</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid
