import { BrowserRouter, Link, NavLink, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Courses from "./Courses";
import Nav from "./Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Courses" element={<Courses />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
