import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onNext: () => void
  onPrev: () => void
}

export default function Navigation({ currentSlide, totalSlides, onNext, onPrev }: NavigationProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <Button onClick={onPrev} variant="outline" size="lg" className="bg-white hover:bg-blue-100">
        <ChevronLeft className="h-4 w-4 mr-2" />
        Previous
      </Button>
      <span className="text-sm font-medium text-gray-600">
        Slide {currentSlide + 1} of {totalSlides}
      </span>
      <Button onClick={onNext} variant="outline" size="lg" className="bg-white hover:bg-blue-100">
        Next
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  )
}

