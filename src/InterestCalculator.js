// InterestCalculator.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InterestCalculator() {
  const [principleAmount, setprincipleAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [period, setperiod] = useState('');
  const [newAmount, setNewAmount] = useState(<span className="placeholder-glow"><span className="placeholder col-1"></span></span>);

  const calculatePayment = () => {
    const rate = interestRate / 100;
    const accuredAmount = principleAmount * (1 + rate*period);
    setNewAmount(accuredAmount.toFixed(2));
  }

  return (
    <div className='container calculator'>
      <div className="row align-items-end">
        <div className="card" style={{ width: '30rem' }}>
          <div className="card-body">
            <h5 className="card-title"><i class="bi bi-cash-stack" style={{paddingRight:"5px"}}></i>Interest Calculator</h5>
            <div className="calculator">
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" l>Initial Amount:</label>
                  <input type="number" value={principleAmount} onChange={(e) => setprincipleAmount(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="value"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" l>Interest Rate:</label>
                  <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="rate"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" l>Term (in years):</label>
                  <input type="number" value={period} onChange={(e) => setperiod(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="years"></input>
                </div>
                <button type="button" className='btn btn-success' onClick={calculatePayment}>Calculate</button>
              </form>
              <div className="result">
              Final Investment Value: ${newAmount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestCalculator;
