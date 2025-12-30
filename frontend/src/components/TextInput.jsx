export default function TextInput({ text, setText, onCheck }) {
  return (
    <div>
      <textarea
        rows="6"
        style={{ width: "100%" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
      />
      <button onClick={onCheck} style={{ marginTop: "10px" }}>
        Check Plagiarism
      </button>
    </div>
  );
}
