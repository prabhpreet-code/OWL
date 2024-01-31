import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPlace from "./pages/MarketPlace";
import Home from "./pages/Home";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<MarketPlace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
