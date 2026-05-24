import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<HomePage />} />
          <Route path="/offers" element={<HomePage />} />
          <Route path="/cart" element={<HomePage />} />
          <Route path="/profile" element={<HomePage />} />
          <Route path="/orders" element={<HomePage />} />
          <Route path="/login" element={<HomePage />} />
          <Route path="/register" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
