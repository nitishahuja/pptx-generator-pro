"use client";

import { useState } from "react";
import Slide from "./components/Slide";
import Navigation from "./components/Navigation";
import DownloadButton from "./components/DownloadButton";
import PresentationMode from "./components/PresentationMode";
import { slides } from "./data/slides";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Maximize2 } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-8 text-center flex flex-col items-center">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt="DeepSeek AI Logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <h1 className="text-4xl font-bold text-blue-800">
            DeepSeek AI: Open-Source AI Revolution
          </h1>
        </div>
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <Slide content={slides[currentSlide]} />
          <Navigation
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onNext={goToNextSlide}
            onPrev={goToPrevSlide}
          />
        </div>
        <div className="mt-8 text-center flex justify-center space-x-4">
          <DownloadButton slides={slides} />
          <Button
            onClick={() => setIsPresentationMode(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <Maximize2 className="mr-2" />
            Present
          </Button>
        </div>
      </div>
      {isPresentationMode && (
        <PresentationMode
          slides={slides}
          onClose={() => setIsPresentationMode(false)}
        />
      )}
    </main>
  );
}
