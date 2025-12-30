import { analyzePlagiarism } from "../services/plagiarism.service.js";

export const healthCheck = (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Plagiarism backend is healthy"
  });
};

export const checkPlagiarism = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        error: "Text is required"
      });
    }

    const result = analyzePlagiarism(text);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: "Internal server error"
    });
  }
};
