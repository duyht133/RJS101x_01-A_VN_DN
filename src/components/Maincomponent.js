import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Menu from "./Menucomponents";
import Dishdetail from "./DishdetailComponents";
import Header from "./Headercomponent";
import Footer from "./Footercomponent";
import Contact from "./Contactcomponents";
import Home from "./Homecomponents";
import AboutUs from "./AboutUs";
import Dashboard from "./Dashboard";
import "./stylesAnimations.css";

// import các thunkapi từ reducer
import { fetchDisheUser, fetchComment, fetchLeaders, fetchPromotions } from "../redux/reducer";

function Main() {
  // set điều kiện hiện ra dishes
  const [dishDetail, setdishDetail] = useState(null);
  const onSelecdish = (data) => {
    setdishDetail(data);
  };
  //set điều kiện chạy animation
  const [animation, setAnimation] = useState(false);
  const getAnimation = () => {
    setAnimation(!animation);
  };
 
  // dishpatch thunk để setState dữ liệu cho toàn bộ trang web
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDisheUser());
    dispatch(fetchComment());
    dispatch(fetchPromotions());
    dispatch(fetchLeaders());
  }, [dispatch]);

  return (
    <div>
      {/* chạy hiệu ứng animation */}
      <Header getAnimation={getAnimation}/>

      <TransitionGroup>
        <CSSTransition
          key={animation}
          classNames="page"
          timeout={200}
          unountOnExit 
        >
          <Routes>
            <Route path="/" />
            <Route path="home" element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="menu" element={<Menu onSelect={onSelecdish} />} />
            <Route path="/menu/:dishId" element={<Dishdetail props={dishDetail} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

//connect redux --> react
export default Main;
