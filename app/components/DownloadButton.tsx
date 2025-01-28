"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import pptxgen from "pptxgenjs";

interface DownloadButtonProps {
  slides: {
    title: string;
    body: string;
  }[];
}

export default function DownloadButton({ slides }: DownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePPTX = async () => {
    setIsGenerating(true);

    try {
      console.log("Starting PPTX generation");
      const pptx = new pptxgen();

      // Set slide layout
      pptx.layout = "LAYOUT_16x9";

      // Define colors
      const BLUE = "4A90E2";
      const PURPLE = "9B51E0";

      // Loop through slides and add content
      slides.forEach((slide, index) => {
        const pptSlide = pptx.addSlide();

        // Add title
        pptSlide.addText(slide.title, {
          x: 0.5,
          y: 0.5,
          w: "90%",
          fontSize: 24,
          color: BLUE,
          bold: true,
          align: "center",
        });

        // Add body content
        pptSlide.addText(slide.body, {
          x: 0.5,
          y: 1.5,
          w: "90%",
          h: "70%",
          fontSize: 14,
          color: "363636",
          align: "left",
          lineSpacing: 20,
        });

        // Add footer with slide number
        pptSlide.addText(`Slide ${index + 1} of ${slides.length}`, {
          x: 0,
          y: "95%",
          w: "100%",
          fontSize: 10,
          color: "FFFFFF",
          align: "center",
        });

        // Add a footer background for style
        pptSlide.addShape(pptx.ShapeType.rect, {
          x: 0,
          y: "90%",
          w: "100%",
          h: "10%",
          fill: { color: PURPLE },
        });
      });

      console.log("Slides added, writing file");

      // Generate and download the file
      await pptx.writeFile({ fileName: "DeepSeek_AI_Presentation.pptx" });
      console.log("Download initiated");
    } catch (error) {
      console.error("Error generating PPTX:", error);

      // Handle error of type `unknown`
      if (error instanceof Error) {
        alert(
          `An error occurred while generating the presentation: ${error.message}`
        );
      } else {
        alert("An unknown error occurred.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={generatePPTX}
      disabled={isGenerating}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
    >
      {isGenerating ? (
        "Generating..."
      ) : (
        <>
          <Download className="mr-2" />
          Download PPTX
        </>
      )}
    </Button>
  );
}
