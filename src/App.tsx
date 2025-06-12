import { Routes, Route, Navigate } from 'react-router-dom'
import RedirectPage from './pages/RedirectPage'
import EduWebLanding from './pages/EduWebLanding'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RedirectPage />} />
      <Route path="/events/2025/eduweb" element={<EduWebLanding />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App