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
import Counter from "./components/Counter";
import MemoComponent from "./components/UseMemo";
import CallBackComponent from "./components/UseCallback";

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

      {/* <div>
        <h1>useState Example</h1>
        <Counter />
        <hr />
        <h1>useCallback Example</h1>
        <CallBackComponent />
        <hr />
        <h1>useMemo Example</h1>
        <MemoComponent />
        <hr />

      </div> */}
    </BrowserRouter>
  );
}

export default App;