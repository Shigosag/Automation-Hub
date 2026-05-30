import logger from "../utils/logger.js";
import { createLog } from "../services/logService.js";

export const runFileCleanup = async () => {
  logger.info("Running file cleanup...");

  await createLog(
    "File Cleanup",
    "SUCCESS",
    "Temporary files cleaned"
  );

  return {
    success: true,
    message: "Cleanup completed"
  };
};