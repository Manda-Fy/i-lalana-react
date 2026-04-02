import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import Header from "../static/header"
import Footer from "../static/footer"
import { articles, topics, categories } from "../../data/legalData"
import TopicCard from "../learning/topic-card"

function Article() {
  const { id } = useParams()
  const navigate = useNavigate()
  const article = articles[id]
  const topic = topics.find((t) => t.id === id)
  const category = categories.find((c) => c.id === article?.category)
  const levelLabel = article?.level === "pemiera" ? "Pemiera" : "Antsalotra"
  const levelColor = article?.level === "pemiera" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"

  const relatedArticles = article?.related
    .map((rid) => topics.find((t) => t.id === rid))
    .filter(Boolean)

  if (!article) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-t from-olive-100 via-stone-50 to-white text-slate-900 font-lato">
          <div className="max-w-4xl mx-auto px-5 py-20 text-center">
            <h1 className="font-playfair text-3xl font-bold mb-4">Tsy hita ny pejy</h1>
            <button onClick={() => navigate("/explore")} className="px-6 py-3 bg-amber-800 text-white rounded-xl hover:shadow-lg transition-all">
              Miverina amin'ny fikarohana
            </button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main id="main-article" className="min-h-screen bg-gradient-to-t from-olive-100 via-stone-50 to-white text-slate-900 font-lato">
        <div className="max-w-4xl mx-auto px-5 py-10 md:py-16">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-amber-700 mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Miverina
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{category?.icon}</span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${category?.color}`}>
                {category?.name}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColor}`}>
                {levelLabel}
              </span>
              <span className="text-sm text-slate-500">{article.readTime}</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-slate-600">{article.summary}</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10 space-y-8">
            {article.sections.map((section, index) => {
              if (section.type === "warning") {
                return (
                  <div key={index} className="p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                    <h3 className="font-playfair font-bold text-amber-800 mb-2 flex items-center gap-2">
                      <span>⚠️</span> Zava-dehibe
                    </h3>
                    <p className="text-slate-700">{section.content}</p>
                  </div>
                )
              }

              if (section.type === "example") {
                return (
                  <div key={index} className="p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                    <h3 className="font-playfair font-bold text-blue-800 mb-2 flex items-center gap-2">
                      <span>💡</span> Ohatra
                    </h3>
                    <p className="text-slate-700">{section.content}</p>
                  </div>
                )
              }

              return (
                <div key={index}>
                  <h2 className="font-playfair text-xl font-bold text-slate-900 mb-3">
                    {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-slate-700 mb-4">{section.content}</p>
                  )}
                  {section.list && (
                    <ul className="space-y-2 mb-4">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.numberedSteps && (
                    <ol className="space-y-4 mb-4">
                      {section.numberedSteps.map((step, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-amber-800 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {i + 1}
                          </span>
                          <span className="text-slate-700 pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              )
            })}
          </div>

          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-6">
                Articles connexes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((topic) => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Article
