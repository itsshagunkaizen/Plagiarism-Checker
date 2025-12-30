import { preprocessText } from "../utils/preprocess.js";
import { calculateSimilarity } from "../utils/similarity.js";
import { highlightMatches } from "../utils/highlight.js";

export const analyzePlagiarism = (text) => {
  const sentences = preprocessText(text);

  // placeholder comparison (will improve later)
  const similarity = calculateSimilarity(sentences, sentences);
  const highlightedText = highlightMatches(text, sentences);

  return {
    plagiarismPercentage: similarity,
    highlightedText
  };
};
