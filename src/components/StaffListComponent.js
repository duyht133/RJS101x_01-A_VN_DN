import React from "react";
import { STAFFS } from "../shared/staffs";
import { Link } from "react-router-dom";

const StaffListComponent = ({ selectStaff }) => {
  const Render = () => {
    return STAFFS.map((staff) => (
      <div className="col-lg-2 col-md-4 col-sm-6" key={staff.id}>
        <Link to={`/staff/${staff.id}`} >
          <div
            onClick={() => {
              selectStaff(staff);
            }}
          >
            <img className="img" src={staff.image} alt={staff.name} />
            <div>{staff.name}</div>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div className="container">
      <h1 className="text-center">Nhân Viên</h1>
      <div className="row">
        <Render />
      </div>
    </div>
  );
};

export default StaffListComponent;
