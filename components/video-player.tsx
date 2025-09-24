"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster: string
  title: string
  className?: string
}

export function VideoPlayer({ src, poster, title, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    // For demo purposes, we'll just toggle the state
    // In a real implementation, this would control actual video playback
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={`relative group ${className}`}>
      <img src={poster || "/placeholder.svg"} alt={title} className="w-full h-full object-cover rounded" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors rounded flex items-center justify-center">
        <Button
          size="lg"
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary backdrop-blur-sm"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
        </Button>
      </div>
      {isPlaying && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/50 backdrop-blur-sm rounded px-3 py-2">
            <p className="text-white text-sm font-medium">{title}</p>
            <div className="w-full bg-white/20 rounded-full h-1 mt-2">
              <div className="bg-primary h-1 rounded-full w-1/3 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
