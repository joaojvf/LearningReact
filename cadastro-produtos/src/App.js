import React from "react";
import Navbar from "./components/Navbar";
import Routes from './routes'
import { Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Navbar></Navbar>
        <Routes></Routes>
      </div>
    </HashRouter>
  );
}

export default App;
