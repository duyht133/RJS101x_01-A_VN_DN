import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Menu from "./Menucomponents";
import Dishdetail from "./DishdetailComponents";
import Header from "./Headercomponent";
import Footer from "./Footercomponent";
import Contact from "./Contactcomponents";
import Home from "./Homecomponents";
import Dashboard from "./Dashboard";
import "./App.css";

function Main() {
  const [dishDetail, setdishDetail] = useState(null);
  const onSelecdish = (data) => {
    setdishDetail(data);
  };
  
 /*  const author = useSelector((state)=>{return state.user.author})//1 */

  return (
    <>
      <Header />

      <Routes>
        <Route path="" element={<Home />} />

        <Route path="home" element={<Home />} />

        <Route path="menu" element={<Menu onSelect={onSelecdish} />} />

        <Route path="/menu/:dishId" element={<Dishdetail props={dishDetail} />} />

        <Route path="contact" element={<Contact />} />
        {/* làm tới đây */}
        <Route path="dashboard" element={<Dashboard /* author={author} */ />}/>
          
   
      </Routes>

      <Footer />
    </>
  );
}

//connect redux --> react
export default Main;
