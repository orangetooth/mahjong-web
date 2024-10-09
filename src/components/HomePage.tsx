import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage: React.FC = () => {
  const [roomId, setRoomId] = useState('')
  const navigate = useNavigate()

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      navigate(`/room/${roomId}`)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-800 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">麻将游戏</h1>
        <div className="mb-4">
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="输入房间号"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={handleJoinRoom}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
        >
          进入房间
        </button>
      </div>
    </div>
  )
}

export default HomePage