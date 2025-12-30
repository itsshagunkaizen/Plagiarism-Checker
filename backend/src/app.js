import express from "express";
import cors from "cors";
import plagiarismRoutes from "./routes/plagiarism.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/plagiarism", plagiarismRoutes);

export default app;
