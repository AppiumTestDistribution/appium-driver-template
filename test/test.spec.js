import { remote } from "webdriverio";
import { WDIO_PARAMS, androidCapabilities } from "./wdio.config";

let driver;
describe("Driver Test", () => {
  beforeEach(async () => {
    driver = await remote({
      ...WDIO_PARAMS,
      capabilities: androidCapabilities,
    });
  });

  it("Sample Driver test", async () => {});

  afterEach(async () => await driver.deleteSession());
});
