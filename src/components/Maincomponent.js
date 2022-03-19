import React, { useState,useEffect } from "react";
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

// import các thunkapi từ reducer
import { fetchDisheUser,fetchComment,fetchLeaders,fetchPromotions } from "../redux/reducer";


function Main() {
  const [dishDetail, setdishDetail] = useState(null);
  const onSelecdish = (data) => {
    setdishDetail(data);
  };


  // dishpatch thunk để setState dữ liệu cho toàn bộ trang web
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDisheUser());   
    dispatch(fetchComment())   ;
    dispatch(fetchPromotions())   ;
    dispatch(fetchLeaders()) ;  
  },[]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/"/>
        <Route path="home" element={<Home />} />

        <Route path="menu" element={<Menu onSelect={onSelecdish} />} />

        <Route path="/menu/:dishId" element={<Dishdetail props={dishDetail} />} />

        <Route path="contact" element={<Contact />} />
      
        <Route path="dashboard" element={<Dashboard />}/>
          
   
      </Routes>

      <Footer />
    </>
  );
}

//connect redux --> react
export default Main;
