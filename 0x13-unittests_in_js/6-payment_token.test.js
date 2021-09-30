const { expect } = require("chai");

const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
  it("response from API", function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.eql({ data: "Successful response from the API" });
        done();
      })
      .catch((err) => done(err));
  });
});
