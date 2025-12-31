export default function TextInput({ text, setText, onCheck, loading }) {
  return (
    <div className="mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your content here..."
        className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />

      <button
        onClick={onCheck}
        disabled={loading}
        className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Checking..." : "Check Plagiarism"}
      </button>
    </div>
  );
}
