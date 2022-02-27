import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./Menucomponents";
import Dishdetail from "./DishdetailComponents";
import Header from "./Headercomponent";
import Footer from "./Footercomponent";
import Contact from "./Contactcomponents";
import Home from "./Homecomponents";
import "./App.css";




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

        <Route path="menu" element={<Menu onSelect={onSelecdish} /* data={mapStateToProps} */ />} />

        <Route path="/menu/:dishId" element={<Dishdetail props={dishDetail} />} />

        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

//connect redux --> react
export default Main;
