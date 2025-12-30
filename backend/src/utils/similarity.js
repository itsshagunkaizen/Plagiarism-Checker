export const calculateSimilarity = (a, b) => {
  if (!a.length || !b.length) return 0;
  return Math.round((a.length / b.length) * 100);
};
