export const highlightMatches = (text, matchedSentences = []) => {
  if (!Array.isArray(matchedSentences)) return text;

  let result = text;

  matchedSentences.forEach(sentence => {
    if (sentence) {
      result = result.replace(
        new RegExp(sentence, "gi"),
        `<mark>${sentence}</mark>`
      );
    }
  });

  return result;
};
