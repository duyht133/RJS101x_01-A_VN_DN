import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StaffListComponent from "./StaffListComponent";
import Footercomponent from "./Footercomponent.js";
import Headercomponent from "./Headercomponent.js";
import Department from "./Department.js";
import RenderDish from "./RenderDish";

const MainComponent = () => {
  const [staff, setStaff] = useState(null);

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


      </Routes>
      <Footercomponent />
    </div>
  );
};

export default MainComponent;
