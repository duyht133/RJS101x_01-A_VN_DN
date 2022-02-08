import React from "react";
import { DEPARTMENTS } from "../shared/staffs";
import { Link } from "react-router-dom";
import "../App.css"

const Department = () => {
  const Render = () => {
    return DEPARTMENTS.map((num) => (
      <div className="col-lg-4 col-md-6 col-sm-12 "  key={num.id}>
        <div className="department">
          <h1>{num.name}</h1>
          <p>số lượng nhân viên: {num.numberOfStaff}</p>
        </div>
      </div>
    ));
  };
  return (
    <div className="container ">
        <Link to="/">Nhân Viên</Link> | Phòng Ban
      <div className="row  ">
      <Render />
      </div>
    </div>
  );
};

export default Department;
