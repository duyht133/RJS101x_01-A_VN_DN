import React from "react";
import { STAFFS } from "../shared/staffs";
import { Link } from "react-router-dom";

const StaffListComponent = ({ selectStaff }) => {

  const Render = () =>(
    STAFFS.map((staff) => (
      <Link to={`/staff/${staff.id}`} key={staff.id}>
        <div className="staff">
          <div
            onClick={() => {
              selectStaff(staff);
            }}
          >
            
              <img className="img" src={staff.image} alt={staff.name} />
              <div>{staff.name}</div>
            
          </div>
        </div>
      </Link>
    ))
  )

  return (
    <div>
      <h1>Nhân Viên</h1>
      <Render/>
    </div>
  );
};

export default StaffListComponent;
