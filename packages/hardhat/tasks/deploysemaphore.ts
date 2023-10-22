import { task, types } from "hardhat/config";

task("deploysemaphore", "Deploy a Feedback contract")
  .addOptionalParam("semaphore", "Semaphore contract address", undefined, types.string)
  .addOptionalParam("group", "Group id", "42", types.string)
  .addOptionalParam("logs", "Print the logs", true, types.boolean)
  .setAction(async ({ logs, semaphore: semaphoreAddress, group: groupId }, { ethers, run }) => {
    if (!semaphoreAddress) {
      const { semaphore } = await run("deploy:semaphore", {
        logs,
      });

      semaphoreAddress = semaphore.address;
    }

    console.log(semaphoreAddress);
  });
