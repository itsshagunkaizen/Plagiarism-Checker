export default function TextInput({ text, setText, onCheck }) {
  return (
    <div>
      <textarea
        className="w-full border rounded p-3 h-40"
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={onCheck}
        className="mt-3 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
      >
        Check Plagiarism
      </button>
    </div>
  );
}
