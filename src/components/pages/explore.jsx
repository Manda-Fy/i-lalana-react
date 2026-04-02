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
          t.description.toLowerCase().includes(lowerQuery)
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
      <main id="main-explore" className="min-h-screen bg-gradient-to-t from-olive-100 via-stone-50 to-white text-slate-900 font-lato">
        <div className="max-w-6xl mx-auto px-5 py-10 md:py-16">
          <div className="mb-8">
            <h1 className="font-playfair text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
              {pathParam ? guidedPaths.find((p) => p.id === pathParam)?.title || "Zahao":"Zahao ireo lalàna rehetra"}
            </h1>
            <p className="text-slate-600 text-lg">
              {pathParam ? guidedPaths.find((p) => p.id === pathParam)?.description : "Mikaroha, mianara, ary fantaro ny zohanao"}
            </p>
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
