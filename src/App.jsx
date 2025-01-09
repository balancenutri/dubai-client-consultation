import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Congrates from "./components/Congrates";
import Consultation from "./consultation/Consultation";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/congrats" element={<Congrates />} />
          <Route path="/" element={<Consultation />} />
        </Routes>
      </Router>
    </>
  );
}
