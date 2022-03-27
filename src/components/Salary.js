import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Salary = () => {
  const basicSalary = 3000000;
  const overTimeSalary = 200000;

  const Render = () => {
    const salarys = useSelector((data) => data.dataContact.contact);
    return salarys.map((salary) => (
      
          <div className="col-lg-4 col-md-6 col-sm-12 " key={salary.id}>
            <div className="salary">
              <h1>{salary.name}</h1>
              <p> Mã Nhân Viên: {salary.id}</p>
              <p> Hệ Số Lương: {salary.salaryScale}</p>
              <p> Số giờ làm thêm: {salary.overTime}</p>
              <p>Lương: {salary.salaryScale * basicSalary + salary.overTime * overTimeSalary}</p>
            </div>
          </div>
    ));
  };

  return (
    <div>
      <div className="container">
        <Link to="/home">Nhân Viên</Link> | Bảng Lương
        <div className="row">
          <Render />
        </div>
      </div>
    </div>
  );
};

export default Salary;
