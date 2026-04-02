import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home.jsx'
import Explore from './components/pages/explore.jsx'
import Article from './components/pages/article.jsx'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/article/:id" element={<Article />} />
            </Routes>
        </Router>
    )
}

export default App
