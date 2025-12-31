import { useState } from "react";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import ResultCard from "../components/ResultCard";
import { checkPlagiarism } from "../services/api";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    if (!text.trim()) return;
    const data = await checkPlagiarism(text);
    setResult(data);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <TextInput text={text} setText={setText} onCheck={handleCheck} />
        {result && (
          <ResultCard
            percentage={result.plagiarismPercentage}
            highlightedText={result.highlightedText}
          />
        )}
        <div className="text-red-500 text-3xl font-bold">
  Tailwind Working
</div>

      </div>
    </>
  );
}
