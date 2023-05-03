// InflationCalculator.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InflationCalculator() {
  const [initialValue, setInitialValue] = useState('');
  const [years, setYears] = useState('');
  const [inflationRate, setInflationRate] = useState('');
  const [futureValue, setFutureValue] = useState(<span className="placeholder-glow"><span className="placeholder col-1"></span></span>);

  const calculateFutureValue = () => {
    const adjustedValue = initialValue * Math.pow((1 + inflationRate / 100), years);
    setFutureValue(adjustedValue.toFixed(2));
  }

  return (
    <div className='container'>
      <div className="row align-items-end">
        <div className="card" style={{ width: '30rem' }}>
          <div className="card-body">
            <h5 className="card-title"><i class="bi bi-graph-up-arrow" style={{paddingRight:"5px"}}></i>Infaltion Calculator</h5>
            <div className="calculator">
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" l>Initial Value:</label>
                  <input type="number" value={initialValue} onChange={(e) => setInitialValue(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="value"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" l>Number of Years:</label>
                  <input type="number" value={years} onChange={(e) => setYears(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="years"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" l>Inflation Rate:</label>
                  <input type="number" value={inflationRate} onChange={(e) => setInflationRate(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="rate"></input>
                </div>
                <button type="button" className='btn btn-success' onClick={calculateFutureValue}>Calculate</button>
              </form>
              <div className="result">
                Future Value: ${futureValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InflationCalculator;
