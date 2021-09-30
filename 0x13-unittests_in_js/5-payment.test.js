const { expect } = require("chai");
const sinon = require("sinon");

const sendPaymentRequestToApi = require("./5-payment");

describe("Hooks", function () {
  let consoleSpy;
  beforeEach(function () {
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(function () {
    consoleSpy.restore();
  });

  it("logs correctly with 100, 20", () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnceWithExactly("The total is: 120")).to.equal(
      true
    );
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it("logs correctly with 10, 10", () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnceWithExactly("The total is: 20")).to.equal(true);
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
