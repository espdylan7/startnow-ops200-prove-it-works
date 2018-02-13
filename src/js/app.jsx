import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      rate: '',
      term: '',
      mthlyPmtOutput: ''
    };
    this.balanceInput=this.balanceInput.bind(this);
    this.rateInput=this.rateInput.bind(this);
    this.termInput=this.termInput.bind(this);
    this.calcPmt=this.calcPmt.bind(this);
  }

  balanceInput(e) {
    this.setState({balance: e.target.value})
  }

  rateInput(e) {
    this.setState({rate: e.target.value})
  }

  termInput(e) {
    this.setState({term: e.target.value})
  }

  calcPmt(e) {
    e.preventDefault();
    var bal = this.state.balance;
    var rate = ((this.state.rate / 100) / 12);
    var term = this.state.term * 12;
    var topEq = rate * (Math.pow((rate + 1), term));
    var btmEq = (Math.pow((1 + rate), term)) - 1;
    var mthlyPmt = (bal * (topEq / btmEq)).toFixed(2)

    this.setState({mthlyPmtOutput: '$' + mthlyPmt});
  }

  render() {
    return (
      <div className='App'>
        <div className="page-header">
          <h1>Mortgage Calculator</h1>
        </div>
        <form onSubmit={this.calcPmt} >
          <input name='principal' value={this.state.balance} onChange={this.balanceInput} />
          <br />
          <input name='interestRate' step='0.01' value={this.state.rate} onChange={this.rateInput} />
          <br />
          <input name='loanTerm' value={this.state.term} onChange={this.termInput} />
          <br />
          <select name='period'>
            <option value='12'>Monthly</option>
            <option value='4'>Quarterly</option>
          </select>  
          <button id='calculate' type='submit' >Calculate</button>
          <br />
          <p id='output'>{this.state.mthlyPmtOutput}</p>
        </form>
      </div>
    );
  }
}
export default App;