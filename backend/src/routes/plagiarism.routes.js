import express from "express";
import {
  healthCheck,
  checkPlagiarism
} from "../controllers/plagiarism.controller.js";

const router = express.Router();

router.get("/health", healthCheck);
router.post("/check", checkPlagiarism);

export default router;