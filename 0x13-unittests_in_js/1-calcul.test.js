const calculateNumber = require("./1-calcul.js");
const mocha = require("mocha");
const assert = require("assert");

describe("calculateNumber", () => {
  it("returns rounded sum", () => {
    assert.strictEqual(calculateNumber("SUM", 2, 5), 7);
    assert.strictEqual(calculateNumber("SUM", 2.7, 6), 9);
    assert.strictEqual(calculateNumber("SUM", 2.2, 5.7), 8);
    assert.strictEqual(calculateNumber("SUM", -2, -1), -3);
    assert.strictEqual(calculateNumber("SUM", -2.4, -5.7), -8);
  });
  it("should throw error if NaN passed", function () {
    assert.throws(() => calculateNumber(NaN, 7), "[Function: TypeError]");
  });
  it("returns rounded substract", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 2, 5), -3);
    assert.strictEqual(calculateNumber("SUBTRACT", 3.7, 6), -2);
    assert.strictEqual(calculateNumber("SUBTRACT", 0.2, 4.7), -5);
    assert.strictEqual(calculateNumber("SUBTRACT", -2, -5), 3);
    assert.strictEqual(calculateNumber("SUBTRACT", -2.3, -4.7), 3);
  });
  it("returns rounded divide", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 10.3, 2.4), 5);
    assert.strictEqual(calculateNumber("DIVIDE", 6.2, 0), "Error");
  });
  it("should throw error if invalid type", function () {
    assert.throws(
      () => calculateNumber("NotAType", 23, 320),
      "[Function: TypeError]"
    );
  });
});
