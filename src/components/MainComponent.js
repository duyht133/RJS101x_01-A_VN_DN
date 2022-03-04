import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// import Components.
import Headercomponent from "./Headercomponent.js";
import StaffListComponent from "./StaffListComponent";
import RenderDish from "./RenderDish";
import Department from "./Department.js";
import Salary from "./Salary";
import Footercomponent from "./Footercomponent.js";

const MainComponent = () => {
  // tạo state với giá trị khởi tạo null.
  const [staff, setStaff] = useState(null);

  // tạo function cài lại giá trị state.
  const onSelectStaff = (staff) => {
    setStaff(staff);
  };
  return (
    <div>
      <Headercomponent />

      <Routes>
        <Route path="/" element={<StaffListComponent selectStaff={onSelectStaff} />} />
        <Route path="/staff/:staffId" element={<RenderDish staff={staff} />} />
        <Route path="department" element={<Department />} />
        <Route path="salary" element={<Salary />} />
      </Routes>

      <Footercomponent />
    </div>
  );
};

export default MainComponent;
