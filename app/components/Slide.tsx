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
    ? "flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-purple-100"
    : "flex flex-col justify-center items-center h-full bg-white";

  const slideClasses =
    "w-[1200px] h-[700px] p-12 bg-white shadow-xl rounded-2xl flex flex-col";

  const titleClasses =
    "text-5xl font-bold text-blue-800 mb-10 text-center leading-tight";

  const contentClasses =
    "prose prose-lg text-gray-800 flex-grow overflow-y-auto leading-relaxed";

  return (
    <div className={containerClasses}>
      <div className={slideClasses}>
        <div className="flex items-center justify-center mb-8">
          <Cpu className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
          <h2 className={titleClasses}>{content.title}</h2>
        </div>
        <div className={contentClasses}>
          <ReactMarkdown
            components={{
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-6 space-y-3" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-6 space-y-3" {...props} />
              ),
              li: ({ node, ...props }) => <li className="mb-2" {...props} />,
              p: ({ node, ...props }) => <p className="mb-6" {...props} />,
              strong: ({ node, ...props }) => (
                <strong className="font-semibold text-blue-700" {...props} />
              ),
            }}
          >
            {content.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
