// MortgageCalculator.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MortgageCalculator() {
  const [homeValue, setHomeValue] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(<span className="placeholder-glow"><span className="placeholder col-1"></span></span>);

  const calculatePayment = () => {
    const principal = homeValue - downPayment;
    const monthlyRate = (interestRate / 100) / 12;
    const termInMonths = loanTerm * 12;
    const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termInMonths));
    setMonthlyPayment(payment.toFixed(2));
  }

  return (
    <div className='container calculator'>
      <div className="row align-items-end">
        <div className="card" style={{ width: '30rem' }}>
          <div className="card-body">
            <h5 className="card-title"><i class="bi bi-house-door" style={{paddingRight:"5px"}}></i>Mortgage Calculator</h5>
            <div className="calculator">
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" l>Home Value:</label>
                  <input type="number" value={homeValue} onChange={(e) => setHomeValue(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="value"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" l>Down Payment:</label>
                  <input type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="rate"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" l>Interest Rate:</label>
                  <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="years"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" l>Loan Term (in years):</label>
                  <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="years"></input>
                </div>
                <button type="button" className='btn btn-success' onClick={calculatePayment}>Calculate</button>
              </form>
              <div className="result">
              Monthly Payment: ${monthlyPayment}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MortgageCalculator;
