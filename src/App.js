import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import Test from "./components/test";

function App() {
  const current = useSelector((state) => state.shop.currentItem);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          {!current ? (
            <Route exact path="*" element={<Products />} />
          ) : (
            <Route exact path="/product/:id" element={<SingleItem />} />
          )}
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;