import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import chalk from "chalk";

console.log(`
====================================
${chalk.cyan("🚀 Automation Hub")}
${chalk.redBright("🔥 Powered by Shigosag")}
====================================
`);

export default defineConfig({
  plugins: [react()],
});