// App.js
import React from 'react';
import FinancialHub from './FinancialHub';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar" style={{ backgroundColor: "#88c8f7" }}>
        <div className="container-fluid">
          <a className="navbar-brand"> Home</a>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-primary" type="submit">login</button>
          </form>
        </div>
      </nav>
      <div style={{ padding: '20px' }}>
        <h2>Financial Hub</h2>
        <FinancialHub />
      </div>
    </div>
  );
}

export default App;
