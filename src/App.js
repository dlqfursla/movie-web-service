import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import PageSwitch from "./PageSwitch";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
