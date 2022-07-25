import { BaseDriver, errors } from "@appium/base-driver";
import log from "./logger";
import commands from "./commands";

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

Object.assign(AppiumTemplateDriver.prototype, commands);
export { AppiumTemplateDriver };
