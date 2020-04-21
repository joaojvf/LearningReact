import React from "react";
import Navbar from "./components/Navbar";
import Routes from './routes'
import { Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Routes></Routes>
      </div>
    </>
  );
}

export default App;
