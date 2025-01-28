import ReactMarkdown from "react-markdown";
import { Cpu } from "lucide-react";

interface SlideProps {
  content: {
    title: string;
    body: string;
  };
  isFullScreen?: boolean;
}

export default function Slide({ content, isFullScreen = false }: SlideProps) {
  const containerClasses = isFullScreen
    ? "p-16 h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-100"
    : "p-12 h-full flex flex-col";

  const titleClasses = isFullScreen
    ? "text-6xl font-bold text-blue-800 mb-12"
    : "text-4xl font-bold text-blue-800 mb-8";

  const contentClasses = isFullScreen
    ? "prose prose-2xl max-w-5xl w-full text-gray-800 overflow-y-auto max-h-[75vh] leading-relaxed"
    : "prose prose-xl max-w-4xl text-gray-700 flex-grow leading-relaxed";

  return (
    <div className={containerClasses}>
      <div className={isFullScreen ? "max-w-6xl w-full" : "max-w-5xl w-full"}>
        <div className="flex items-center mb-8">
          <Cpu
            className={`${
              isFullScreen ? "w-16 h-16" : "w-10 h-10"
            } text-blue-600 mr-4 flex-shrink-0`}
          />
          <h2 className={titleClasses}>{content.title}</h2>
        </div>
        <div className={contentClasses}>
          <ReactMarkdown
            components={{
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-8 space-y-3" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-8 space-y-3" {...props} />
              ),
              li: ({ node, ...props }) => <li className="mb-2" {...props} />,
              p: ({ node, ...props }) => <p className="mb-6" {...props} />,
            }}
          >
            {content.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
