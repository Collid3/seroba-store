import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import { useContext } from "react";
import DataContext from "./context/DataContext";

function App() {
  const { cart, filteredProducts, setCategory } = useContext(DataContext);

  return (
    <div className="App">
      <Header
        cart={cart}
        filteredProducts={filteredProducts}
        setCategory={setCategory}
      />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
