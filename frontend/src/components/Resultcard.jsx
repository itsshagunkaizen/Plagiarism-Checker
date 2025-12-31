export default function ResultCard({ percentage, highlightedText }) {
  return (
    <div className="mt-6 border rounded p-4">
      <h3 className="text-lg font-bold mb-2">
        Plagiarism: {percentage}%
      </h3>

      <div
        className="p-3 border rounded bg-gray-50"
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      />
    </div>
  );
}