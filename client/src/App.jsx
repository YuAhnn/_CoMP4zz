import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import OpeningHookPage from './pages/OpeningHookPage'
import InsightPreviewPage from './pages/InsightPreviewPage'
import InsightPage from './pages/InsightPage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/_CoMP4zz" element={<LandingPage/>}/>
        <Route path="/preview"  element={<OpeningHookPage/>}/>
        <Route path="/result"  element={<InsightPreviewPage/>}/>
        <Route path="/insights"  element={<InsightPage/>}/>
        <Route path="/login"  element={<LoginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App