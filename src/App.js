import React from "react";
import Navbar from "./component/navbar/Navbar";
import "./App.css";
import Dashboard from "./component/dashboard/Dashboard";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <AppRouter />
    </React.Fragment>
  );
}

export default App;
