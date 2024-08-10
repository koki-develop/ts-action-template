import * as core from "@actions/core";

(async () => {
  try {
    const inputs = {
      message: core.getInput("message"),
    } as const;

    core.info(inputs.message);
    core.setOutput("message", inputs.message);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
    throw error;
  }
})();
