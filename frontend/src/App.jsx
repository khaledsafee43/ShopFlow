import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import SignUp from "./pages/SignUp";

export default function App() {
  const [cartItems, setCartItems] = useState([]); // Placeholder for cart state
  const addToCart = (product) => {
    // Placeholder for add to cart functionality
    setCartItems((prevItems) => [...prevItems, product]);
  };
  const updateQty = (id, qty) =>
    setCartItems((prev) => {
      const next = prev.map((x) =>
        x.id === id ? { ...x, qty: Math.max(1, Math.min(qty, x.stock)) } : x,
      );
      return next;
    });

  const removeFromCart = (id) => {
    setCartItems((products) => products.filter((product) => product.id !== id));
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products onAddToCart={addToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onUpdateQty={updateQty}
              onRemoveToCart={removeFromCart}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}
