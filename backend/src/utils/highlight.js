export const highlightMatches = (originalText, sentences) => {
  let highlighted = originalText;

  sentences.forEach(sentence => {
    if (sentence.length > 20) {
      highlighted = highlighted.replace(
        new RegExp(sentence, "gi"),
        `<mark>${sentence}</mark>`
      );
    }
  });

  return highlighted;
};
