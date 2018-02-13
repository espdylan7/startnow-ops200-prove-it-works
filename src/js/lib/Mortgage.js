module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }
  
    get monthlyPayment() {
      // this getter should return the result of your monthly payment calculation
      // used in a previous assignment.
    }
    calcPayment() {
        var mthlyPmt =
            this.principle * (mthlyInt() * Math.pow(1 + mthlyInt(), totLength()) / (Math.pow(1 + mthlyInt(), totLength()) - 1 ));
        return mthlyPmt;
    }

    mthlyInt() {
        return (this.interest / 100) / 12;
    }

    totLength() {
        return this.term * 12;
    }       
  }