import prisma from "../db/prisma.js";
import { preprocessText } from "../utils/preprocess.js";
import { calculateSimilarity } from "../utils/similarity.js";
import { highlightMatches } from "../utils/highlight.js";

export const analyzePlagiarism = async (text) => {
  // fetch stored documents
  const documents = await prisma.document.findMany();

  const processedInput = preprocessText(text);

  let maxSimilarity = 0;
  let matchedText = "";

  for (const doc of documents) {
    const processedDoc = preprocessText(doc.content);
    const similarity = calculateSimilarity(processedInput, processedDoc);

    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      matchedText = doc.content;
    }
  }

  // store new document
  await prisma.document.create({
    data: {
      content: text
    }
  });

  return {
    plagiarismPercentage: maxSimilarity,
    highlightedText: highlightMatches(text, matchedText)
  };
};
