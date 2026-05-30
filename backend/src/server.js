import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import automationRoutes from "./routes/automation.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_, res) => {
  res.json({
    status: "ok",
    service: "Automation Hub API",
    author: "Shigosag"
  });
});

app.get("/", (req, res) => {
  res.send("🚀 Automation Hub API Running - Powered by Shigosag");
});

app.use("/api/automation", automationRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
🚀 Automation Hub API Running
🔥 Powered by Shigosag
🌐 http://localhost:${PORT}
`);
});