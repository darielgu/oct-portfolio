interface CodeSnippetProps {
  code: string;
  language?: string;
}

export default function CodeSnippet({
  code,
  language = "javascript",
}: CodeSnippetProps) {
  return (
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <div className="space-y-2">
        {code.split("\n").map((line, index) => (
          <div key={index} className="whitespace-pre">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
