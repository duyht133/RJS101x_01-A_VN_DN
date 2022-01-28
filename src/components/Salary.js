import React from "react";
import { Link } from "react-router-dom";
import { STAFFS } from "../shared/staffs";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const Salary = () => {
  const basicSalary = 3000000;
  const overTimeSalary = 200000;
  /* const salary = staff.rate * basicSalary + staff.overTime * overTimeSalary; */

  return (
    <div>
      <Link to="/">Nhân Viên</Link> | Bảng Lương
      {STAFFS.map((staff) => (
        <div className="col-12 col-md-5 m-1">
          <div>
            <h1>{staff.name}</h1>
            <div> Mã Nhân Viên: {staff.id}</div>
            <div> Hệ Số Lương: {staff.salaryScale}</div>
            <div> Số giờ làm thêm: {staff.overTime}</div>

            <br />

            <div>Lương: {staff.salaryScale * basicSalary + staff.overTime * overTimeSalary}</div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Salary;
