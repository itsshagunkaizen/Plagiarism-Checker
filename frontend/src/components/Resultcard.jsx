export default function ResultCard({ percentage, highlightedText }) {
  const color =
    percentage > 70
      ? "bg-red-100 text-red-700"
      : percentage > 30
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <div className="mt-8">
      <div
        className={`inline-block px-4 py-2 rounded-full font-semibold ${color}`}
      >
        Plagiarism: {percentage}%
      </div>

      <div className="mt-4 p-4 border rounded-lg bg-gray-50">
        <h3 className="font-semibold mb-2">Highlighted Content</h3>
        <div
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: highlightedText }}
        />
      </div>
    </div>
  );
}
