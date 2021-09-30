const calculateNumber = require("./2-calcul_chai.js");
const { expect } = require("chai");

describe("calculateNumber", () => {
  it("returns rounded sum", () => {
    expect(calculateNumber("SUM", 2, 5)).to.equal(7);
    expect(calculateNumber("SUM", 2.7, 6)).to.equal(9);
    expect(calculateNumber("SUM", 2.2, 5.7)).to.equal(8);
    expect(calculateNumber("SUM", -2, -1)).to.equal(-3);
    expect(calculateNumber("SUM", -2.4, -5.7)).to.equal(-8);
  });
  it("returns rounded substract", () => {
    expect(calculateNumber("SUBTRACT", 2, 5)).to.equal(-3);
    expect(calculateNumber("SUBTRACT", 3.7, 6)).to.equal(-2);
    expect(calculateNumber("SUBTRACT", 0.2, 4.7)).to.equal(-5);
    expect(calculateNumber("SUBTRACT", -2, -5)).to.equal(3);
    expect(calculateNumber("SUBTRACT", -2.3, -4.7), 3);
  });
  it("returns rounded divide", () => {
    expect(calculateNumber("DIVIDE", 10.3, 2.4), 5);
    expect(calculateNumber("DIVIDE", 6.2, 0), "Error");
  });
  it("should throw error if NaN passed", function () {
    expect(() => calculateNumber("SUM", NaN, 7)).to.throw();
  });
  it("should throw error if invalid type", function () {
    expect(() => calculateNumber("NotAType", 23, 320)).to.throw();
  });
});
