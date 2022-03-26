import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import Components.
import Headercomponent from "./Headercomponent.js";
import StaffListComponent from "./StaffListComponent";
import RenderDish from "./RenderDish";
import Department from "./Department.js";
import Salary from "./Salary";
import Footercomponent from "./Footercomponent.js";

const MainComponent = () => {
  // sử lý sự kiện renderdish
  const [staff, setStaff] = useState(null);
  // setState.
  const onSelectStaff = (staff) => {
    setStaff(staff);
  };
  return (
    <div>
      <Headercomponent />

      <Routes>
        <Route path="/" />
        <Route path="home" element={<StaffListComponent selectStaff={onSelectStaff} />} />
        <Route path="/staff/:staffId" element={<RenderDish staff={staff} />} />
        <Route path="department" element={<Department />} />
        <Route path="salary" element={<Salary />} />
      </Routes>

      <Footercomponent />
    </div>
  );
};

export default MainComponent;
