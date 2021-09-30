const { expect } = require("chai");
const sinon = require("sinon");

const sendPaymentRequestToApi = require("./4-payment");
const utils = require("./utils");

describe("4. Stubs  ", () => {
  it("Util.calculateNumber", () => {
    const stubUtils = sinon.stub(utils, "calculateNumber");
    stubUtils.returns(10);
    const consoleSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    expect(stubUtils.calledOnceWithExactly("SUM", 100, 20)).to.equal(true);
    expect(consoleSpy.calledWithExactly("The total is: 10")).to.equal(true);

    stubUtils.restore();
    consoleSpy.restore();
  });
});
