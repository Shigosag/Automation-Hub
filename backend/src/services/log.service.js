import prisma from "../config/db.js";

// Export fetchLogs
export const fetchLogs = async () => {
  return prisma.automationLog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Optional: createLog for automation logging
export const createLog = async (taskName, status, message) => {
  return prisma.automationLog.create({
    data: { taskName, status, message },
  });
};