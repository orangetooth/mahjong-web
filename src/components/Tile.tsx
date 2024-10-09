import React from 'react'

interface TileProps {
  value: string
}

export const Tile: React.FC<TileProps> = ({ value }) => {
  return (
    <div className="w-10 h-14 bg-white rounded-sm flex items-center justify-center text-xl font-bold shadow-md">
      {value}
    </div>
  )
}