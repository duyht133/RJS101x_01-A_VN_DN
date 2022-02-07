import React from "react";
import { Link } from "react-router-dom";
import { STAFFS } from "../shared/staffs";


const Salary = () => {
  const basicSalary = 3000000;
  const overTimeSalary = 200000;
  /* const salary = staff.rate * basicSalary + staff.overTime * overTimeSalary; */

  const Render = () => {
    return STAFFS.map((staff) => (
      <div className="col-lg-4 col-md-6 col-sm-12" key={staff.id}>
        <div>
          <h1>{staff.name}</h1>
          <p> Mã Nhân Viên: {staff.id}</p>
          <p> Hệ Số Lương: {staff.salaryScale}</p>
          <p> Số giờ làm thêm: {staff.overTime}</p>

          <br />

          <p>Lương: {staff.salaryScale * basicSalary + staff.overTime * overTimeSalary}</p>
        </div>
        <div></div>
      </div>
    ));
  };

  return (
    <div>
      <div className="container">
        <Link to="/">Nhân Viên</Link> | Bảng Lương
        <div className="row">
          <Render />
        </div>
      </div>
    </div>
  );
};

export default Salary;
