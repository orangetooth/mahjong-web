import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Tile } from './Tile'
import { TileStack } from './TileStack'
import { OpponentHand } from './OpponentHand'

const initialPlayerHand = ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '1p', '2p', '3p', '4p']

const GameRoom: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>()
  const [playerHand, setPlayerHand] = useState(initialPlayerHand)

  return (
    <div className="min-h-screen bg-green-800 flex flex-col items-center justify-between p-4">
      <h2 className="text-white text-2xl mb-4">房间号: {roomId}</h2>
      
      {/* Top opponent */}
      <OpponentHand position="top" />

      <div className="flex justify-between w-full">
        {/* Left opponent */}
        <OpponentHand position="left" />

        {/* Tile stack */}
        <TileStack />

        {/* Right opponent */}
        <OpponentHand position="right" />
      </div>

      {/* Player's hand */}
      <div className="flex gap-1">
        {playerHand.map((tile, index) => (
          <Tile key={index} value={tile} />
        ))}
      </div>
    </div>
  )
}

export default GameRoom