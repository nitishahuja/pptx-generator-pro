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

      // Define colors and styles
      const TITLE_COLOR = "4A90E2";
      const BODY_COLOR = "363636";
      const FOOTER_COLOR = "FFFFFF";
      const FOOTER_BACKGROUND = "9B51E0";

      // Loop through slides and add content
      slides.forEach((slide, index) => {
        const pptSlide = pptx.addSlide();

        // Add slide title
        pptSlide.addText(slide.title, {
          x: 0.5,
          y: 0.5,
          w: "90%",
          fontSize: 32,
          color: TITLE_COLOR,
          bold: true,
          align: "center",
        });

        // Parse and add body content
        const bodyLines = slide.body
          .split("\n")
          .filter((line) => line.trim() !== "");
        let currentY = 1.5; // Start below the title

        bodyLines.forEach((line) => {
          if (line.startsWith("- **")) {
            // Add bold bullet points
            pptSlide.addText(line.substring(2), {
              x: 1,
              y: currentY,
              w: "88%",
              fontSize: 20,
              color: BODY_COLOR,
              bold: true,
              bullet: true,
              lineSpacing: 24,
            });
          } else if (line.startsWith("- ")) {
            // Add regular bullet points
            pptSlide.addText(line.substring(2), {
              x: 1,
              y: currentY,
              w: "88%",
              fontSize: 20,
              color: BODY_COLOR,
              bullet: true,
              lineSpacing: 24,
            });
          } else {
            // Add regular paragraphs
            pptSlide.addText(line, {
              x: 0.5,
              y: currentY,
              w: "90%",
              fontSize: 20,
              color: BODY_COLOR,
              lineSpacing: 30,
            });
          }
          currentY += 0.7; // Add spacing between lines
        });

        // Add footer with slide number
        pptSlide.addShape(pptx.ShapeType.rect, {
          x: 0,
          y: "90%",
          w: "100%",
          h: "10%",
          fill: { color: FOOTER_BACKGROUND },
        });

        pptSlide.addText(`Slide ${index + 1} of ${slides.length}`, {
          x: 0,
          y: "92%",
          w: "100%",
          fontSize: 12,
          color: FOOTER_COLOR,
          align: "center",
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
