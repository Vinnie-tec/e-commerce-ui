import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
