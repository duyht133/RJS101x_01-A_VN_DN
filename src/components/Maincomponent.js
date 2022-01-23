import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { dishes } from "../share/dishes";
import { comments } from "../share/comment";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menucomponents";
import Dishdetail from "./DishdetailComponents";
import Header from "./Headercomponent";
import Footer from "./Footercomponent";
import Contact from "./Contactcomponents";
import Home from "./Homecomponents";
import "./App.css";
import LoginControl from "./Testcomponent";

function Main() {
  const [dishDetail, setdishDetail] = useState(null);

  const onSelecdish = (data) => {
    setdishDetail(data);
  };

  return (
    <>
      <Header />

      <Routes>
        <Route path="" element={<Home />} />

        <Route path="home" element={<Home />} />

        <Route path="menu" element={<Menu onSelect={onSelecdish} />} />

        <Route path="/menu/:dishId" element={<Dishdetail props={dishDetail} comment={comments} />} />

        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />

      {/* <LoginControl/> */}
    </>
  );
}

export default Main;
