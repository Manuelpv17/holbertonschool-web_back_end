const request = require("request");
const { expect } = require("chai");

describe("9. Regex integration testing ", function () {
  it("GET /", function (done) {
    const options = {
      url: "http://localhost:7865",
      method: "GET",
    };
    request(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.a("string");
      expect(body).to.equal("Welcome to the payment system");
    });
    done();
  });
  it("GET /cart/:id", function (done) {
    const options = {
      url: "http://localhost:7865/cart/12",
      method: "GET",
    };
    request(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.a("string");
      expect(body).to.equal("Payment methods for cart 12");
    });
    done();
  });
  it("GET  /cart/:id", function (done) {
    const options = {
      url: "http://localhost:7865/cart/hello",
      method: "GET",
    };
    request(options, function (err, res, body) {
      expect(res.statusCode).to.equal(404);
    });
    done();
  });
});
