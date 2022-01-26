import React from "react";
import { STAFFS } from "../shared/staffs";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";


const StaffListComponent = ({ selectStaff }) => {
  return (
    <div>
      {/* <Link to="/">Nhân Viên</Link> | <Link to="/menu">Menu</Link> */}
      <h1>Nhân Viên</h1>

      {STAFFS.map((staff) => (
        <Link to={`/staff/${staff.id}`} key={staff.id}>
          <div className="col-12 col-md-5 m-1">
            <Card
              onClick={() => {
                selectStaff(staff);
              }}
            >
              <CardImg className="image" src={staff.image} alt={staff.name} />
              <CardImgOverlay className="nameMenu">
                <CardTitle>{staff.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StaffListComponent;
