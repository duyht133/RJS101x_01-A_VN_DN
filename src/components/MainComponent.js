//import react hook and react router
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//import react transition
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../stylesAnimations.css";

// import Components.
import Headercomponent from "./Headercomponent.js";
import StaffListComponent from "./StaffListComponent";
import RenderDish from "./RenderDish";
import Department from "./Department.js";
import Salary from "./Salary";
import Footercomponent from "./Footercomponent.js";
import IndexComponent from "./IndexComponent";

const MainComponent = () => {
  // sử lý sự kiện renderdish
  const [staff, setStaff] = useState(null);
  const onSelectStaff = (staff) => {
    setStaff(staff);
  };
  //set điều kiện chạy animation
  const [animation, setAnimation] = useState(false);
  const getAnimation = () => {
    setAnimation(!animation);
  };
  return (
    <div>
      <Headercomponent getAnimation={getAnimation}/>

      <TransitionGroup>
        <CSSTransition key={animation} classNames="page" timeout={200}>
          <Routes>
            <Route path="/" element={<IndexComponent />} />
            <Route path="home" element={<StaffListComponent selectStaff={onSelectStaff} />} />
            <Route path="/contact/:contactId" element={<RenderDish staff={staff} />} />
            <Route path="department" element={<Department />} />
            <Route path="salary" element={<Salary />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      <Footercomponent />
    </div>
  );
};

export default MainComponent;
