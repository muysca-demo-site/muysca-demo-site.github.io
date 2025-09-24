"use client"

import { useEffect, useState } from "react"

export function SoundVisualization() {
  const [bars, setBars] = useState<number[]>([])

  useEffect(() => {
    // Generate random heights for sound bars animation
    const interval = setInterval(() => {
      setBars(Array.from({ length: 5 }, () => Math.random() * 100 + 20))
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-end gap-1 h-8">
      {bars.map((height, index) => (
        <div
          key={index}
          className="bg-primary rounded-sm transition-all duration-200 ease-out"
          style={{
            height: `${height}%`,
            width: "4px",
          }}
        />
      ))}
    </div>
  )
}
