import React from 'react'

interface OpponentHandProps {
  position: 'top' | 'left' | 'right'
}

export const OpponentHand: React.FC<OpponentHandProps> = ({ position }) => {
  const tileCount = 13
  const tiles = Array(tileCount).fill(null)

  const containerClasses = {
    top: 'flex gap-1',
    left: 'flex flex-col gap-1',
    right: 'flex flex-col gap-1',
  }

  const tileClasses = {
    top: 'w-8 h-12 bg-red-800 rounded-sm',
    left: 'w-12 h-8 bg-red-800 rounded-sm',
    right: 'w-12 h-8 bg-red-800 rounded-sm',
  }

  return (
    <div className={containerClasses[position]}>
      {tiles.map((_, index) => (
        <div key={index} className={tileClasses[position]}></div>
      ))}
    </div>
  )
}