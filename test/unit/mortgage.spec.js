const expect = require("chai").expect;
const Mortgage = require("../../src/js/lib/Mortgage");

describe("Mortgage Calculator", () => {
  let mortgageCalc = null;
  beforeEach(() => {
    mortgageCalc = new Mortgage();
  });
  it("should have a calcPayment function", () => {
    expect(mortgageCalc.calcPayment).to.exist;
  });

  it("should have a mthlyInt function", () => {
    expect(mortgageCalc.mthlyInt).to.exist;
  });

  it("should have a totLength function", () => {
    expect(mortgageCalc.totLength).to.exist;
  });
});
