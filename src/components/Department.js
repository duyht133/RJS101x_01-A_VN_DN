import React from "react";
import { DEPARTMENTS } from "../shared/staffs";

const Department = () => {
  const Render = () => {
    return DEPARTMENTS.map((num) => (
      <div key={num.id}>
        <h1>{num.name}</h1>
        <div>số lượng nhân viên: {num.numberOfStaff}</div>
      </div>
    ));
  };
  return (
    <div>
      <Render className="department" />
    </div>
  );
};

export default Department;
