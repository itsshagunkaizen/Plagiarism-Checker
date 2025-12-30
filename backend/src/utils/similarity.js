const tokenize = (sentence) => {
  return sentence.split(" ");
};

export const sentenceSimilarity = (s1, s2) => {
  const set1 = new Set(tokenize(s1));
  const set2 = new Set(tokenize(s2));

  const intersection = new Set(
    [...set1].filter(word => set2.has(word))
  );

  const union = new Set([...set1, ...set2]);

  return intersection.size / union.size;
};

export const calculateSimilarity = (sentencesA, sentencesB) => {
  let matches = 0;

  sentencesA.forEach(sa => {
    sentencesB.forEach(sb => {
      const sim = sentenceSimilarity(sa, sb);
      if (sim > 0.5) {
        matches++;
      }
    });
  });

  return Math.min(100, Math.round((matches / sentencesA.length) * 100));
};
