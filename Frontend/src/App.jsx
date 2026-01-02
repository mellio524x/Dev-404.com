import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './app/Layout'
import Home from './app/pages/Home'
import Music from './app/pages/Music'
import Videos from './app/pages/Videos'
import Comics from './app/pages/Comics'
import ComingSoon from './app/pages/ComingSoon'
import NotFound from './app/pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/movies" element={<ComingSoon section="Movies" iconImage="/images/dev-404-movies.png" />} />
          <Route path="/series" element={<ComingSoon section="Series" iconImage="/images/dev-404-series.png" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
