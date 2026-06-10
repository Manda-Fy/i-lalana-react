import React, { useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import Header from "../static/header"
import Footer from "../static/footer"
import SearchBar from "../learning/search-bar"
import CategoryGrid from "../learning/category-grid"

import TopicGrid from "../learning/topic-grid"
import { topics, guidedPaths } from "../../data/legalData"

function Explore() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [lang, setLang] = useState("mg") // 'mg' na 'fr'

  const pathParam = searchParams.get("path")

  const filteredTopics = useMemo(() => {
    let result = [...topics]

    if (pathParam) {
      const path = guidedPaths.find((p) => p.id === pathParam)
      if (path) {
        result = result.filter((t) =>
          path.steps.some((step) =>
            t.title.toLowerCase().includes(step.title.toLowerCase()) ||
            t.description.toLowerCase().includes(step.title.toLowerCase())
          )
        )
      }
    }

    if (query) {
      const lowerQuery = query.toLowerCase()
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(lowerQuery) ||
          t.description.toLowerCase().includes(lowerQuery) ||
          (t.titleFr && t.titleFr.toLowerCase().includes(lowerQuery)) ||
          (t.descriptionFr && t.descriptionFr.toLowerCase().includes(lowerQuery))
      )
    }

    if (categoryFilter !== "all") {
      result = result.filter((t) => t.category === categoryFilter)
    }

    if (sortBy === "popular") {
      result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
    } else if (sortBy === "readTime") {
      result.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime))
    }

    return result
  }, [query, categoryFilter, sortBy, pathParam])

  return (
    <>
      <Header />
      <main id="main-explore" className="min-h-screen bg-stone-50 text-slate-900 font-lato">
        <div className="max-w-6xl mx-auto px-5 py-10 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h1 className="font-playfair text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                {lang === 'fr' ? "Explorer les lois" : "Zahao ireo lalàna rehetra"}
              </h1>
              <p className="text-slate-600 text-lg">
                {lang === 'fr' ? "Recherchez, apprenez et connaissez vos droits" : "Mikaroha, mianara, ary fantaro ny zonao"}
              </p>
            </div>
            
            <div className="flex bg-white rounded-lg p-1 shadow-sm border border-slate-200 self-start">
              <button 
                onClick={() => setLang('mg')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${lang === 'mg' ? 'bg-amber-500 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
              >MG</button>
              <button 
                onClick={() => setLang('fr')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${lang === 'fr' ? 'bg-amber-500 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
              >FR</button>
            </div>
          </div>

          <SearchBar
            onSearch={setQuery}
            onCategoryFilter={setCategoryFilter}
            onSort={setSortBy}
          />

        

          <CategoryGrid
            onCategorySelect={setCategoryFilter}
            activeCategory={categoryFilter}
          />

          <TopicGrid topics={filteredTopics} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Explore
