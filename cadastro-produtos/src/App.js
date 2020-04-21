import React from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
