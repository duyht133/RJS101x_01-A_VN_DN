import React, { useState } from "react";
import { dishes } from "../share/dishes";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menucomponents";
import Dishdetail from "./DishdetailComponents";
import Header from "./Headercomponent";
import Footer from "./Footercomponent";
import "./App.css";

function Main() {
  const [dishSelected, setDishSelected] = useState(null);
  const onSelecdish = (dish) => {
    setDishSelected(dish);
  };

  return (
    <>
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand className="aType" href="/">Ứng dụng nhà hàng.</NavbarBrand>
          </div>
        </Navbar>
      </div>

      
      <Header/>
      {dishes.map((data) => (
        <Menu renderInfo={onSelecdish} key={data.id} data={data} />
      ))}
      <Dishdetail /* renderComment={onSelecdish} */ dish={dishSelected} />
      <Footer/>
      
    </>
  );
}

export default Main;
