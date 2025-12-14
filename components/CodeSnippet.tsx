interface CodeSnippetProps {
  code: string;
  language?: string;
}

export default function CodeSnippet({
  code,
  language = "javascript",
}: CodeSnippetProps) {
  return (
    <div className="bg-black text-white p-6 rounded-lg text-sm overflow-x-auto border border-black">
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
