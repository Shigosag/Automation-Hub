import { Router } from "express";

import {
  runAutomation,
  getAutomationLogs
} from "../controllers/automation.controller.js";

const router = Router();

router.post("/run", runAutomation);
router.get("/logs", getAutomationLogs);

export default router;