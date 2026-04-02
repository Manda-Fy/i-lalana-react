import React, { useState } from "react"
import { categories } from "../../data/legalData"

function SearchBar({ onSearch, onCategoryFilter, onSort }) {
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  const handleCategoryChange = (e) => {
    const value = e.target.value
    setSelectedCategory(value)
    onCategoryFilter(value)
  }

  const handleSortChange = (e) => {
    const value = e.target.value
    setSortBy(value)
    onSort(value)
  }

  return (
    <section id="search-section" className="mb-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1 relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Ireo izay tadiavinao..."
            value={query}
            onChange={handleSearch}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-700 placeholder-slate-400"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700"
        >
          <option value="all">Sokajy rehetra</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700"
        >
          <option value="popular">Malaza indrindra</option>
          <option value="recent">Vao haingana</option>
          <option value="readTime">Fohy indrindra</option>
        </select>
      </div>
    </section>
  )
}

export default SearchBar
