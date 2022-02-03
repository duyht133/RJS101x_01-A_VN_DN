import React from "react";
import { DEPARTMENTS } from "../shared/staffs";

const Department = () => {
  const Render = () => {
    return DEPARTMENTS.map((num) => (
      <div className="department">
        <div  key={num.id}>
          <h1>{num.name}</h1>
          <div>số lượng nhân viên: {num.numberOfStaff}</div>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <Render />
    </div>
  );
};

export default Department;
