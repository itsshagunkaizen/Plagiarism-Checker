export default function ResultCard({ percentage, highlightedText }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Plagiarism: {percentage}%</h3>
      <div
        style={{ padding: "10px", border: "1px solid #ccc" }}
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      />
    </div>
  );
}
