#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import ora from "ora";

const program = new Command();

console.log(chalk.redBright(`
====================================
🚀 Automation CLI
🔥 Powered by Shigosag
====================================
`));

program
  .command("run")
  .description(
    "Run automation task"
  )
  .action(async () => {
    const spinner =
      ora("Running automation...").start();

    await new Promise(resolve =>
      setTimeout(resolve, 3000)
    );

    spinner.succeed(
      "Automation completed successfully"
    );
  });

program.parse();