import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComp from "./components/Navbar";
import Home from "./pages/Home/home";
import Detail from "./pages/Detail/detailMovie";
import Favorite from "./pages/Favorite/favorite";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
