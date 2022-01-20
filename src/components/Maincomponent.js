import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { dishes } from "../share/dishes";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menucomponents";
import Dishdetail from "./DishdetailComponents";
import Header from "./Headercomponent";
import Footer from "./Footercomponent";
import Contact from "./Contactcomponents";
import LoginControl from "./Testcomponent";
import Home from "./Homecomponents";
import "./App.css";

function Main() { 
  /* const [dishSelected, setDishSelected] = useState(null); */

  /* const HomePage = () => {
    return <Home />;
  }; */

  /* const onSelecdish = (data) => {
    setDishSelected(data);
  }; */

  return (
    <>
      <Header />

      {/* {dishes.map((data) => (
        <Menu renderInfo={onSelecdish} key={data.id} data={data} />
      ))}
      <Dishdetail dish={dishSelected} />
      */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path='/menu/:dishId' element={<Dishdetail />} /> */}
      </Routes>

      <Footer />

      {/* <LoginControl/> */}
    </>
  );
}

export default Main;
