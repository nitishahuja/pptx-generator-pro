import ReactMarkdown from "react-markdown"
import { Cpu } from "lucide-react"

interface SlideProps {
  content: {
    title: string
    body: string
  }
  isFullScreen?: boolean
}

export default function Slide({ content, isFullScreen = false }: SlideProps) {
  const containerClasses = isFullScreen
    ? "p-12 h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-100"
    : "p-8 h-full flex flex-col"

  const titleClasses = isFullScreen ? "text-5xl font-bold text-blue-800 mb-8" : "text-3xl font-bold text-blue-800"

  const contentClasses = isFullScreen
    ? "prose prose-xl max-w-4xl w-full text-gray-800 overflow-y-auto max-h-[70vh]"
    : "prose max-w-none text-gray-700 flex-grow"

  return (
    <div className={containerClasses}>
      <div className={isFullScreen ? "max-w-4xl w-full" : "w-full"}>
        <div className="flex items-center mb-6">
          <Cpu className={`${isFullScreen ? "w-12 h-12" : "w-8 h-8"} text-blue-600 mr-3 flex-shrink-0`} />
          <h2 className={titleClasses}>{content.title}</h2>
        </div>
        <div className={contentClasses}>
          <ReactMarkdown
            components={{
              ul: ({ node, ...props }) => <ul className="list-disc pl-5 space-y-2" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal pl-5 space-y-2" {...props} />,
              li: ({ node, ...props }) => <li className="mb-1" {...props} />,
            }}
          >
            {content.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

