import { useState } from "react";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import ResultCard from "../components/Resultcard";
import { checkPlagiarism } from "../services/api";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!text.trim()) return;
    setLoading(true);
    const data = await checkPlagiarism(text);
    setResult(data);
    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center px-4">
        <div className="w-full max-w-3xl mt-12 bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Check Your Content for Plagiarism
          </h1>

          <TextInput
            text={text}
            setText={setText}
            onCheck={handleCheck}
            loading={loading}
          />

          {result && (
            <ResultCard
              percentage={result.plagiarismPercentage}
              highlightedText={result.highlightedText}
            />
          )}
        </div>
      </div>
    </>
  );
}
