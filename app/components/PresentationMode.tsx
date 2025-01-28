"use client"

import { useState, useEffect } from "react"
import Slide from "./Slide"

interface PresentationModeProps {
  slides: {
    title: string
    body: string
  }[]
  onClose: () => void
}

export default function PresentationMode({ slides, onClose }: PresentationModeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        if (currentSlide === slides.length - 1) {
          onClose()
        } else {
          setCurrentSlide((prev) => prev + 1)
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrentSlide((prev) => Math.max(0, prev - 1))
      } else if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, slides.length, onClose])

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="w-full h-full overflow-hidden">
        <Slide content={slides[currentSlide]} isFullScreen={true} />
      </div>
    </div>
  )
}

