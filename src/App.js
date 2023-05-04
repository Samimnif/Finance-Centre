// App.js
import React from 'react';
import FinancialHub from './FinancialHub';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
      <nav className="navbar" style={{ backgroundColor: "#88c8f7" }}>
        <div className="container-fluid">
          <a className="navbar-brand" style={{ fontFamily: "cursive" }}><i class="bi bi-house" style={{ paddingRight: "5px" }}></i>FH</a>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-dark" type="submit">login</button>
          </form>
        </div>
      </nav>
      <div style={{ padding: '20px' }}>
        <div class="row justify-content-center">
          <div class="col-md-5">
            <h2>Financial Hub</h2>
          </div>
        </div>
        <FinancialHub />
      </div>
    </div>
  );
}

export default App;
