import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import GameRoom from './components/GameRoom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:roomId" element={<GameRoom />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App