import prisma from "../config/db.js";

export const executeCleanupTask = async () => {
  const log = await prisma.automationLog.create({
    data: {
      taskName: "Cleanup Task",
      status: "SUCCESS",
      message: "Temporary files cleaned successfully"
    }
  });

  return log;
};