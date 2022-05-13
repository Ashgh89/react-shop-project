import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<CartPage />} />

        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
