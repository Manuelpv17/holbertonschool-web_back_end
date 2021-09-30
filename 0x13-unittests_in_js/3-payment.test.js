const { expect } = require("chai");
const sinon = require("sinon");

const sendPaymentRequestToApi = require("./3-payment");
const utils = require("./utils");

describe("3. Spies ", () => {
  it("Util.calculateNumber", () => {
    const UtilsSpy = sinon.spy(utils, "calculateNumber");
    const consoleSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    expect(UtilsSpy.calledOnceWithExactly("SUM", 100, 20)).to.equal(true);
    expect(consoleSpy.calledWithExactly("The total is: 120")).to.equal(true);

    UtilsSpy.restore();
    consoleSpy.restore();
  });
});
