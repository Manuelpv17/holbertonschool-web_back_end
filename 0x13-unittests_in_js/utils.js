const Utils = {
  calculateNumber(type, a, b) {
    const numA = Math.round(a);
    const numB = Math.round(b);

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
      throw TypeError;
    }

    if (type === "SUM") {
      return numA + numB;
    } else if (type === "SUBTRACT") {
      return numA - numB;
    } else if (type === "DIVIDE") {
      if (numB === 0) return "Error";
      return numA / numB;
    } else {
      throw TypeError;
    }
  },
};

module.exports = Utils;
