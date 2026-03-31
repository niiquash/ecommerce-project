import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import HomePage from "./pages/homepage/HomePage";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/tracking/TrackingPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCartItems(response.data);
    });
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cartItems={cartItems} />} />
      <Route
        path="/checkout"
        element={<CheckoutPage cartItems={cartItems} />}
      />
      <Route path="/orders" element={<OrdersPage cartItems={cartItems} />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
