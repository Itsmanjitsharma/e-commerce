import React from "react";
import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import HomePage from "./HomePage";


const Layout = () => {
    return (
      <div>
        <Header />
        <Outlet />  {/* Outlet will dynamically render the current route's component */}
        <Footer/>
      </div>
    );
  };
  const MainContent = () => {
    return (
      <BrowserRouter> {/* Ensure BrowserRouter is the top-level wrapper */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tees" element={<ProductList category="TEES" />} />
            <Route path="/shirtandshackets" element={<ProductList category="SHIRTS AND SHACKETS" />} />
            <Route path="/bottoms" element={<ProductList category="BOTTOMS" />} />
            <Route path="/bags" element={<ProductList category="BAGS" />} />
            <Route path="/sweatshirts" element={<ProductList category="SWEATSHIRTS" />} />
            <Route path="/productdetails" element={<ProductDetail/>}/>
            <Route path="/contactus" element={<ProductList category="Tees" />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/returnandrefunds" element={<ProductList category="Tees" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default MainContent;