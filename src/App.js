import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artists from "./pages/Artists";
import Home from "./pages/Home";
import Trends from "./pages/Trends";
import Collections from "./pages/Collections";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Trends" element={<Trends />}></Route>
          <Route path="/Artists" element={<Artists />}></Route>
          <Route path="/Wallet" element={<Wallet />}></Route>
          <Route path="/Collections" element={<Collections />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
