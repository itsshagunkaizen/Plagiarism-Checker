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
      <div className="max-w-3xl mx-auto p-6">
        <TextInput text={text} setText={setText} onCheck={handleCheck} />

        {result && (
          <ResultCard
            percentage={result.plagiarismPercentage}
            highlightedText={result.highlightedText}
          />
        )}
      </div>
    </>
  );
}