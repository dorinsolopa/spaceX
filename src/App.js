import React from 'react';
import Navbar from "./component/navbar/Navbar"
import './App.css';
import Dashboard from "./component/dashboard/Dashboard"

function App() {
  return (
  <React.Fragment>
    <Navbar/>
    <Dashboard/>
  </React.Fragment>
  );
}

export default App;
