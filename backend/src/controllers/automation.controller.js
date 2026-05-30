import {
  executeCleanupTask
} from "../services/automation.service.js";

import {
  fetchLogs
} from "../services/log.service.js";

export const runAutomation = async (
  req,
  res,
  next
) => {
  try {
    const result =
      await executeCleanupTask();

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const getAutomationLogs =
  async (req, res, next) => {
    try {
      const logs = await fetchLogs();

      res.json({
        success: true,
        data: logs
      });
    } catch (error) {
      next(error);
    }
  };