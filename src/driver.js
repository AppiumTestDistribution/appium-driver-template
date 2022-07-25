import { BaseDriver, errors } from "@appium/base-driver";
import log from "./logger";

class AppiumTemplateDriver extends BaseDriver {
  constructor(args) {
    super(args);
    this.desiredCapConstraints = {
      automationName: {
        presence: true,
        isString: true,
      },
    };
  }
  async createSession(...args) {
    const res = await super.createSession(...args);
    log.info("Inside Template Driver create session");
    return res;
  }

  async deleteSession() {
    await super.deleteSession();
  }
}

export { AppiumTemplateDriver };
