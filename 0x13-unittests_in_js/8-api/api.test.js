const request = require("request");
const { expect } = require("chai");

describe("8. Basic Integration testing ", () => {
  it("GET /", (done) => {
    request("http://localhost:7865", "GET", (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system");
    });
    done();
  });
});
