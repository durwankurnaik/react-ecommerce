import "./App.css";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Success from "./pages/Success"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const isLogged = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={!isLogged ? <Login /> : <Navigate to="/" />} />
        <Route exact path="/register" element={!isLogged ? <Register /> : <Navigate to="/" />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
