const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const value = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${value}`);
  return value;
}

module.exports = sendPaymentRequestToApi;
