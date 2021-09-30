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
  it("GET /available_payments", function (done) {
    const options = {
      url: "http://localhost:7865/available_payments",
      method: "GET",
    };
    request(options, function (err, res, body) {
      const obj = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.a("string");
      expect(JSON.parse(body)).to.be.a("object");
      expect(JSON.parse(body)).to.deep.equal(obj);
    });
    done();
  });

  it("POST /login", function (done) {
    const options = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        userName: "Betty",
      },
    };
    request.post(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
    });
    done();
  });
});
