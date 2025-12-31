export const preprocessText = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s.]/g, "")
    .split(".")
    .map(s => s.trim())
    .filter(s => s.length > 5);
};