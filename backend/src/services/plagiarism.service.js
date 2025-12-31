import prisma from "../db/prisma.js";
import { preprocessText } from "../utils/preprocess.js";
import { sentenceSimilarity } from "../utils/similarity.js";
import { highlightMatches } from "../utils/highlight.js";

export const analyzePlagiarism = async (text) => {
  if (!text || typeof text !== "string") {
    throw new Error("Text input is required");
  }

  // Break input into sentences
  const inputSentences = preprocessText(text);

  // Fetch all stored documents
  const documents = await prisma.document.findMany();

  let matchedSentences = new Set();
  let totalSimilarity = 0;
  let comparisons = 0;

  documents.forEach((doc) => {
    const dbSentences = preprocessText(doc.content);

    inputSentences.forEach((inputSentence) => {
      dbSentences.forEach((dbSentence) => {
        const similarity = sentenceSimilarity(inputSentence, dbSentence);

        totalSimilarity += similarity;
        comparisons++;

        if (similarity > 0.5) {
          matchedSentences.add(inputSentence);
        }
      });
    });
  });

  // Calculate plagiarism percentage
  const plagiarismPercentage =
    comparisons === 0
      ? 0
      : Math.round((totalSimilarity / comparisons) * 100);

  // Highlight only matched sentences
  const highlightedText = highlightMatches(text, [...matchedSentences]);

  // Save current document AFTER analysis
  await prisma.document.create({
    data: {
      content: text,
    },
  });

  return {
    plagiarismPercentage,
    highlightedText,
  };
};